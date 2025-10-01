from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
from datetime import datetime
import os
from dotenv import load_dotenv
import traceback

# Load environment variables FIRST
load_dotenv()

# Import EmailService with better error handling
try:
    from mail import EmailService
    email_service_available = True
except ImportError as e:
    logging.error(f"Failed to import EmailService: {str(e)}")
    email_service_available = False
    EmailService = None
except Exception as e:
    logging.error(f"Unexpected error importing EmailService: {str(e)}")
    email_service_available = False
    EmailService = None

app = Flask(__name__)

# Simplified CORS configuration - use only one method
CORS(app, 
     origins=["http://localhost:3000", "https://techflow-service.vercel.app"],
     methods=["GET", "POST", "OPTIONS"],
     allow_headers=["Content-Type", "Accept"],
     supports_credentials=True)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Initialize email service with comprehensive error handling
email_service = None
initialization_error = None

if email_service_available and EmailService:
    try:
        # Check for required environment variables
        required_vars = ['APP_PASSWORD', 'SENDER_EMAIL']
        missing_vars = [var for var in required_vars if not os.getenv(var)]
        
        if missing_vars:
            initialization_error = f"Missing environment variables: {', '.join(missing_vars)}"
            logger.error(initialization_error)
        else:
            email_service = EmailService()
            logger.info("Email service initialized successfully")
    except Exception as e:
        initialization_error = f"Failed to initialize email service: {str(e)}"
        logger.error(initialization_error)
        logger.error(traceback.format_exc())
else:
    initialization_error = "EmailService module not available"
    logger.warning(initialization_error)

@app.route('/contact', methods=['POST', 'OPTIONS'])
def contact():
    """Handle contact form submissions"""
    # Handle preflight requests
    if request.method == 'OPTIONS':
        return '', 204
    
    try:
        # Log request details
        logger.info(f"Received POST request to /contact from {request.headers.get('Origin', 'Unknown')}")
        
        # Parse JSON data
        if not request.is_json:
            return jsonify({
                'success': False,
                'error': 'Wrong content type',
                'message': 'Request must be JSON'
            }), 400
            
        form_data = request.get_json()
        
        if not form_data:
            return jsonify({
                'success': False,
                'error': 'No data provided',
                'message': 'Please provide form data'
            }), 400
        
        # Validate required fields
        required_fields = ['name', 'email', 'service', 'message']
        missing_fields = [field for field in required_fields if not form_data.get(field, '').strip()]
        
        if missing_fields:
            return jsonify({
                'success': False,
                'error': f'Missing required fields: {", ".join(missing_fields)}',
                'message': 'Please fill in all required fields'
            }), 400
        
        # Validate email format
        email = form_data.get('email', '').strip()
        if '@' not in email or '.' not in email.split('@')[1]:
            return jsonify({
                'success': False,
                'error': 'Invalid email format',
                'message': 'Please provide a Legit email address'
            }), 400
        
        # Log the inquiry
        logger.info(f"Valid inquiry received from {form_data.get('name')} ({email})")
        
        # Check if email service is available
        if not email_service:
            # Fallback: Log the inquiry and return success
            # In production, you might want to save this to a database or file
            logger.warning("Email service unavailable - logging inquiry only")
            logger.info(f"Inquiry details: {form_data}")
            
            # Generate a simple inquiry ID
            import hashlib
            import time
            inquiry_id = hashlib.md5(f"{email}{time.time()}".encode()).hexdigest()[:12].upper()
            
            return jsonify({
                'success': True,
                'inquiry_id': inquiry_id,
                'message': 'Thank you for your inquiry! We have received your message and will contact you soon.',
                'warning': 'Email notifications are currently unavailable, but your inquiry has been logged.',
                'details': {
                    'client_email_sent': False,
                    'admin_email_sent': False,
                    'reason': initialization_error or 'Email service unavailable'
                }
            }), 200
        
        # Process with email service
        try:
            result = email_service.process_contact_form(form_data)
            
            if result.get('success'):
                return jsonify({
                    'success': True,
                    'inquiry_id': result.get('inquiry_id', 'PENDING'),
                    'message': 'Thank you for your inquiry! We will contact you within 24 hours.',
                    'details': {
                        'client_email_sent': result.get('client_email_sent', False),
                        'admin_email_sent': result.get('admin_email_sent', False)
                    }
                }), 200
            else:
                # Email service failed but don't crash
                logger.error(f"Email service returned failure: {result.get('error')}")
                
                # Still save the inquiry
                import hashlib
                import time
                inquiry_id = hashlib.md5(f"{email}{time.time()}".encode()).hexdigest()[:12].upper()
                
                return jsonify({
                    'success': True,
                    'inquiry_id': inquiry_id,
                    'message': 'Thank you for your inquiry! We have received your message.',
                    'warning': 'Email confirmation could not be sent, but your inquiry has been saved.',
                    'details': {
                        'client_email_sent': False,
                        'admin_email_sent': False
                    }
                }), 200
                
        except Exception as e:
            logger.error(f"Error processing with email service: {str(e)}")
            logger.error(traceback.format_exc())
            
            # Fallback: Still accept the inquiry
            import hashlib
            import time
            inquiry_id = hashlib.md5(f"{email}{time.time()}".encode()).hexdigest()[:12].upper()
            
            return jsonify({
                'success': True,
                'inquiry_id': inquiry_id,
                'message': 'Thank you for your inquiry! Your message has been received.',
                'warning': 'Email confirmation is temporarily unavailable.',
                'details': {
                    'client_email_sent': False,
                    'admin_email_sent': False
                }
            }), 200
            
    except Exception as e:
        logger.error(f"Unexpected error in contact endpoint: {str(e)}")
        logger.error(traceback.format_exc())
        
        # Return a proper error response with CORS headers
        return jsonify({
            'success': False,
            'error': 'Internal server error',
            'message': 'An unexpected error occurred. Please try again later.',
            'debug': str(e) if app.debug else None
        }), 500

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    health_status = {
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'service': 'TechFlow Contact API',
        'email_service': 'available' if email_service else 'unavailable',
        'environment': {
            'app_password_set': bool(os.getenv('APP_PASSWORD')),
            'sender_email_set': bool(os.getenv('SENDER_EMAIL')),
            'port': os.environ.get("PORT", 5000),
            'debug': app.debug
        }
    }
    
    if initialization_error:
        health_status['initialization_error'] = initialization_error
    
    return jsonify(health_status), 200

@app.route('/test', methods=['GET'])
def test():
    """Simple test endpoint"""
    return jsonify({
        'status': 'ok',
        'message': 'API is running',
        'cors_test': 'This should work from your frontend'
    }), 200

@app.errorhandler(404)
def not_found(error):
    return jsonify({
        'success': False,
        'error': 'Endpoint not found',
        'message': 'The requested endpoint does not exist'
    }), 404

@app.errorhandler(500)
def internal_error(error):
    logger.error(f"500 error handler triggered: {str(error)}")
    return jsonify({
        'success': False,
        'error': 'Internal server error',
        'message': 'An internal server error occurred'
    }), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    debug = os.environ.get("FLASK_ENV") == "development"
    
    logger.info(f"Starting TechFlow API on port {port}")
    logger.info(f"Debug mode: {debug}")
    logger.info(f"Email service status: {'Available' if email_service else f'Unavailable - {initialization_error}'}")
    
    app.run(debug=debug, host='0.0.0.0', port=port)