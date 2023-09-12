
import Logo from './assets/logo.png';
import { Signin } from './api/spotify';
import { useState } from 'react';

export const Login = () => {
    const [ token, setToken ] = useState("");
    const [ hash, setHash ] = useState("");

    return (
        <div className="login--container">
            <div className='login-central--container'>
                <header className="login-header--container">
                    <img id='login-logo' src={Logo} />
                </header>
                <div className="login-buttons--container">
                    <div className='login-button' onClick={ () => Signin() }>Login with Spotify</div>
                </div>
            </div>
        </div>
    )
}
