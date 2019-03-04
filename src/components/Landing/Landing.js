import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import UserLogin from './User/UserLogin';
import './landing.css';

export default class Landing extends Component {

    render() {
        return (
            <div className='landing-page'>
                <div className='landing-container'>
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
                        <button>A Rescue/Shelter</button>
                        {/* </Link> */}
                    </div>

                </div>
            </div>
        )
    }
}