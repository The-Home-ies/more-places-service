
DROP TABLE IF EXISTS listings;
DROP TABLE IF EXISTS more_places;

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
  location_name VARCHAR(100) NOT NULL,
  liked BOOLEAN DEFAULT FALSE,
  score INT NOT NULL,
  review_count INT NOT NULL,
  room_type VARCHAR(50) NOT NULL,
  room_name VARCHAR(50) NOT NULL,
  bed_count INT NOT NULL,
  cost_per_night INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (listing_id) REFERENCES listings(id)
);

INSERT INTO listings (
  listing_name
) VALUES ('Listing one');

INSERT INTO more_places (
  id,
  listing_id,
  picture_url,
  location_name,
  liked,
  score,
  review_count,
  room_type,
  room_name,
  bed_count,
  cost_per_night
) VALUES (12, 1, 'urlhere', 'location_name', FALSE, 4, 42, 'roomType', 'room name', 3, 312);

SELECT * FROM more_places INNER JOIN listings ON (more_places.listing_id = listings.id) WHERE listings.id = 1;