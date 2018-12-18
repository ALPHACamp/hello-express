const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 3000

// Import models defined in another file
const Item = require('./models/item')

// Connect mongodb
mongoose.connect('<MongoDB URI>', { useNewUrlParser: true }, (err, db) => {
  if (err) console.log(`Error`, err)
  console.log(`Connected to MongoDB`)
})

// Initialize Express settings
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: true}))

// Define the root '/' to show hello world
app.get('/', (req, res) => {
  res.render('index')
})

// Define the endpoint '/items' to show all items
app.get('/items', (req, res) => {
  Item.find((err, items) => {
    if (err) return console.error(err)
    res.render('items', {items: items})
  })
})

// Create a new item
app.post('/create', (req, res) => {
  const item = Item({
    item: req.body.item
  })
  item.save((err, todo) => {
    if (err) return console.error(err)
    res.redirect('/items')
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
