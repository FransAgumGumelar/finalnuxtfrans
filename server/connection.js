// const knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host: process.env.DB_HOST,
//     database: process.env.DB_DATABASE,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//   },
// });


// SIMTEST
const knex = require('knex')({
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
  });

  



module.exports = knex;

