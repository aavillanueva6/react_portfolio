import React from 'react';

function Project(props) {
const styles={
  techStackCard:{
    maxWidth:"18rem"
  }
}

  return (
    <div className="card my-2 pb-2 bg-dark text-center text-light">
      <div className="card-header fs-1">Technology Blog</div>
      <div className="row g-0">
        <div className="col-md-6">
          <img
            src="./assets/images/projects/techBlog.png"
            className="img-fluid rounded-start projCardImg"
            alt="..."
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">
              A blog for users to discuss the latest in the tech world
            </h5>
            <p className="card-text fst-italic fs-6">
              Note: This app is hosted on a free Heroku tier. Please allow a few
              moments to spin up.
            </p>
            <a
              href="https://aav-tech-blog.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Deployed App
            </a>
            <a
              href="https://github.com/aavillanueva6/TechBlog"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Github Repo
            </a>
            <div className="card-footer text-light">
              <h5 className="card-title text-center">Tech Stack</h5>
              <div className="row">
                <div className="col-6">
                  <div className="h-100 row justify-content-evenly">
                    <div
                      className="card bg-transparent border-light mb-3"
                      style={styles.techStackCard}
                    >
                      <div className="card-header">Front End</div>
                      <div className="card-body d-flex flex-wrap h-100 justify-content-center align-items-center">
                        <i className="devicon-bulma-plain codeIcon"></i>
                        <i className="devicon-javascript-plain codeIcon"></i>
                        <i className="devicon-handlebars-plain codeIcon"></i>
                        <i className="devicon-css3-plain codeIcon"></i>
                        <i className="devicon-sass-original codeIcon"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="h-100 row justify-content-evenly">
                    <div
                      className="card bg-transparent border-light mb-3"
                      // style={"maxWidth: 18rem"}
                    >
                      <div className="card-header">Back End</div>
                      <div className="card-body d-flex flex-wrap h-100 justify-content-center align-content-around align-items-center gap-0">
                        <i className="devicon-mysql-plain codeIcon"></i>
                        <i className="devicon-sequelize-plain codeIcon"></i>
                        <i className="devicon-nodejs-plain codeIcon"></i>
                        <i className="devicon-express-original codeIcon"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
