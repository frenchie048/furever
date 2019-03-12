import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../../ducks/reducer';
import backgroundVid3 from '../../../images/Dog-20608.mp4';
import logo from '../../../images/logo_transparent_cropped.png';
import axios from 'axios';
import '../registration.css';

class UserRegistration extends Component {
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
            // this.props.updateUser(newUser)
            this.props.setUser(response.data)
            console.log(response.data)
            window.location = `/#/dashboard`;
        })
    }

    // validateUsername() {
    //     const {username} = this.state;

    //     if (username)
    // }

    render() {
        const { email, first_name, last_name, picture, username, password } = this.state;
        console.log(this.state);
        return (
            <div className='registration-container'>
                <video
                    className='background-video' autoPlay loop muted playsInline>
                    <source src={backgroundVid3} type='video/mp4' />
                    <source src={backgroundVid3} type='video/ogg' />
                </video>
                <div className='user-registration'>
                    <img src={logo} alt='logo' />
                    <br />
                    <br />
                    <h1>User Registration</h1>
                    <br></br>
                    <div className='registration-input'>

                        <input value={email} type='email' placeholder='Email Address' onChange={(e) => this.setState({ email: e.target.value })} />

                        <input value={first_name} placeholder='First Name' onChange={(e) => this.setState({ first_name: e.target.value })} />

                        <input value={last_name} placeholder='Last Name' onChange={(e) => this.setState({ last_name: e.target.value })} />

                        <input value={picture} placeholder='Profile Image URL' onChange={(e) => this.setState({ picture: e.target.value })} />

                        <input value={username} placeholder='Username' onChange={(e) => this.setState({ username: e.target.value })} />

                        <input value={password} type='password' placeholder='Password' onChange={(e) => this.setState({ password: e.target.value })} />
                        <br />

                        <button onClick={this.registerNewUser}>
                            Register
                        </button>

                        <h4>Already have an account? Login
                        <Link to='/userlogin' className='account-link'> here</Link>
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { setUser })(UserRegistration);