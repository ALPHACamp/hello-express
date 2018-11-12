const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const app = express()
const port = 3000

mongoose.connect('mongodb://localhost/l2-express-tutoial', { useNewUrlParser: true }, (err, db) => {
  if (err) console.log(`Error`, err)
  console.log(`Connected to MongoDB`)
})

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  let name = req.query.name || 'World'
  res.render('index', {name : name})
})

app.post('/create', (req, res) => {
  let item = req.body.item
  res.send(item)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))