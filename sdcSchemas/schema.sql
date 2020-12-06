CREATE DATABASE IF NOT EXISTS places;

DROP TABLE IF EXISTS listings;
DROP TABLE IF EXISTS more_places;

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
  listing_id INT,
  suggested_id INT,
  ranking INT,
  FOREIGN KEY (listing_id) REFERENCES listings(id),
  FOREIGN KEY (suggested_id) REFERENCES listings(id)
);

CREATE TABLE user (
  user_id SERIAL,
  username VARCHAR(25) NOT NULL,
  favorites INT,
  PRIMARY KEY (user_id),
  FOREIGN KEY (favorites) REFERENCES listings(id)
);

CREATE TABLE favorites (
  favorite_id INT,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(user_id),
  FOREIGN KEY (favorite_id) REFERENCES listings(listing_id)
);
