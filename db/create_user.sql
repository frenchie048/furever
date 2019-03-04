insert into furever_user (email, first_name, last_name, picture, username, password)
    values ($1, $2, $3, $4, $5, $6)
    returning *;
