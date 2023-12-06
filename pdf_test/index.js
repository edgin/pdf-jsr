const express = require('express')
const app = express()
const port = 3000
const test = require('./test.js');
const mock = require('./mock_data.js');
const path = require('path');


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/mo', function(req, res) {
  res.sendFile(`${__dirname}/display_item.html`);
});

app.use('/mock', mock);

app.use('/test', test);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})