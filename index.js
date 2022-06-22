require('dotenv').config()
const express = require(`express`)
const { engine } = require('express/lib/application')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (_req, res) => {
    res.render(`Home`)
})

app.get('*', (_req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)