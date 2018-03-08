import yo from "yo-yo"
import landing from '../landing'
import translate from '../translate'

var signUpForm =  yo`<div class="col s12 m7">
                            <div class="row">
                                <div class="signup-box">
                                    <h1 class="title">Insogram</h1>
                                    <form class="signup-form">
                                        <h2>${translate.message('signup.subheading')}</h2>
                                        <div class="section">
                                            <a href="#" class="btn btn-fb hide-on-small-only">${translate.message('signup.facebook')}</a>
                                            <a href="#" class="btn btn-fb hide-on-med-and-up"><i class="fab fa-facebook-square" aria-hidden="true"></i>${translate.message('signup.text')}</a>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="section">
                                            <input type="email" name="email" placeholder="${translate.message('email')}" id="email">
                                            <input type="text" name="name" placeholder="${translate.message('fullname')}" id="name">
                                            <input type="text" name="username" placeholder="${translate.message('username')}" id="username">
                                            <input type="password" name="password"  placeholder="${translate.message('password')}" id="password">
                                            <button class="btn waves-effect waves-light btn-signup" type="submit">${translate.message('signup.call-to-action')}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="login-box">
                                    ${translate.message('signup.have-account')} <a href="/signin">${translate.message('signin')}</a>
                                </div>
                            </div>
                        </div>`

module.exports = landing(signUpForm)