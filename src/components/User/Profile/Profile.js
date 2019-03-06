import React, { Component } from 'react';
import Header from '../Header/Header';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    <h2>Profile</h2>
                    <h2>Preferences</h2>
                    <h2>Settings</h2>
                    <h2>Logout</h2>
                </main>
            </div>
        )
    }
}