// src/components/MemberCard.jsx
import React from 'react';

function MemberCard({ pic, name, role, skills }) {
  return (
    <>
      <div className="card">
        <div className="card-img-container">
          <img src={pic} alt={name} />
        </div>
        <div className="card-content">
          <h2>{name}</h2>
          <p><strong>Role:</strong> {role}</p>
          <div class="skills">
            <h3>Skills</h3>
            <ul>
              {skills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </div>


      {/* <div className="card">
      <img src={pic} alt={name} />
      <h2>{name}</h2>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Skills:</strong></p>
      <ul>
        {skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
    </div> */}
    </>
  );
}

export default MemberCard;
