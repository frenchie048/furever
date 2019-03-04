import React, { Component } from 'react';
// import './login.css';

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div className='login-container'>
                <div className='rescue-login'>
                    <h1>User Login</h1>
                    <br></br>

                    <div className='login-input'>
                        <h5>Username:</h5>
                        <input></input>
                        <h5>Password:</h5>
                        <input></input>
                        <br></br>
                        <button> Login</button>
                    </div>

                    <h4>Don't have an account? Create one
                        {/* <Link to='/userregistration'> */}
                        HERE
                        {/* </Link> */}
                    </h4>
                </div>
            </div>
        )
    }
}