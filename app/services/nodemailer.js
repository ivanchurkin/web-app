'use strict';

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

/**
 * @function send
 * @param {Object} options
 */
function send(options) {
    transporter.sendMail(options, (err, info) => {
        if (err) return console.log(err);
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}

module.exports.send = send;
