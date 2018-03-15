import page from "page"
import header from "../header"
import empty from "empty-element"
import template from './template'

page('/:username' , loadUser, header, function (ctx, next) {
    const main = document.getElementById('main-container')
    $('title').html(`Insogram - ${ctx.params.username}`)
    empty(main).appendChild(template(ctx.user))
    $('.modal-trigger').leanModal();
})

page('/:username:id', loadUser, header, function (ctx, next) {
    const main = document.getElementById('main-container')
    $('title').html(`Insogram - ${ctx.params.username}`)
    empty(main).appendChild(template(ctx.user))
    $('.modal').modal({
        complete: () => {
            page(`/${ctx.params.username}`)
        }
    })
    $(`#modal${ctx.params.id}`).modal('open')
})

async function loadUser (ctx, next) {
    try {
        ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json())
        next()
    } catch (err) {
        console.log(err)
    }
}