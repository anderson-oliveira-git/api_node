require('dotenv').config({
    path: __dirname + '/./../../../.env'
});

module.exports = {
  development: {
    username : process.env.DB_USERNAME || 'root',
    password : process.env.DB_PASSWORD || '',
    database : process.env.DB_DATABASE || 'development_db',
    host     : process.env.DB_HOST || '127.0.0.1',
    port     : process.env.DB_PORT || 3306,
    dialect  : process.env.DB_DIALECT || 'mysql',
    define   : {
        timestamps : process.env.DB_TIMESTAMPS || true
    },
    timezone : process.env.DB_TIMEZONE || '-03:00'
  }
}
