CREATE KEYSPACE IF NOT EXISTS places
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE places;

CREATE TABLE IF NOT EXISTS similar_listings_by_listing_id (
  listing_id INT,   // cabinet
  rank INT,         // things in the cabinet
  suggested_id INT,
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
  PRIMARY KEY (listing_id, rank)
) WITH CLUSTERING ORDER BY (rank DESC);

// check this one
CREATE TABLE favorites_by_user_id (
  user_id INT,        // cabinet
  username VARCHAR,
  favorites INT,      // things in cabinet
  PRIMARY KEY (user_id, favorites)
)