import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
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
                    <Link to='/profile'>
                        <img src={profPic}
                            alt="user's profile image"
                            onClick={this.profileMenuClick} />
                    </Link>
                </div>
                <div className='company-info'>
                    <Link to='/dashboard'>
                        <img src={logo} />
                    </Link>
                </div>
                <div className='matches-menu'>
                    <Link to='/matches'>
                        <img src={hamburger}
                            onClick={this.matchesMenuClick} />
                    </Link>
                </div>
            </div>
        )
    }
}

