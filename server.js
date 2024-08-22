const express = require('express');
const app = express();
const mentorRouter = require('./routes/mentor');
const studentRouter = require('./routes/student');

app.use(express.json());

app.use('/mentors', mentorRouter);
app.use('/students', studentRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});