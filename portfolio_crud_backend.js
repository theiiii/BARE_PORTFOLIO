// server.js
// Simple Express backend for CRUD of inquiries
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In‑memory database (replace with real DB later)
let inquiries = [];

// Create
app.post('/api/inquiries', (req, res) => {
  const { name, email, message } = req.body;
  const newInquiry = { id: uuidv4(), name, email, message, createdAt: new Date() };
  inquiries.push(newInquiry);
  res.status(201).json(newInquiry);
});

// Read all
app.get('/api/inquiries', (req, res) => {
  res.json(inquiries);
});

// Read one
app.get('/api/inquiries/:id', (req, res) => {
  const inquiry = inquiries.find((i) => i.id === req.params.id);
  inquiry ? res.json(inquiry) : res.status(404).json({ error: 'Not found' });
});

// Update
app.put('/api/inquiries/:id', (req, res) => {
  const index = inquiries.findIndex((i) => i.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  inquiries[index] = { ...inquiries[index], ...req.body };
  res.json(inquiries[index]);
});

// Delete
app.delete('/api/inquiries/:id', (req, res) => {
  const index = inquiries.findIndex((i) => i.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  const removed = inquiries.splice(index, 1);
  res.json(removed[0]);
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
