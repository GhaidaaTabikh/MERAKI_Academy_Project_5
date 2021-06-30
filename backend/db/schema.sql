DROP DATABASE MERAKI_Academy_Project_5;
CREATE DATABASE MERAKI_Academy_Project_5;

USE MERAKI_Academy_Project_5;


Create table roles (
 role_id INT AUTO_INCREMENT NOT NULL,
 role VARCHAR(255) NOT NULL,
 primary key (role_id)
);


CREATE TABLE users(
 id INT AUTO_INCREMENT NOT NULL,
 firstName VARCHAR(255),
 lastName VARCHAR(255),
 age INT(3),
 email  VARCHAR(255),
 password VARCHAR(255),
 role_id INT,
 FOREIGN KEY (role_id) REFERENCES roles (role_id),
 is_deleted TINYINT DEFAULT 0,
 img TEXT,
 PRIMARY KEY (id)
);


CREATE TABLE doctors (
 doctor_id INT AUTO_INCREMENT NOT NULL,
 firstName VARCHAR(255) ,
 lastName Varchar(255),
 age INT ,
 description TEXT,
 email VARCHAR(255) NOT NULL,
 Qualifications VARCHAR (255) ,
 practicalExperiences VARCHAR(255) , 
 qualificationsFile VARCHAR(255),
 is_deleted TINYINT DEFAULT 0,
 primary key(doctor_id)
);


CREATE TABLE doctorsDetails (
 id INT AUTO_INCREMENT NOT NULL,
 description VARCHAR(255),
 Qualifications VARCHAR (255) ,
 practicalExperiences VARCHAR(255) , 
 price INT,
 user_id INT,
 is_deleted TINYINT DEFAULT 0,
 FOREIGN KEY (user_id) REFERENCES users(id),
 primary key (id)
);

CREATE TABLE breakfast (
 breakfast_id INT AUTO_INCREMENT NOT NULL,
 name varchar(255),
 user_id INT,
 FOREIGN KEY (user_id) REFERENCES users(id),
 primary key (breakfast_id)

);

CREATE TABLE snack (
 snack_id INT AUTO_INCREMENT NOT NULL,
 name varchar(255),
 user_id INT,
 FOREIGN KEY (user_id) REFERENCES users(id),
 primary key (snack_id)
);

CREATE TABLE lunch (
 lunch_id INT AUTO_INCREMENT NOT NULL,
 name varchar(255),
 user_id INT,
 FOREIGN KEY (user_id) REFERENCES users(id),
 primary key (lunch_id)
);

CREATE TABLE dinner (
 dinner_id INT AUTO_INCREMENT NOT NULL,
 name varchar(255),
 user_id INT,
 FOREIGN KEY (user_id) REFERENCES users(id),
 primary key (dinner_id)
);

CREATE TABLE glassesOfWater (
 glassesOfWater_id INT AUTO_INCREMENT NOT NULL,
 name varchar(255),
 user_id INT,
 FOREIGN KEY (user_id) REFERENCES users(id),
 primary key (glassesOfWater_id)
);

CREATE TABLE activeTime (
 activeTime_id INT AUTO_INCREMENT NOT NULL,
 name varchar(255),
 user_id INT,
 FOREIGN KEY (user_id) REFERENCES users(id),
 primary key (activeTime_id)
);

CREATE TABLE foodTraker (
 foodTraker_id INT AUTO_INCREMENT NOT NULL,
 breakfast_id INT,
 snack_id INT,
 lunch_id INT,
 dinner_id INT,
 glassesOfWater_id INT,
 activeTime_id INT,
 is_deleted TINYINT DEFAULT 0,
 user_id INT,
 FOREIGN KEY (user_id) REFERENCES users(id),
 FOREIGN KEY (breakfast_id) REFERENCES breakfast(breakfast_id),
 FOREIGN KEY (snack_id) REFERENCES snack(snack_id),
 FOREIGN KEY (lunch_id) REFERENCES lunch(lunch_id),
 FOREIGN KEY (dinner_id) REFERENCES dinner(dinner_id),
 FOREIGN KEY (glassesOfWater_id) REFERENCES glassesOfWater(glassesOfWater_id),
 FOREIGN KEY (activeTime_id) REFERENCES activeTime(activeTime_id),
 primary key (foodTraker_id)
);

CREATE TABLE Success (
 Success_id INT AUTO_INCREMENT NOT NULL,
 description VARCHAR(255),
 user_id INT,
 is_deleted TINYINT DEFAULT 0,
 FOREIGN KEY (user_id) REFERENCES users(id),
 primary key (Success_id )
);

CREATE TABLE reviews(
 id INT AUTO_INCREMENT NOT NULL,
 comment VARCHAR(255),
 doctorsService_id INT,
 FOREIGN KEY ( doctorsService_id ) REFERENCES doctorsDetails(id),
 commenter_id INT,
 rating INT ,
 is_deleted TINYINT DEFAULT 0,
 FOREIGN KEY (commenter_id) REFERENCES users(id),
 PRIMARY KEY (id)
);

CREATE TABLE purchased(
 id INT AUTO_INCREMENT NOT NULL,
 doctorsService_id INT,
 user_id INT,
 is_deleted TINYINT DEFAULT 0,
 FOREIGN KEY ( doctorsService_id ) REFERENCES doctorsDetails(id),
 FOREIGN KEY ( user_id  ) REFERENCES users(id),
 PRIMARY KEY (id)
);

INSERT INTO roles (role) VALUES ("user");
INSERT INTO roles (role) VALUES ("doctor");
INSERT INTO roles (role) VALUES ("admin");
