import './Login.scss';
// import { Link } from 'react-router-dom';
import logo from './logo.png';
import welcomeBack from './welcomeback.svg';

const Login = () => {
    return (
        <div className='main-login'>
            <div className="login-contain">
                <div className="left-side">

                    <div className="img-class">
                        <img src={logo} id="img-id" alt="" />
                    </div>
                 
                    <form >
                        <label htmlFor="emil1">Username:</label>
                            <input placeholder="Enter your email..." 
                                type="email" 
                                // value={emailval} 
                                // onChange={(e)=>{(e.target.value)}} 
                                id="emil1"
                            />

                        <label htmlFor="pwd1">Password:</label>
                            <input placeholder="Enter password" 
                                type="password" 
                                autoComplete="false"
                                // value={passval} 
                                // onChange={(e)=>{(e.target.value)}}
                                id="pwd1"
                            />

                        <button type="submit" id="sub_butt">Login</button>
                    </form>

                </div>
                
                <div className="right-side">
                    <div className="welcomeNote">
                        <h3>Welcome Back!</h3>
                    </div>

                    <div className="welcomeImg">
                        <img src={welcomeBack} id='wel-img-id' alt=""  />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;