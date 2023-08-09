import nodemailer from "nodemailer";
/* 
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS; */

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "spmx.l.google.com", 
  secure: true, 
  service: "gmail",
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'email address',
    pass: 'password'
  }
});

/* export const mailOptions = {
  from: email,
  to: email,
}; */
