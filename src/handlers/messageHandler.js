const { Client } = require("@line/bot-sdk");
const config = require("../config");
const { translateToKorean } = require("../services/translator");

const client = new Client(config.line);

async function handleMessage(event) {
  if (event.type !== "message" || event.message.type !== "text") {
    return;
  }

  try {
    const translatedText = await translateToKorean(event.message.text);
    await client.replyMessage(event.replyToken, {
      type: "text",
      text: translatedText,
    });
  } catch (error) {
    console.error("Handler error:", error);
    await client.replyMessage(event.replyToken, {
      type: "text",
      text: "翻訳中にエラーが発生しました／번역 중 오류가 발생했습니다",
    });
  }
}

module.exports = {
  handleMessage,
};
