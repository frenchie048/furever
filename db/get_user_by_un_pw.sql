select * from furever_user 
    where username = $1
    and password = $2
    returning *;
