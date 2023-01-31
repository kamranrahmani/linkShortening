
module.exports = (sequelize, DataTypes)=>{
    const links = sequelize.define('links',{
        shortened:{
            type:DataTypes.STRING,
            primaryKey: true
        },
        original:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {timestamps: false})
    return links
}