import React from 'react';

const Resume = () => {
  const proficiencies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Git',
    'RESTful APIs',
    'Responsive Web Design',
    'Web Accessibility (WCAG)',
  ];

  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        You can download my resume <a href="../assets/resume.pdf" download>here</a>.
      </p>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
