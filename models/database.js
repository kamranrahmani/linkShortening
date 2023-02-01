module.exports = {
    host: "SG-webdev-projects-7168-mysql-master.servers.mongodirector.com",
    db: "link_shortner",
    username: "root",
    password: "Microstrip@911",
    dialect: "mysql",

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  