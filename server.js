var express = require('express')

var inso = express()

inso.set('view engine', 'pug')

inso.use(express.static(__dirname + '/public'))

inso.get('/', function(req, res) {
    res.render('index')
})
inso.get('/signup', function(req, res) {
    res.render('index')
})
inso.get('/signin', function(req, res) {
    res.render('index')
})

inso.listen(8000, function (err) {
    if(err) return console.log('Hubo un error'), process.exit(1)

    console.log('Insogram escuchando en el puerto 8000')
})