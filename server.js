const express = require('express');
const cors = require('cors');
const { portfolioData } = require('./data/portfolioData');
const { checkMySQL, checkPostgres, checkMongo } = require('./db/health');

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the my-portfolio public API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      profile: '/api/profile',
      about: '/api/about',
      projects: '/api/projects',
      skills: '/api/skills',
      experience: '/api/experience',
      contact: '/api/contact'
    }
  });
});

app.get('/api/health', async (req, res) => {
  const [mysql, postgres, mongodb] = await Promise.all([
    checkMySQL(),
    checkPostgres(),
    checkMongo()
  ]);

  const databases = { mysql, postgres, mongodb };
  const allUp = Object.values(databases).every((db) => db.status === 'up');

  res.status(allUp ? 200 : 503).json({
    status: allUp ? 'ok' : 'degraded',
    service: 'my-portfolio-api',
    timestamp: new Date().toISOString(),
    databases
  });
});

app.get('/api/profile', (req, res) => {
  res.json({
    success: true,
    data: portfolioData.profile,
    stats: portfolioData.stats
  });
});

app.get('/api/about', (req, res) => {
  res.json({
    success: true,
    data: portfolioData.about
  });
});

app.get('/api/projects', (req, res) => {
  res.json({
    success: true,
    data: portfolioData.projects
  });
});

app.get('/api/skills', (req, res) => {
  res.json({
    success: true,
    data: portfolioData.skills
  });
});

app.get('/api/experience', (req, res) => {
  res.json({
    success: true,
    data: portfolioData.experience
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields: name, email, and message are required.'
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.'
    });
  }

  return res.status(201).json({
    success: true,
    message: 'Message received successfully.',
    data: {
      name,
      email,
      subject: subject || 'General inquiry',
      message
    }
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found.'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 my-portfolio API running on http://localhost:${PORT}`);
});
