CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(40) NOT NULL UNIQUE,
    password CHAR(40) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

 -- Modify initial value and increment
 ALTER SEQUENCE user_id_seq RESTART WITH 400000 INCREMENT BY 1;

CREATE TABLE usergroup (
    id SERIAL PRIMARY KEY,
    group_name VARCHAR(255) NOT NULL 
);

 -- Modify initial value and increment
 ALTER SEQUENCE usergroup_id_seq RESTART WITH 100000 INCREMENT BY 1;

CREATE TABLE user_usergroup {
    id SERIAL PRIMARY KEY,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (group_id) REFERENCES usergroup(id)
}

CREATE TABLE petitioner {
    id SERIAL PRIMARY KEY,
    petitioner_name varchar(255) NOT NULL,
}

 -- Modify initial value and increment
 ALTER SEQUENCE petitioner_id_seq RESTART WITH 200000 INCREMENT BY 1;

CREATE TABLE parcel {
    id SERIAL PRIMARY KEY,
    parcel_id varchar(40) NOT NULL,
    curr_zoning_abbr varchar(10) NOT NULL,
    curr_zoning_full varchar(255) NOT NULL,
    address_1 varchar(255) NOT NULL,
    address_2 varchar(255), 
    city varchar(255) NOT NULL,
    parcel_state varchar(255) NOT NULL,
    parcel_state_abbr char(2) NOT NULL,
    zip_code varchar(10) NOT NULL,
    google_map_link nvarchar(1700)
}

CREATE TABLE cases {
    id SERIAL PRIMARY KEY, 
}
CREATE TABLE events {
    id SERIAL PRIMARY KEY,
    FOREIGN KEY (petitioner_id) REFERENCES petitioner(id),

}