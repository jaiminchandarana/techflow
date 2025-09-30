from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables FIRST
load_dotenv()

# Import EmailService AFTER loading env vars
try:
    from mail import EmailService
    email_service_available = True
except Exception as e:
    logging.error(f"Failed to import EmailService: {str(e)}")
    email_service_available = False
    EmailService = None

app = Flask(__name__)

# Enhanced CORS configuration
CORS(app, resources={
    r"/*": {
        "origins": [
            "http://localhost:3000", 
            "https://techflow-service.vercel.app", 
            "https://techflow-backend-t4zw.onrender.com"
        ],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization", "Accept"],
        "supports_credentials": False
    }
})

# Additional CORS headers for preflight requests
@app.after_request
def after_request(response):
    origin = request.headers.get('Origin')
    allowed_origins = [
        "http://localhost:3000", 
        "https://techflow-service.vercel.app", 
        "https://techflow-backend-t4zw.onrender.com"
    ]
    
    if origin in allowed_origins:
        response.headers.add('Access-Control-Allow-Origin', origin)
    
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,Accept')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'false')
    return response

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Initialize email service with error handling
email_service = None
try:
    if email_service_available:
        email_service = EmailService()
        logger.info("Email service initialized successfully")
    else:
        logger.warning("Email service not available - EmailService import failed")
except Exception as e:
    logger.error(f"Failed to initialize email service: {str(e)}")
    email_service = None

@app.route('/contact', methods=['GET', 'POST', 'OPTIONS'])
def handle_contact():
    """Handle contact form submissions"""
    # Handle preflight requests
    if request.method == 'OPTIONS':
        response = jsonify({'status': 'OK'})
        return response, 200
    
    # Handle GET requests for debugging
    if request.method == 'GET':
        return jsonify({
            'message': 'Contact endpoint is working! Use POST to submit form data.',
            'method': 'GET',
            'endpoint': '/contact',
            'status': 'ready',
            'email_service_status': 'available' if email_service else 'unavailable',
            'timestamp': datetime.now().isoformat()
        }), 200
    
    try:
        # Log the request details for debugging
        logger.info(f"Received {request.method} request to /contact")
        logger.info(f"Origin: {request.headers.get('Origin', 'Not set')}")
        logger.info(f"Content-Type: {request.content_type}")
        
        # Check if email service is available
        if not email_service:
            logger.error("Email service not initialized")
            return jsonify({
                'success': False,
                'error': 'Email service unavailable',
                'message': 'The email service is currently unavailable. Please try again later or contact us directly.'
            }), 503
        
        # Get form data from request
        if not request.is_json:
            return jsonify({
                'success': False,
                'error': 'Content-Type must be application/json',
                'message': 'Please send data as JSON'
            }), 400
            
        form_data = request.get_json()
        
        if not form_data:
            return jsonify({
                'success': False,
                'error': 'No data provided',
                'message': 'Please provide form data'
            }), 400
        
        logger.info(f"Form data received: {list(form_data.keys())}")
        
        # Validate required fields
        required_fields = ['name', 'email', 'service', 'message']
        missing_fields = [field for field in required_fields if not form_data.get(field)]
        
        if missing_fields:
            return jsonify({
                'success': False,
                'error': f'Missing required fields: {", ".join(missing_fields)}',
                'message': 'Please fill in all required fields'
            }), 400
        
        # Validate email format
        email = form_data.get('email', '').strip()
        if '@' not in email or '.' not in email:
            return jsonify({
                'success': False,
                'error': 'Invalid email format',
                'message': 'Please provide a valid email address'
            }), 400
        
        # Log the inquiry
        logger.info(f"New inquiry from {form_data.get('name')} ({email}) for {form_data.get('service')}")
        
        # Process the contact form
        try:
            result = email_service.process_contact_form(form_data)
            
            if result['success']:
                return jsonify({
                    'success': True,
                    'inquiry_id': result['inquiry_id'],
                    'message': 'Thank you for your inquiry! We will contact you within 24 hours.',
                    'details': {
                        'client_email_sent': result['client_email_sent'],
                        'admin_email_sent': result['admin_email_sent']
                    }
                }), 200
            else:
                logger.error(f"Failed to process inquiry: {result.get('error')}")
                return jsonify({
                    'success': False,
                    'error': result.get('error'),
                    'message': 'Unable to process your inquiry at this time. Please try again or contact us directly.'
                }), 500
        except Exception as e:
            logger.error(f"Error processing contact form: {str(e)}", exc_info=True)
            return jsonify({
                'success': False,
                'error': 'Processing error',
                'message': 'An error occurred while processing your inquiry. Please try again.'
            }), 500
            
    except Exception as e:
        logger.error(f"Unexpected error in contact endpoint: {str(e)}", exc_info=True)
        return jsonify({
            'success': False,
            'error': 'Internal server error',
            'message': 'An unexpected error occurred. Please try again later.',
            'details': str(e) if app.debug else None
        }), 500

@app.route('/health', methods=['GET'])
def health_check():
    """Simple health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'service': 'TechFlow Contact API',
        'email_service': 'available' if email_service else 'unavailable',
        'environment': {
            'app_password_set': bool(os.getenv('APP_PASSWORD')),
            'sender_email_set': bool(os.getenv('SENDER_EMAIL')),
            'python_version': os.sys.version
        }
    }), 200

@app.route('/test-email', methods=['GET'])
def test_email():
    """Test email service configuration"""
    if not email_service:
        return jsonify({
            'success': False,
            'error': 'Email service not initialized',
            'message': 'Email service is not available'
        }), 503
    
    try:
        # Test email service configuration
        return jsonify({
            'success': True,
            'message': 'Email service is configured',
            'config': {
                'sender_email': email_service.sender_email,
                'company_name': email_service.company_name,
                'support_email': email_service.support_email,
                'phone_number': email_service.phone_number
            }
        }), 200
    except Exception as e:
        logger.error(f"Email service test failed: {str(e)}")
        return jsonify({
            'success': False,
            'error': str(e),
            'message': 'Email service test failed'
        }), 500

@app.errorhandler(404)
def not_found(error):
    return jsonify({
        'success': False,
        'error': 'Endpoint not found',
        'message': 'The requested endpoint does not exist'
    }), 404

@app.errorhandler(405)
def method_not_allowed(error):
    logger.error(f"Method not allowed: {request.method} {request.path}")
    return jsonify({
        'success': False,
        'error': 'Method not allowed',
        'message': f'The method {request.method} is not allowed for {request.path}'
    }), 405

@app.errorhandler(500)
def internal_error(error):
    logger.error(f"Internal server error: {str(error)}", exc_info=True)
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
    logger.info(f"Email service status: {'Available' if email_service else 'Unavailable'}")
    
    app.run(debug=debug, host='0.0.0.0', port=port)