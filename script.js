const express = require('express');
const { route } = require('./routes');
const app = express();
const PORT = 3000;
const cors=require("cors");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(route);

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`App is listening on port ${PORT} `);
    } else {
        console.log('Error, server can\'t start', error);
    }
});