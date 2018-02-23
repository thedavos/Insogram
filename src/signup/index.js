import page from "page"
import empty from "empty-element"
import template from './template'

page('/signup', function (ctx, next) {
    $('title').html('Insogram - Signup')
    
    const main = document.getElementById('main-container')
    empty(main).appendChild(template)
})
