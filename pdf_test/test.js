const express = require('express');
const dataFile = require('./data.json');
const router = express.Router();

const client = require('@jsreport/nodejs-client')('http://localhost:5488');

router.get('/', function(req, res, next) {
  client
    .render({
      template: {
        shortid: 'MFlblLANr',
        // content: 'Hello World {{key}}',
        recipe: 'chrome-pdf',
        engine: 'handlebars'
      },
      data: dataFile
    })
    .then(response => response.pipe(res))
    .then(console.log('test', res))
    .catch(next);
});

module.exports = router;
