import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUser } from '../../../ducks/reducer';
// import { Carousel } from 'react-responsive-carousel';
import { Card, CardWrapper } from 'react-swipeable-cards';
import googleMap from '../../../images/map-example.PNG';
import phoneIcon from '../../../images/icon-svg/phone-solid.svg';
import mapIcon from '../../../images/icon-svg/map-marker-alt-solid.svg';
import emailIcon from '../../../images/icon-svg/envelope-solid.svg';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import './card.css';
// import { reject } from 'rejects';

//create custom end card
class MyEndCard extends Component {
    render() {
        return (
            <div className='end-card'
                style={{ fontFamily: 'Fjalla One, sans-serif', textAlign: 'center' }}>
                <h1 style={{ paddingTop: '30%', width: '80%', margin: '0 auto', fontSize: 30 }}>You've finished swiping! Change your preferences to refresh, or try again later!</h1>
            </div>
        );
    }
}

class PetCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: []
        }
    }

    componentDidMount() {
        this.getPets();
    }

    //will need to change to 'unswiped' pets
    getPets() {
        axios.get('/api/pets').then(response => {
            this.setState({
                pets: response.data
            })
        })
    }

    // getPets() {
    //     let {matches} = this.state.matches;
    //     let {rejects} = this.state.rejects;

    //     axios.get('/api/pets').then(response => {

    //         this.data = response.data;
    //         this.data.forEach((pet) => {
    //             if (pet.pet.id !== match.pet_id && pet.pet.id !== reject.pet_id) {
    //                 var unswipedPets = this.state.pets.concat(pet);
    //                 this.setState({ pets: unswipedPets })
    //             }
    //         });

    //     })
    // }



    //ON SWIPE 

    // onSwipe(pets) {
    //     console.log(pets.name + " was swiped.");
    // }

    //need to make right(yes) action
    onSwipeRight(pets) {
        let { pet_id } = pets;
        let { username, user_id } = this.props.user;

        axios.post(`/api/matches/${username}`, { pet_id, user_id }).then(response => {
            console.log(response.data)
        })

        console.log('pet id ' + pet_id + "user id " + user_id)
        console.log(pets.name + " was swiped right.");
    }

    //need to make left(no) action
    onSwipeLeft(pets) {
        let { pet_id } = pets;
        let { username, user_id } = this.props.user;

        axios.post(`/api/rejects/${username}`, { pet_id, user_id }).then(response => {
            console.log(response.data)
        })

        console.log(pets.name + " was swiped left.");
    }



    //pass end card to the card wrapper
    getEndCard() {
        return (
            <MyEndCard />
        );
    }

    renderMappedCards() {
        let { pets } = this.state;

        const cardStyle = {
            overflow: 'scroll',
            overflowX: 'hidden'
        }

        const noSwipe = {
            pointerEvents: 'none'
        }

        return pets.map((pet) => {

            return (
                //Card div name is already given as card_container
                <Card key={pet.pet_id} style={cardStyle} data={pet}
                    onSwipeLeft={this.onSwipeLeft.bind(this)}
                    onSwipeRight={this.onSwipeRight.bind(this)} >

                    <div className='card-info-container' style={noSwipe}>

                        {/* <Carousel className='profile-photo-container' showIndicators dynamicHeight={false} autoPlay={false} showStatus={false} showThumbs={false}> */}
                        <img src={pet.image} alt='pet' className='profile-photo-container' />
                        {/* </Carousel> */}

                        <div className='basic-pet-info'>
                            <h2>{pet.name}</h2>
                            <h2>{pet.city}, {pet.state}</h2>
                        </div>

                        <div className='more-pet-info'>
                            <h4>{pet.breed}</h4>
                            <span>&#9679;</span>
                            <h4>{pet.age}</h4>
                            <span>&#9679;</span>
                            <h4>{pet.sex}</h4>
                        </div>

                        <div className='about-pet-list'>
                            <h1>ABOUT:</h1>
                            <ul>
                                <li>Size: {pet.size}</li>
                                <li>Coat Length: {pet.coat_length}</li>
                                <li>House-Trained: {pet.housetrained}</li>
                                <li>Health: Vaccinations up to date</li>
                            </ul>
                        </div>

                        <div className='pet-bio'>
                            <h1>Meet {pet.name}:</h1>
                            <p>{pet.bio}</p>
                        </div>

                        <div className='rescue-info'>
                            <h1>{pet.rescue_name}</h1>
                            <h2>{pet.rescue_city}, {pet.rescue_state}</h2>

                            {/* Google Maps API */}
                            <img src={googleMap} alt='Google Map location of shelter' />
                            <div className='rescue-details'>

                                <div className='details-section'>
                                    <img src={mapIcon} alt="map icon" />
                                    <h4>1234 N Maple Dr</h4>
                                </div>

                                <div className='details-section'>
                                    <img src={emailIcon} alt="email icon" />
                                    <h4>{pet.rescue_email}</h4>
                                </div>
                                <div className='details-section'>
                                    <img src={phoneIcon} alt="phone icon" />
                                    <h4 style={{ paddingBottom: 10 }}>{pet.rescue_phone_number}</h4>
                                </div>
                            </div>
                        </div>
                    </div >
                </Card >
            );
        });
    }


    //render card(s)
    render() {
        console.log(this.state.pets);
        return (
            <div className='card-page'>
                <CardWrapper style={{ position: 'relative' }}
                    addEndCard={this.getEndCard.bind(this)}>
                    {this.renderMappedCards()}
                </CardWrapper>
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

export default connect(mapStateToProps, { setUser })(PetCard);


//PREVIOUS SAMPLE/DUMMY DATA

/* <Card className='card'>
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
</Card> */