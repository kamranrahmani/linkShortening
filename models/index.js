const {Sequelize, DataTypes} = require('sequelize');
const config = require('./database');
const sequelize = new Sequelize(config.db,config.username,config.password,{
    host:config.host,
    dialect:config.dialect,
    dialectOptions:{
        connectTimeout: 60000
    }
})

sequelize.authenticate().then(()=>{
    console.log('connected to database successfully!');
}).catch(err=>{
    console.log(err);
})

const db = {}

const links = require('./links')(sequelize,DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.links = links;

sequelize.sync({force:false}).
    then(()=>{
        console.log('re-sync done');
    }).catch(err=>{
        console.log('failed to sync');
    })

module.exports = db;



