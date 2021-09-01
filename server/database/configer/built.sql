BEGIN;
DROP TABLE IF EXISTS users, posts CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(1000) NOT NULL,
    content VARCHAR(1000) NOT NULL,
    imageUrl TEXT NOT NULL,
    vote INTEGER NOT NULL
);



insert into users (name, email,username, password) values ('hanin', 'hanin@flavors.me', 'hanin23','eGjcrrw4ip');
insert into users (name, email, username,password) values ('yasmin', 'yasmin@booking.com', 'yasmin33','bAisYN');
insert into users (name, email,username, password) values ('shireen', 'shireen@privacy.gov.au', 'shireen', 'Ok7865m4U');


insert into posts (user_id, title,content, imageUrl,vote) values (1,'test post','test post 123','https://www.image.com',0);

insert into posts (user_id, title,content, imageUrl,vote) values (2,'test post1','test post 222','https://www.image2.com',2);

insert into posts (user_id, title,content, imageUrl,vote) values (3,'test post2','test post 3333','https://www.image1.com',0);


COMMIT;