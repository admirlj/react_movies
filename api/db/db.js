const knex = require("knex")({
  client: "postgres",
  connection: {
    database: "postgres",
    user: "postgres",
    password: "root",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
});

module.exports = knex;
