import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setRescue } from '../../../ducks/reducer';
import backgroundVid3 from '../../../images/Dog-20608.mp4';
import fureverLogo from '../../../images/logo_transparent_cropped.png';
import axios from 'axios';
import '../registration.css';

class RescueRegistration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rescue_email: '',
            rescue_name: '',
            rescue_username: '',
            rescue_password: '',
            logo: '',
            rescue_phone_number: '',
            rescue_city: '',
            rescue_state: ''
        }
        this.registerNewRescue = this.registerNewRescue.bind(this);
    }

    registerNewRescue() {
        const { rescue_email, rescue_name, rescue_username, rescue_password, logo, rescue_phone_number, rescue_city, rescue_state } = this.state;

        let newRescue = {
            rescue_email,
            rescue_name,
            rescue_username,
            rescue_password,
            logo,
            rescue_phone_number,
            rescue_city,
            rescue_state
        }

        axios.post('/api/rescues', newRescue).then(response => {
            // this.props.setUser(response.data)
            console.log(response.data)
            window.location = `/#/rescuedashboard`;
        })
    }

    // validateUsername() {
    //     const {username} = this.state;

    //     if (username)
    // }

    render() {
        const { rescue_name, rescue_username, rescue_password, logo, rescue_email, rescue_phone_number, rescue_city, rescue_state } = this.state;
        console.log(this.state);
        return (
            <div className='registration-container'>
                <video
                    className='background-video' autoPlay loop muted playsInline>
                    <source src={backgroundVid3} type='video/mp4' />
                    <source src={backgroundVid3} type='video/ogg' />
                </video>
                <div className='user-registration'>
                    <img src={fureverLogo} alt='logo' />
                    <br />
                    <br />
                    <h1>Rescue Registration</h1>
                    <br></br>
                    <div className='registration-input'>

                        <input value={rescue_name} placeholder='Rescue Name' onChange={(e) => this.setState({ rescue_name: e.target.value })} />

                        <input value={rescue_email} type='email' placeholder='Email Address' onChange={(e) => this.setState({ rescue_email: e.target.value })} />

                        <input value={rescue_phone_number} placeholder='Phone Number' onChange={(e) => this.setState({ rescue_phone_number: e.target.value })} />

                        <input value={logo} placeholder='Logo Image URL' onChange={(e) => this.setState({ logo: e.target.value })} />

                        <input value={rescue_username} placeholder='Username' onChange={(e) => this.setState({ rescue_username: e.target.value })} />

                        <input value={rescue_password} type='password' placeholder='Password' onChange={(e) => this.setState({ rescue_password: e.target.value })} />
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

export default RescueRegistration;

// export default connect(null, { setUser })(UserRegistration);