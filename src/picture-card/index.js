import yo from 'yo-yo'

module.exports = function (pic) {
    return yo`<div class="card">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${pic.url}">
        </div>
        <div class="card-content">
            <a href="/user/${pic.user.username}" class="card-title">
                <img src="${pic.user.avatar}" class="avatar">
                <span class="username"> ${pic.user.username}</span>
                <small class="right time">Hace 1 día</small>
                <p>
                    <a class="left" href="#"><i class="far fa-heart"></i></a>
                    <span class="left likes">${pic.likes} me gusta</span>    
                </p>
            </a>
        </div>
    </div>`
} 
