// src/components/Team.jsx
import React from 'react';
import MemberCard from './MemberCard';
import { teamMembers } from '../data/teamData';

function Team() {
  return (
    <div>
      <h1>🚀 Our Team</h1>
      <div className="team-grid">
        {teamMembers.map(member => (
          <MemberCard
            key={member.id}
            pic={member.pic}
            name={member.name}
            role={member.role}
            skills={member.skills}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
