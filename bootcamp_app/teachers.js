const { Pool } = require('pg');
const pool = new Pool({
  user: 'janayma',
  password: '123',
  host: 'localhost',
  database: 'janayma'
});

const args = process.argv.slice(2);
//console.log(args);
pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers 
JOIN assistance_requests on assistance_requests.teacher_id = teachers.id
JOIN students on assistance_requests.student_id = students.id
JOIN cohorts on students.cohort_id = cohorts.id
WHERE cohorts.name = '${args[0] || 'JUL02'}'
ORDER BY teacher;
`)
.then( res => {
  //console.log(res.rows)
  res.rows.forEach(teacher => {

    console.log(`${teacher.cohort}: ${teacher.teacher}`);
  })
})