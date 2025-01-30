import nodemailer from "nodemailer";



const transporter  = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
      user: "330131c7d98924",
      pass: "24144cdc4b7a93"
    }
  });


async function mail(name,link,toEmail,next){


    try {
        const info = await transporter.sendMail({
            from: '"BookReslling Support" <no-reply@ciniflex.com>', // Sender Name & Email
            to: toEmail, // User's Email
            subject: "Verify Your Email - bookreseller", // Email Subject
            text: `Hello ${name},\n\nThank you for registering on our app!\n\nTo complete your registration, please verify your email by clicking the link below:\n\n\n\nIf you didn't sign up for bookReseller, please ignore this email.\n\nBest regards,\bookReseller Team`, // Plain text version
            html: `
            <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Verification</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f9;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 20px auto;
                background-color: #fff;
                border-radius: 8px;
                padding: 30px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 20px;
            }
            .header h1 {
                font-size: 28px;
                color: #333;
            }
            .message {
                font-size: 16px;
                color: #555;
                line-height: 1.6;
                margin-bottom: 20px;
            }
            .button {
                display: inline-block;
                padding: 12px 25px;
                font-size: 16px;
                color: #fff;
                background-color: #4CAF50;
                text-decoration: none;
                border-radius: 5px;
                text-align: center;
                transition: background-color 0.3s ease;
            }
            .button:hover {
                background-color: #45a049;
            }
            .footer {
                font-size: 12px;
                color: #777;
                text-align: center;
                margin-top: 30px;
            }
            .footer a {
                color: #777;
                text-decoration: none;
            }
            .footer a:hover {
                color: #333;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Welcome to Our Service, ${name}!</h1>
            </div>
            <div class="message">
                <p>We're excited to have you on board! To complete your registration, please verify your email address by clicking the button below.</p>
                <p>If you did not sign up for an account, please ignore this email.</p>
            </div>
            <div style="text-align: center;">
                <a href="${link}" class="button">Verify Email Address</a>
            </div>
            <div class="footer">
                <p>If you have any questions or issues, feel free to <a href="mailto:support@yourcompany.com">contact us</a>.</p>
                <p>Thank you for choosing us!</p>
            </div>
        </div>
    </body>
    </html>
            `
    
        });
        
    } catch (error) {
        return error;
    }

}

export default mail;