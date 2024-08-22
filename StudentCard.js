import React from 'react';

const StudentCard = ({ student }) => {
  return (
    <div className="card">
      <h2>{student.name}</h2>
      <p>{student.bio}</p>
      <p>Interests: {student.interests}</p>
    </div>
  );
};

export default StudentCard;