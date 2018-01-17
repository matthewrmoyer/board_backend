const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
    knex('board_user')
        .then(function(data) {
            res.send(data)
        })
})

module.exports = router;