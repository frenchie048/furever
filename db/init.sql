-- FUREVER_USER TABLE
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

-- first name, last name, picture, email, username, password

--USER_MATCHES

drop table if exists user_matches;

create table user_matches (
    match_id int serial primary key
    , pet_id int foreign key references pets(pet_id)
    , user_id int foreign key references furever_user(user_id)
);

--USER REJECTS

drop table if exists user_rejects;

create table user_rejects (
    reject_id int serial primary key
    , pet_id int foreign key references pets(pet_id)
    , user_id int foreign key references furever_user(user_id)
);

-- PETS TABLE
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
    , coat_length text 
    , housetrained varchar (5)
    , rescue_id int foreign key references rescues(rescue_id)
);

insert into pets (image, name, breed, sex, size, age, city, state, bio, coat_length, rescue_id)
    values ('https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/44151989_1919671781455600_4443087747237806080_n.jpg?_nc_cat=107&_nc_ht=scontent.fphx1-1.fna&oh=ff6167748cf512856cf6d3bef6670ff1&oe=5D257575','Harriet', 'Shiba Inu', 'Female', 'Small', 'Young', 'Chandler', 'AZ', 'Harriet is the goodest girl. She does silently judge you from across the room and can give a mean side eye. Very open to pats and treats but only if she thinks it was her idea. Likes to nap in the sun. Does not like swimming', 'Medium', 'Yes', 1)
    , ('https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/216511_1021517381075_6828_n.jpg?_nc_cat=111&_nc_ht=scontent.fphx1-1.fna&oh=04316f8854658119629fa500e0932d09&oe=5CE6B70D','Kirby', 'Shiba Inu', 'Male', 'Medium', 'Adult', 'Scottsdale', 'AZ', 'Kirby is smart, playful and loving. He is extremely loyal. Rolls his eyes at you sometimes. Favorite snacks are popcorn and cheese. Dislikes bathtime.', 'Medium', 'Yes', 1)
    , ('https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80','Hank', 'Good Boi', 'Male', 'Medium', 'Adult', 'Phoenix', 'AZ', 'HENLO, I AM HANK. PLZ ADOPT', 'Long', 'Yes', 1)
    ,('https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1476448884000/photosp/b0f5c570-3237-48f1-9e80-571efed7b5ad/stock-photo-animal-dog-cute-smiling-selfie-pet-happy-self-portrait-corgi-b0f5c570-3237-48f1-9e80-571efed7b5ad.jpg','Tater Tot', 'Corgi', 'Male', 'Small', 'Young', 'Paradise Valley', 'AZ', 'Looking for an owner/manager. Pup and coming influencer. Follow me on the gram.', 'Medium', 'No', 1)
    ,('https://ourfunnylittlesite.com/wp-content/uploads/2018/07/1-4.jpg', 'Maya', 'Samoyed', 'Female', 'Adult', 'Medium', 'Tucson', 'AZ', 'Maya is an insta-famous pup who is very well trained and has lots of personality. Will do tricks for treats and pats.', 'Long', 'Yes', 1);
select * from pets
join rescues on rescues.rescue_id = pets.rescue_id;

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

-- optional info: 
-- coat length, 
-- house trained, 
-- health (vaccinations; spayed/neutered)


-- SHELTER

drop table if exists rescues;

create table rescues (
    rescue_id serial primary key
    , rescue_name text not null
    , rescue_username varchar not null unique
    , rescue_password varchar not null
    , logo varchar 
    -- , address_line_1 text not null
    -- , address_line_2
    , rescue_email varchar not null
    , rescue_phone_number varchar not null
    , rescue_city text not null
    , rescue_state varchar(2) not null
);

insert into rescues (rescue_name, rescue_username, rescue_password, logo, rescue_email, rescue_phone_number, rescue_city, rescue_state)
    values ('Goodest Dog Rescue', 'goodestdog', 'goodboi', 'https://www.bluedogrescue.com/wp-content/themes/toolset-bootstrap-child/theme-options/img/bdr_one_color_logo_mark_small.png', 'goodestdogrescue@email.com', '555.555.5555', 'Phoenix', 'AZ');

-- name, address(line 1 optional line 2 city state zip), email, username, password
--optional ? phone number, 