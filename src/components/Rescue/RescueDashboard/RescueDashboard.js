import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { setUser } from '../../../ducks/reducer';
// import axios from 'axios';
import Header from '../../User/Header/Header';
import './rescuedashboard.css';

class RescueDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        }
    }

    // componentDidMount() {
    //     axios.get('/api/user-data').then(response => {
    //         this.setState({
    //             user: response.data.user || null
    //         })
    //     })
    // }

    render() {
        // console.log(props.user)
        return (
            <div>
                <header>
                    <Header />
                </header>
                <main className='dash-body'>
                    RESCUE DASH
                </main>
            </div>
        )
    }
}

export default RescueDashboard;

// function mapStateToProps(reduxState) {
//     const { user } = reduxState;

//     return {
//         user
//     }
// }

// export default connect(mapStateToProps, { setUser })(Dashboard);