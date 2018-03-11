import yo from 'yo-yo'
import layout from '../layout'
import picture from '../picture-card'
var translate = require('../translate').message
import request from 'superagent'

module.exports = function (pictures) {
  const el = yo`<div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2 center align">
        <form enctype="multipart/form-data" class="form-upload" id="formUpload" onsubmit=${onsubmit}>
          <div id="fileName" class="fileUpload btn btn-flat cyan">
            <span>
              <i class="fas fa-camera camera"></i>${translate('upload-picture')}
            </span>
            <input name="picture" id="file" type="file" class="upload" onchange=${onchange}>
          </div>
          <button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate('upload')}</button>
          <button id="btnCancel" type="button" class="btn btn-flat red hide" onclick=${cancel}><i class="fas fa-times"></i></button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
        ${pictures.map(function (pic) {
          return picture(pic)
        })}
      </div>
    </div>
  </div>`
  
  function toggleButtons() {
    document.getElementById('fileName').classList.toggle('hide')
    document.getElementById('btnUpload').classList.toggle('hide')
    document.getElementById('btnCancel').classList.toggle('hide')

  }

  function cancel() {
    toggleButtons()
    document.getElementById('formUpload').reset()
  }

  function onchange() {
    toggleButtons()
  }

  function onsubmit(ev) {
    ev.preventDefault()

    const data = new FormData(this)
    request
      .post('/api/pictures')
      .send(data)
      .end(function (err, res) {
        console.log(arguments)
      })
  }

  return layout(el);
}