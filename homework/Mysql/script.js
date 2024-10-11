// Create database CODEACADEMY_DB;
// USE CODEACADEMY_DB;

// -- create code academy table

// Create table CodeAcademy(
// code_id int auto_increment primary key,
// academy_name varchar(50) not null,
// academy_location varchar(50),
// found_date date,
// email varchar(50)
// );
// insert into Codeacademy (academy_name,academy_location,found_date,email)
// values('CodeAcademy','28may','2015-01-01','@code.edu.az');




// ALTER TABLE codeacademy
// add COLUMN rooms varchar(50);




// create table staff(
// staff_id int auto_increment primary key,
// n_staff_workers int,
// net_admin_n varchar(50),
// boss_name varchar(50),
// code_id int,
// foreign key (code_id)
// references  CodeAcademy(code_id)
// );

// insert into staff (n_staff_workers,net_admin_n)
// values(200,'Azer');


// Create table scolarshipprograms(
// cp_id int auto_increment primary key,
// numberofSP int,
// sponsors varchar(50),
// code_id int,
// foreign key (code_id)
// references CodeAcademy(code_id)
// );

// insert into scolarshipprograms (numberofSP,sponsors)
// values(2,'IRIA'),
// (3,'x'),
// (4,'y');

// SELECT sponsors
// FROM scolarshipprograms
// INNER JOIN Technest
// ON scolarshipprograms.sponsors = Technest.sponsors;

// create table Technest(
// tech_id int auto_increment primary key,
// num_of_students int,
// sponsors varchar(50),
// discount int,
// cp_id int,
// foreign key (cp_id)
// references scolarshipprograms(code_id)
// );
// insert into Technest (num_of_students,sponsors,discount)
// values(75,'IRIA',70);

// create table CodeForFuture(
// codef_id int auto_increment primary key,
// uni_name varchar(50),
// num_of_students int,
// sponsors varchar(50),
// discount int,
// cp_id int,
// foreign key (cp_id)
// references scolarshipprograms(code_id)
// );
// insert into CodeForFuture (num_of_students,sponsors,discount)
// values(200,'IRIA',100);

// insert into CodeForFuture (uni_name)
// values
// ('ASOIU'),
// ('AzTU')
// ;

// create table education(
// education_id int auto_increment primary key,
// quality varchar(50),
// code_id int,
// foreign key (code_id)
// references CodeAcademy(code_id)
// );
// insert into education (quality)
// values ('the best');

// create table teachers(
// teachers_id int auto_increment primary key,
// teachers_name varchar(100),
// teachers_age int,
// teachers_speciality varchar(100),
// education_id int,
// foreign key (education_id)
// references education(education_id)
// );


// create table fieldsOfStudy(
//  fieldsOfStudy_id int auto_increment primary key,
//  n_of_fields int,
//  education_id int,
// foreign key (education_id)
// references education(education_id)
// );




// create table CyberSecurity(
// CS_id int auto_increment primary key,
// CSadvantage varchar(50),
// CS_jobs varchar(100),
// CSbasics varchar(100),
// CSteams varchar(100),
// fieldsOfStudy_id int ,
// foreign key (fieldsOfStudy_id)
// references fieldsOfStudy(fieldsOfStudy_id),
// Linux_id int ,
// foreign key (Linux_id)
// references Linux(Linux_id)
// );


// create table Linux(
// Linux_id int auto_increment primary key,
// Distro_name varchar(50),
// register_demand varchar(50),
// typeOfL varchar(50)
// );



// create table students(
// students_id int auto_increment primary key,
// students_name varchar(100),
// students_age int,
// education_id int,
// foreign key (education_id)
// references education(education_id),
// CS_id int ,
// foreign key (CS_id)
// references CyberSecurity(CS_id),
// teachers_id int ,
// foreign key (teachers_id)
// references teachers(teachers_id)
// );



// create table programming(
// programming_id int auto_increment primary key,
// programmingAdvantage varchar(50),
// programming_jobs varchar(100),
// fieldsOfStudy_id int ,
// foreign key (fieldsOfStudy_id)
// references fieldsOfStudy(fieldsOfStudy_id)
// );
// insert into programming(programming_jobs)
// values('front_end'),
// ('back_end');


// create table data_analytics(
// data_analytics_id int auto_increment primary key,
// fieldsOfStudy_id int ,
// foreign key (fieldsOfStudy_id)
// references fieldsOfStudy(fieldsOfStudy_id)
// );


// create table design(
// design_id int auto_increment primary key,
// fieldsOfStudy_id int ,
// foreign key (fieldsOfStudy_id)
// references fieldsOfStudy(fieldsOfStudy_id)
// );

// create table digital_marketing(
// digital_marketing_id int auto_increment primary key,
// fieldsOfStudy_id int ,
// foreign key (fieldsOfStudy_id)
// references fieldsOfStudy(fieldsOfStudy_id)
// );


// select scolarshipprograms.numberofSP, scolarshipprograms.sponsors 
// from scolarshipprograms 
// join Technest on scolarshipprograms.sponsors = Technest.sponsors ;
