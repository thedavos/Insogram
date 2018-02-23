import page from "page"
import empty from "empty-element"
import template from './template'

page('/signin', function (ctx, next) {
    $('title').html('Insogram - Signin')
    
    const main = document.getElementById('main-container')
    empty(main).appendChild(template)
})
