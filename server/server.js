/* eslint-disable no-console */
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const server = express();

const host = 'localhost';
const port = process.env.PORT || '5000';

server.use(express.urlencoded());
server.use(express.json());

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'justinpaoletta@gmail.com',
    pass: process.env.PASSWORD,
  },
});

server.post('/mail', (req, res) => {
  const { body } = req;
  const mailOptions = {
    replyTo: body.from,
    cc: body.from,
    to: body.to,
    subject: body.subject,
    text: body.text,
  };
  transport.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log('Sorry there was an error sending this email');
    } else {
      console.log('Email was sent!');
      res.status(200).send(data);
    }
  });
});

server.listen(port, (err) => {
  if (err) {
    console.log('Error starting up server');
  } else {
    console.log(`Server now hosted on http://${host}:${port}`);
  }
});

server.use(express.static('./public'));
