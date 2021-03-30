import React from "react";

interface ProjectItemProps {
    name: string;
    code: string;
    link?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = (props) => {
    const { name, code, link = code } = props;

    return (
        <li className="project-item">
            <a href={link} className="project-item-link">
                {name} </a>
        </li>
    );
};

const ProjectList: React.FC = () => {
    const items: JSX.Element[] = [
        <ProjectItem
            name="snake-rs"
            code="https://github.com/bishan-batel/snake-rs"
        />,
        <ProjectItem
            name="This Website"
            code="https://github.com/bishan-batel/bishanml"
        />,
        <ProjectItem
            name="Intro Cs Notes"
            code="https://github.com/bishan-batel/intro-cs-notes"
        />,
        <ProjectItem
            name="Tic Tac Toe"
            code="https://github.com/bishan-batel/tic-tac-toe"
        />,
        <ProjectItem
            name="Pog Discord Bot"
            code="https://github.com/bishan-batel/pogbot"
        />,
        <ProjectItem
            name="Rofl Discord Bot"
            code="https://github.com/bishan-batel/kishbot"
        />,
    ];

    return (
        <div className="projects-container">
            <span className="project-list-header">Project List</span>
            <ul className="project-list">{items}</ul>
        </div>
    );
};

export default ProjectList;
