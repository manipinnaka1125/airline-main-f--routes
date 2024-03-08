const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());


const Client = new MongoClient('mongodb+srv://admin1:admin1@cluster0.wyowjiq.mongodb.net/?retryWrites=true&w=majority');
Client.connect();
const db = Client.db('skill');
const col = db.collection('user');




// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'pinnakamaniswaroop@gmail.com', // Update with your email service provider
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.get('/',(req,res)=>{
  res.send("Its Working")
})

app.post('/insert', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 5);
    // Save the hashed password to the database
    req.body.password = hashedPassword;
    console.log(req.body);

    // Insert user data into the database
    await col.insertOne(req.body);

    // Send registration confirmation email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: req.body.email,
      subject: 'Registration Confirmation',
      text: 'You have been registered to MARCOS Airlines.',
    };
    
    try {
      await transporter.sendMail(mailOptions);
      res.send('Data Received');
    } catch (error) {
      console.error('Error during registration email sending:', error.message);
      res.status(500).send('Internal Server Error');
    }
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/check', async (req, res) => {
  try {
    console.log(req.body);
    const result = await col.findOne({ name: req.body.un });
    if (result !== null && (await bcrypt.compare(req.body.pw, result.password))) {
      res.send(result);
    } else {
      res.send('fail');
    }
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/show', async (req, res) => {
  try {
    const result = await col.find().toArray();
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
