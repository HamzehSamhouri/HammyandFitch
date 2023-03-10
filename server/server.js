const express = require("express");

const app = express();
const cors = require('cors');

const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Routes = require('./routes/product.routes')
Routes(app)

app.listen(port, () => console.log(`Listening on port: ${port}`))