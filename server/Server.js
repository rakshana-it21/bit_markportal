const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mybackend', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Define a schema and model for your data
const ValSchema = new mongoose.Schema({
  id: String,
  marks: Number,
  val: Number,
  CO1: Number,
  marks2: Number,
  val2: Number,
  CO2: Number,
  marks3: Number,
  val3: Number,
  CO3: Number
});

const Val = mongoose.model('Val', ValSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define API endpoint
app.post('/save', (req, res) => {
  const vals = req.body;
  
  // Save each value in the database
  vals.forEach(async (val) => {
    const newVal = new Val(val);
    await newVal.save();
  });

  res.send('Data saved successfully');
});
app.get('/api/data', async (req, res) => {
    try {
      const data = await Val.find();
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
