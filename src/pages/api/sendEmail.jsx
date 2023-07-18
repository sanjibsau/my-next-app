// pages/api/sendEmail.js

import nodemailer from 'nodemailer';
/* import generateEmailTemplate from '../../../templates/emailTemplate'; */




 // Create a nodemailer transporter
 const transporter = nodemailer.createTransport({
  // configure your email service provider details here
  // refer to nodemailer documentation for different transport options
  host: "spmx.l.google.com", 
  port: 587,
  secure: true, 
  service: "gmail",
  
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'sanjibsau79@gmail.com',
    pass: 'dfwnvulpksamvnsq'
  }

});

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email,number,company, message, checked } = req.body;
    

   

    // Construct the email message
    const mailOptions = {
      from: '"Anagram Media Labs 👻" <sanjibsau79@gmail.com>', // sender address
      to: "sanjib@anagrammedia.tech", // list of receivers
      subject: 'New Contact Form Submission ✔',
    
      html: `<html>
      <head>
        <style>
          .bg_color{
            background-color: #01283c !important;
            margin: 0 !important;
             padding: 0 !important;
          }
          .container{
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }
          .brand_name{
            text-align:center;
            color: #fff;
            font-size:60px;
          }
          
        </style>
      </head>
      <body class="bg_color">
          <div class="container">
            <img src="${process.env.NEXT_PUBLIC_BASE_URL}/img/logo.png" alt="Logo" class="logo_img" />
          <h1 class="brand_name">Anagram Media Labs</h1>

         
          <p style="color:#fff;text-align:center;">Name: ${name} <br/>
          Email: ${email} <br/>
          Contact: ${number} <br/>
          Company Name: ${company} <br/>
          Message: ${message}<br/>
          CheckBox: ${checked}</p>
          </div>
      </body>
    </html> `,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  } else {
    res.status(405).send('Method not allowed');
  }
}
