import React from 'react';
import './TeamSection.css'; // Assuming you have a CSS file for styling

const TeamSection: React.FC = () => {
    const teamMembers = [
        {
            name: 'Alice Johnson',
            role: 'CEO',
            image: '/images/alice.jpg', // Replace with actual image path
            description: 'Alice has over 10 years of experience in the cleaning industry.'
        },
        {
            name: 'Bob Smith',
            role: 'Operations Manager',
            image: '/images/bob.jpg', // Replace with actual image path
            description: 'Bob ensures that all cleaning operations run smoothly.'
        },
        {
            name: 'Cathy Brown',
            role: 'Customer Service',
            image: '/images/cathy.jpg', // Replace with actual image path
            description: 'Cathy is dedicated to providing the best customer service.'
        }
    ];

    return (
        <section className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div className="team-member" key={index}>
                        <img src={member.image} alt={member.name} className="team-member-image" />
                        <h3>{member.name}</h3>
                        <h4>{member.role}</h4>
                        <p>{member.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;