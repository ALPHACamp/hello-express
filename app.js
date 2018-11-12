const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  let name = req.query.name || 'World'
  res.render('index', {name : name})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))