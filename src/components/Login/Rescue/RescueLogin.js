import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setRescue } from '../../../ducks/reducer';
import backgroundVid2 from '../../../images/Cat-9328.mp4';
import logo from '../../../images/logo_transparent_cropped.png';
import axios from 'axios';
import '../login.css';

class RescueLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.loginRescue = this.loginRescue.bind(this);
    }

    loginRescue() {
        const { username, password } = this.state;

        let existingRescue = {
            username,
            password
        }

        axios.post(`/rlogin`, existingRescue).then(response => {
            this.props.setRescue(response.data)
            console.log(response.data)
            window.location = `/#/rescuedashboard`;
        })
    }


    render() {
        const { username, password } = this.state;
        console.log(this.state);
        return (
            <div className='login-page'>
                <video
                    // poster={} 
                    className='background-video' autoPlay loop muted playsInline>
                    <source src={backgroundVid2} type='video/mp4' />
                    <source src={backgroundVid2} type='video/ogg' />
                </video>

                <div className='login-container'>
                    <img src={logo} alt='logo' />
                    <br />
                    <br />
                    <h1>Rescue Login</h1>
                    <br></br>

                    <div className='login-input'>

                        <input value={username} placeholder='Username' onChange={(e) => this.setState({ username: e.target.value })} />
                        <br />

                        <input value={password} type='password' placeholder='Password' onChange={(e) => this.setState({ password: e.target.value })} />
                        <br />
                        <button onClick={this.loginRescue}>
                            Login
                        </button>
                    </div>

                    <h4>Don't have an account? Create one
                        <Link to='/rescueregistration' className='account-link'> here</Link>
                    </h4>
                </div>
            </div>
        )
    }
}
export default connect(null, { setRescue })(RescueLogin);