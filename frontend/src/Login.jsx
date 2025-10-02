import './css/Login.css'
import loginImg from './assets/loginImg.png'

function Login(){

    return(
        <>
            <div className='login-container'>
                <div className='login-deco'>
                    <img src={loginImg} alt='decoration_image' style={{width: '100%', height: 'auto'}}></img>
                </div>
                <div class="login-form-items">
                   <form method="POST">
                            <span className="login-label">LOGIN</span>
                            
                            <div className="text-input-container">
                                <label className="form-label" for="username">USERNAME</label>
                                <input type="text" name="username" className="text-style" id="username" required />
                            </div>
                            
                            <div className="text-input-container">
                                <label className="form-label" for="password">PASSWORD</label>
                                <input type="password" name="password" className="text-style" id="password" required />
                            </div>
                            
                            <button className="login-btn" type="submit">SIGN IN</button>
                 </form>

                    <span className="form-label">Don't have an account? </span>
                    
                    <a className="signup" href="signup.html">Sign Up</a>
                </div>
            </div>
        </>
    )
}

export default Login