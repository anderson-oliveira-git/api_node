require('dotenv').config({
    path: __dirname + '/./../../../.env'
});

module.exports = {
  development: {
    username : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
    host     : process.env.DB_HOST,
    port     : process.env.DB_PORT,
    dialect  : process.env.DB_DIALECT,
    logging  : process.env.DB_LOGGING,
    define   : {
        timestamps : process.env.DB_TIMESTAMPS
    },
    timezone : process.env.DB_TIMEZONE
  }
}
