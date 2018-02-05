const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
    knex('item')
        .then(function(data) {
            res.send(data)
        })
})

router.post('/', (req, res) => {
	knex('item').insert({
		board_id: req.body.board_id, 
		value: req.body.value 
	})
		.then(function(data) {
			res.send(data)
		})
})

module.exports = router;