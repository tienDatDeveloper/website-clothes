const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars')
const path = require('path')
const loginJS = require('login-express');
const methodOverride = require('method-override')
const cors = require('cors')
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken')
let ejs = require('ejs');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const app = express()
const port = 4000
const route = require('./routes')
const db = require('./config/db')
db.connect();

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, "public")));
app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars');
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'resources/views'))
route(app);
app.listen(port, () =>
  console.log(`App listening on port http://localhost:${port}`)
)