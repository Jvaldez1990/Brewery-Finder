BEGIN TRANSACTION;

DROP TABLE IF EXISTS users;
DROP SEQUENCE IF EXISTS seq_user_id;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS beers;
DROP TABLE IF EXISTS breweries;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS brewery_beer;

CREATE SEQUENCE seq_user_id
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;


CREATE TABLE users (
	user_id int DEFAULT nextval('seq_user_id'::regclass) NOT NULL,
	username varchar(50) NOT NULL,
	password_hash varchar(200) NOT NULL,
	role varchar(50) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);

CREATE TABLE breweries (
    brewery_id serial,
    name varchar(255) ,
    address varchar(255) ,
    city varchar(50) ,
    zipcode varchar(15) ,
    phone_number varchar(15),
    description text,
    brewery_logo_url varchar(255),
    website_url varchar(255),
    user_id bigint,
    hours  varchar(255),
    CONSTRAINT pk_breweries_brewery_id PRIMARY KEY (brewery_id),
    CONSTRAINT fk_users_user_id FOREIGN KEY (user_id) REFERENCES users(user_id)
);


CREATE TABLE beers (
    beer_id serial,
    name varchar(500) NOT NULL,
    abv decimal,
    type varchar(255) NOT NULL,
    info text NOT NULL,
    img_url varchar,
    is_active boolean,
    brewery_id integer,
    CONSTRAINT pk_beers_beer_id PRIMARY KEY (beer_id),
    CONSTRAINT fk_breweries_brewery_id FOREIGN KEY (brewery_id) REFERENCES breweries(brewery_id)
);

CREATE TABLE brewery_beer (
    beer_id integer,
    brewery_id integer,
    CONSTRAINT pk_brewery_beer_brewery_id_beer_id PRIMARY KEY (beer_id, brewery_id)
);

CREATE TABLE reviews (
    reviews_id serial,
    name varchar(255) NOT NULL,
    description text NOT NULL,
    user_id integer,
    beer_id integer,
    rating int NOT NULL,
    create_date timestamp DEFAULT NOW(),
    CONSTRAINT pk_reviews_review_id PRIMARY KEY (reviews_id),
    CONSTRAINT fk_users_user_id FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT fk_beers_beer_id FOREIGN KEY (beer_id) REFERENCES beers(beer_id)
);

INSERT INTO users (username,password_hash,role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN');
INSERT INTO users (username,password_hash,role) VALUES ('brewer','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_BREWER');





COMMIT TRANSACTION;
