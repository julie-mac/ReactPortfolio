import React from 'react';

const ProjectItem = ({ title, image, description, deployedLink, githubLink }) => {
    return (
      <div className="card mb-4" style={{width:"300px"}}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <a href={deployedLink} className="btn btn-primary mr-2" target="_blank" rel="noopener noreferrer">
            View App
          </a>
          <a href={githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    );
  };
  

export default ProjectItem;

