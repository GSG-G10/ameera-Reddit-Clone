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
    title VARCHAR(255) NOT NULL,
    content VARCHAR(2000) NOT NULL,
    imageUrl VARCHAR(2000) NOT NULL,
    vote INTEGER NOT NULL
);



insert into users (name, email,username, password) values ('jmelody0', 'emckilroe0@flavors.me', 'Ok7865m4U','eGjcrrw4ip');
insert into users (name, email, username,password) values ('akerswill1', 'gkingsnode1@booking.com', 'Ok7865m4U','bAisYN');
insert into users (name, email,username, password) values ('pradeliffe2', 'maustins2@privacy.gov.au', 'Ok7865m4U', 'Ok7865m4U');


insert into posts (user_id, title,content, imageUrl,vote) values (1,'test post','test post sdsd','https://www.image.com',0);

insert into posts (user_id, title,content, imageUrl,vote) values (2,'test post1','test post 222','https://www.image2.com',2);

insert into posts (user_id, title,content, imageUrl,vote) values (3,'test post2','test post 3333','https://www.image1.com',0);


COMMIT;