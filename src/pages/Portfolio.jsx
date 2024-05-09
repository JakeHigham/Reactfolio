import React from 'react';
import Card from '../components/Card'; 
import projects from '../projectData';

function Portfolio() {
    return (
        <section>
            <h1>My Portfolio</h1>
            <div className="project-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {projects.map((project) => (
                    <Card key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
