const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
    knex('item')
        .then(function(data) {
            res.send(data)
        })
})

module.exports = router;