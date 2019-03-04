import React, { Component } from 'react';
// import { render } from 'react-dom';
import { Card, CardWrapper } from 'react-swipeable-cards';
import Carousel from './Carousel';
import googleMap from '../../../images/map-example.PNG';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './card.css';

//create custom end card
class MyEndCard extends Component {
    render() {

        return (
            <div>You've finished swiping! Change your preferences to refresh, or try again later!</div>
        );
    }
}


export default class PetCard extends Component {

    //pass end card to the card wrapper
    getEndCard() {
        return (
            <MyEndCard className='end-card' />
        );
    }

    //render card(s)
    render() {
        return (
            // <div className='card'>
            <CardWrapper addEndCard={this.getEndCard.bind(this)}>
                <Card className='card'>
                    <div className='profile-photo-container'>
                        <Carousel />
                    </div>
                    <div>
                        <h2>Harriet</h2>
                        <h2>Phoenix, AZ</h2>
                    </div>
                    <div>
                        <h4>Shiba Inu</h4>
                        <span />
                        <h4>Young</h4>
                        <span />
                        <h4>Female</h4>
                    </div>
                    <div>
                        <h4>About</h4>
                        <p>INFORMATION LIST</p>
                        <h4>Meet Harriet</h4>
                        <p>Fugiat occaecat do deserunt anim in proident. Proident non tempor do consequat sit voluptate. Aliquip nostrud mollit ex fugiat irure velit et enim aliqua id.</p>
                    </div>
                    <div>
                        <h4>Goodest Dog</h4>
                        <h6>Phoenix, AZ</h6>
                        <img src={googleMap} />
                        {/* icon */}
                        <h6>ADDRESS</h6>
                        {/* icon */}
                        <h6>EMAIL</h6>
                        {/* icon */}
                        <h6>PHONE</h6>
                        <button>MESSAGE</button>
                    </div>
                </Card>
                <Card>
                    Second
                </Card>
                <Card>
                    Third
                    </Card>
            </CardWrapper>
            // </div>
        )
    }
}