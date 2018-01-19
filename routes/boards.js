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
        const data = {board: {}, creator: {}, content: [], users: []}
        //can fire together
        const boardPromise =  getByTableColumnValue('board', 'id', boardId)
        const usersIdsPromise =  getByTableColumnValue('board_user', 'board_id', boardId)
        const contentPromise =  getByTableColumnValue('item', 'board_id', boardId)
        const values = await Promise.all([boardPromise, usersIdsPromise, contentPromise])
        const board = values[0][0]
        const usersIds = values[1]
        const content = values[2]
        //must wait for board to return
        const creator = await getByTableColumnValue('users','id', board.creator)
        // build response object
        data.board = board
        data.creator = creator[0]
        data.content = content        
        //must wait for usersIds to return
        let userPromises = usersIds.map(user => {
            return getByTableColumnValue('users', 'id', user.user_id)
        })
        let users = await Promise.all(userPromises)
        data.users = users.map(u => {
            return {id, email, name} = u
        })
        res.send(data)
    } catch(err) {
        next(err)
    }
})

function getByTableColumnValue(table, column, value) {
    return knex(table).where(column, value)
}
module.exports = router;