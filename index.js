const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
   // console.log(req);
    console.log('status: ',res.statusCode);
    
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>FirstName: ${req.body.firstName}</li>
            <li>LastName: ${req.body.lastName}</li>
            <li>Email: ${req.body.email}</li>
            <li>Message: ${req.body.message}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'gudrun30@ethereal.email',
                pass: '8uBsM56BraMamBWWb8'
            }
        })

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'gudrun30@ethereal.email',
            replyTo: 'test@testaccount.com',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
                
            }
            console.log('Message sent: %s', info.response);
            console.log('Message sent: %s', JSON.stringify(info));
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
            
        })
    })
    
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    
})