const express = require('express');
const bodyParser = require('body-parser');


module.exports = (db, config) => {
    const app = express();
    app.use(bodyParser());
    return app;
};
