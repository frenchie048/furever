drop table if exists furever_user;

create table furever_user (
    user_id serial primary key
    , email varchar not null
    , first_name text not null
    , last_name text not null
    , picture text 
    , username varchar not null unique
    , password varchar not null
);

insert into furever_user (email, first_name, last_name, picture, username, password)
    values ('brittany@email.com', 'Brittany', 'French', 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/37027439_10212059341461706_3830127688543109120_n.jpg?_nc_cat=109&_nc_ht=scontent-sjc3-1.xx&oh=e7ab390a11e77797b03fa9245f060f14&oe=5D1A823C','frenchie', 'sherryNiles');

-- first name, last name, picture, age , email, username, password

drop table if exists matches;

create table matches (
    pet_id int foreign key references pets(pet_id)
    , user_id int foreign key references furever_user(user_id)
);

drop table if exists pets;

create table pets (
    pet_id serial primary key
    , image text not null
    , name text not null 
    -- , animal text not null
    , breed text not null
    , sex varchar(6) not null
    , size text not null
    , age text not null
    , city text not null
    , state varchar(2) not null
    , bio text not null
    , match_status boolean 
);

insert into pets (image, name, breed, sex, size, age, city, state, bio)
    values ('https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/44151989_1919671781455600_4443087747237806080_n.jpg?_nc_cat=107&_nc_ht=scontent.fphx1-1.fna&oh=ff6167748cf512856cf6d3bef6670ff1&oe=5D257575','Harriet', 'Shiba Inu', 'Female', 'Small', 'Young', 'Chandler', 'AZ', 'Harriet is the goodest girl. She does silently judge you from across the room and can give a mean side eye. Very open to pats and treats but only if she thinks it was her idea. Likes to nap in the sun. Does not like swimming')
    , ('https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/216511_1021517381075_6828_n.jpg?_nc_cat=111&_nc_ht=scontent.fphx1-1.fna&oh=04316f8854658119629fa500e0932d09&oe=5CE6B70D','Kirby', 'Shiba Inu', 'Male', 'Medium', 'Adult', 'Omaha', 'NE', 'Kirby is smart, playful and loving. He is extremely loyal. Rolls his eyes at you sometimes. Favorite snacks are popcorn and cheese. Dislikes bathtime.');

-- required info: 
-- profile img, 
-- name,
-- animal (type - dropdown *will add this later*), 
-- breed, 
-- sex (m or f - dropdown),  
-- size: toy(2-9), small(10-35), medium(35-65), large(55+),
-- age, 
-- city,
-- state,
-- biography (text),
-- match_status (NEED TO ADD)

-- optional info: 
-- IMAGES (up to 4 more), 
-- coat length, 
-- house trained, 
-- health (vaccinations; spayed/neutered)

drop table if exists user_matches;

create table user_matches (
    user_id int not null
    , pet_id int not null
)



-- SHELTER

-- create table shelter (
--     shelter_id serial primary key
--     , name text not null
--     , address_line_1 text not null
--     , address_line_2
--     , city text not null
--     , state varchar(2) not null
--     , email varchar not null
--     , phone_number
-- );

-- name, address(line 1 optional line 2 city state zip), email, 
--optional ? phone number, 