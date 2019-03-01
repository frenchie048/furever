## Steps (done)
- Create React App

## Front End
- Installed react-swipeable-cards
- Installed react-dom
- installed react-responsive-carousel
- installed axios


# USER
- Header.js: static home/header/two menus on sides
- Deck.js: swipeable cards
    - Card.js: card deck
- Profile.js: profile/settings/preferences
- Matches.js: "matches"/messages

# RESCUE (if not using open API)
- static home/header/menu on side
- on homepage - cards for pets add/remove(archive)/edit
- profile/settings



## Back End
- Installed dotenv, body-parser, massive, express
- Installed react-router dom

# USER
- GET - showing list of saved pets
- GET - showing profile
- PUT - updating profile info
- DELETE - remove a pet from saved pets

# RESCUE
- GET - showing list of rescue's posted pets
- POST - make a new pet profile
- DELETE - remove/archive a pet from availability
- PUT - update a pet's profile

## Routing
- Login - /
- User - /user
- Rescue - /rescue

## DB
user
- user_id SERIAL PRIMARY KEY
- first_name text not null
- last_name text not null
- picture text not null
- age integer not null
- email varchar not null

pet
- pet_id serial primary key
- animal text not null
- breed text not null
- sex varchar(6) not null
- size text not null
- location integer(5) not null
- name text not null
- age text not null

shelter
- shelter_id serial primary key
- 
- email varchar not null
- phone_number
