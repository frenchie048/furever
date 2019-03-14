import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser, updateUser } from '../../../ducks/reducer';
import StripeCheckout from 'react-stripe-checkout';
import swal from 'sweetalert';
// import fallbackProfPic from '../../../images/profile-placeholder.jpg';
import stripeLogo from '../../../images/logo_blue_transparent.png';
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

    //Stripe!

    // MAKE THIS A THING
    onToken = (token) => {
        axios.post('/api/donate', {
            method: "POST",
            body: token.id,
            amount: 2500
        })
            .then(response => {
                console.log(response.data)
                swal({
                    title: 'Donation Received!',
                    text: 'Thank you! Your generous donation will help more animals find their furever homes.',
                    icon: 'success',
                    button: 'Go Back',
                });
            })
        // TODO: Send the token information and any other
        // relevant information to your payment process
        // server, wait for the response, and update the UI
        // accordingly. How this is done is up to you. Using
        // XHR, fetch, or a GraphQL mutation is typical.
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
                        <div className='donation-info'>
                            <h1>
                                100% of your donation goes directly to the shelters we partner with. This allows them to help find furever homes for as many pets in need as possible.
                            </h1>
                            <h1>
                                Click below to donate today.
                            </h1>
                            <button>Donate</button>
                            <StripeCheckout
                                amount='2500'
                                label='Donate'
                                description='$25 Donation'
                                image={stripeLogo}
                                allowRememberMe='false'
                                // locale="auto"
                                name='Furever'
                                stripeKey='pk_test_V1CinGMFax3bps1zLbG3xFd3'
                                token={this.onToken}
                            // zipCode
                            />
                        </div>
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