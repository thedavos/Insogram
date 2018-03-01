import yo from 'yo-yo'
import layout from '../layout'
import picture from '../picture-card'

module.exports = function (pictures) {
  const el = yo`<div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
        ${pictures.map(function (pic) {
          return picture(pic)
        })}
      </div>
    </div>
  </div>`

  return layout(el);
}

