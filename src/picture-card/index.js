import yo from 'yo-yo'
import translate from '../translate'

module.exports = function pictureCard(pic) {
    var el;
    function render(pics) {
        return  yo`<div class="card ${pics.liked ? 'liked' : ''}">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="${pics.url}">
                </div>
                <div class="card-content">
                    <a href="/${pics.user.username}" class="card-title">
                        <img src="${pics.user.avatar}" class="avatar">
                        <span class="username"> ${pics.user.username}</span>
                    </a>
                    <small class="right time">${translate.date.format(pics.createdAt)}</small>
                    <p>
                        <a class="left" href="#" onclick=${like.bind(null, true)}><i class="far fa-heart void"></i></a>
                        <a class="left" href="#" onclick=${like.bind(null, false)}><i class="fas fa-heart full"></i></a>
                        <span class="left likes">${translate.message('likes', { likes: pics.likes })}</span>    
                    </p>
                </div>
            </div>`        
    }

    function like(liked) {
        pic.liked = liked
        pic.likes += liked ? 1 : -1
        var newEl = render(pic)
        yo.update(el, newEl)
        return false
    }
    el = render(pic)
    return el
} 

