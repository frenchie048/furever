import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {

    render() {
        return (
            <div className='login-container'>
                <h1>
                    I am:
                </h1>
                <div className='rescue-login'>
                    <button>A Rescue/Shelter</button>
                </div>

                <div className='user-login'>
                    <button>Looking for a pet</button>
                </div>
            </div>
        )
    }
}