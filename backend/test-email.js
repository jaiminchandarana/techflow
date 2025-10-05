// backend/test-email.js
// Quick script to test if email is working

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('🔧 Testing Email Configuration...\n');
console.log('📧 SENDER_EMAIL:', process.env.SENDER_EMAIL);
console.log('🔑 APP_PASSWORD:', process.env.APP_PASSWORD ? '***SET*** (length: ' + process.env.APP_PASSWORD.length + ')' : '❌ NOT SET');
console.log('📬 SUPPORT_EMAIL:', process.env.SUPPORT_EMAIL);
console.log('\n---\n');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.APP_PASSWORD
  },
  debug: true, // Enable debug output
  logger: true // Log information to console
});

// Verify connection
console.log('🔌 Verifying SMTP connection...\n');
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ SMTP Connection Failed!');
    console.log('Error:', error.message);
    console.log('\n📋 Troubleshooting Steps:');
    console.log('1. Check if SENDER_EMAIL is correct Gmail account');
    console.log('2. Verify APP_PASSWORD is the 16-character code from Google');
    console.log('3. Ensure 2FA is enabled on Gmail account');
    console.log('4. Generate new App Password if needed');
    console.log('5. Check .env file location (should be in backend folder)');
  } else {
    console.log('✅ SMTP Connection Successful!\n');
    
    // Send test email
    console.log('📨 Sending test email...\n');
    
    const mailOptions = {
      from: `"TechFlow Test" <${process.env.SENDER_EMAIL}>`,
      to: process.env.SUPPORT_EMAIL,
      subject: '✅ Test Email from TechFlow Backend - ' + new Date().toLocaleString(),
      html: `
        <div style="font-family: Poppins, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #14b8a6 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">✅ Email Test Successful!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px;">
            <h2 style="color: #1e40af; margin-bottom: 20px;">Configuration Details:</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600;">Sender Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${process.env.SENDER_EMAIL}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600;">Support Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${process.env.SUPPORT_EMAIL}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600;">Sent At:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${new Date().toLocaleString()}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: 600;">Status:</td>
                <td style="padding: 10px; color: #22c55e; font-weight: 600;">✅ Working Perfectly!</td>
              </tr>
            </table>
            
            <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #dbeafe 0%, #d1fae5 100%); border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #1e40af; font-size: 16px; font-weight: 600;">
                🎉 Your email configuration is working correctly!
              </p>
              <p style="margin: 10px 0 0 0; color: #64748b; font-size: 14px;">
                You can now receive emails from your contact form.
              </p>
            </div>
          </div>
        </div>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('❌ Failed to send test email');
        console.log('Error:', error.message);
        console.log('\nFull error:', error);
      } else {
        console.log('✅ Test email sent successfully!');
        console.log('📬 Message ID:', info.messageId);
        console.log('📨 Response:', info.response);
        console.log('\n✅ Check your inbox:', process.env.SUPPORT_EMAIL);
        console.log('📋 Also check spam/junk folder if not in inbox');
        console.log('\n🎉 Email configuration is working! You can now use the contact form.');
      }
    });
  }
});