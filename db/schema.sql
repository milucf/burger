DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE bergers_db;

CREATE TABLE burgers(
    id INTEGER AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured boolean,
    date TIMESTAMP,
    PRIMARY KEY (id)
);

