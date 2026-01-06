import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received contact form data:', req.body);
    console.log('Message field:', req.body.message);
    const { name, email, mobile, message, recipient = 'prashant.singh@icloud.com' } = req.body;

    console.log('Extracted fields:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Mobile:', mobile);
    console.log('Message:', message);

    if (!name || !email || !mobile || !message) {
      console.log('Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('Creating email transporter...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'annaboinalaxman6@gmail.com',
        pass: 'swfe ztcv pzsv dwpb',
      },
    });

    const mailOptions = {
      from: 'annaboinalaxman6@gmail.com',
      to: recipient,
      subject: 'Contact Form - New Inquiry',
      text: `Contact Form Submission

Name: ${name}
Email: ${email}
Mobile: ${mobile}
Message: ${message}
Submitted: ${new Date().toISOString()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Mobile:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${mobile}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Message:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${message}</td></tr>
            <tr><td style="padding: 8px;"><strong>Submitted:</strong></td><td style="padding: 8px;">${new Date().toISOString()}</td></tr>
          </table>
        </div>
      `,
    };

    console.log('Email content will include message:', message);
    console.log('Message length:', message ? message.length : 0);
    console.log('Message content:', JSON.stringify(message));

    console.log('Sending email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to:', recipient);

    res.json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ error: 'Failed to send email: ' + error.message });
  }
});

app.listen(3000, () => {
  console.log('API server running on http://localhost:3000');
  console.log('Ready to receive contact form submissions');
});