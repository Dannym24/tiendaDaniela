
const knex = require('../DB');

class User {
  static create(sales) {
    return knex('sales').insert(sales).returning('*');
  }

 
}

module.exports = sales;