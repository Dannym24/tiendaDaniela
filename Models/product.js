
const knex = require('../DB');

class User {
  static create(product) {
    return knex('product').insert(product).returning('*');
  }

 
}

module.exports = product;