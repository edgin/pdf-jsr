const fs = require('fs');
const express = require('express');
const router = express.Router();

const items = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));

router.get('/', (req, res) => {
    res.status('200').json({
        status: 'success',
        data: {
            items
        }
    })
    console.log(req);
})

router.get('/:id', (req, res ) => {
    const id = req.params.id * 1;
    const test = items.find(el => el.id === id);
    console.log('TEST', test);

    res.status(200).json({
        status: 'success',
        data: {
            test
        }
    })
})

module.exports = router;