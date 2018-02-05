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

router.delete('/:id', (req, res) => {
    console.log('delete called');
    console.log(req.params)
	knex('item').where('id', req.params.id).del()
		.then(data => {
			res.send(req.params.id)
		})
})

module.exports = router;