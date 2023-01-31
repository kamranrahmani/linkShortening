module.exports = {
    host: "localhost",
    db: "link_shortner",
    username: "root",
    password: "kamran911",
    dialect: "mysql",
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  