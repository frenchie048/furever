import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';

export default class Profile extends Component {
    constructor() {
        super();

        this.state = {
            user: null
        }
    }

    logout = () => {
        axios.post('/logout').then(response => {
            this.setState({ user: null });
            window.location = `/`;
        }).catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    <NavLink to='/preferences' className='account-link'><h2>Preferences</h2></NavLink>
                    <NavLink to='/userregistration' className='account-link'><h2>Settings</h2></NavLink>
                    <button type='text' onClick={this.logout}>
                        Logout
                    </button>
                </main>
            </div>
        )
    }
}