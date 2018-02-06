const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
    knex('item')
        .then(function(data) {
            res.send(data)
        })
        .catch(err => {
            res.send(err);
        })
})

router.get('/:id', (req, res) => {
    knex('item').where('id', req.params.id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err);
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
        .catch(err => {
            res.send(err);
        })
})

router.delete('/:id', (req, res) => {
	knex('item').where('id', req.params.id).del()
		.then(data => {
			res.send(req.params.id)
        })
        .catch(err => {
            res.send(err);
        })
})

router.put('/:id', (req, res) =>{
    knex('item')
      .where('id', req.params.id)
      .update(req.body)
      .then(data => {
        res.send(req.params.id)
      }).catch(err => {
        res.send(err);
      })
  })

module.exports = router;