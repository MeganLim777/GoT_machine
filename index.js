
//Getting the 'express' function
const express = require('express');

//Calling the express() to get an Express type object
const app = express();

const port = 3000;

const path = require('path');

const router = express.Router();

// //This will allow the body of requests to be able to parse JSON objects.
// app.use(express.json());
//
// //Handling the POST request that contains the image in base64
// app.post('/', (req, res) => {
//
//   //The request's body has an object,
//   //so get this object's 'base64' property.
//   const base64Image = req.body.base64;
//
//   console.log("Console.log in index.js: ", base64Image);
//
//   let responseText = "Received: " + base64Image;
//
//   //To confirm the image's base64 has been sent
//   res.send(responseText);
// })
//
// //Displays 'Hello world!!!! Hi there' in the browser
// app.post('/api/base64image/reply', (req, res) => {
//
//     //res.send('Hello world!!!! Hi there. I\'m Megan');
//
//     //The request's body has an object,
//     //so get this object's 'base64' property.
//     const base64Image = req.body.base64;
//
//     console.log("Console.log in index.js: ", base64Image);
//
//     let responseText = "Received: " + base64Image;
//
//     //To confirm the image's base64 has been sent
//     res.send(responseText);
// })
//
// //Display in console that listening on port 3000
// app.listen(port, () => {
//   console.log(`Listening on port ${port} from listen()`);
// })




//Rendering the html file
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})


//Adding the Router
app.use('/', router);

//Creating a virtual path prefix for the '/index.css' files
// by specifying a mount path for the static "__dirname + '/index.css'" directory
// from the '/index.css' path prefix.
app.use('/index.css', express.static(__dirname + '/index.css'));

//Creating a virtual path prefix for the 'Handlers' folder
// by specifying a mount path for the static "__dirname + '/Handlers'" directory
// from the '/Handlers' path prefix.
app.use('/Handlers', express.static(__dirname + '/Handlers'));

//Creating a virtual path prefix for the 'modules' folder
// by specifying a mount path for the static "__dirname + '/modules'" directory
// from the '/modules' path prefix.
app.use('/modules', express.static(__dirname + '/modules'));

app.listen(3000);

// //Console.log to show that this file has ran
console.log('Listening on port 3000...');
