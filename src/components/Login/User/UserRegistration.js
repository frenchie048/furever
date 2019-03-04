import React, { Component } from 'react';
import '../registration.css';

export default class UserRegistration extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            picture: '',
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div className='registration-container'>
                <div className='user-registration'>
                    <h2>User Registration</h2>
                    <br></br>
                    <div>
                        <h5>Email Address:</h5>
                        <input></input>
                        <h5>First Name:</h5>
                        <input></input>
                        <h5>Last Name:</h5>
                        <input></input>
                        <h5>Profile Photo:</h5>
                        <input></input>
                        <h5>Username:</h5>
                        <input></input>
                        <h5>Password:</h5>
                        <input></input>
                        <br></br>
                        <button>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}