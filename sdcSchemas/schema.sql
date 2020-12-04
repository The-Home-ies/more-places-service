CREATE DATABASE IF NOT EXISTS places;

USE places;

DROP TABLE IF EXISTS listings;
DROP TABLE IF EXISTS more_places;


/** #1 **/
CREATE TABLE listings (
  id SERIAL NOT NULL,
  listing_name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
  -- more_places_id SERIAL NOT NULL PRIMARY KEY
);

CREATE TABLE more_places (
  id SERIAL NOT NULL,
  listing_id INT NOT NULL,
  picture_url VARCHAR(200) NOT NULL,
  location_name VARCHAR(150) NOT NULL,
  liked BOOLEAN DEFAULT FALSE,
  score INT NOT NULL,
  review_count INT NOT NULL,
  room_type VARCHAR(100) NOT NULL,
  room_name VARCHAR(100) NOT NULL,
  bed_count INT NOT NULL,
  cost_per_night INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (listing_id) REFERENCES listings(id)
);

CREATE TABLE user (
  user_id INT NOT NULL,
  name VARCHAR(25) NOT NULL
)


/** #2 **/
CREATE TABLE listings (
  id SERIAL,
  listing_name VARCHAR(100) NOT NULL,
  picture_url VARCHAR(200) NOT NULL,
  location_name VARCHAR(150) NOT NULL,
  liked BOOLEAN,
  score VARCHAR(5) NOT NULL,
  review_count INT NOT NULL,
  room_type VARCHAR(100) NOT NULL,
  room_name VARCHAR(100) NOT NULL,
  bed_count INT NOT NULL,
  cost_per_night INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE more_places (
  id SERIAL,
  listing_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (listing_id) REFERENCES listings(id) ON DELETE CASCADE
);

CREATE TABLE user (
  user_id SERIAL NOT NULL,
  username VARCHAR(25) NOT NULL,
  favorites INT,
  FOREIGN KEY (favorites) REFERENCES listings(id) ON DELETE CASCADE
)