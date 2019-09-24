# slack
Function for send message fos slack.

## messaging-api-messenger

[messaging-api-messenger](https://github.com/Yoctol/messaging-apis)

```
    npm i --save messaging-api-messenger
    or
    yarn add messaging-api-messenger
```
### Create an app in slack.
[Help Slack](https://slack.com/intl/pt-br/help/articles/115005265703)

#### Replace "YOUR_TOKEN" by token genarate in slack.
```

const sendMessage = async (message, channel) =>{
// get accessToken from facebook developers website
const client = SlackOAuthClient.connect(
    "YOUR_TOKEN"
  );
  
  client.postMessage(channel, message).then(() => {
    console.log('sent');
  });
};

```