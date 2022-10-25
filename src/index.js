const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars')
const path = require('path')
const methodOverride = require('method-override')
const app = express()
const port = 4000
const route = require('./routes')

const db = require('./config/db')

db.connect();

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, "public")));
app.engine('handlebars', hbs.engine())

app.set('view engine','handlebars');

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(methodOverride('_method'));
app.use(express.json());

app.set('views',path.join(__dirname, 'resources/views'))


route(app);
app.listen(port, () => 
  console.log(`App listening on port http://localhost:${port}`)
)