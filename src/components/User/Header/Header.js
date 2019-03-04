import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
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
                    <NavLink to='/profile'>
                        <img src={profPic}
                            alt="user's profile"
                            onClick={this.profileMenuClick} />
                    </NavLink>
                </div>
                <div className='company-info'>
                    <NavLink to='/dashboard'>
                        <img src={logo} alt="houser logo" />
                    </NavLink>
                </div>
                <div className='matches-menu'>
                    <NavLink to='/matches'>
                        <img src={hamburger} alt="menu"
                            onClick={this.matchesMenuClick} />
                    </NavLink>
                </div>
            </div>
        )
    }
}

