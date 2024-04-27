const express = require('express');
const cors = require('cors');
const { MongoClient,ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors(
  {
    origin:["https://airline-main-f-routes-cr8m.vercel.app/"],
    methods:["POST","GET"],
    credentials: true
  }
));


const Client = new MongoClient('mongodb+srv://admin1:admin1@cluster0.wyowjiq.mongodb.net/?retryWrites=true&w=majority');
Client.connect();
const db = Client.db('skill');
const col = db.collection('user');
const bookingsCol = db.collection('bookings');
const passengerDetailsCol = db.collection('passengerdetails');


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
      text: 'Dear CUSTOMER Welcome to Marcos Airlines! 🌟 You have been successfully registered. Get ready for a journey filled with comfort and luxury.At MARCOS Airlines, we are dedicated to making your travels seamless and enjoyable. From our top-notch aircraft to our friendly staff, every moment with us is designed for your satisfaction. Thank you for choosing AIREASE Airlines.  unforgettable journeys! Safe travels,The MARCOS Airlines Team ✈️',
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
app.get('/retrive', async (req, res) => {
  const result =await  col.find().toArray()
  console.log(result)
  res.send(result)
})
app.put('/users/:id', async (req,res)=>{ 
  const {id}= req.params 
  const {name, lastname, role, email, password}=req.body 
  const result= await col.updateOne({_id: new ObjectId(id)}, {$set:{name,lastname, role, email, password} }) 
  res.send('updated') 
})

app.delete('/users/:id',async (req,res)=>{
  const {id}=req.params
  const result= await col.deleteOne({_id:new ObjectId(id)})
  res.json({message:'deleted sucessfully'})
})
app.post('/register',(req,res)=>{
  col.insertOne(req.body)
  console.log(req.body)
  res.send("data inserted successfully")
})

app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Insert contact form data into the database
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

    // Insert booking data into the MongoDB collection
    await bookingsCol.insertOne(bookingData);

    res.send('Booking data received and inserted into MongoDB collection');
  } catch (error) {
    console.error('Error inserting booking data into MongoDB:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.post('/passenger-form', async (req, res) => {
  try {
    const passengerFormData = req.body; // Get passenger form data from the request body

    // Log the received data in the server terminal
    console.log('Received passenger form data:', passengerFormData);

    // Insert passenger form data into the new MongoDB collection 'passengerdetails'
    await passengerDetailsCol.insertOne(passengerFormData);

    res.send('Passenger form data received and inserted into passengerdetails collection');
  } catch (error) {
    console.error('Error inserting passenger form data into MongoDB:', error);
    res.status(500).send('Internal Server Error');
  }
});
// Server-side code (app.js or routes file)

app.get('/retrieve/passengerdetails', async (req, res) => {
  try {
    // Retrieve passenger details from the MongoDB collection
    const passengerDetails = await passengerDetailsCol.find().toArray();
    res.json(passengerDetails);
  } catch (error) {
    console.error('Error retrieving passenger details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Server-side code (app.js or routes file)







const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
