module.exports = (Sequelize, sequelize) => {
    return sequelize.define('Like', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, },
        tweetId: { type: Sequelize.INTEGER },
        authorId: { type: Sequelize.INTEGER }
    });
};