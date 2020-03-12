const express = require('express'),
  path = require('path'),
  dialogflow = require('dialogflow'),
  uuid = require('uuid'),
  sessionId = uuid.v4(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 4200,
  host = process.env.BASE_URL || "http://localhost:4200";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist')));

app.post('/send-msg', (req, res) =>{
  runSample(req.body.MSG).then(data => {
    res.send({ Reply: data });
  })
});
/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(msg, projectId = 'app-bot-psvwoy') {

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
    keyFilename:"D:/MEAN-STACK/MAIN/Angular-Revised/blog-frontend/src/assets/data/App-Bot-76bb83ec11cb.json"
  });
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: msg,
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`Query: ${result.queryText}`);
  console.log(`Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`Intent: ${result.intent.displayName}`);
  } else {
    console.log(`No intent matched.`);
  }
  return result.fulfillmentText;
}

app.listen(port, () =>{
  console.log(`Server running at ${host}`);
});


