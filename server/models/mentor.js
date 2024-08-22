const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'careercarve'
});

db.connect((err) => {
  if (err) {
    console.error('error connecting:', err);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

const Mentor = {
  getAll: () => {
    const query = `SELECT * FROM mentors`;
    return db.query(query);
  },
  getById: (id) => {
    const query = `SELECT * FROM mentors WHERE id = ?`;
    return db.query(query, [id]);
  }
};

module.exports = Mentor;