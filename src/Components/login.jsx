import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

    let [email,setEmail] =useState()
    let [password,setPassword] =useState()

    let handleSubmit =() =>{

    }

    return ( 
        <div className="login">
            <h1>Login Page</h1>

            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="email my-4">
                        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} className="form-control w-25 " placeholder="email address" name='email' />
                    </div>

                    <div className="password">
                        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} className="form-control w-25" placeholder="enter password" name='password' />
                    </div>

                    <div className="login_button">
                        <button className="btn btn-primary">Login</button>
                    </div>

                    <div className="signup_button">
                        <p>Are you a new user ?</p>
                        <Link to='/signup' className="btn btn-outline-primary">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;