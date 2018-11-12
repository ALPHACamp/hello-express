## step-by-step tutorial

```
$ mkdir L2-express-tutorial
$ cd L2-express-tutorial
$ git init
$ npm init

# coding ...

$ git add .
$ git commit -m 'first commit: node project init'

$ npm install --save express

# coding ...

$ npm start
$ git add .
$ git commit -m 'first express app init: show hello world in the browser'

$ npm install --save express-handlebars
$ mkdir views
$ mkdir views/layouts

# coding ...

$ npm start
$ git add .
$ git commit -m 'attach view to express'

# coding ...

$ npm start
$ git add .
$ git commit -m 'update view to get variable from backend'

# coding ...

$ npm start
$ git add .
$ git commit -m 'update backend to get variable from req.query'

# coding ...

$ npm start
$ git add .
$ git commit -m 'update "post /create" route to get variable from req.body'

$ npm install mongoose --save

# coding ...

$ npm start
$ git add .
$ git commit -m 'connect to mongo using mongoose'

$ mkdir models

# coding ...

$ npm start
$ git add .
$ git commit -m 'attach first model: Item'

# coding ...

$ npm start
$ git add .
$ git commit -m 'update "get /" and "post /create" route to read and create data'
```
