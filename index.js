
//Getting the 'express' function
const express = require('express');

//Calling the express() to get an Express type object
const app = express();

const port = 3000;

//This will allow the body of requests to be able to parse JSON objects.
app.use(express.json());

//Handling the POST request that contains the image in base64
app.post('/api/base64image', (req, res) => {

  //The request's body has an object,
  //so get this object's 'base64' property.
  const base64Image = req.body.base64;

  console.log(base64Image);

  let responseText = "Received: " + base64Image;

  //To confirm the image's base64 has been sent
  res.send(responseText);
})

//Displays 'Hello world!!!! Hi there' in the browser
app.get('/', (req, res) => {
  res.send('Hello world!!!! Hi there. I\'m Megan');
})

//Display in console that listening on port 3000
app.listen(port, () => {
  console.log(`Listening on port ${port} from listen()`);
})

//Console.log to show that this file has ran
console.log('Listening on port 3000...');
