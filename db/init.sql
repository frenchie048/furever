create table user (
    user_id serial primary key
    , first_name text not null
    , last_name text not null
    , picture text 
    , age integer not null
    , email varchar not null
);

-- first name, last name, picture, age (must be over 18?), email

create table pet (
    pet_id serial primary key
    , image text not null
    , animal text not null
    , breed text not null
    , sex varchar(6) not null
    , size text not null
    , age text not null
    , location integer(5) not null
    , name text not null 
    , bio text not null
);

-- required info: animal (type - dropdown), breed, sex (m or f - dropdown),  profile img, age, biography (text)

-- optional info: IMAGES (up to 4 more), coat length, house trained, health (vaccinations; spayed/neutered), 

create table shelter (
    shelter_id serial primary key
    , name text not null
    , address_line_1 text not null
    , address_line_2
    , city text not null
    , state varchar(2) not null
    , email varchar not null
    , phone_number
);

-- name, address(line 1 optional line 2 city state zip), email, 
--optional ? phone number, 