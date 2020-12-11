DROP DATABASE IF EXISTS places;
CREATE DATABASE places;

\c places

DROP TABLE IF EXISTS listings CASCADE;
CREATE TABLE listings (
  id SERIAL,
  listing_name VARCHAR(100) NOT NULL,
  picture_url VARCHAR(200) NOT NULL,
  -- location_name VARCHAR(150) NOT NULL,
  -- liked BOOLEAN,
  score VARCHAR(5) NOT NULL,
  review_count INT NOT NULL,
  room_type VARCHAR(100) NOT NULL,
  -- room_name VARCHAR(100) NOT NULL,
  bed_count INT NOT NULL,
  cost_per_night INT NOT NULL
  -- PRIMARY KEY (id)
);

DROP TABLE IF EXISTS more_places;
CREATE TABLE more_places (
  listing_id INT,
  suggested_id INT,
  ranking VARCHAR(20) NOT NULL
  -- FOREIGN KEY (listing_id) REFERENCES listings(id),
  -- FOREIGN KEY (suggested_id) REFERENCES listings(id)
);

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  user_id SERIAL,
  username VARCHAR(100) NOT NULL,
  favorites INT
  -- PRIMARY KEY (user_id)
);

DROP TABLE IF EXISTS favorites;
CREATE TABLE favorites (
  user_id INT,
  favorite_id INT
  -- FOREIGN KEY (user_id) REFERENCES users(user_id),
  -- FOREIGN KEY (favorite_id) REFERENCES listings(id)
);
