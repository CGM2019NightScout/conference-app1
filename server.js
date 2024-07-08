// server.js

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.listen(port, () => {
  console.log(`Server running on <http://localhost>:${port}`);
});


// Speaker end points

let speakers = []; // In-memory storage for simplicity

// Create Speaker
app.post('/speakers', (req, res) => {
  const speaker = { id: speakers.length + 1, ...req.body };
  speakers.push(speaker);
  res.status(201).send(speaker);
});

// Get All Speakers
app.get('/speakers', (req, res) => {
  res.send(speakers);
});

// Get Speaker by ID
app.get('/speakers/:id', (req, res) => {
  const speaker = speakers.find(s => s.id == req.params.id);
  if (!speaker) return res.status(404).send('Speaker not found');
  res.send(speaker);
});

// Update Speaker
app.put('/speakers/:id', (req, res) => {
  const speaker = speakers.find(s => s.id == req.params.id);
  if (!speaker) return res.status(404).send('Speaker not found');
  Object.assign(speaker, req.body);
  res.send(speaker);
});

// Delete Speaker
app.delete('/speakers/:id', (req, res) => {
  const index = speakers.findIndex(s => s.id == req.params.id);
  if (index === -1) return res.status(404).send('Speaker not found');
  speakers.splice(index, 1);
  res.status(204).send();
});


// Session endpoints

let sessions = []; // In-memory storage for simplicity

// Create Session
app.post('/sessions', (req, res) => {
  const session = { id: sessions.length + 1, ...req.body };
  sessions.push(session);
  res.status(201).send(session);
});

// Get All Sessions
app.get('/sessions', (req, res) => {
  res.send(sessions);
});

// Get Session by ID
app.get('/sessions/:id', (req, res) => {
  const session = sessions.find(s => s.id == req.params.id);
  if (!session) return res.status(404).send('Session not found');
  res.send(session);
});

// Update Session
app.put('/sessions/:id', (req, res) => {
  const session = sessions.find(s => s.id == req.params.id);
  if (!session) return res.status(404).send('Session not found');
  Object.assign(session, req.body);
  res.send(session);
});

// Delete Session
app.delete('/sessions/:id', (req, res) => {
  const index = sessions.findIndex(s => s.id == req.params.id);
  if (index === -1) return res.status(404).send('Session not found');
  sessions.splice(index, 1);
  res.status(204).send();
});


// Attendess endpoint

let attendees = []; // In-memory storage for simplicity

// Register Attendee
app.post('/attendees', (req, res) => {
  const attendee = { id: attendees.length + 1, ...req.body };
  attendees.push(attendee);
  res.status(201).send(attendee);
});

// Get All Attendees
app.get('/attendees', (req, res) => {
  res.send(attendees);
});

// Get Attendee by ID
app.get('/attendees/:id', (req, res) => {
  const attendee = attendees.find(a => a.id == req.params.id);
  if (!attendee) return res.status(404).send('Attendee not found');
  res.send(attendee);
});

// Update Attendee
app.put('/attendees/:id', (req, res) => {
  const attendee = attendees.find(a => a.id == req.params.id);
  if (!attendee) return res.status(404).send('Attendee not found');
  Object.assign(attendee, req.body);
  res.send(attendee);
});

// Delete Attendee
app.delete('/attendees/:id', (req, res) => {
  const index = attendees.findIndex(a => a.id == req.params.id);
  if (index === -1) return res.status(404).send('Attendee not found');
  attendees.splice(index, 1);
  res.status(204).send();
});


