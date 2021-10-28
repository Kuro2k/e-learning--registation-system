DROP SCHEMA IF EXISTS education_registration; 
CREATE SCHEMA education_registration; 
USE education_registration;

# create table and constraint for database from here
CREATE TABLE user_system(
	id CHAR(7),
    ssn CHAR(13) UNIQUE NOT NULL,
    last_name VARCHAR(32),
    first_name VARCHAR(64) NOT NULL,
    gender VARCHAR(7), 
    dob DATE,
    phone_number VARCHAR(12),
    address VARCHAR(128),
    username VARCHAR(64) UNIQUE NOT NULL,
    password_user VARCHAR(64) NOT NULL,
    email VARCHAR(64),
    PRIMARY KEY (id),
    CHECK (gender in ("Male", "Female", "Other"))
);

CREATE TABLE supporter(
	id CHAR(7),
    salary INT,
    working_time TIME,
    CHECK (salary > 0),
    CHECK (working_time >= 8 and working_time <= 18),
    PRIMARY KEY (ID),
    FOREIGN KEY (ID) REFERENCES user_system(id)
);

CREATE TABLE learner(
	id	CHAR(7),
    join_date	DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES user_system(id)
);

CREATE TABLE lecturer(
	id 	CHAR(7),
    salary 	INT,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES user_system(id) 
);

CREATE TABLE field(
	id CHAR(4),
    name VARCHAR(64) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE course(
	id CHAR(6),
    name VARCHAR(64),
    tuition_fee DECIMAL(10,2),
    start_date DATE,
    course_length INT,
    CHECK (tuition_fee > 0),
    CHECK (course_length > 0),
    PRIMARY KEY (id)
);

CREATE TABLE documents(
	courseid 	CHAR(6),
    serial		CHAR(2),
    name 	CHAR(64) NOT NULL,
    type 	VARCHAR(24), 
    PRIMARY KEY (courseid, serial),
    FOREIGN KEY (courseid) REFERENCES course(id)
);

CREATE TABLE test(
	courseid CHAR(6),
    testid	CHAR(3),
    type 	VARCHAR(24),
    duration INT NOT NULL,
    CHECK (duration >= 15 and duration <= 200),
    PRIMARY KEY (courseid, testid),
    FOREIGN KEY (courseid) REFERENCES course(id)
);

ALTER TABLE learner
ADD COLUMN (
	supportid CHAR(7) NOT NULL,
	FOREIGN KEY (supportid) REFERENCES user_system(id)
	);
    
CREATE TABLE enrolls(
	learnerid	CHAR(7),
    courseid	CHAR(6),
    PRIMARY KEY (learnerid, courseid),
    FOREIGN KEY (learnerid) REFERENCES learner(id),
    FOREIGN KEY (courseid)	REFERENCES course(id)
);

CREATE TABLE rates(
	learnerid	CHAR(7),
    courseid	CHAR(6),
    PRIMARY KEY (learnerid, courseid),
    FOREIGN KEY (learnerid) REFERENCES learner(id),
    FOREIGN KEY (courseid)	REFERENCES course(id)
);

CREATE TABLE teaches(
	lecturerid	CHAR(7),
    courseid	CHAR(6),
    PRIMARY KEY (lecturerid, courseid),
    FOREIGN KEY (lecturerid) REFERENCES lecturer(id),
    FOREIGN KEY (courseid) REFERENCES course(id)
);

CREATE TABLE course_in_field(
	fieldid 	CHAR(4),
    courseid	CHAR(6),
    PRIMARY KEY (fieldid, courseid),
    FOREIGN KEY (fieldid) REFERENCES field(id),
    FOREIGN KEY (courseid) REFERENCES course(id)
);

CREATE TABLE prerequires(
	precourseid 	CHAR(6),
    courseid		CHAR(6),
    PRIMARY KEY (precourseid, courseid),
    FOREIGN KEY (precourseid) REFERENCES course(id),
    FOREIGN KEY (courseid) REFERENCES course(id)
);

CREATE TABLE takes(
	learnerid 	CHAR(7),
    courseid	CHAR(6),
    testid		CHAR(3), 
    test_date	DATE NOT NULL,
    score		INT NOT NULL,
    PRIMARY KEY (learnerid, courseid, testid),
    FOREIGN KEY (courseid, testid) REFERENCES test(courseid, testid),
    CHECK (score >= 0 and score <= 10)
);

CREATE TABLE enrolls_info(
	learnerid 	CHAR(7),
    courseid 	CHAR(6),
    enrollment_date	 DATE,
    enrollment_status VARCHAR(24) NOT NULL,
    payment_status 	VARCHAR(24) NOT NULL,
    fee 	DECIMAL(10,2) NOT NULL,
    start_date DATE,
    PRIMARY KEY (learnerid, courseid, enrollment_date),
    FOREIGN KEY (learnerid, courseid) REFERENCES enrolls(learnerid, courseid),
    CHECK (payment_status in ("Complete", "Pending", "Canceled")),
    CHECK (enrollment_status in ("Enrolled", "Postponed", "Canceled")),
    CHECK (fee > 0)
);

CREATE TABLE details_rates(
	learnerid	CHAR(7),
    courseid 	CHAR(6),
    evaluation_date 	DATETIME,
    star_num	INT NOT NULL,
    comment 	VARCHAR(1024),
    PRIMARY KEY (learnerid, courseid, evaluation_date),
    FOREIGN KEY (learnerid, courseid) REFERENCES rates(learnerid, courseid),
    CHECK (star_num >= 1 and star_num <= 5)
);

CREATE TABLE degree(
	lecturerid 	CHAR(7),
    field		VARCHAR(128),
    level		VARCHAR(128),
    PRIMARY KEY (lecturerid, field, level),
    FOREIGN KEY (lecturerid) REFERENCES lecturer(id)
);


CREATE TABLE support_session(
	learnerid	CHAR(7),
    start_time  DATETIME,
    finish_time DATETIME,
    content		VARCHAR(1024),
    PRIMARY KEY (learnerid, start_time, finish_time),
    FOREIGN KEY (learnerid) REFERENCES learner(id)
);
