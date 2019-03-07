import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import profPic from '../../../images/user-profile-example.png';
import hamburger from '../../../images/icon-svg/bars-solid.svg';
import logo from '../../../images/logo_transparent_cropped.png';
import './header.css';

function Header(props) {

    let profileMenuClick = () => {
        console.log("FIRST MENU CLICKED");
    }

    let mainMenuClick = () => {
        console.log("SECOND MENU CLICKED");
    }

    let matchesMenuClick = () => {
        console.log("THIRD MENU CLICKED");
    }

    // render() {
    console.log(props);
    return (
        <div className='header-container'>

            <div className='user-menu'>
                <NavLink to='/profile'>
                    <span className='profile-image-container'>
                        <img src={props.picture}
                            alt="user's profile"
                            onClick={() => profileMenuClick()} />
                    </span>
                </NavLink>
            </div>

            <div className='main-menu'>
                <NavLink to='/dashboard'>
                    <img src={logo} alt="furever logo"
                        onClick={() => mainMenuClick()} />
                </NavLink>
            </div>

            <div className='matches-menu'>
                <NavLink to='/matches'>
                    <img src={hamburger} alt="matches menu"
                        onClick={() => matchesMenuClick()} />
                </NavLink>
            </div>

        </div>
    )
    // }
}

function mapStateToProps(reduxState) {
    const { username, picture } = reduxState;

    return {
        username,
        picture
    }
}

export default connect(mapStateToProps, {})(Header);