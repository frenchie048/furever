import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../../ducks/reducer';
import fallbackProfPic from '../../../images/profile-placeholder.jpg';
import hamburger from '../../../images/icon-svg/bars-solid.svg';
import logo from '../../../images/logo_transparent_cropped.png';
import './header.css';
import axios from 'axios';

class Header extends Component {

    componentDidMount() {
        axios.get('/api/user-data').then(response => {
            console.log('RESPONSE', response.data.user)
            this.props.setUser(response.data.user)
        })
    }


    profileMenuClick = () => {
        console.log("FIRST MENU CLICKED");
    }

    mainMenuClick = () => {
        console.log("SECOND MENU CLICKED");
    }

    matchesMenuClick = () => {
        console.log("THIRD MENU CLICKED");
    }

    render() {
        console.log(this.props.user);
        const { picture } = this.props.user;
        return (
            <div className='header-container'>

                <div className='user-menu'>
                    <NavLink to='/profile'>
                        <span className='profile-image-container'>
                            <img src={picture || fallbackProfPic}
                                alt="user's profile"
                                onClick={() => this.profileMenuClick()} />
                        </span>
                    </NavLink>
                </div>

                <div className='main-menu'>
                    <NavLink to='/dashboard'>
                        <img src={logo} alt="furever logo"
                            onClick={() => this.mainMenuClick()} />
                    </NavLink>
                </div>

                <div className='matches-menu'>
                    <NavLink to='/matches'>
                        <img src={hamburger} alt="matches menu"
                            onClick={() => this.matchesMenuClick()} />
                    </NavLink>
                </div>

            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { user } = reduxState;

    return {
        user
    }
}

export default connect(mapStateToProps, { setUser })(Header);