-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS petwork_db;
-- Creates the database --
CREATE DATABASE petwork_db;

USE petwork_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(20) NOT NULL UNIQUE,
	user_password varchar(20) TEXT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE pets
(
	id int NOT NULL AUTO_INCREMENT,
	pet_type varchar(25) NOT NULL,
    pet_name varchar(40) NOT NULL,
	user_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id)
);
 -- make it generate a new "pet details" table, with each new pet type and name entered,
    -- once those paramaters are entered the pet_type will link the correct visual layout and
    -- the new pet_name+pet_details will be the name of the new table. ex: Neko_pet_details
    -- pet_name and pet_type required to generate new pet profile. details about the pets should include, 
    -- age and birthday, likes and dilikes, hobbies, maybe catchphrases?, maybe also speices specific questions.
-- make a table of Pet-info, FOREIGN KEY (pet_details) REFERENCES pets(id)

