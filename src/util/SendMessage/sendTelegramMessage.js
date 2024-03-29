const CHATID = '572844188';
const BOTTOKEN = '6601608812:AAEwJkalYAniXtYDIWNXvzp2aIXYnx1Yeog';

export const sendMessageToTelegram = async text => {
  const apiUrl = `https://api.telegram.org/bot${BOTTOKEN}/sendMessage`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: CHATID,
      text: text,
    }),
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    console.log('Response from Telegram API:', data);
  } catch (error) {
    console.error('Error when sending a message in Telegram:', error);
  }
};
