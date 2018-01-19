const router = require('express').Router()
const knex = require('../db/knex.js')

/* GET users table. */
router.get('/', (req, res) => {
    knex('users')
        .then(function(data) {
            res.send(data)
        })
})

module.exports = router;
