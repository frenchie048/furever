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
            matches: []
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

    renderMappedMatches() {
        let { matches } = this.state;

        return matches.map((match) => {
            return (
                <div key={match.match_id} className='match-container'>

                    <img src={match.image || fallbackProfPic} />

                    <div className='match-info'>

                        <div className='info-section' style={{ fontWeight: 700 }}>
                            <h1 >{match.name || 'NAME'}</h1>
                            <h1>{match.city || 'CITY'}, {match.state || 'STATE'}</h1>
                        </div>

                        <div className='info-section'>
                            <h1>{match.breed}</h1>
                            {/* <span>&#9679;</span> */}
                            <h1>{match.age}</h1>
                            {/* <span>&#9679;</span> */}
                            <h1>{match.sex}</h1>
                        </div>

                        {/* italics - whole div is button toggle expanded/not */}
                        <h5 className='info-section' style={{ fontStyle: 'italic' }}>Click to expand</h5>
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