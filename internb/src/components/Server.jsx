const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/event-management', { useNewUrlParser: true, useUnifiedTopology: true });

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const Event = mongoose.model('Event', eventSchema);
const User = mongoose.model('User', userSchema);

app.post('/events', async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.send(event);
});

app.get('/events', async (req, res) => {
  const events = await Event.find().populate('attendees');
  res.send(events);
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});