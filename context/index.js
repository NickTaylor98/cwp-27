module.exports = (Sequelize, config) => {
    const options = {
        host: config.host,
        dialect: config.dialect,
        logging: false,
        define: {
            timestamps: true,
            paranoid: true,
            defaultScope: {
                where: { deletedAt: { $eq: null } }
            }
        }
    }
    const sequelize = new Sequelize(config.db, config.user, config.password, options);

    const users = require('../models/users')(Sequelize, sequelize);
    const likes = require('../models/likes')(Sequelize, sequelize);
    const tweets = require('../models/tweets')(Sequelize, sequelize);

    tweets.belongsToMany(users, { as: 'Likes', through: Like, otherKey: 'authorId', foreignKey: 'tweetId' });
    users.hasMany(tweets, { foreignKey: 'authorId' });
    tweets.belongsTo(users, { foreignKey: 'authorId', as: 'author' });

    return {
        users,
        likes,
        tweets,
        Sequelize,
        sequelize
    };
};