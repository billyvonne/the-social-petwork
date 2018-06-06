-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS petwork_db;
-- Creates the database --
CREATE DATABASE petwork_db;

USE petwork_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(40) NOT NULL,
    email varchar(50) NOT NULL UNIQUE,
    username varchar (30) NOT NULL UNIQUE,
	password varchar(20) NOT NULL,
    createdAt timestamp,
    updatedAt datetime,
	PRIMARY KEY (id)
);

CREATE TABLE posts
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(140) NOT NULL,
    body varchar(300) NOT NULL UNIQUE,
    createdAt timestamp,
    updatedAt datetime,
    userId int,
	PRIMARY KEY (id)
);

CREATE TABLE likes
(
	id int NOT NULL AUTO_INCREMENT,
	yes BOOLEAN DEFAULT false,
    createdAt timestamp,
    updatedAt datetime,
    userId int NOT NULL,
    postId int NOT NULL,
    post_userId int,
	PRIMARY KEY (id)
);


CREATE TABLE pets
(
	id int NOT NULL AUTO_INCREMENT,
    pet_name VARCHAR(40) NOT NULL,
    pet_type VARCHAR(25) NOT NULL,
    pet_age VARCHAR(100), 
    pet_birthday VARCHAR(100),
    fur_color VARCHAR(100),
    fave_nap VARCHAR(100),
    fave_food VARCHAR(100),
    fave_toy VARCHAR(100),
    fave_scratch VARCHAR(100),
    fave_walk VARCHAR(100),
    fave_window VARCHAR(100),
    fave_feature VARCHAR(100),
    bowl_empty VARCHAR(100),
	userId int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (userId) REFERENCES users(id),
    createdAt timestamp,
    updatedAt datetime
);
