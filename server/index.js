const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const Client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
Client.connect();
const db = Client.db('skill');
const col = db.collection('user');
const bookingsCol = db.collection('bookings');

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.get('/', (req, res) => {
  res.send("It's Working");
});

app.post('/insert', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 5);
    req.body.password = hashedPassword;

    await col.insertOne(req.body);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: req.body.email,
      subject: 'Registration Confirmation',
      text: 'Dear CUSTOMER, Welcome to Marcos Airlines! 🌟 You have been successfully registered! Thank you for choosing AIREASE Airlines for unforgettable journeys! Safe travels, The MARCOS Airlines Team ✈️ YOUR ONE TIME PASSWORD IS 196837',
    };

    await transporter.sendMail(mailOptions);
    res.send('Data Received');
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/check', async (req, res) => {
  try {
    const result = await col.findOne({ name: req.body.un });
    if (result && await bcrypt.compare(req.body.pw, result.password)) {
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

app.get('/retrive', async (req, res) => {
  try {
    const result = await col.find().toArray();
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, lastname, role, email, password } = req.body;
  const result = await col.updateOne({ _id: new ObjectId(id) }, { $set: { name, lastname, role, email, password } });
  res.send('updated');
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  const result = await col.deleteOne({ _id: new ObjectId(id) });
  res.json({ message: 'deleted successfully' });
});

app.post('/register', (req, res) => {
  col.insertOne(req.body)
    .then(() => {
      console.log(req.body);
      res.send('Data inserted successfully');
    })
    .catch(error => {
      console.error('Error during registration:', error.message);
      res.status(500).send('Internal Server Error');
    });
});

app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await col.insertOne({ name, email, message });

    res.send('Contact form data submitted successfully');
  } catch (error) {
    console.error('Error submitting contact form:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/post-endpoint', async (req, res) => {
  try {
    const {
      btnType, passengerCount, priceRange, bookReturn,
      originCity, destinationCity, departureDate, returnDate,
      filteredData, isSearchClicked, returnFilterData
    } = req.body;

    const bookingData = {
      btnType, passengerCount, priceRange, bookReturn,
      originCity, destinationCity, departureDate, returnDate,
      filteredData, isSearchClicked, returnFilterData
    };

    console.log('Booking data:', bookingData);

    await bookingsCol.insertOne(bookingData);

    res.send('Booking data received and inserted into MongoDB collection');
  } catch (error) {
    console.error('Error inserting booking data into MongoDB:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
