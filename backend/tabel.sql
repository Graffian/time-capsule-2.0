CREATE TABLE capsule_typ_text(
 id BIGSERIAL NOT NULL,
 capsuleName VARCHAR(100) NOT NULL,
 capsuleDesc VARCHAR(1000) NOT NULL,
 creatorName VARCHAR(100),
 capsuleType VARCHAR(100) NOT NULL,
 date VARCHAR(100) NOT NULL,
 time VARCHAR(100),
 capsuleInputText VARCHAR(700)
);