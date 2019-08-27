select * from pets
order by pet_id asc
inner join rescues on pets.rescue_id = rescues.rescue_id;