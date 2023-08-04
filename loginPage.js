const loginSections=document.querySelector('.loginSection');

function createLoginSection(){
    let el=`<div class="loginMain">
                <div class="loginContainer">
                    <div class="loginContent">
                        <h3>Welcome to Fooder</h3>
                        <hr>
                        <p>Sign in to continue.</p>
                    </div>
                    <div class="formContainer">
                        <div class="social-account">
                            <div class="close"><i class="fa-solid fa-xmark"></i></div>
                            <button><img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/20px-Facebook_f_logo_%282021%29.svg.png" alt=""> <p>Continue with Facebook</p></button>
                            <button><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/20px-Google_%22G%22_Logo.svg.png" alt=""> <p>Continue with Google</p></button>
                            <button><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/20px-Apple_logo_black.svg.png" alt=""> <p>Continue with Apple</p></button>

                        </div>
                        <div class="divide">
                            <hr>&nbsp; or &nbsp;<hr>
                        </div>
                        <div>
                            <form action="">
                                <input type="email" placeholder="Email address" required><br>
                                <input type="password" placeholder="Password" required><br>
                                <div class="checkbox"><input type="checkbox" name="" id="" required>Keep me signed in</div>
                                <button type="submit">Sign in</button>
                                <a href="">Forget password?</a>
                            </form>
                        </div>
                        <div>
                            Not a member yet?  <a href="#">  &nbsp; Sign Up.</a>
                        </div>
                    </div>
                </div>
            </div>`
    loginSections.innerHTML=el;
}
createLoginSection();