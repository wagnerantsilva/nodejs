const { SlackOAuthClient } = require('messaging-api-slack');

const sendMessage = async (message, channel) =>{
// get accessToken from facebook developers website
const client = SlackOAuthClient.connect(
    "xoxb-646245193670-645871248610-T8WpTMu3B1cj6wa5HWcpEkQA"
  );
  
  client.postMessage(channel, message).then(() => {
    console.log('sent');
  });
};


module.exports ={sendMessage}; 