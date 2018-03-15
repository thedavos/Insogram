var express = require('express')
var multer = require('multer')
var ext = require('file-extension')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture')

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
    setTimeout(() => res.send(pictures), 2000)
})

inso.post('/api/pictures', function (req, res){
    upload(req, res, function (err) {
        if (err) {
            return res.send(500, "Error uploading file")
        }
        res.send('File uploaded')
    })
})

inso.get('/:username', function(req, res) {
    res.render('index')
})

inso.get('/:username/:id', function (req, res) {
    res.render('index')
})

inso.get('/api/user/:username', function (req, res) {
    const user = {
        username: 'vados',
        avatar: 'https://pbs.twimg.com/profile_images/716293413759377408/2W8UoVU1_400x400.jpg',
        pictures: [
            {
                id: 1,
                src: 'https://instagram.flim5-2.fna.fbcdn.net/vp/3188a041474e959413d61ed13a135f1f/5B3F442D/t51.2885-15/s640x640/sh0.08/e35/27574887_184136375650928_7493125915992391680_n.jpg',
                likes: 1
            },
            {
                id: 2,
                src: 'https://instagram.flim5-2.fna.fbcdn.net/vp/564aa91999efc977e4fc9223dcebb34a/5B27DB81/t51.2885-15/s640x640/sh0.08/e35/28156796_927363184097186_8767730196351549440_n.jpg',
                likes: 3
            },
            {
                id: 3,
                src: 'https://instagram.flim5-2.fna.fbcdn.net/vp/b763138c8d13fbbe9973e4c5fd701e1d/5B2DCD59/t51.2885-15/e15/26066458_1989498067977000_1640645960537210880_n.jpg',
                likes: 5
            }
        ]
    }
    res.send(user)
})

inso.listen(8000, function (err) {
    if(err) return console.log('Hubo un error'), process.exit(1)

    console.log('Insogram escuchando en el puerto 8000')
})