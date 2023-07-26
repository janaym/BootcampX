-- select all students from one cohort
SELECT id, name 
FROM students
WHERE cohort_id = 1
ORDER BY name;

-- number of students in the first three cohorts
SELECT COUNT(id)
FROM students
WHERE cohort_id <= 3;

-- students with no associated email or phone number 
SELECT name, id, cohort_id
FROM students
WHERE email IS NULL
OR phone IS NULL;

-- students without gmail accounts who do not have an associated phone no.
SELECT name, email, id, cohort_id
FROM students
WHERE email NOT LIKE '%gmail.com'
AND phone IS NULL;

-- currently enrolled students
SELECT name, id, cohort_id
FROM students
WHERE end_date IS NULL
ORDER BY cohort_id;

-- graduated students without a linked github account
SELECT name, email, phone 
FROM students
WHERE github IS NULL 
AND end_date IS NOT NULL;
