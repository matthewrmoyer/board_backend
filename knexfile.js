 module.exports = {
        development: {
            client: 'pg',
            connection: 'postgres://localhost/board_db'
        },
        production: {
            client: 'pg',
            connection: process.env.DATABASE_URL
        }
    }