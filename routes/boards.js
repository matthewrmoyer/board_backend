// var express = require('express'); //need this?
const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
    knex('board')
        .then(function(data) {
            res.send(data)
        })
})

router.get('/:id', async (req, res, next) => {
    const boardId = req.params.id
    try {
        const data = await getById('board', boardId)
        res.send(data)
    } catch(err) {
        next(err)
    }
})

router.get('/singleboard/:id', async (req, res, next) => {
    const boardId = req.params.id
    try {
        const data = {}
        const board = await getByTableColumn('board', boardId)
        const creator = await getByTableColumn('users', board[0].creator)

        data.board = board[0]
        data.creator = creator[0]
        res.send(data)
    } catch(err) {
        next(err)
    }
})

function getByTableColumn(table, column) {
    return knex(table).where('id', column)
}
module.exports = router;