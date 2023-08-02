SELECT assignments.day, COUNT(assignments.*), sum(assignments.duration) as duration
FROM assignments
GROUP BY assignments.day
ORDER BY day;