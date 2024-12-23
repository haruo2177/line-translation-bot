const { Translator } = require("deepl-node");
const config = require("../config");

const translator = new Translator(config.deepl.authKey);

async function translateToKorean(text) {
  try {
    const result = await translator.translateText(text, "ja", "ko");
    return result.text;
  } catch (error) {
    console.error("DeepL translation error:", error);
    throw new Error("Translation failed");
  }
}

module.exports = {
  translateToKorean,
};
