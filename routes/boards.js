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
        //TODO do below in promise.all so they can run in parallel
        //can fire together
        const board = await getByTableColumnValue('board', 'id', boardId)
        const users = await getByTableColumnValue('board_user', 'board_id', boardId)
        const content = await getByTableColumnValue('item', 'board_id', boardId)
        //must wait for board to finish
        const creator = await getByTableColumnValue('users','id', board[0].creator)
        
        data.board = board[0]
        data.creator = creator[0]
        data.content = content        
        data.users = []
        //must wait for users
        for (const user of users) {
            console.log(user.user_id)
            let u = await getByTableColumnValue('users', 'id', user.user_id)
            console.log(u)
            data.users.push({'id': u[0].id, 'email': u[0].email, 'name': u[0].name })
        }

        res.send(data)
    } catch(err) {
        next(err)
    }
})

function getByTableColumnValue(table, column, value) {
    return knex(table).where(column, value)
}
module.exports = router;