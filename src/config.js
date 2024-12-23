require('dotenv').config();

const config = {
  line: {
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET
  },
  deepl: {
    authKey: process.env.DEEPL_AUTH_KEY
  },
  port: process.env.PORT || 3000
};

module.exports = config;