select * from pets
inner join rescues on pets.rescue_id = rescues.rescue_id
order by pet_id asc;