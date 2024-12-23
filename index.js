const express = require('express');
const line = require('@line/bot-sdk');
const config = require('./src/config');
const { handleMessage } = require('./src/handlers/messageHandler');

const app = express();

app.post('/webhook', line.middleware(config.line), async (req, res) => {
  try {
    const events = req.body.events;
    await Promise.all(events.map(handleMessage));
    res.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});