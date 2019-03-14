select * from rescue
    where username = $1
    limit 1;