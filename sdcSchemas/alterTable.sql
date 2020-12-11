\c places

ALTER TABLE listings ADD PRIMARY KEY (id);

ALTER TABLE more_places ADD FOREIGN KEY (listing_id) REFERENCES listings(id);
ALTER TABLE more_places ADD FOREIGN KEY (suggested_id) REFERENCES listings(id);

ALTER TABLE users ADD PRIMARY KEY (user_id);

ALTER TABLE favorites ADD FOREIGN KEY (user_id) REFERENCES users(user_id);
ALTER TABLE favorites ADD FOREIGN KEY (favorite_id) REFERENCES listings(id);