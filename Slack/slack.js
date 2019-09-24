const { SlackOAuthClient } = require('messaging-api-slack');

const sendMessage = async (message, channel) =>{
// get accessToken from facebook developers website
const client = SlackOAuthClient.connect(
    "YOUR_TOKEN"
  );
  
  client.postMessage(channel, message).then(() => {
    console.log('sent');
  });
};


module.exports ={sendMessage}; 