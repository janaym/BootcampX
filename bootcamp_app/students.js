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
SELECT students.id, students.name as name, cohorts.name as cohort_name
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name =  '${args[0]}'
LIMIT ${args[1] || 5};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
  })
} )