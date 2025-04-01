import nodemailer from 'nodemailer';

const mailSend = async ({ name, email: userEmail, message }) => {
  try {
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "adhikarishreesant45@gmail.com",
        pass: "euebezouovusqjll",
      },
    });

    const mailOptions = {
      from: 'adhikarishreesant45@gmail.com',
      to: 'adhikarishreesant45@gmail.com', 
      subject: 'New Contact Form Submission',
      html: `
        <h3>New Contact Form Submission:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const info = await transport.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return { success: true, message: 'Email sent successfully' };

  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email' };
  }
};

export default mailSend;