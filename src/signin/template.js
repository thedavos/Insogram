import yo from "yo-yo"
import landing from '../landing'

var signInForm =  yo`<div class="col s12 m7">
                            <div class="row">
                                <div class="signup-box">
                                    <h1 class="title">Insogram</h1>
                                    <form class="signup-form">
                                        <h2>Regístrate para ver fotos de tus amigos</h2>
                                        <div class="section">
                                            <a href="#" class="btn btn-fb hide-on-small-only">Iniciar Sesión con Facebook</a>
                                            <a href="#" class="btn btn-fb hide-on-med-and-up"><i class="fab fa-facebook-square"></i>Iniciar Sesión</a>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="section">
                                            <input type="text" name="username" placeholder="Nombre de Usuario" id="username">
                                            <input type="password" name="password"  placeholder="Contraseña" id="password">
                                            <button class="btn waves-effect waves-light btn-signup" type="submit">Inicia Sesión</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="login-box">
                                    ¿No Tienes una cuenta? <a href="/signup">Regístrate</a>
                                </div>
                            </div>
                        </div>`

module.exports = landing(signInForm)