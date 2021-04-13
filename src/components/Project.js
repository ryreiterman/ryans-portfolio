import React, { useState, useEffect } from "react";


const Projects = () => {

    const projects =[{}]

    return (
      <>
        <div className="project-container">
          <div className="project-row">
            <div className="project-image">
              <img
                src="https://res.cloudinary.com/ryanphotos/image/upload/v1618273708/demos/final_project_screenshot_600px_ljus0v.jpg"
                alt="Project screenshot"
              />
            </div>
            <div className="project-text">
              <h3>Project 1</h3>
              <p>Description: A game that is awesome</p>
              <p>
                Link:{" "}
                <a
                  target="new"
                  href="https://final-project-photo-gallery.herokuapp.com/"
                >
                  final-project-photo-gallery.herokuapp.com
                </a>
              </p>
            </div>
          </div>

          <div className="project-row">
            <div className="project-image">
              <img
                src="https://res.cloudinary.com/ryanphotos/image/upload/v1618273708/demos/final_project_screenshot_600px_ljus0v.jpg"
                alt="Project screenshot"
              />
            </div>
            <div className="project-text">
              <h3>Project 2</h3>
              <p>Description: A game that is awesome</p>
              <p>
                Link:{" "}
                <a
                  target="new"
                  href="https://final-project-photo-gallery.herokuapp.com/"
                >
                  final-project-photo-gallery.herokuapp.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    );

}

export default Projects;