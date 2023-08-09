const { Pool } = require('pg');
const pool = new Pool({
  user: 'janayma',
  password: '123',
  host: 'localhost',
  database: 'janayma'
});


const cohortName = process.argv[2] || 'JUL02';
const limit = process.argv[3] || 2;
const values = [`${cohortName}`, limit];

const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers 
JOIN assistance_requests on assistance_requests.teacher_id = teachers.id
JOIN students on assistance_requests.student_id = students.id
JOIN cohorts on students.cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
ORDER BY teacher
LIMIT $2;
`
pool.query(queryString, values)
  .then( res => {
    //console.log(res.rows)
    res.rows.forEach(teacher => {

      console.log(`${teacher.cohort}: ${teacher.teacher}`);
    })
  })