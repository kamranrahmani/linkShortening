module.exports = {
    host: process.env.DATABASE_URL,
    db: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dialect: "mysql"
  };
  