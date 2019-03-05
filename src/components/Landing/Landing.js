import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import backgroundVid1 from '../../images/Puppy-4740.mp4';
import logo from '../../images/logo_transparent_cropped.png';
import './landing.css';

export default class Landing extends Component {

    render() {
        return (
            <div className='landing-page'>
                <video
                    // poster={} 
                    className='background-video' autoPlay loop muted playsInline>
                    <source src={backgroundVid1} type='video/mp4' />
                    <source src={backgroundVid1} type='video/ogg' />
                </video>
                <div className='landing-container'>
                    <img src={logo} alt='logo' />
                    <br />
                    <br />
                    <h1>
                        I am...
                    </h1>
                    <div className='user-login'>
                        <Link to='/userlogin' >
                            <button>Looking for a pet</button>
                        </Link>
                    </div>

                    <div className='rescue-login'>
                        {/* <Link> */}
                        <button>A Rescue or Shelter</button>
                        {/* </Link> */}
                    </div>

                </div>
            </div>
        )
    }
}