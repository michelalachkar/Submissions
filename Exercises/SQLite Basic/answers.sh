"select * from students"

"SELECT name from students"

"SELECT * FROM students WHERE Age>30"

"SELECT name FROM students WHERE Gender='F' AND Age>30"

"SELECT Points FROM students WHERE name  = 'Alex'"

"INSERT INTO students (Name, Age,Points,Gender) VALUES ('Michel',26,1000,'M')"

"UPDATE students SET Points = Points +20 WHERE name = 'Basma'"

"UPDATE students SET Points = Points -10 WHERE name = 'Alex'"

"CREATE TABLE graduates (
    ID INT AUTO_INCREMENT NOT NULL  PRIMARY KEY, 
    Name TEXT NOT NULL UNIQUE, 
    Age INT, 
    Gender TEXT ,
    Points INT, 
    Graduation TEXT)"

"INSERT INTO graduates (ID, Name, Age, Gender, Points)
   SELECT ID, Name, Age, Gender, Points 
   FROM students
   WHERE Name = 'Layal'"

"UPDATE graduates
   SET Graduation = '08/09/2018'
   where Name = 'Layal'"

"DELETE from students WHERE Name = 'Layal'"

"CREATE TABLE data (
   Employee_Name TEXT,
   Company_Name TEXT,
   Company_Date TEXT)"

"SELECT employees.Name
    FROM employees
    INNER JOIN companies ON employees.Company=companies.name
    WHERE companies.date < 2000 "

"SELECT companies.Name
    FROM companies
    INNER JOIN employees ON companies.Name=employees.Company
    WHERE employees.Role = 'Graphic Designer'"

"SELECT Name FROM (SELECT Name ,MAX(Points) FROM students)"

"SELECT AVG(Points) as AveragePoints FROM students"

"SELECT COUNT(Name) FROM students WHERE Points = 500"

"SELECT name FROM students WHERE name LIKE '%s%'"

"SELECT name FROM students ORDER BY Points DESC"

