select * from user_matches
    join furever_user ON furever_user.user_id = user_matches.user_id
    join pets ON pets.pet_id = user_matches.pet_id
    where username = $1;