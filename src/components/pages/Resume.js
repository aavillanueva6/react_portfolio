import React from 'react';
import Devicon from '../Devicon';

const techStack = {
  frontEnd: [
    { id: 1, tech: 'bootstrap', devicon: 'devicon-bootstrap-plain-wordmark' },
    { id: 2, tech: 'javascript', devicon: 'devicon-javascript-plain' },
    { id: 3, tech: 'react', devicon: 'devicon-react-original-wordmark' },
    { id: 4, tech: 'handlebars', devicon: 'devicon-handlebars-plain-wordmark' },
    { id: 5, tech: 'css', devicon: 'devicon-css3-plain-wordmark' },
    { id: 6, tech: 'html', devicon: 'devicon-html5-plain-wordmark' },
    { id: 7, tech: 'sass', devicon: 'devicon-sass-original' },
    { id: 8, tech: 'bulma', devicon: 'devicon-bulma-plain' },
  ],
  backEnd: [
    { id: 1, tech: 'express', devicon: 'devicon-express-original-wordmark' },
    { id: 2, tech: 'mySQL', devicon: 'devicon-mysql-plain-wordmark' },
    { id: 3, tech: 'node', devicon: 'devicon-nodejs-plain-wordmark' },
    { id: 4, tech: 'Sequelize', devicon: 'devicon-sequelize-plain-wordmark' },
    { id: 5, tech: 'socket.io', devicon: 'devicon-socketio-original-wordmark' },
  ],
  tools: [
    { id: 1, tech: 'gitBash', devicon: 'devicon-bash-plain' },
    { id: 2, tech: 'github', devicon: 'devicon-git-plain-wordmark' },
    { id: 3, tech: 'heroku', devicon: 'devicon-heroku-original-wordmark' },
    { id: 4, tech: 'Jest', devicon: 'devicon-jest-plain' },
    { id: 5, tech: 'npm', devicon: 'devicon-npm-original-wordmark' },
    { id: 6, tech: 'vsCode', devicon: 'devicon-vscode-plain-wordmark' },
  ],
};

export default function Resume() {
  return (
    <div className="row">
      <div className="container-fluid">
        <h5 className="card-title text-center">Tech Stack</h5>
        <div className="row text-light justify-content-evenly">
          <div className="col-md-3 col-12">
            <div className="row justify-content-evenly h-100">
              <div className="card bg-dark mb-3">
                <div className="card-header text-center">Front End</div>
                <div className="card-body d-flex flex-wrap justify-content-center align-items-center">
                  <Devicon iconList={techStack.frontEnd} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="row justify-content-evenly h-100">
              <div className="card bg-dark mb-3">
                <div className="card-header text-center">Back End</div>
                <div className="card-body d-flex flex-wrap justify-content-center align-items-center">
                  <Devicon iconList={techStack.backEnd} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="row justify-content-evenly h-100">
              <div className="card bg-dark mb-3">
                <div className="card-header text-center">Tools</div>
                <div className="card-body d-flex flex-wrap justify-content-center align-items-center">
                  <Devicon iconList={techStack.tools} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
