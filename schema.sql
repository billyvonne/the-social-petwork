-- Drops the db if it exists currently --
DROP DATABASE IF EXISTS petwork_db;
-- Creates the database --
CREATE DATABASE petwork_db;

USE petwork_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
<<<<<<< HEAD
    first_name varchar(20) NOT NULL,
    last_name varchar(20) NOT NULL,
	username varchar(20) NOT NULL UNIQUE,
    email varchar(50) NOT NULL,
	userPass varchar(20) NOT NULL,
=======
	user_name VARCHAR(20) NOT NULL UNIQUE,
	user_password VARCHAR(20) NOT NULL,
    real_name VARCHAR(20) NOT NULL,
    user_email VARCHAR(20) NOT NULL,
>>>>>>> origin/master
	PRIMARY KEY (id)
);

CREATE TABLE pets
(
	id int NOT NULL AUTO_INCREMENT,
	pet_type VARCHAR(25) NOT NULL,
    pet_name VARCHAR(40) NOT NULL,
    pet_age int(3), 
    pet_birthday DATE,
    fur_color VARCHAR(100),
    fave_nap VARCHAR(100),
    fave_food VARCHAR(100),
    fave_toy VARCHAR(100),
    fave_scratch VARCHAR(100),
    fave_walk VARCHAR(100),
    fave_window VARCHAR(100),
    fave_feature VARCHAR(100),
    bowl_empty VARCHAR(100),
	user_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id)
);

