import React from 'react'
import './hash.css'

function hash() {
    return (
    <>

            <div class="container">
                <div class="login-container">
                    <input id="item-1" type="radio" name="item" class="sign-in" checked/><label for="item-1" class="item">Sign In</label>
                        <input id="item-2" type="radio" name="item" class="sign-up"/><label for="item-2" class="item">Sign Up</label>
                            <div class="login-form">
                                <div class="sign-in-htm">
                                    <div class="group">
                                        <input placeholder="Username" id="user" type="text" class="input" />
                                    </div>
                                    <div class="group">
                                        <input placeholder="Password" id="pass" type="password" class="input" data-type="password" />
                                    </div>

                                    <div class="group">
                                        <input type="submit" class="button" value="Sign In" />
                                    </div>
                                    <div class="hr"></div>
                                    <div class="footer">
                                        <a href="#forgot">Forgot Password?</a>
                                    </div>
                                </div>
                                <div class="sign-up-htm">
                                    <div class="group">
                                        <input placeholder="Username" id="user" type="text" class="input" />
                                    </div>

                                    <div class="group">
                                        <input placeholder="Email adress" id="pass" type="text" class="input" />
                                    </div>

                                    <div class="group">
                                        <input placeholder="Password" id="pass" type="password" class="input" data-type="password" />
                                    </div>
                                    <div class="group">
                                        <input placeholder="Repeat password" id="pass" type="password" class="input" data-type="password" />
                                    </div>

                                    <div class="group">
                                        <input type="submit" class="button" value="Sign Up" />
                                    </div>
                                    <div class="hr"></div>
                                    <div class="footer">
                                        <label for="item-1">Already have an account?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </>
                    )
}

export default hash