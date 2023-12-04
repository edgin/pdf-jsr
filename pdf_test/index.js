const express = require('express')
const app = express()
const port = 3000
const test = require('./test.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/test', test);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})