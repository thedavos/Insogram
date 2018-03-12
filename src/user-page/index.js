import page from "page"
import header from "../header"
import empty from "empty-element"
import template from './template'

page('/:username' , loadUser, header, function (ctx, next) {
    $('title').html(`Insogram - ${ctx.params.username}`)

    const main = document.getElementById('main-container')
    empty(main).appendChild(template(ctx.user))
})

async function loadUser (ctx, next) {
    try {
        ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json())
        next()
    } catch (err) {
        console.log(err)
    }
}