// backend/server.js
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173", "https://techflow-service.vercel.app"],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Accept"],
  credentials: true
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.APP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false,
    minVersion: 'TLSv1.2'
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email transporter error:', error);
  } else {
    console.log('✅ Email server is ready to send messages');
    console.log('📧 Sender Email:', process.env.SENDER_EMAIL);
  }
});

// Helper function to generate inquiry ID
const generateInquiryId = () => {
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `TF${timestamp}${randomPart}`;
};

// Email templates
const getEmailHeader = () => `
  <div style="font-family: 'Poppins', 'Calibri', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <div style="background: linear-gradient(135deg, #2563eb 0%, #14b8a6 100%); padding: 30px 20px; text-align: center; border-radius: 12px 12px 0 0;">
      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px; font-family: 'Poppins', sans-serif;">
        ${process.env.COMPANY_NAME || 'TechFlow'}
      </h1>
      <p style="color: #bfdbfe; margin: 8px 0 0 0; font-size: 14px; font-weight: 500; font-family: 'Poppins', sans-serif;">
        Empowering Innovation Through Technology
      </p>
    </div>
`;

const getEmailFooter = () => `
    <div style="background: #f5f5f5; padding: 30px 20px; border-radius: 0 0 12px 12px; border-top: 1px solid #e0e0e0;">
      <div style="text-align: center; padding-top: 0;">
        <p style="color: #666666; font-size: 12px; margin: 0; line-height: 1.5; font-family: 'Poppins', sans-serif;">
          © ${new Date().getFullYear()} ${process.env.COMPANY_NAME}. All rights reserved.<br>
          This email was sent because you contacted us through our website.
        </p>
      </div>
    </div>
  </div>
`;

// CAREER APPLICATION EMAIL TEMPLATES
const getApplicantEmailContent = (formData, applicationId) => {
  return `
    ${getEmailHeader()}
    
    <div style="padding: 40px 30px; background-color: #ffffff; font-family: 'Poppins', 'Calibri', sans-serif;">
      <div style="text-align: center; margin-bottom: 30px;">
        <div style="background: #f5f5f5; padding: 20px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #e0e0e0;">
          <h2 style="color: #000000; margin: 0 0 10px 0; font-size: 24px; font-weight: 700; font-family: 'Poppins', sans-serif;">
            🎉 Application Received!
          </h2>
          <p style="color: #333333; margin: 0; font-size: 16px; font-family: 'Poppins', sans-serif; font-weight: 400;">
            Thank you for applying to join our team, ${formData.name}!
          </p>
        </div>
      </div>

      <div style="background: #fafafa; padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #333333;">
        <h3 style="color: #000000; margin: 0 0 20px 0; font-size: 18px; font-family: 'Poppins', sans-serif; font-weight: 600;">
          📋 Your Application Details
        </h3>
        <table style="width: 100%; border-collapse: collapse; font-family: 'Poppins', sans-serif;">
          <tr>
            <td style="padding: 8px 0; color: #666666; font-weight: 500; width: 30%;">Application ID:</td>
            <td style="padding: 8px 0; color: #000000; font-weight: 700;">${applicationId}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666666; font-weight: 500;">Name:</td>
            <td style="padding: 8px 0; color: #333333;">${formData.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666666; font-weight: 500;">Email:</td>
            <td style="padding: 8px 0; color: #333333;">${formData.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666666; font-weight: 500;">Phone:</td>
            <td style="padding: 8px 0; color: #333333;">${formData.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666666; font-weight: 500;">Experience:</td>
            <td style="padding: 8px 0; color: #333333;">${formData.experience}</td>
          </tr>
        </table>
      </div>

      <div style="background: #ffffff; padding: 25px; border-radius: 12px; margin-bottom: 30px; border: 1px solid #e0e0e0;">
        <h3 style="color: #000000; margin: 0 0 15px 0; font-size: 18px; font-family: 'Poppins', sans-serif; font-weight: 600;">🚀 What Happens Next?</h3>
        <div style="space-y: 12px;">
          <div style="display: flex; align-items: start; margin-bottom: 12px;">
            <span style="background: #333333; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; margin-right: 12px; flex-shrink: 0; font-family: 'Poppins', sans-serif;">1</span>
            <span style="color: #333333; font-size: 14px; line-height: 1.5; font-family: 'Poppins', sans-serif;">Our HR team will review your application within 3-5 business days</span>
          </div>
          <div style="display: flex; align-items: start; margin-bottom: 12px;">
            <span style="background: #666666; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; margin-right: 12px; flex-shrink: 0; font-family: 'Poppins', sans-serif;">2</span>
            <span style="color: #333333; font-size: 14px; line-height: 1.5; font-family: 'Poppins', sans-serif;">If shortlisted, we'll contact you for an interview</span>
          </div>
          <div style="display: flex; align-items: start; margin-bottom: 12px;">
            <span style="background: #999999; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; margin-right: 12px; flex-shrink: 0; font-family: 'Poppins', sans-serif;">3</span>
            <span style="color: #333333; font-size: 14px; line-height: 1.5; font-family: 'Poppins', sans-serif;">Complete the interview process and await our decision</span>
          </div>
        </div>
      </div>

      <div style="text-align: center; padding: 20px; background: #f5f5f5; border-radius: 12px;">
        <p style="color: #666666; font-size: 14px; margin: 0; font-family: 'Poppins', sans-serif;">
          Questions? Contact us at ${process.env.SUPPORT_EMAIL}
        </p>
      </div>
    </div>
    
    ${getEmailFooter()}
  `;
};

const getAdminCareerEmailContent = (formData, applicationId) => {
  return `
    ${getEmailHeader()}
    
    <div style="padding: 40px 30px; background-color: #ffffff; font-family: 'Poppins', 'Calibri', sans-serif;">
      <div style="background: #f5f5f5; padding: 20px; border-radius: 12px; margin-bottom: 25px; text-align: center; border: 1px solid #e0e0e0;">
        <h2 style="color: #000000; margin: 0 0 10px 0; font-size: 22px; font-weight: 700; font-family: 'Poppins', sans-serif;">
          🎯 New Job Application Received!
        </h2>
        <p style="color: #666666; margin: 0; font-size: 14px; font-family: 'Poppins', sans-serif;">
          Application ID: ${applicationId}
        </p>
      </div>

      <div style="background: #fafafa; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #333333;">
        <h3 style="color: #000000; margin: 0 0 20px 0; font-size: 18px; font-family: 'Poppins', sans-serif; font-weight: 600;">👤 Candidate Information</h3>
        <table style="width: 100%; border-collapse: collapse; font-family: 'Poppins', sans-serif;">
          <tr>
            <td style="padding: 8px 0; color: #666666; font-weight: 500; width: 25%;">Name:</td>
            <td style="padding: 8px 0; color: #000000; font-weight: 700;">${formData.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666666; font-weight: 500;">Email:</td>
            <td style="padding: 8px 0; color: #333333;"><a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none;">${formData.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666666; font-weight: 500;">Phone:</td>
            <td style="padding: 8px 0; color: #333333;"><a href="tel:${formData.phone}" style="color: #2563eb; text-decoration: none;">${formData.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666666; font-weight: 500;">Experience:</td>
            <td style="padding: 8px 0; color: #333333;">${formData.experience}</td>
          </tr>
        </table>
      </div>

      <div style="background: #ffffff; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #e0e0e0;">
        <h3 style="color: #000000; margin: 0 0 15px 0; font-size: 18px; font-family: 'Poppins', sans-serif; font-weight: 600;">💼 Professional Details</h3>
        <div style="background: #fafafa; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <p style="color: #666666; font-size: 14px; margin: 0 0 5px 0; font-family: 'Poppins', sans-serif;">Portfolio:</p>
          <p style="color: #333333; margin: 0; font-family: 'Poppins', sans-serif;"><a href="${formData.portfolio}" style="color: #2563eb;">${formData.portfolio}</a></p>
        </div>
        <div style="background: #fafafa; padding: 15px; border-radius: 8px;">
          <p style="color: #666666; font-size: 14px; margin: 0 0 5px 0; font-family: 'Poppins', sans-serif;">Cover Letter:</p>
          <p style="color: #333333; margin: 0; line-height: 1.6; font-family: 'Poppins', sans-serif;">${formData.coverLetter}</p>
        </div>
      </div>

      <div style="text-align: center; padding: 25px; background: #f5f5f5; border-radius: 12px;">
        <h3 style="color: #000000; margin: 0 0 20px 0; font-size: 18px; font-family: 'Poppins', sans-serif; font-weight: 600;">⚡ Quick Actions</h3>
        <div>
          <a href="mailto:${formData.email}" style="background: #333333; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500; display: inline-block; margin: 0 8px 8px 0; font-family: 'Poppins', sans-serif;">
            📧 Reply to Candidate
          </a>
          <a href="tel:${formData.phone}" style="background: #666666; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500; display: inline-block; margin: 0 8px 8px 0; font-family: 'Poppins', sans-serif;">
            📞 Call Candidate
          </a>
        </div>
        <p style="color: #999999; font-size: 12px; margin: 15px 0 0 0; font-family: 'Poppins', sans-serif;">
          Application received on ${new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}
        </p>
      </div>
    </div>
    
    ${getEmailFooter()}
  `;
};

// CONTACT FORM EMAIL TEMPLATES (existing)
const getClientEmailContent = (formData, inquiryId) => {
  return `
    ${getEmailHeader()}
    
    <div style="padding: 40px 30px; background-color: #ffffff; font-family: 'Poppins', 'Calibri', sans-serif;">
      <div style="text-align: center; margin-bottom: 30px;">
        <div style="background: #f5f5f5; padding: 20px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #e0e0e0;">
          <h2 style="color: #000000; margin: 0 0 10px 0; font-size: 24px; font-weight: 700; font-family: 'Poppins', sans-serif;">
            🎉 Thank You, ${formData.name}!
          </h2>
          <p style="color: #333333; margin: 0; font-size: 16px; font-family: 'Poppins', sans-serif; font-weight: 400;">
            We've received your inquiry and our team is excited to help you achieve your goals.
          </p>
        </div>
      </div>

      <div style="background: #fafafa; padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #333333;">
        <h3 style="color: #000000; margin: 0 0 20px 0; font-size: 18px; font-family: 'Poppins', sans-serif; font-weight: 600;">
          📋 Your Inquiry Details
        </h3>
        <table style="width: 100%; border-collapse: collapse; font-family: 'Poppins', sans-serif;">
          <tr>
            <td style="padding: 8px 0; color: #666666; font-weight: 500; width: 30%;">Inquiry ID:</td>
            <td style="padding: 8px 0; color: #000000; font-weight: 700;">${inquiryId}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666666; font-weight: 500;">Service:</td>
            <td style="padding: 8px 0; color: #333333;">${formData.service}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666666; font-weight: 500;">Company:</td>
            <td style="padding: 8px 0; color: #333333;">${formData.company || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666666; font-weight: 500;">Budget:</td>
            <td style="padding: 8px 0; color: #333333;">${formData.budget || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666666; font-weight: 500;">Timeline:</td>
            <td style="padding: 8px 0; color: #333333;">${formData.timeline || 'Not specified'}</td>
          </tr>
        </table>
      </div>

      <div style="background: #ffffff; padding: 25px; border-radius: 12px; margin-bottom: 30px; border: 1px solid #e0e0e0;">
        <h3 style="color: #000000; margin: 0 0 15px 0; font-size: 18px; font-family: 'Poppins', sans-serif; font-weight: 600;">🚀 What Happens Next?</h3>
        <div style="space-y: 12px;">
          <div style="display: flex; align-items: start; margin-bottom: 12px;">
            <span style="background: #333333; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; margin-right: 12px; flex-shrink: 0; font-family: 'Poppins', sans-serif;">1</span>
            <span style="color: #333333; font-size: 14px; line-height: 1.5; font-family: 'Poppins', sans-serif;">Our team will review your requirements within 2-4 hours</span>
          </div>
          <div style="display: flex; align-items: start; margin-bottom: 12px;">
            <span style="background: #666666; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; margin-right: 12px; flex-shrink: 0; font-family: 'Poppins', sans-serif;">2</span>
            <span style="color: #333333; font-size: 14px; line-height: 1.5; font-family: 'Poppins', sans-serif;">We'll schedule a consultation call within 24 hours</span>
          </div>
          <div style="display: flex; align-items: start; margin-bottom: 12px;">
            <span style="background: #999999; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; margin-right: 12px; flex-shrink: 0; font-family: 'Poppins', sans-serif;">3</span>
            <span style="color: #333333; font-size: 14px; line-height: 1.5; font-family: 'Poppins', sans-serif;">Receive a detailed proposal tailored to your needs</span>
          </div>
        </div>
      </div>

      <div style="text-align: center; padding: 20px; background: #f5f5f5; border-radius: 12px;">
        <h3 style="color: #000000; margin: 0 0 15px 0; font-size: 16px; font-family: 'Poppins', sans-serif; font-weight: 600;">Need Immediate Assistance?</h3>
        <div style="margin-bottom: 15px;">
          <a href="tel:${process.env.PHONE_NUMBER}" style="background: #333333; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500; display: inline-block; margin: 0 8px 8px 0; font-family: 'Poppins', sans-serif;">
            📞 Call Us
          </a>
          <a href="mailto:${process.env.SUPPORT_EMAIL}" style="background: white; color: #333333; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500; display: inline-block; border: 2px solid #333333; margin: 0 8px 8px 0; font-family: 'Poppins', sans-serif;">
            ✉️ Email Us
          </a>
        </div>
      </div>
    </div>
    
    ${getEmailFooter()}
  `;
};

const getAdminEmailContent = (formData, inquiryId) => {
  const priorityLevels = {
    'Less then ₹3,000': { level: 'Medium', icon: '🟡', bgColor: '#f5f5f5', textColor: '#666666' },
    '₹3,000 - ₹5,000': { level: 'Medium', icon: '🟡', bgColor: '#f5f5f5', textColor: '#666666' },
    '₹5,000 - ₹10,000': { level: 'High', icon: '🟠', bgColor: '#e0e0e0', textColor: '#333333' },
    '₹10,000+': { level: 'High', icon: '🔴', bgColor: '#d0d0d0', textColor: '#000000' },
    'Not sure yet': { level: 'Medium', icon: '🟡', bgColor: '#f5f5f5', textColor: '#666666' }
  };
  
  const priority = priorityLevels[formData.budget] || { level: 'Medium', icon: '🟡', bgColor: '#fef3c7', textColor: '#92400e' };

  return `
    ${getEmailHeader()}
    
    <div style="padding: 40px 30px; background-color: #ffffff; font-family: 'Poppins', 'Calibri', sans-serif;">
      <div style="background: ${priority.bgColor}; padding: 20px; border-radius: 12px; margin-bottom: 25px; text-align: center;">
        <h2 style="color: ${priority.textColor}; margin: 0 0 10px 0; font-size: 22px; font-weight: 700; font-family: 'Poppins', sans-serif;">
          ${priority.icon} New Service Inquiry Received!
        </h2>
        <p style="color: ${priority.textColor}; margin: 0; font-size: 14px; opacity: 0.9; font-family: 'Poppins', sans-serif;">
          Priority: ${priority.level} | Inquiry ID: ${inquiryId}
        </p>
      </div>

      <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #2563eb;">
        <h3 style="color: #1e40af; margin: 0 0 20px 0; font-size: 18px; font-family: 'Poppins', sans-serif; font-weight: 600;">👤 Client Information</h3>
        <table style="width: 100%; border-collapse: collapse; font-family: 'Poppins', sans-serif;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500; width: 25%;">Name:</td>
            <td style="padding: 8px 0; color: #1e293b; font-weight: 700;">${formData.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Email:</td>
            <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none;">${formData.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Phone:</td>
            <td style="padding: 8px 0; color: #1e293b;"><a href="tel:${formData.phone}" style="color: #2563eb; text-decoration: none;">${formData.phone || 'Not provided'}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Company:</td>
            <td style="padding: 8px 0; color: #1e293b;">${formData.company || 'Not provided'}</td>
          </tr>
        </table>
      </div>

      <div style="background: #fefce8; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #eab308;">
        <h3 style="color: #a16207; margin: 0 0 20px 0; font-size: 18px; font-family: 'Poppins', sans-serif; font-weight: 600;">🎯 Project Details</h3>
        <table style="width: 100%; border-collapse: collapse; font-family: 'Poppins', sans-serif;">
          <tr>
            <td style="padding: 8px 0; color: #92400e; font-weight: 500; width: 25%;">Service:</td>
            <td style="padding: 8px 0; color: #1e293b; font-weight: 700;">${formData.service}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #92400e; font-weight: 500;">Budget:</td>
            <td style="padding: 8px 0; color: #1e293b; font-weight: 700;">${formData.budget || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #92400e; font-weight: 500;">Timeline:</td>
            <td style="padding: 8px 0; color: #1e293b;">${formData.timeline || 'Not specified'}</td>
          </tr>
        </table>
      </div>

      <div style="background: #f0fdf4; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #22c55e;">
        <h3 style="color: #166534; margin: 0 0 15px 0; font-size: 18px; font-family: 'Poppins', sans-serif; font-weight: 600;">📝 Project Description</h3>
        <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #d1fae5;">
          <p style="color: #1f2937; margin: 0; line-height: 1.6; font-size: 14px; font-family: 'Poppins', sans-serif;">
            ${formData.message}
          </p>
        </div>
      </div>

      ${formData.description ? `
      <div style="background: #ede9fe; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #8b5cf6;">
        <h3 style="color: #6b21a8; margin: 0 0 15px 0; font-size: 18px; font-family: 'Poppins', sans-serif; font-weight: 600;">📋 Additional Details</h3>
        <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e9d5ff;">
          <p style="color: #1f2937; margin: 0; line-height: 1.6; font-size: 14px; font-family: 'Poppins', sans-serif;">
            ${formData.description}
          </p>
        </div>
      </div>
      ` : ''}

      <div style="text-align: center; padding: 25px; background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); border-radius: 12px;">
        <h3 style="color: #1e40af; margin: 0 0 20px 0; font-size: 18px; font-family: 'Poppins', sans-serif; font-weight: 600;">⚡ Quick Actions</h3>
        <div>
          <a href="mailto:${formData.email}" style="background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500; display: inline-block; margin: 0 8px 8px 0; font-family: 'Poppins', sans-serif;">
            📧 Reply to Client
          </a>
          <a href="tel:${formData.phone}" style="background: #22c55e; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500; display: inline-block; margin: 0 8px 8px 0; font-family: 'Poppins', sans-serif;">
            📞 Call Client
          </a>
        </div>
        <p style="color: #64748b; font-size: 12px; margin: 15px 0 0 0; font-family: 'Poppins', sans-serif;">
          Inquiry received on ${new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}
        </p>
      </div>
    </div>
    
    ${getEmailFooter()}
  `;
};

// NEWSLETTER EMAIL TEMPLATE
const getNewsletterEmailContent = (email) => {
  return `
    ${getEmailHeader()}
    <div style="padding: 40px 30px; background-color: #ffffff; font-family: 'Poppins', 'Calibri', sans-serif;">
      <div style="text-align: center; margin-bottom: 30px;">
        <div style="background: linear-gradient(135deg, #dbeafe 0%, #d1fae5 100%); padding: 20px; border-radius: 12px; margin-bottom: 25px;">
          <h2 style="color: #1e40af; margin: 0 0 10px 0; font-size: 24px; font-weight: 700; font-family: 'Poppins', sans-serif;">
            🎉 Welcome to Our Newsletter!
          </h2>
          <p style="color: #1f2937; margin: 0; font-size: 16px; font-family: 'Poppins', sans-serif;">
            Thank you for subscribing! You'll now receive the latest tech insights, industry trends, and exclusive updates.
          </p>
        </div>
      </div>

      <div style="background: #f0fdf4; padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #22c55e;">
        <h3 style="color: #166534; margin: 0 0 15px 0; font-size: 18px; font-family: 'Poppins', sans-serif; font-weight: 600;">📚 What to Expect</h3>
        <div style="space-y: 12px;">
          <div style="display: flex; align-items: start; margin-bottom: 12px;">
            <span style="background: #22c55e; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; margin-right: 12px; flex-shrink: 0; font-family: 'Poppins', sans-serif;">1</span>
            <span style="color: #1f2937; font-size: 14px; line-height: 1.5; font-family: 'Poppins', sans-serif;">Weekly insights on AI, data analytics, and web development</span>
          </div>
          <div style="display: flex; align-items: start; margin-bottom: 12px;">
            <span style="background: #3b82f6; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; margin-right: 12px; flex-shrink: 0; font-family: 'Poppins', sans-serif;">2</span>
            <span style="color: #1f2937; font-size: 14px; line-height: 1.5; font-family: 'Poppins', sans-serif;">Exclusive tips and best practices from industry experts</span>
          </div>
          <div style="display: flex; align-items: start; margin-bottom: 12px;">
            <span style="background: #f59e0b; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; margin-right: 12px; flex-shrink: 0; font-family: 'Poppins', sans-serif;">3</span>
            <span style="color: #1f2937; font-size: 14px; line-height: 1.5; font-family: 'Poppins', sans-serif;">Early access to new services and special offers</span>
          </div>
        </div>
      </div>

      <div style="text-align: center; padding: 20px; background: #f1f5f9; border-radius: 12px;">
        <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 16px; font-family: 'Poppins', sans-serif; font-weight: 600;">Explore Our Latest Content</h3>
        <a href="${process.env.WEBSITE_URL}/blog" style="background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500; display: inline-block; font-family: 'Poppins', sans-serif;">
          📖 Visit Our Blog
        </a>
      </div>
    </div>
    ${getEmailFooter()}
  `;
};

// CONTACT ENDPOINT
app.post('/contact', async (req, res) => {
  try {
    const formData = req.body;

    const requiredFields = ['name', 'email', 'service', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]?.trim());

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        error: `Missing required fields: ${missingFields.join(', ')}`,
        message: 'Please fill in all required fields'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({
        success: false,
        error: 'Wrong email format',
        message: 'Please provide a legit email address'
      });
    }

    const inquiryId = generateInquiryId();

    const clientEmailOptions = {
      from: `"${process.env.COMPANY_NAME}" <${process.env.SENDER_EMAIL}>`,
      to: formData.email,
      subject: `Thank You for Your Inquiry - ${process.env.COMPANY_NAME} [${inquiryId}]`,
      html: getClientEmailContent(formData, inquiryId)
    };

    const adminEmailOptions = {
      from: `"${process.env.COMPANY_NAME}" <${process.env.SENDER_EMAIL}>`,
      to: process.env.SUPPORT_EMAIL,
      subject: `🚨 New Service Inquiry - ${formData.service} - [${inquiryId}]`,
      html: getAdminEmailContent(formData, inquiryId)
    };

    let clientEmailSent = false;
    let adminEmailSent = false;

    try {
      await transporter.sendMail(clientEmailOptions);
      clientEmailSent = true;
      console.log('Client email sent successfully');
    } catch (error) {
      console.error('Error sending client email:', error);
    }

    try {
      await transporter.sendMail(adminEmailOptions);
      adminEmailSent = true;
      console.log('Admin email sent successfully');
    } catch (error) {
      console.error('Error sending admin email:', error);
    }

    res.status(200).json({
      success: true,
      inquiry_id: inquiryId,
      message: 'Thank you for your inquiry! We will contact you within 24 hours.',
      details: {
        client_email_sent: clientEmailSent,
        admin_email_sent: adminEmailSent
      }
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'An unexpected error occurred. Please try again later.'
    });
  }
});

// NEWSLETTER ENDPOINT
app.post('/newsletter', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Email is required',
        message: 'Please provide an email address'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format',
        message: 'Please provide a valid email address'
      });
    }

    const mailOptions = {
      from: `"${process.env.COMPANY_NAME}" <${process.env.SENDER_EMAIL}>`,
      to: email,
      subject: `Welcome to ${process.env.COMPANY_NAME} Newsletter!`,
      html: getNewsletterEmailContent(email)
    };

    await transporter.sendMail(mailOptions);

    // Also notify admin about new subscription
    const adminNotification = {
      from: `"${process.env.COMPANY_NAME}" <${process.env.SENDER_EMAIL}>`,
      to: process.env.SUPPORT_EMAIL,
      subject: '📧 New Newsletter Subscription',
      html: `
        ${getEmailHeader()}
        <div style="padding: 40px 30px; background-color: #ffffff; font-family: 'Poppins', sans-serif;">
          <h2 style="color: #1e40af; margin: 0 0 20px 0;">New Newsletter Subscriber</h2>
          <p style="color: #1f2937; margin-bottom: 10px;">Email: <strong>${email}</strong></p>
          <p style="color: #64748b; font-size: 14px;">Subscribed on: ${new Date().toLocaleString()}</p>
        </div>
        ${getEmailFooter()}
      `
    };

    try {
      await transporter.sendMail(adminNotification);
    } catch (error) {
      console.error('Error sending admin notification:', error);
    }

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter!'
    });

  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'Failed to subscribe. Please try again later.'
    });
  }
});

// CAREER APPLICATION ENDPOINT
app.post('/careers', async (req, res) => {
  try {
    const formData = req.body;

    const requiredFields = ['name', 'email', 'phone', 'experience', 'portfolio', 'coverLetter'];
    const missingFields = requiredFields.filter(field => !formData[field]?.trim());

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        error: `Missing required fields: ${missingFields.join(', ')}`,
        message: 'Please fill in all required fields'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format',
        message: 'Please provide a valid email address'
      });
    }

    const applicationId = generateInquiryId().replace('TF', 'APP');

    // Send confirmation email to applicant
    const applicantMailOptions = {
      from: `"${process.env.COMPANY_NAME} Careers" <${process.env.SENDER_EMAIL}>`,
      to: formData.email,
      subject: `Application Received - ${process.env.COMPANY_NAME} [${applicationId}]`,
      html: getApplicantEmailContent(formData, applicationId)
    };

    // Send notification to admin
    const adminMailOptions = {
      from: `"${process.env.COMPANY_NAME} Careers" <${process.env.SENDER_EMAIL}>`,
      to: process.env.SUPPORT_EMAIL,
      subject: `🎯 New Job Application - ${formData.experience} Experience [${applicationId}]`,
      html: getAdminCareerEmailContent(formData, applicationId)
    };

    let applicantEmailSent = false;
    let adminEmailSent = false;

    try {
      await transporter.sendMail(applicantMailOptions);
      applicantEmailSent = true;
      console.log('Applicant confirmation email sent successfully');
    } catch (error) {
      console.error('Error sending applicant email:', error);
    }

    try {
      await transporter.sendMail(adminMailOptions);
      adminEmailSent = true;
      console.log('Admin notification email sent successfully');
    } catch (error) {
      console.error('Error sending admin email:', error);
    }

    res.status(200).json({
      success: true,
      application_id: applicationId,
      message: 'Application submitted successfully! We will review and get back to you within 5-7 business days.',
      details: {
        applicant_email_sent: applicantEmailSent,
        admin_email_sent: adminEmailSent
      }
    });

  } catch (error) {
    console.error('Error processing career application:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'Failed to submit application. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'TechFlow Contact API with Nodemailer',
    email_service: 'available'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Email service configured with: ${process.env.SENDER_EMAIL}`);
});