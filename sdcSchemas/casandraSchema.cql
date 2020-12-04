CREATE KEYSPACE IF NOT EXISTS places
WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor': 1};


CREATE TABLE IF NOT EXISTS listings (
  id INT,
  listing_name VARCHAR,
  picture_url VARCHAR,
  location_name VARCHAR,
  liked BOOLEAN,
  score FLOAT,
  review_count INT,
  room_type VARCHAR,
  room_name VARCHAR,
  bed_count INT,
  cost_per_night INT,
  PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS more_places (
  id INT,
  listing_id INT,
  PRIMARY KEY (id)
)

CREATE TABLE user (
  user_id INT,
  username VARCHAR,
  favorites INT,
  PRIMARY KEY (user_id)
)