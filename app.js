const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

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