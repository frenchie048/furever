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
        axios.get('/api/matches').then(response => {
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
                <div>
                    <img src={fallbackProfPic} />
                    <h1>{match.pet.name || 'NAME'}</h1>
                    <h1>{match.pet.city || 'CITY'}, {match.pet.state || 'STATE'}</h1>
                    {/* italics - whole div is button toggle expanded/not */}
                    <h5>Click to expand</h5>
                </div>
            )
        })

    }

    render() {
        console.log(this.props.user)
        return (
            <div>
                <Header />
                <h1>MATCHES</h1>
                {this.renderMappedMatches()}
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