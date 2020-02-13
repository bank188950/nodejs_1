const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path') // เรียกใช้งาน path module

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.render('index', { title: 'Express' }))

app.get('/show', (req, res) => res.send("Show Content"))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))