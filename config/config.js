require("dotenv").config()
module.exports = {
  development: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "sql12598889",
    host: "sql12.freemysqlhosting.net",
    dialect: "mysql"
  },
  test: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "sql12598889",
    host: "sql12.freemysqlhosting.net",
    dialect: "mysql"
  },
  production: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "sql12598889",
    host: "sql12.freemysqlhosting.net",
    dialect: "mysql"
  }
}

