import React, { Component } from 'react';
import axios from 'axios';
import '../registration.css';

export default class UserRegistration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            picture: '',
            username: '',
            password: ''
        }
        this.registerNewUser = this.registerNewUser.bind(this);
    }

    registerNewUser() {
        const { email, first_name, last_name, picture, username, password } = this.state;

        let newUser = {
            email,
            first_name,
            last_name,
            picture,
            username,
            password
        }

        axios.post('/api/users', newUser).then(response => {
            console.log(response.data)
            window.location = `/#/dashboard`;
            // this.props.getUser(response.data)
        })
    }

    render() {
        const { email, first_name, last_name, picture, username, password } = this.state;
        console.log(this.state);
        return (
            <div className='registration-container'>
                <div className='user-registration'>
                    <h1>User Registration</h1>
                    <br></br>
                    <div className='registration-input'>
                        <h5>Email Address:</h5>
                        <input value={email} onChange={(e) => this.setState({ email: e.target.value })} />

                        <h5>First Name:</h5>
                        <input value={first_name} onChange={(e) => this.setState({ first_name: e.target.value })} />

                        <h5>Last Name:</h5>
                        <input value={last_name} onChange={(e) => this.setState({ last_name: e.target.value })} />

                        <h5>Profile Photo:</h5>
                        <input value={picture} onChange={(e) => this.setState({ picture: e.target.value })} />

                        <h5>Username:</h5>
                        <input value={username} onChange={(e) => this.setState({ username: e.target.value })} />

                        <h5>Password:</h5>
                        <input value={password} onChange={(e) => this.setState({ password: e.target.value })} />
                        <br />
                        <button onClick={this.registerNewUser}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}