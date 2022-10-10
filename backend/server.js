const dotenv = require("dotenv");
const express = require("express");
const cors = require('cors');
const dbConnection = require('./database/connection')

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/user', require('./routes/user.route'));

dbConnection();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

