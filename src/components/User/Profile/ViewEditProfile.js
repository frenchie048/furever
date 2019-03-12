import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser, updateUser } from '../../../ducks/reducer';
import axios from 'axios';
import swal from 'sweetalert';
import fallbackProfPic from '../../../images/profile-placeholder.jpg';
import './profile.css';

class ViewEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            first_name: '',
            last_name: '',
            email: ''
        }

        this.onEdit = this.onEdit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            console.log('LINE 26 MOTHERFUCKER', this.props.user);
            if (this.state.first_name === '') {
                this.setState({
                    first_name: this.props.user.first_name,
                    last_name: this.props.user.last_name,
                    email: this.props.user.email
                })
            }
        }, 2000)
    }


    //DELETING 

    // verifyDelete = (username) => {
    //     console.log(username)
    //     swal({
    //         title: 'Are you sure?',
    //         text: 'This action is irreversible. You will lose any matches made with your account. Are you sure to want to delete?',
    //         className: 'alert',
    //         icon: 'warning',
    //         buttons: true,
    //         dangerMode: true,
    //     })
    //         .then((willDelete) => {
    //             if (willDelete) {
    //                 this.deleteUserProfile(username);
    //                 swal("Your account has been deleted.", {
    //                     icon: "success",
    //                     className: 'alert',
    //                 });
    //             } else {
    //                 swal("Your matches are safe!", {
    //                     className: 'alert'
    //                 });
    //             }
    //         });
    // }

    // deleteUserProfile = (username) => {
    //     axios.delete(`/api/users/${username}`).then(response => {
    //         this.setState({ user: null });
    //         window.location = `/`;
    //         console.log('account deleted')
    //     }).catch(err => console.log(err));
    // }



    //EDITING
    onEdit() {
        this.setState({
            isEditing: true
        })
    };

    onCancel() {
        this.setState({
            isEditing: false
        })
    }

    onEditSubmit() {
        const { username } = this.props.user
        const { first_name, last_name, email } = this.state;
        console.log('HEY LOOK AT DIS', first_name, last_name, email)
        axios.put(`/api/users/${username}`, { first_name, last_name, email }).then(response => {
            console.log(response.data[0]);
            this.props.setUser(response.data[0]);
            axios.post('/api/user-session', { new_user: response.data[0] }).then(response => {
                this.onCancel();
            })
        })
    }

    render() {
        const { email, first_name, last_name, picture, username } = this.props.user;
        console.log(this.props.user);
        console.log(this.state.email, this.state.first_name, this.state.last_name);
        return (
            <div className='profile-information' >

                <img src={picture || fallbackProfPic} alt='user profile' />
                <h1>Username:</h1> <h2>{username}</h2>
                <h1>First Name:</h1> <h2>{first_name}</h2>

                {this.state.isEditing ?
                    <p style={{ paddingBottom: 10 }}>Update First Name:
                    <input defaultValue={first_name}
                            onChange={(e) => this.setState({ first_name: e.target.value })} />
                    </p>
                    : <p></p>}

                <h1>Last Name:</h1> <h2>{last_name}</h2>

                {this.state.isEditing ?
                    <p style={{ paddingBottom: 10 }}>Update Last Name:
                    <input defaultValue={last_name}
                            onChange={(e) => this.setState({ last_name: e.target.value })} />
                    </p>
                    : <p></p>}

                <h1>Email Address:</h1> <h2>{email}</h2>

                {this.state.isEditing ?
                    <p style={{ paddingBottom: 10 }}>Update Email Address:
                    <input defaultValue={email}
                            onChange={(e) => this.setState({ email: e.target.value })} />
                    </p>
                    : <p></p>}

                <br></br>
                {this.state.isEditing ?
                    (<button
                        onClick={() => this.onEditSubmit()}
                    >
                        Update
                    </button>)
                    :
                    (<button onClick={this.onEdit}>
                        Edit
                    </button>)}

                {this.state.isEditing ?

                    <button onClick={this.onCancel}>
                        Cancel
                    </button>
                    :
                    <button onClick={() => this.verifyDelete(username)}>
                        Delete
                    </button>}
            </div >
        )
    }
}

function mapStateToProps(reduxState) {
    const { user } = reduxState;

    return {
        user
    }
}

export default connect(mapStateToProps, { setUser, updateUser })(ViewEdit);