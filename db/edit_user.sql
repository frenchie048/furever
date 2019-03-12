update furever_user
set first_name = $2, last_name = $3, email = $4
where username = $1 
returning *;