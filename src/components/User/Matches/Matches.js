import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../../ducks/reducer';
import fallbackProfPic from '../../../images/profile-placeholder.jpg';
import axios from 'axios';
import Header from '../Header/Header';
import './matches.css';

class Matches extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matches: [],
            expand: false
        }
    }

    componentDidMount() {
        this.getMatches();
    }

    getMatches = () => {
        const { username } = this.props.user
        axios.get(`/api/matches/${username}`).then(response => {
            this.setState({
                matches: response.data
            })
            console.log(this.state.matches)
        })
    }

    expandMoreInfo = () => {
        this.setState({
            expand: !this.state.expand
        })
    };

    renderMappedMatches() {
        let { matches } = this.state;

        return matches.map((match) => {
            return (
                <div key={match.match_id}
                    className='match-container'
                    onClick={this.expandMoreInfo}>

                    <img src={match.image || fallbackProfPic} />

                    <div className='match-info'>

                        <div className='info-section' style={{ fontWeight: 700 }}>
                            <h1 >{match.name || 'NAME'}</h1>
                        </div>

                        <div className='info-section' >
                            <h1>{match.city || 'CITY'}, {match.state || 'STATE'}</h1>
                        </div>

                        <div className='info-section'>
                            <h1>{match.breed}, </h1>
                            <h1>{match.age}, </h1>
                            <h1>{match.sex}, </h1>
                            <h1>{match.size}</h1>
                        </div>
                        <div className={this.state.expand ? 'info-section' : 'hidden'}>
                            <h1 style={{ fontWeight: 700 }}>{match.rescue_name}</h1>
                        </div>

                        <div className={this.state.expand ? 'info-section' : 'hidden'}>
                            <h1>{match.rescue_city}, {match.rescue_state}</h1>
                        </div>

                        <div className={this.state.expand ? 'info-section' : 'hidden'} style={{ fontStyle: 'italic' }}>
                            <h1>Contact for details:</h1>
                        </div>

                        <div className={this.state.expand ? 'info-section' : 'hidden'} style={{ flexDirection: 'column' }}>
                            <h1 style={{ paddingBottom: 6 }}>{match.rescue_email}</h1>
                            <h1>{match.rescue_phone_number}</h1>

                        </div>

                        <div className='info-section' style={{ fontStyle: 'italic' }}>
                            {this.state.expand ? <h5>Click to collapse</h5>
                                :
                                <h5>Click to expand</h5>}
                        </div>
                    </div>
                </div>
            )
        })

    }

    render() {
        console.log(this.props.user)
        return (
            <div>
                <Header />
                {this.state.matches ?
                    <div className='matches-header'>
                        <h1 >MATCHES</h1>
                        {this.renderMappedMatches()}
                    </div>
                    :
                    <div>
                        <h1>You don't currently have any matches! Please begin swiping to see saved pets here.</h1>
                    </div>
                }
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

export default connect(mapStateToProps, { setUser })(Matches);