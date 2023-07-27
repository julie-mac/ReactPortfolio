import React from 'react';
import ProjectItem from './ProjectItem';
import starsignsImage from '../assets/starsigns.jpg';
import plannerImage from '../assets/planner.jpg';
import tastybytesImage from '../assets/tastybytes.jpg';
import noteplusImage from '../assets/noteplus.jpg';
import genpassImage from '../assets/genpass.jpg';
import preworkImage from '../assets/prework.jpg';

const Portfolio = () => {
  //Array of objects containing project data for portfolio
  const projects = [
    {
      title: 'StarSigns',
      image: starsignsImage,
      description: 'A website utilizing different APIs to tell you about your zodiac sign and its ruling planet.',
      deployedLink: 'https://kemcclen.github.io/StarSigns/',
      githubLink: 'https://github.com/kemcclen/StarSigns',
    },
    {
      title: 'Daily Planner',
      image: plannerImage,
      description: 'A workday scheduler using local storage to help you plan out your day.',
      deployedLink: 'https://julie-mac.github.io/daily-planner/',
      githubLink: 'https://github.com/julie-mac/daily-planner',
    },
    {
      title: 'Tasty Bytes',
      image: tastybytesImage,
      description: 'A recipe sharing platform using a SQL database.',
      deployedLink: 'https://tastybyts-1e5618d2a801.herokuapp.com/recipes',
      githubLink: 'https://github.com/kemcclen/TastyBytes',
    },
    {
      title: 'NotePLUS',
      image: noteplusImage,
      description: 'A note-taking application that allows users to store any notes or tasks that need to be completed.',
      deployedLink: 'https://note-plus.herokuapp.com/',
      githubLink: 'https://github.com/julie-mac/note-plus',
    },
    {
      title: 'Password Generator',
      image: genpassImage,
      description: 'Allows the user to choose included character sets included in their randomly generated password.',
      deployedLink: 'https://julie-mac.github.io/password-generator/',
      githubLink: 'https://github.com/julie-mac/password-generator',
    },
    {
      title: 'Prework Study Guide',
      image: preworkImage,
      description: 'My first-ever static website containing notes for bootcamp students.',
      deployedLink: 'https://julie-mac.github.io/prework-study-guide/',
      githubLink: 'https://github.com/julie-mac/prework-study-guide',
    },
  ];

  // Maps through each project in the array to create a ProjectItem
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
