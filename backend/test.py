from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# Simple CORS - allow all origins for testing
CORS(app)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,Accept')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

@app.route('/', methods=['GET'])
def home():
    return jsonify({
        'status': 'running',
        'message': 'TechFlow Backend is operational',
        'endpoints': ['/health', '/contact', '/test-email']
    }), 200

@app.route('/health', methods=['GET'])
def health():
    env_check = {
        'APP_PASSWORD': 'SET' if os.getenv('APP_PASSWORD') else 'MISSING',
        'SENDER_EMAIL': os.getenv('SENDER_EMAIL', 'NOT SET'),
    }
    
    return jsonify({
        'status': 'healthy',
        'environment': env_check,
        'python_version': os.sys.version
    }), 200

@app.route('/contact', methods=['GET', 'POST', 'OPTIONS'])
def contact():
    if request.method == 'OPTIONS':
        return jsonify({'status': 'OK'}), 200
    
    if request.method == 'GET':
        return jsonify({
            'message': 'Contact endpoint is ready',
            'method': 'POST',
            'content_type': 'application/json'
        }), 200
    
    try:
        logger.info(f"Received POST request from {request.headers.get('Origin')}")
        
        if not request.is_json:
            return jsonify({
                'success': False,
                'error': 'Content-Type must be application/json'
            }), 400
        
        data = request.get_json()
        logger.info(f"Form data keys: {list(data.keys())}")
        
        # For testing - just return success
        return jsonify({
            'success': True,
            'inquiry_id': 'TEST123',
            'message': 'Test response - email service not yet initialized',
            'received_data': {
                'name': data.get('name'),
                'email': data.get('email'),
                'service': data.get('service')
            }
        }), 200
        
    except Exception as e:
        logger.error(f"Error: {str(e)}", exc_info=True)
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    logger.error(f"500 error: {str(error)}", exc_info=True)
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    logger.info(f"Starting server on port {port}")
    app.run(debug=False, host='0.0.0.0', port=port)