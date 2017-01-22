CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers 
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(100) NOT NULL,
  devoured boolean NOT NULL,
  date TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);