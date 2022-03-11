const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes/route'))

app.listen(process.env.PORT || 3000, () =>
    // body...
    console.log("Server is running on the port 3000"));

