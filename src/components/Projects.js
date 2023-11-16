import React from "react"
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import "../styles/Projects.css"

function Projects() {
    const projects = {
        "Fiscalfolio": {
          bio:"A financial companion application for income and expense management. Visualize monthly/yearly finances and download detailed CSV reports.",
          frontend: "Chart.js, React, Apollo GraphQL Client, Tailwind CSS",
          backend: "Node.js, Apollo GraphQL Server, Express, MongoDB, Mongoose, JWT Token Authentication, Bcrypt",
          github: "https://github.com/jsong73/budget-planner",
          website: "https://fiscalfolio.herokuapp.com"
        },
        "Creme-décor": {
            bio:"A furniture e-commerce platform that simplifies browsing through categories and provides convenient access to order history",
            frontend: "React, Apollo GraphQL Client, Tailwind CSS",
            backend: "Node.js, Apollo GraphQL Server, Express, MongoDB, Mongoose, JWT Token Authentication, Bcrypt, Stripe API",
            github: "https://github.com/jsong73/creme-decor",
            website: "https://creme-decor.herokuapp.com"
        },
        "JournEZ": {
            bio:"Travel companion application facilitating trip planning, itinerary organization, and expense tracking on a user-friendly platform.",
            frontend: "React, Apollo GraphQL Client, Tailwind CSS",
            backend: "Node.js, Apollo GraphQL Server, Express, MongoDB, Mongoose, JWT Token Authentication, Bcrypt",
            github: "https://github.com/jsong73/journez-travel",
            website: "https://journez-travel.herokuapp.com"
        }
    }
    return(
        <div id="projects">
        <div className="container">
            <span className="container-header"> + projects </span>

            <div className="projects-container"> 
                <ul className="projects-columns">
                    {Object.keys(projects).map((project, i) =>(
                        <li className="projects-card" key={project}>
                            <div className="projects-header">
                                <WebAssetOutlinedIcon className="projects-folder"/>

                                <a href={projects[project]["github"]} target="_blank" rel="noopener noreferrer" >
                                    <GitHubIcon style={{ fontSize: 25, color: "rgba(245, 241, 237, 0.6)"}}></GitHubIcon>
                                </a>
                                
                                <a href={projects[project]["website"]} target="_blank" rel="noopener noreferrer" >
                                    <LanguageIcon style={{ fontSize: 25, color: "rgba(245, 241, 237, 0.6)"}}></LanguageIcon>
                                </a>

                                </div>

                                <div className="projects-title">{project}</div>
                                <div className="projects-bio">{projects[project]["bio"]}</div>
                                <div className="projects-frontend"> frontend: {projects[project]["frontend"]}</div>
                                <div className="projects-backend"> backend: {projects[project]["backend"]}</div>

                        </li>
                    ))}


                </ul>
            </div>

        </div>

        </div>
    )
}

export default Projects;