
const knex = require('../DB');

class User {
  static create(user) {
    return knex('users').insert(user).returning('*');
  }

 
}

module.exports = User;