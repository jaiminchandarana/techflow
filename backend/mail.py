import yagmail
import os
from datetime import datetime
import secrets
import string
from dotenv import load_dotenv

appPassword = os.getenv("APP_PASSWORD")
# Load environment variables
load_dotenv()

class EmailService:
    def __init__(self):
        self.sender_email = os.getenv('SENDER_EMAIL', '24mcajai005@ldce.ac.in')
        self.app_password = os.getenv('APP_PASSWORD', 'appPassword')
        self.yag = yagmail.SMTP(user=self.sender_email, password=self.app_password)
        self.company_name = os.getenv('COMPANY_NAME', 'TechFlow')
        self.website_url = os.getenv('WEBSITE_URL', 'techflow-service.vercel.app')
        self.support_email = os.getenv('SUPPORT_EMAIL', 'chandaranajaimin@gmail.com')
        self.phone_number = os.getenv('PHONE_NUMBER', '+91 74908 24904')

    def generate_inquiry_id(self):
        """Generate a unique inquiry ID"""
        timestamp = datetime.now().strftime("%Y%m%d")
        random_part = ''.join(secrets.choice(string.ascii_uppercase + string.digits) for _ in range(6))
        return f"TF{timestamp}{random_part}"

    def get_email_header(self):
        """Common email header with branding"""
        return f"""
        <div style="font-family: 'poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #2563eb 0%, #14b8a6 100%); padding: 30px 20px; text-align: center; border-radius: 12px 12px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold; letter-spacing: -0.5px;">
                    {self.company_name}
                </h1>
                <p style="color: #bfdbfe; margin: 8px 0 0 0; font-size: 14px; font-weight: 500;">
                    Empowering Innovation Through Technology
                </p>
            </div>
        """

    def get_email_footer(self):
        """Common email footer"""
        return f"""
            <!-- Footer -->
            <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 30px 20px; border-radius: 0 0 12px 12px; border-top: 1px solid #e2e8f0;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 16px;">Stay Connected</h3>
                    <div style="margin-bottom: 15px;">
                        <span style="display: inline-block; margin: 0 10px; color: #64748b; font-size: 14px;">
                            📧 {self.support_email}
                        </span>
                        <span style="display: inline-block; margin: 0 10px; color: #64748b; font-size: 14px;">
                            📞 {self.phone_number}
                        </span>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <a href="{self.website_url}" style="color: #2563eb; text-decoration: none; font-size: 14px;">
                            🌐 Visit Our Website
                        </a>
                    </div>
                </div>
                
                <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                    <p style="color: #94a3b8; font-size: 12px; margin: 0; line-height: 1.5;">
                        © {datetime.now().year} {self.company_name}. All rights reserved.<br>
                        This email was sent because you contacted us through our website.
                    </p>
                </div>
            </div>
        </div>
        """

    def send_client_confirmation_email(self, form_data, inquiry_id):
        """Send confirmation email to client"""
        try:
            subject = f"Thank You for Your Inquiry - {self.company_name} [{inquiry_id}]"
            
            # Determine service details
            service_info = self.get_service_details(form_data.get('service', ''))
            
            content = f"""
            {self.get_email_header()}
            
            <!-- Main Content -->
            <div style="padding: 40px 30px; background-color: #ffffff;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <div style="background: linear-gradient(135deg, #dbeafe 0%, #d1fae5 100%); padding: 20px; border-radius: 12px; margin-bottom: 25px;">
                        <h2 style="color: #1e40af; margin: 0 0 10px 0; font-size: 24px; font-weight: bold;">
                            🎉 Thank You, {form_data.get('name', 'Valued Client')}!
                        </h2>
                        <p style="color: #1f2937; margin: 0; font-size: 16px;">
                            We've received your inquiry and our team is excited to help you achieve your goals.
                        </p>
                    </div>
                </div>

                <!-- Inquiry Details -->
                <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #2563eb;">
                    <h3 style="color: #1e40af; margin: 0 0 20px 0; font-size: 18px; display: flex; align-items: center;">
                        📋 Your Inquiry Details
                    </h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; color: #64748b; font-weight: 500; width: 30%;">Inquiry ID:</td>
                            <td style="padding: 8px 0; color: #1e293b; font-weight: bold;">{inquiry_id}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Service:</td>
                            <td style="padding: 8px 0; color: #1e293b;">{form_data.get('service', 'General Inquiry')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Company:</td>
                            <td style="padding: 8px 0; color: #1e293b;">{form_data.get('company', 'Not specified')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Budget:</td>
                            <td style="padding: 8px 0; color: #1e293b;">{form_data.get('budget', 'Not specified')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Timeline:</td>
                            <td style="padding: 8px 0; color: #1e293b;">{form_data.get('timeline', 'Not specified')}</td>
                        </tr>
                    </table>
                </div>

                <!-- Service Information -->
                {service_info}

                <!-- Next Steps -->
                <div style="background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%); padding: 25px; border-radius: 12px; margin-bottom: 30px;">
                    <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">🚀 What Happens Next?</h3>
                    <div style="space-y: 12px;">
                        <div style="display: flex; align-items: start; margin-bottom: 12px;">
                            <span style="background: #2563eb; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 12px; flex-shrink: 0;">1</span>
                            <span style="color: #1f2937; font-size: 14px; line-height: 1.5;">Our team will review your requirements within 2-4 hours</span>
                        </div>
                        <div style="display: flex; align-items: start; margin-bottom: 12px;">
                            <span style="background: #14b8a6; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 12px; flex-shrink: 0;">2</span>
                            <span style="color: #1f2937; font-size: 14px; line-height: 1.5;">We'll schedule a consultation call within 24 hours</span>
                        </div>
                        <div style="display: flex; align-items: start; margin-bottom: 12px;">
                            <span style="background: #f59e0b; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 12px; flex-shrink: 0;">3</span>
                            <span style="color: #1f2937; font-size: 14px; line-height: 1.5;">Receive a detailed proposal tailored to your needs</span>
                        </div>
                    </div>
                </div>

                <!-- Contact Information -->
                <div style="text-align: center; padding: 20px; background: #f1f5f9; border-radius: 12px;">
                    <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 16px;">Need Immediate Assistance?</h3>
                    <div style="margin-bottom: 15px;">
                        <a href="tel:{self.phone_number}" style="background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500; display: inline-block; margin: 0 8px 8px 0;">
                            📞 Call Us
                        </a>
                        <a href="mailto:{self.support_email}" style="background: white; color: #2563eb; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500; display: inline-block; border: 2px solid #2563eb; margin: 0 8px 8px 0;">
                            ✉️ Email Us
                        </a>
                    </div>
                </div>
            </div>
            
            {self.get_email_footer()}
            """

            self.yag.send(
                to=form_data['email'],
                subject=subject,
                contents=content
            )
            return True
        except Exception as e:
            print(f"Error sending client email: {str(e)}")
            return False

    def send_admin_notification_email(self, form_data, inquiry_id):
        """Send notification email to admin/owner"""
        try:
            subject = f"🚨 New Service Inquiry - {form_data.get('service', 'General')} - [{inquiry_id}]"
            
            # Priority level based on budget
            priority = self.get_priority_level(form_data.get('budget', ''))
            
            content = f"""
            {self.get_email_header()}
            
            <!-- Main Content -->
            <div style="padding: 40px 30px; background-color: #ffffff;">
                <!-- Alert Header -->
                <div style="background: {priority['bg_color']}; padding: 20px; border-radius: 12px; margin-bottom: 25px; text-align: center;">
                    <h2 style="color: {priority['text_color']}; margin: 0 0 10px 0; font-size: 22px; font-weight: bold;">
                        {priority['icon']} New Service Inquiry Received!
                    </h2>
                    <p style="color: {priority['text_color']}; margin: 0; font-size: 14px; opacity: 0.9;">
                        Priority: {priority['level']} | Inquiry ID: {inquiry_id}
                    </p>
                </div>

                <!-- Client Information -->
                <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #2563eb;">
                    <h3 style="color: #1e40af; margin: 0 0 20px 0; font-size: 18px;">👤 Client Information</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; color: #64748b; font-weight: 500; width: 25%;">Name:</td>
                            <td style="padding: 8px 0; color: #1e293b; font-weight: bold;">{form_data.get('name', 'N/A')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Email:</td>
                            <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:{form_data.get('email', '')}" style="color: #2563eb; text-decoration: none;">{form_data.get('email', 'N/A')}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Phone:</td>
                            <td style="padding: 8px 0; color: #1e293b;"><a href="tel:{form_data.get('phone', '')}" style="color: #2563eb; text-decoration: none;">{form_data.get('phone', 'Not provided')}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Company:</td>
                            <td style="padding: 8px 0; color: #1e293b;">{form_data.get('company', 'Not provided')}</td>
                        </tr>
                    </table>
                </div>

                <!-- Project Details -->
                <div style="background: #fefce8; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #eab308;">
                    <h3 style="color: #a16207; margin: 0 0 20px 0; font-size: 18px;">🎯 Project Details</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; color: #92400e; font-weight: 500; width: 25%;">Service:</td>
                            <td style="padding: 8px 0; color: #1e293b; font-weight: bold;">{form_data.get('service', 'General Inquiry')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #92400e; font-weight: 500;">Budget:</td>
                            <td style="padding: 8px 0; color: #1e293b; font-weight: bold;">{form_data.get('budget', 'Not specified')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #92400e; font-weight: 500;">Timeline:</td>
                            <td style="padding: 8px 0; color: #1e293b;">{form_data.get('timeline', 'Not specified')}</td>
                        </tr>
                    </table>
                </div>

                <!-- Project Description -->
                <div style="background: #f0fdf4; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #22c55e;">
                    <h3 style="color: #166534; margin: 0 0 15px 0; font-size: 18px;">📝 Project Description</h3>
                    <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #d1fae5;">
                        <p style="color: #1f2937; margin: 0; line-height: 1.6; font-size: 14px;">
                            {form_data.get('message', 'No description provided')}
                        </p>
                    </div>
                </div>

                {f'''
                <!-- Additional Details -->
                <div style="background: #ede9fe; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #8b5cf6;">
                    <h3 style="color: #6b21a8; margin: 0 0 15px 0; font-size: 18px;">📋 Additional Details</h3>
                    <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e9d5ff;">
                        <p style="color: #1f2937; margin: 0; line-height: 1.6; font-size: 14px;">
                            {form_data.get('description', 'No additional details provided')}
                        </p>
                    </div>
                </div>
                ''' if form_data.get('description') else ''}

                <!-- Quick Actions -->
                <div style="text-align: center; padding: 25px; background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); border-radius: 12px;">
                    <h3 style="color: #1e40af; margin: 0 0 20px 0; font-size: 18px;">⚡ Quick Actions</h3>
                    <div>
                        <a href="mailto:{form_data.get('email', '')}" style="background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500; display: inline-block; margin: 0 8px 8px 0;">
                            📧 Reply to Client
                        </a>
                        <a href="tel:{form_data.get('phone', '')}" style="background: #22c55e; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500; display: inline-block; margin: 0 8px 8px 0;">
                            📞 Call Client
                        </a>
                    </div>
                    <p style="color: #64748b; font-size: 12px; margin: 15px 0 0 0;">
                        Inquiry received on {datetime.now().strftime('%B %d, %Y at %I:%M %p')}
                    </p>
                </div>
            </div>
            
            {self.get_email_footer()}
            """

            self.yag.send(
                to=self.support_email,
                subject=subject,
                contents=content
            )
            return True
        except Exception as e:
            print(f"Error sending admin email: {str(e)}")
            return False

    def get_service_details(self, service):
        """Get service-specific information"""
        service_details = {
            'Data Analytics & Visualization': {
                'description': 'Transform your raw data into actionable business insights',
                'features': ['Custom Dashboard Development', 'Business Intelligence Solutions', 'Predictive Analytics'],
                'color': '#2563eb'
            },
            'AI & Machine Learning': {
                'description': 'Harness the power of AI to automate processes and gain competitive advantages',
                'features': ['Custom AI Model Development', 'Natural Language Processing', 'Computer Vision Solutions'],
                'color': '#14b8a6'
            },
            'Web Development': {
                'description': 'Build modern, scalable web applications that deliver exceptional experiences',
                'features': ['Responsive Web Design', 'Full-Stack Development', 'E-commerce Solutions'],
                'color': '#f59e0b'
            }
        }
        
        if service in service_details:
            details = service_details[service]
            return f"""
            <div style="background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%); padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid {details['color']};">
                <h3 style="color: {details['color']}; margin: 0 0 15px 0; font-size: 18px;">🔧 About {service}</h3>
                <p style="color: #1f2937; margin: 0 0 15px 0; line-height: 1.6;">{details['description']}</p>
                <div style="background: white; padding: 15px; border-radius: 8px;">
                    <h4 style="color: #374151; margin: 0 0 10px 0; font-size: 14px; font-weight: 600;">Key Features Include:</h4>
                    <ul style="margin: 0; padding-left: 20px; color: #4b5563; font-size: 14px;">
                        {"".join([f"<li style='margin-bottom: 5px;'>{feature}</li>" for feature in details['features']])}
                    </ul>
                </div>
            </div>
            """
        return ""

    def get_priority_level(self, budget):
        """Determine priority level based on budget"""
        if not budget or budget == 'Not sure yet':
            return {
                'level': 'Medium',
                'icon': '🟡',
                'bg_color': '#fef3c7',
                'text_color': '#92400e'
            }
        
        # Extract numbers from budget string and convert to int for comparison
        budget_lower = budget.lower()
        if 'less' in budget_lower or '3,000 - 5,000' in budget or '3,000-5,000' in budget:
            return {
                'level': 'Medium',
                'icon': '🟡',
                'bg_color': '#fef3c7',
                'text_color': '#92400e'
            }
        elif '10,000+' in budget or '10000+' in budget:
            return {
                'level': 'High',
                'icon': '🔴',
                'bg_color': '#fee2e2',
                'text_color': '#dc2626'
            }
        else:
            return {
                'level': 'Medium',
                'icon': '🟡',
                'bg_color': '#fef3c7',
                'text_color': '#92400e'
            }

    def send_follow_up_email(self, client_email, client_name, inquiry_id):
        """Send follow-up email after 24 hours (to be called by a scheduler)"""
        try:
            subject = f"Following Up on Your Inquiry - {self.company_name} [{inquiry_id}]"
            
            content = f"""
            {self.get_email_header()}
            
            <!-- Main Content -->
            <div style="padding: 40px 30px; background-color: #ffffff;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 20px; border-radius: 12px; margin-bottom: 25px;">
                        <h2 style="color: #92400e; margin: 0 0 10px 0; font-size: 24px; font-weight: bold;">
                            👋 Hi {client_name}!
                        </h2>
                        <p style="color: #1f2937; margin: 0; font-size: 16px;">
                            We wanted to follow up on your recent inquiry (ID: {inquiry_id})
                        </p>
                    </div>
                </div>

                <div style="background: #f0fdf4; padding: 25px; border-radius: 12px; margin-bottom: 30px;">
                    <h3 style="color: #166534; margin: 0 0 15px 0; font-size: 18px;">📞 Let's Schedule Your Consultation</h3>
                    <p style="color: #1f2937; margin: 0 0 15px 0; line-height: 1.6;">
                        Our team has reviewed your project requirements and we're excited to discuss how we can help bring your vision to life. 
                    </p>
                    <p style="color: #1f2937; margin: 0; line-height: 1.6;">
                        Would you prefer a quick phone call or a more detailed video consultation? We're flexible with timing and can work around your schedule.
                    </p>
                </div>

                <div style="text-align: center; padding: 25px; background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); border-radius: 12px;">
                    <h3 style="color: #1e40af; margin: 0 0 20px 0; font-size: 18px;">📅 Book Your Free Consultation</h3>
                    <div>
                        <a href="tel:{self.phone_number}" style="background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500; display: inline-block; margin: 0 8px 8px 0;">
                            📞 Call Us Now
                        </a>
                        <a href="mailto:{self.support_email}?subject=Schedule Consultation - {inquiry_id}" style="background: white; color: #2563eb; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500; display: inline-block; border: 2px solid #2563eb; margin: 0 8px 8px 0;">
                            📧 Reply to Schedule
                        </a>
                    </div>
                </div>
            </div>
            
            {self.get_email_footer()}
            """

            self.yag.send(
                to=client_email,
                subject=subject,
                contents=content
            )
            return True
        except Exception as e:
            print(f"Error sending follow-up email: {str(e)}")
            return False

    def process_contact_form(self, form_data):
        """Main function to process contact form submission"""
        try:
            # Generate unique inquiry ID
            inquiry_id = self.generate_inquiry_id()
            
            # Send confirmation email to client
            client_email_sent = self.send_client_confirmation_email(form_data, inquiry_id)
            
            # Send notification email to admin
            admin_email_sent = self.send_admin_notification_email(form_data, inquiry_id)
            
            return {
                'success': True,
                'inquiry_id': inquiry_id,
                'client_email_sent': client_email_sent,
                'admin_email_sent': admin_email_sent,
                'message': 'Inquiry processed successfully'
            }
            
        except Exception as e:
            return {
                'success': False,
                'error': str(e),
                'message': 'Failed to process inquiry'
            }

# Usage example:
if __name__ == "__main__":
    email_service = EmailService()
    
    # Sample form data
    sample_form_data = {
        'name': 'John Doe',
        'email': 'jdchandarana3@gmail.com',
        'company': 'Tech Solutions Inc.',
        'phone': '+91 98765 43210',
        'service': 'AI & Machine Learning',
        'budget': '₹10,000+',
        'timeline': '3-4 weeks',
        'message': 'We need a custom AI solution for our customer service chatbot. Looking for natural language processing capabilities and integration with our existing CRM system.',
        'description': 'Additional details about specific requirements and technical constraints.'
    }
    
    result = email_service.process_contact_form(sample_form_data)
    print(f"Result: {result}")