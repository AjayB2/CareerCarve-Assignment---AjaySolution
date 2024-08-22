import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MentorCard from '../components/MentorCard';
import StudentCard from '../components/StudentCard';

const App = () => {
  const [mentors, setMentors] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/mentors')
      .then(response => {
        setMentors(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:3000/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleMentorSelect = (mentor) => {
    setSelectedMentor(mentor);
  };

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
  };

  const handleSchedule = () => {
    if (selectedMentor && selectedStudent) {
      axios.post('http://localhost:3000/schedule', {
        studentId: selectedStudent.id,
        mentorId: selectedMentor.id,
        duration: 30,
        date: '2023-03-01',
        time: '10:00'
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    }
  };

  return (
    <div>
      <h1>CareerCarve</h1>
      <h2>Mentors</h2>
      <ul>
        {mentors.map((mentor) => (
          <li key={mentor.id}>
            <MentorCard mentor={mentor} />
            <button onClick={() => handleMentorSelect(mentor)}>Select</button>
          </li>
        ))}
      </ul>
      <h2>Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <StudentCard student={student} />
            <button onClick={() => handleStudentSelect(student)}>Select</button>
          </li>
        ))}
      </ul>
      <button onClick={handleSchedule}>Schedule Session</button>
    </div>
  );
};

export default App;