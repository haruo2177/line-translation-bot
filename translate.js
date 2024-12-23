const fetch = require('node-fetch');

async function translateToKorean(text) {
  const url = 'https://openapi.naver.com/v1/papago/n2mt';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Naver-Client-Id': process.env.PAPAGO_CLIENT_ID,
      'X-Naver-Client-Secret': process.env.PAPAGO_CLIENT_SECRET
    },
    body: `source=ja&target=ko&text=${encodeURIComponent(text)}`
  });

  if (!response.ok) {
    throw new Error('Translation API error');
  }

  const data = await response.json();
  return data.message.result.translatedText;
}

module.exports = {
  translateToKorean
};