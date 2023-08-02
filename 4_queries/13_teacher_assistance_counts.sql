SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort, COUNT(assistance_requests.*)
FROM teachers 
JOIN assistance_requests on assistance_requests.teacher_id = teachers.id
JOIN students on assistance_requests.student_id = students.id
JOIN cohorts on students.cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
GROUP BY teachers.name, cohorts.name
ORDER BY teacher;