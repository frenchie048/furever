import React, { Component } from 'react';
import profPic from '../../../images/user-profile-example.png';
import hamburger from '../../../images/icon-svg/bars-solid.svg';
import logo from '../../../images/logo_transparent_cropped.png';
import './header.css';

export default class Header extends Component {

    profileMenuClick() {
        console.log("FIRST MENU CLICKED");
    }

    matchesMenuClick() {
        console.log("SECOND MENU CLICKED");
    }

    render() {
        return (
            <div className='header-container'>
                <div className='user-menu'>
                    <img src={profPic}
                        alt="user's profile image"
                        onClick={this.profileMenuClick} />
                </div>
                <div className='company-info'>
                    <img src={logo} />
                </div>
                <div className='matches-menu'>
                    <img src={hamburger}
                        onClick={this.matchesMenuClick} />
                </div>
            </div>
        )
    }
}

