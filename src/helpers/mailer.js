import nodemailer from 'nodemailer';
import config from './config';
import { employeeSignupTemplate } from './emailTemplates';

const mailer = async (info, action) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.API_SENDER_EMAIL,
      pass: config.EMAIL_PASSWORD
    }
  });

  let subject;
  let emailto;
  let data;
  switch (action) {
    case 'createEmployee':
      subject = 'Sign up successful';
      data = employeeSignupTemplate(info);
      emailto = info.email;
      break;
    default:
      subject = '';
      break;
  }
  const mailOptions = {
    from: `"FLY RIGHT"<${config.API_SENDER_EMAIL}>`,
    to: emailto,
    subject,
    html: data
  };
  try {
    const sendMail = transporter.sendMail(mailOptions);
    return sendMail;
  } catch (error) {
    return error;
  }
};
export default mailer;
