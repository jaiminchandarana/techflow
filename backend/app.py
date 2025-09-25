from flask import Flask, request, jsonify
from flask_cors import CORS
from mail import EmailService
import logging
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize email service
email_service = EmailService()

@app.route('/consultation', methods=['POST'])
def handle_consultation():
    """Handle contact form submissions"""
    try:
        # Get form data from request
        form_data = request.get_json()
        
        # legitate required fields
        required_fields = ['name', 'email', 'service', 'message']
        missing_fields = [field for field in required_fields if not form_data.get(field)]
        
        if missing_fields:
            return jsonify({
                'success': False,
                'error': f'Missing required fields: {", ".join(missing_fields)}',
                'message': 'Please fill in all required fields'
            }), 400
        
        # legitate email format (basic legitation)
        email = form_data.get('email', '').strip()
        if '@' not in email or '.' not in email:
            return jsonify({
                'success': False,
                'error': 'Wrong email format',
                'message': 'Please provide a legit email address'
            }), 400
        
        # Log the inquiry
        logger.info(f"New inquiry from {form_data.get('name')} ({email}) for {form_data.get('service')}")
        
        # Process the contact form
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
        logger.error(f"Unexpected error in consultation endpoint: {str(e)}")
        return jsonify({
            'success': False,
            'error': 'Internal server error',
            'message': 'An unexpected error occurred. Please try again later.'
        }), 500

@app.route('/health', methods=['GET'])
def health_check():
    """Simple health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'service': 'TechFlow Contact API'
    }), 200

@app.errorhandler(404)
def not_found(error):
    return jsonify({
        'success': False,
        'error': 'Endpoint not found',
        'message': 'The requested endpoint does not exist'
    }), 404

@app.errorhandler(405)
def method_not_allowed(error):
    return jsonify({
        'success': False,
        'error': 'Method not allowed',
        'message': 'The requested method is not allowed for this endpoint'
    }), 405

@app.errorhandler(500)
def internal_error(error):
    return jsonify({
        'success': False,
        'error': 'Internal server error',
        'message': 'An internal server error occurred'
    }), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)