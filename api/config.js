DB_USER= process.env.DB_USER || 'postgres'
DB_PASSWORD= process.env.DB_PASSWORD || '1234'
DB_HOST= process.env.DB_HOST || 'localhost'
DB_PORT= process.env.DB_PORT || 3306
PORT =  process.env.PORT 

module.exports = { DB_HOST, DB_PASSWORD, DB_USER, DB_PORT, PORT}