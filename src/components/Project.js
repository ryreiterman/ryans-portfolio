import React, { useState, useEffect } from "react";


const Projects = () => {

    const projects =[
        {

    }
]

    return (
      <>
        <div className="project-container">
          <div className="project-row">
            <div className="project-image">
              <img
                src="https://res.cloudinary.com/ryanphotos/image/upload/v1618279302/demos/sesame_memory_game_screenshot_600px_wleftr.jpg"
                alt="Project screenshot"
              />
            </div>
            <div className="project-text">
              <h3>Sesame Street Memory Game</h3>
              <p>
                Compete against a friend to see who can match the most cards
                before times runs out!
              </p>
              <p>
                Github Repo
                <br />
                <a
                  target="new"
                  href="https://github.com/ryreiterman/sesame-street-memory-game"
                >
                  github.com/ryreiterman/sesame-street-memory-game
                </a>
              </p>

              <p>
                Project Link
                <br />
                <a
                  target="new"
                  href="https://ryreiterman.github.io/sesame-street-memory-game/"
                >
                  ryreiterman.github.io/sesame-street-memory-game
                </a>
              </p>
            </div>
          </div>

          <div className="project-row">
            <div className="project-image">
              <img
                src="https://res.cloudinary.com/ryanphotos/image/upload/v1618279302/demos/movies_app_screenshot_600px_zwtaqg.jpg"
                alt="Project screenshot"
              />
            </div>
            <div className="project-text">
              <h3>Movie Search App</h3>
              <p>
                Search a movie database and create a list of your favorite
                movies to share with friends.
              </p>
              <p>
                Github Repo
                <br />
                <a
                  target="new"
                  href="https://github.com/ryreiterman/ryans-movie-search-app"
                >
                  github.com/ryreiterman/ryans-movie-search-app
                </a>
              </p>
              <p>
                Project Link
                <br />
                <a
                  target="new"
                  href="https://ryans-movie-search-app.herokuapp.com/"
                >
                  ryans-movie-search-app.herokuapp.com
                </a>
              </p>
            </div>
          </div>

          <div className="project-row">
            <div className="project-image">
              <img
                src="https://res.cloudinary.com/ryanphotos/image/upload/v1618279302/demos/jeopardy_screenshot_600px_tg8wyr.jpg"
                alt="Project screenshot"
              />
            </div>
            <div className="project-text">
              <h3>Jeopardy App</h3>
              <p>
                Pick a random question and see how many you can get right. Add a
                point for each correct answer, subtract one for every incorrect
                guess.
              </p>
              <p>
                Github Repo
                <br />
                <a
                  target="new"
                  href="https://github.com/ryreiterman/react-jeopardy"
                >
                  github.com/ryreiterman/react-jeopardy
                </a>
              </p>
              <p>
                Project Link
                <br />
                <a
                  target="new"
                  href="https://ryans-jeopardy-app.herokuapp.com/"
                >
                  ryans-jeopardy-app.herokuapp.com
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
              <h3>Ryan's Super Cool Photo Galleries</h3>
              <p>
                Check out all of my favorite pics from my photography portfolio.
              </p>
              <p>
                Github Repo
                <br />
                <a
                  target="new"
                  href="https://github.com/ryreiterman/final-project-photo-gallery"
                >
                  github.com/ryreiterman/final-project-photo-gallery
                </a>
              </p>

              <p>
                Project Link
                <br />
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