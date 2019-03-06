import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { Card, CardWrapper } from 'react-swipeable-cards';
import googleMap from '../../../images/map-example.PNG';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './card.css';

//create custom end card
class MyEndCard extends Component {
    render() {
        return (
            <div className='end-card'>
                You've finished swiping! Change your preferences to refresh, or try again later!
            </div>
        );
    }
}

export default class PetCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: []
        }
    }

    componentDidMount() {
        this.getPets();
    }

    getPets() {
        axios.get('/api/pets').then(response => {
            this.setState({
                pets: response.data
            })
        })
    }

    //ON SWIPE 

    onSwipe(pets) {
        console.log(pets.name + " was swiped.");
    }

    //pass end card to the card wrapper
    getEndCard() {
        return (
            <MyEndCard className='end-card' />
        );
    }

    renderMappedCards() {
        let { pets } = this.state;

        // const cardStyle = {
        //     height: 500
        // }

        return pets.map((pet) => {
            return (
                //Card div name is already given as card_container
                <Card key={pet.pet_id} onSwipe={this.onSwipe.bind(this)} data={pet} >
                    <div className='card-info-container' >
                        <Carousel className='profile-photo-container' showIndicators dynamicHeight={true} autoPlay={false} showStatus={false} showThumbs={false}>
                            <img src={pet.image} alt='pet' />
                        </Carousel>

                        <div className='basic-pet-info'>
                            {pet.name}
                            {pet.city},{pet.state}
                        </div>
                        <div className='more-pet-info'>
                            {pet.breed}
                            <span />
                            {pet.age}
                            <span />
                            {pet.sex}
                        </div>
                        <div className='about-pet-list'>
                            <h1>About:</h1>
                            INFORMATION LIST
                        </div>
                        <div className='pet-bio'>
                            <h1>Meet {pet.name}</h1>
                            {pet.bio}
                        </div>
                        {/* when shelter table created, pass info down! */}
                        <div className='rescue-info'>
                            <h4>Goodest Dog</h4>
                            <h6>Phoenix, AZ</h6>

                            {/* Google Maps API */}
                            <img src={googleMap} />

                            {/* insert icon */}
                            <h6>ADDRESS</h6>
                            {/* insert icon */}
                            <h6>EMAIL</h6>
                            {/* insert icon */}
                            <h6>PHONE</h6>
                            <button>MESSAGE</button>
                        </div>
                    </div>
                </Card>
            );
        });
    }


    //render card(s)
    render() {


        return (
            <div className='card-page'>
                <CardWrapper addEndCard={this.getEndCard.bind(this)}>
                    {this.renderMappedCards()}
                </CardWrapper>
            </div>
        )
    }
}


//PREVIOUS SAMPLE/DUMMY DATA

{/* <Card className='card'> 
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
            icon 
        <h6>ADDRESS</h6>
        icon 
        <h6>EMAIL</h6>
            icon 
        <h6>PHONE</h6>
        <button>MESSAGE</button>
    </div>
</Card> */}