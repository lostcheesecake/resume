import React from 'react'

const ContentProjectItem = ({ project }) => {
  const skills = project.skills.split(' ')
  const skillClasses = 'bg-dark text-light rounded mr-2 px-2 my-1'

  return (
    <div className="content-project-item">
      <a href={project.deployed} target="_blank" rel="noopener noreferrer">
        <span className="font-weight-bold">{project.title}: </span>
        <span>{project.summary}</span>
      </a>
      <div className="d-flex flex-wrap mb-3">
        {skills.map((skill, index) => <span key={index} className={skillClasses}>{skill}</span>)}
      </div>
      <ul>
        {project.description.map((bullet, index) => <li key={index}>{bullet}</li>)}
      </ul>
    </div>
  )
}

export default ContentProjectItem
