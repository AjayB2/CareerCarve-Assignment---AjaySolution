import React from 'react';

const MentorCard = ({ mentor }) => {
  return (
    <div className="card">
      <h2>{mentor.name}</h2>
      <p>{mentor.bio}</p>
      <p>Expertise: {mentor.expertise}</p>
    </div>
  );
};

export default MentorCard;