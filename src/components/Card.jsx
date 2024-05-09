import React from 'react';
import githubIcon from '../media/github-mark.png'; 
import './Card.css';

function Card({ project }) {
    return (
        <div className="project-card">
            <a href={project.link} className="project-title" target="_blank" rel="noopener noreferrer">
                {project.title}
            </a>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <p className="project-description">{project.description}</p>
            <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub Link" className="github-icon" />
            </a>
        </div>
    );
}

export default Card;
