import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import {auth} from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const signIn = e => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=> {
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
                    alt="logo"
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="text" />
                    <h5>Password</h5>
                    <input 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password" />

                    <button className="login__signInButton" onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By sign in you agree to the Amazon conditions of use and sale. Please see the privacy policy Notice, our cookies and
                </p>

                <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login
