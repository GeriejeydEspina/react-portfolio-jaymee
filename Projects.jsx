import React from 'react';

function Projects() {
  return (
    <section className="#Projects">
            <center><h1>Projects</h1></center>
        <div className="project-body">
            <div className="project-1">
                <h2>Recipe App</h2>
                <p>
                    A web application that allows users to search <br />for, discover, 
                    and save recipes. Users can <br /> filter recipes by cuisine, 
                    ingredients, <br />or dietary restrictions
                </p>  
                <button><a href="#project1.com">View Project</a></button> 
            </div>
            <div className="project-2">
                <h2>Online Learning Platform</h2>
                <p>
                    A web-based platform that offers educational courses, <br />tutorials, 
                    and quizzes. Users can enroll in courses, <br /> track their progress, 
                    and interact with instructors <br /> and other learners.
                </p>   
                <button><a href="#project1.com">View Project</a></button> 
            </div>
            <div className="project-3">
                <h2>Task Management App</h2>
                <p>
                    A web application that helps users organize <br /> and manage their tasks,
                    projects, and deadlines. <br /> Users can create tasks, set priorities, <br />  
                    and track their progress.
                </p>
                <button><a href="#project1.com">View Project</a></button>    
            </div>
        </div>
    </section>
  );
}

export default Projects;