module.exports = {
  "development": {
    "dialect": "postgres",
    "host": "127.0.0.1",
    "port": 5456,
    "username": "root",
    "password": "root",
    "database": "nestjsx_crud_sequelize",
    "logging": false,
    "migrationsPath": `${__dirname}/migrations`
  }
}
