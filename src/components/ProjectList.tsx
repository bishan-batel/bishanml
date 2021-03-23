import React from "react";

interface ProjectItemProps {
    name: string;
    link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ name, link }) => {
    return (
        <li className="project-item">
            <a href={link} className="project-item-link">
                {name}
            </a>
        </li>
    );
};

const ProjectList: React.FC = () => {
    const items: JSX.Element[] = [];
    
    // Test
    for (let i = 0; i < 100; i++) {
        items.push(<ProjectItem name={`Project Test ${i}`} link="/" />);
    }

    return (
        <div className="projects-container">
            <span className="project-list-header">Project List</span>
            <ul className="project-list">{items}</ul>
        </div>
    );
};

export default ProjectList;
