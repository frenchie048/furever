create table user (
    user_id serial primary key
    , first_name text not null
    , last_name text not null
    , picture text 
    , email varchar not null
    , username varchar not null
    , password varchar not null
);

-- first name, last name, picture, age (must be over 18?), email

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
);

insert into pets (image, name, breed, sex, size, age, city, state, bio)
    values ('https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/44151989_1919671781455600_4443087747237806080_n.jpg?_nc_cat=107&_nc_ht=scontent.fphx1-1.fna&oh=ff6167748cf512856cf6d3bef6670ff1&oe=5D257575','Harriet', 'Shiba Inu', 'Female', 'Small', 'Young', 'Chandler', 'AZ', 'Harriet is the goodest girl. She does silently judge you from across the room and can give a mean side eye. Very open to pats and treats but only if she thinks it was her idea. Likes to nap in the sun. Does not like swimming')
    , ('https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/216511_1021517381075_6828_n.jpg?_nc_cat=111&_nc_ht=scontent.fphx1-1.fna&oh=04316f8854658119629fa500e0932d09&oe=5CE6B70D','Kirby', 'Shiba Inu', 'Male', 'Medium', 'Adult', 'Omaha', 'NE', 'Kirby is smart, playful and loving. He is extremely loyal. Rolls his eyes at you sometimes. Favorite snacks are popcorn and cheese. Dislikes bathtime.');

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