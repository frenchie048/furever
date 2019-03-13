select * from user_rejects
    inner join furever_user ON furever_user.user_id = user_rejects.user_id
    inner join pets ON pets.pet_id = user_rejects.pet_id
    where username = $1;