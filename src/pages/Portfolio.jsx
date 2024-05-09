// Portfolio.jsx
import React from 'react';
import Project from '../components/Project'; // Use correct path to Project component

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {/* Add multiple Project components here */}
        <Project
          title="Hiragana Practice"
          image="project-image.jpg"
          deployedLink="https://jakehigham.github.io/Hiragana-Practice/"
          githubLink="https://github.com/JakeHigham/Hiragana-Practice"
        />
      </div>
    </section>
  );
}

export default Portfolio;
