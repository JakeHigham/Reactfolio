import githubIcon from '../src/media/github-mark.png'; 
import './card.css'

export default function Card({ app }) {
    return (
        <div className="project-card">
            
            <a href={app.deployedLink} className="project-title" target="_blank" rel="noopener noreferrer">
                {app.name}
            </a>

            <img src={app.img} alt={app.name} className="project-image" />

            <p className="project-description">{app.description}</p>

            <a href={app.gitLink} target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub Link" className="github-icon" />
            </a>
            
        </div>
    );
}
