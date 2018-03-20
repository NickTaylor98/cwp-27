module.exports = (Sequelize, sequelize) => {
    return sequelize.define('Tweet', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, },
        publishedOn: { type: Sequelize.STRING },
        message: { type: Sequelize.STRING },
        authorId : {type: Sequelize.INTEGER}
    });
};