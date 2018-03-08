import yo from 'yo-yo'
import translate from '../translate'

module.exports = function layout(content) {
  return yo`<div class="content">
      ${content}
    </div>`;
}
