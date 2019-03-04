import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../login.css';

export default class UserLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.loginUser = this.loginUser.bind(this);
    }

    loginUser() {
        const { username, password } = this.state;

        let existingUser = {
            username,
            password
        }

        axios.get(`/api/users/${username}`, existingUser).then(response => {
            console.log(response.data)
            window.location = `/#/dashboard`;
        })
    }

    render() {
        const { username, password } = this.state;
        console.log(this.state);
        return (
            <div className='login-container'>
                <div className='user-login'>
                    <h1>User Login</h1>
                    <br></br>

                    <div className='login-input'>
                        <h5>Username:</h5>
                        <input value={username} onChange={(e) => this.setState({ username: e.target.value })} />

                        <h5>Password:</h5>
                        <input value={password} onChange={(e) => this.setState({ password: e.target.value })} />
                        <br />
                        <button onClick={this.loginUser}>
                            Login
                        </button>
                    </div>

                    <h4>Don't have an account? Create one <Link to='/userregistration'>HERE</Link></h4>
                </div>
            </div>
        )
    }
}