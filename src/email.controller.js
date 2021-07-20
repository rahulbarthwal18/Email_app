require('dotenv').config();
const nodemailer = require('nodemailer');
exports.emailSending = async (req, res, next) => {
    let {email} = req.body;
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        }
    });
    var mailOptions = {
        from: '"Rahul Barthwal" <nicolette.hand64@ethereal.email>',
        to: email,
        subject: 'Testing nodejs nodemailer module',
        html: ` 
         <h1 style='color:Green'>Email from Rahul Barthwal</h1>`,
        attachments: [
            {
                filename: 'dummy.pdf',
                path:'./public/assets/dummy.pdf'
            }
        ]
      };
      
     let response =await transporter.sendMail(mailOptions);
      if(response.messageId) {
          res.send(`Email sent to ${email}`);
      }else{
      res.send("Error on sending email");
      }
}
