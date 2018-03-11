import page from 'page'
import empty from 'empty-element'
import template from './template'
import request from 'superagent'
import header from '../header'
import axios from 'axios'

page('/', header, loadPicturesAsync, function (ctx, next) {
    $('title').html('Insogram')

    const main = document.getElementById('main-container')

    empty(main).appendChild(template(ctx.pictures));
})

function loadPictures(ctx, next) {
    request
        .get('/api/pictures')
        .end(function (err, res) {
            if (err) return console.log(err);

            ctx.pictures = res.body
            next()
        })
}
function loadPicturesAxios(ctx, next) {
    axios
        .get('/api/pictures')
        .then(function (res) {
            ctx.pictures = res.data
            next()
        })
        .catch(function (err) { 
            console.log(err)
         })
}
function loadPicturesFetch(ctx, next) {
    fetch('/api/pictures')
        .then(function (res) {
            return res.json()
        })
        .then(function (pictures) { 
            ctx.pictures = pictures
            next()
         })
         .catch(function (err) { 
             console.log(err)
          })
}

async function loadPicturesAsync(ctx, next) {
    try {
        var pictures = await fetch('/api/pictures').then(res => res.json())
        ctx.pictures = pictures
        next()
    } catch (e) {
        return console.log(e)
    }
}