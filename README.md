## Steps (done)
- Create React App

## Front End
- react-swipeable-cards
- react-dom
- react-responsive-carousel
- axios
- bcrypt for auth

# USER
- Header.js: static header w/ two menus on sides
- Dashboard.js: header and swipeable cards
    - Card.js: card deck
- Profile.js: profile/settings/preferences
- Matches.js: "matches"/messages

# RESCUE
- static home/header/menu on side
- on homepage - cards for pets add/remove(archive)/edit
- profile/settings

## Back End
- dotenv
- body-parser
- massive 
- express
- express-session
- http-proxy-middleware
- react-router-dom
- react-redux
- redux

# USER
- GET - showing list of saved pets
- GET - showing profile
- PUT - updating profile info
- POST - add a pet to saved pets
- DELETE - remove a pet from saved pets

# RESCUE
- GET - showing list of rescue's posted pets
- POST - make a new pet profile
- DELETE - remove/archive a pet from availability
- PUT - update a pet's profile

## Routing
- Landing - /
- User
    - UserLogin
    - UserRegistration
    - Dashboard
- Rescue
    - RescueLogin
    - RescueRegistration
    - Dashboard

## DB
user
- user_id SERIAL PRIMARY KEY
- email varchar not null
- first_name text not null
- last_name text not null
- picture text not null
- username varchar not null unique
- password varchar not null

pet
- pet_id serial primary key
- image text not null
- name text not null
- animal text not null
- breed text not null
- sex varchar(6) not null
- size text not null
- age text not null
- city text not null
- state varchar(2) not null
- bio text not null
- match_status boolean

shelter (TBD)
- shelter_id serial primary key
- 
- email varchar not null
- phone_number
