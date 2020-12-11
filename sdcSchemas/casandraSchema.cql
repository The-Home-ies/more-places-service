DROP KEYSPACE IF EXISTS places;
CREATE KEYSPACE IF NOT EXISTS places
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE places;

CREATE TABLE IF NOT EXISTS similar_listings_by_listing_id (
  listing_id INT,   // cabinet
  rank FLOAT,         // things in the cabinet
  suggested_id INT,
  listing_name VARCHAR,
  picture_url VARCHAR,
  score FLOAT,
  review_count INT,
  room_type VARCHAR,
  bed_count INT,
  cost_per_night INT,
  PRIMARY KEY (listing_id, rank)
) WITH CLUSTERING ORDER BY (rank DESC);

CREATE TABLE favorites_by_user_id (
  user_id INT,
  username VARCHAR,
  favorites INT,
  favorite_id INT,
  PRIMARY KEY (user_id, favorite_id)
);