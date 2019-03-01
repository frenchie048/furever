import React, { Component } from 'react';
// import './login.css';

export default class Login extends Component {

    render() {
        return (
            <div className='login-container'>
                <div className='rescue-login'>
                    <h2>Rescue Login</h2>
                    <div>
                        <h5>Username:</h5>
                        <input></input>
                        <h5>Password:</h5>
                        <input></input>
                        <button>Login</button>
                    </div>
                    <h4>Don't have an account? Create one HERE</h4>
                </div>

                <div className='user-login'>
                    <h2>User Login</h2>
                    <div>
                        <h5>Username:</h5>
                        <input></input>
                        <h5>Password:</h5>
                        <input></input>
                        <button>Login</button>
                    </div>
                    <h4>Don't have an account? Create one HERE</h4>
                </div>
            </div>
        )
    }
}