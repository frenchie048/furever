import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser, updateUser } from '../../../ducks/reducer';
// import swal from 'sweetalert';
// import fallbackProfPic from '../../../images/profile-placeholder.jpg';
import ViewEdit from './ViewEditProfile';
import axios from 'axios';
import Header from '../Header/Header';
import './profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
            toggleClassName1: false,
            toggleClassName2: false,
            toggleClassName3: false,
        }
    }

    componentDidMount() {
        this.getOneUser();
    }

    getOneUser = () => {
        const { username } = this.props.user;

        axios.get(`/api/users/${username}`).then(response => {
            // this.setState({
            //     user: response.data
            // })
        })
    }


    //functionality stuff
    logout = () => {
        axios.post('/logout').then(response => {
            this.setState({ user: null });
            window.location = `/`;
        }).catch(err => console.log(err));
    };

    //collapse menus
    collapseMenu1 = () => {
        this.setState({
            toggleClassName1: !this.state.toggleClassName1
        })
    };
    collapseMenu2 = () => {
        this.setState({
            toggleClassName2: !this.state.toggleClassName2
        })
    };

    collapseMenu3 = () => {
        this.setState({
            toggleClassName3: !this.state.toggleClassName3
        })
    };

    render() {
        // const { email, first_name, last_name, picture, username } = this.props.user;
        // console.log(this.props.user);
        // console.log(this.state);
        return (
            <div>
                <header>
                    <Header />
                </header>
                <main className='profile-links'>
                    <button className='collapsible' onClick={this.collapseMenu1}>
                        <h2>
                            {this.state.toggleClassName1 ? <p>Preferences -</p> : <p>Preferences +</p>}
                        </h2>
                    </button>
                    <div className={this.state.toggleClassName1 ? 'active' : 'inactive'}>
                        <h3>Dogs</h3>
                        <h3>Cats</h3>
                        <h3>Bunnies</h3>
                        <h3>Fish</h3>
                        <h3>Birds</h3>
                    </div>


                    <button className='collapsible' onClick={this.collapseMenu2}>
                        <h2>
                            {this.state.toggleClassName2 ? <p>Settings -</p> : <p>Settings +</p>}
                        </h2>
                    </button>

                    <div className={this.state.toggleClassName2 ? 'active' : 'inactive'}>
                        <ViewEdit />
                    </div>


                    <button className='collapsible' onClick={this.collapseMenu3}>
                        <h2>
                            {this.state.toggleClassName3 ? <p>Donate -</p> : <p>Donate +</p>}
                        </h2>
                    </button>
                    <div className={this.state.toggleClassName3 ? 'active' : 'inactive'}>
                        <h1 style={{ fontSize: 18, padding: 10, fontWeight: 700 }}>100% of your donation goes directly to the shelters we partner with. This allows them to help find furever homes for as many pets in need as possible. Click below to donate today.</h1>
                        <button>Donate</button>
                    </div>

                    <button>
                        <h2 className='logout-link' onClick={this.logout}>
                            Logout
                        </h2>
                    </button>
                </main>
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

export default connect(mapStateToProps, { setUser, updateUser })(Profile);