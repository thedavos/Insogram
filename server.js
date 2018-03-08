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

inso.get('/api/pictures', function (req, res) {
    var pictures = [
        {
            user: {
                username: 'vados',
                avatar: 'https://scontent.flim5-2.fna.fbcdn.net/v/t1.0-9/10632679_1080491731972501_6601894749010616168_n.jpg?_nc_eui2=v1%3AAeFyiNFniXY4_aQPrsgrKtkrURh279cKhYXRDLJLvg2LoXWiV7YCwPIv88nNFgZoZMdxFonV2hZvPeCrj2xRkoxUWvR5KXOpEg5R1btJEmYnmQ&oh=a6f246a86117c61fd98137fe94140e64&oe=5B08E6CB'
            },
            url: 'office.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date().getTime()
        },
        {
            user: {
                username: 'domi',
                avatar: 'https://scontent.flim5-2.fna.fbcdn.net/v/t1.0-9/10632679_1080491731972501_6601894749010616168_n.jpg?_nc_eui2=v1%3AAeFyiNFniXY4_aQPrsgrKtkrURh279cKhYXRDLJLvg2LoXWiV7YCwPIv88nNFgZoZMdxFonV2hZvPeCrj2xRkoxUWvR5KXOpEg5R1btJEmYnmQ&oh=a6f246a86117c61fd98137fe94140e64&oe=5B08E6CB'
            },
            url: 'office.jpg',
            likes: 1,
            liked: false,
            createdAt: new Date().setDate(new Date().getDate() - 10)
        }
    ]

    setTimeout(function () {
        res.send(pictures)
    }, 2000) 
})

inso.listen(8000, function (err) {
    if(err) return console.log('Hubo un error'), process.exit(1)

    console.log('Insogram escuchando en el puerto 8000')
})