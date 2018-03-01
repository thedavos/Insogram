import page from "page"
import empty from 'empty-element'
import template from './template'

page('/', function (ctx, next) {
    $('title').html('Insogram')

    const main = document.getElementById('main-container')

    let pictures = [
        {
            user: {
                username: 'vados',
                avatar: 'https://scontent.flim5-2.fna.fbcdn.net/v/t1.0-9/10632679_1080491731972501_6601894749010616168_n.jpg?_nc_eui2=v1%3AAeFyiNFniXY4_aQPrsgrKtkrURh279cKhYXRDLJLvg2LoXWiV7YCwPIv88nNFgZoZMdxFonV2hZvPeCrj2xRkoxUWvR5KXOpEg5R1btJEmYnmQ&oh=a6f246a86117c61fd98137fe94140e64&oe=5B08E6CB'
            },
            url: 'office.jpg',
            likes: 10,
            liked: true
        },
        {
            user: {
                username: 'domi',
                avatar: 'https://scontent.flim5-2.fna.fbcdn.net/v/t1.0-9/10632679_1080491731972501_6601894749010616168_n.jpg?_nc_eui2=v1%3AAeFyiNFniXY4_aQPrsgrKtkrURh279cKhYXRDLJLvg2LoXWiV7YCwPIv88nNFgZoZMdxFonV2hZvPeCrj2xRkoxUWvR5KXOpEg5R1btJEmYnmQ&oh=a6f246a86117c61fd98137fe94140e64&oe=5B08E6CB'
            },
            url: 'office.jpg',
            likes: 32,
            liked: true
        }
    ]

    empty(main).appendChild(template(pictures));
})