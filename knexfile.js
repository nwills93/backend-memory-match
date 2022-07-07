// Update with your config settings.
require("dotenv").config()
const path = require("path")
const {DATABASE_URL} = process.env
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: DATABASE_URL,
    pool: {min: 0, max: 5},
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations")
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds")
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: DATABASE_URL,
    pool: {
      min: 0,
      max: 5
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations")
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds")
    }
  }

};
