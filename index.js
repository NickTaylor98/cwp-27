const Sequelize = require('sequelize');
const config = require('./config.json');

const db = require('./context')(Sequelize, config);
const server = require('./server')(db, config);

(async function() {
    await db.sequelize.sync();
    const port =3030;
    server.listen(port, () => console.log(`Server is running on port ${port}`));
})();
 