import React from 'react';

export default function Resume() {
  return (
    <div class="row">
      <div class="container-fluid">
        <h5 class="card-title text-center">Tech Stack</h5>
        <div class="row text-light justify-content-evenly">
          <div class="col-md-3 col-12">
            <div class="row justify-content-evenly h-100">
              <div class="card bg-dark mb-3">
                <div class="card-header text-center">Front End</div>
                <div class="card-body d-flex flex-wrap justify-content-center align-items-center">
                  <i class="devicon-bootstrap-plain-wordmark codeIcon mx-1 my-1"></i>
                  <i class="devicon-javascript-plain codeIcon mx-1 my-1"></i>
                  <i class="devicon-react-original-wordmark codeIcon mx-1 my-1"></i>
                  <i class="devicon-handlebars-plain-wordmark codeIcon mx-1 my-1"></i>
                  <i class="devicon-css3-plain-wordmark codeIcon mx-1 my-1"></i>
                  <i class="devicon-html5-plain-wordmark codeIcon mx-1 my-1"></i>
                  <i class="devicon-sass-original codeIcon mx-1 my-1"></i>
                  <i class="devicon-bulma-plain codeIcon mx-1 my-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-12">
            <div class="row justify-content-evenly h-100">
              <div class="card bg-dark mb-3">
                <div class="card-header text-center">Back End</div>
                <div class="card-body d-flex flex-wrap justify-content-center align-items-center">
                  <i class="devicon-express-original-wordmark codeIcon mx-1 my-1"></i>
                  <i class="devicon-mysql-plain-wordmark codeIcon mx-1 my-1"></i>
                  <i class="devicon-nodejs-plain-wordmark codeIcon mx-1 my-1"></i>
                  <i class="devicon-sequelize-plain-wordmark codeIcon mx-1 my-1"></i>
                  <i class="devicon-socketio-original-wordmark codeIcon mx-1 my-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-12">
            <div class="row justify-content-evenly h-100">
              <div class="card bg-dark mb-3">
                <div class="card-header text-center">Tools</div>
                <div class="card-body d-flex flex-wrap justify-content-center align-items-center">
                  <i class="devicon-bash-plain codeIcon mx-1 my-1"></i>
                  <i class="devicon-git-plain-wordmark codeIcon mx-1 my-1"></i>
                  <i class="devicon-heroku-original-wordmark codeIcon mx-1 my-1"></i>
                  <i class="devicon-jest-plain codeIcon mx-1 my-1"></i>
                  <i class="devicon-npm-original-wordmark codeIcon mx-1 my-1"></i>
                  <i class="devicon-vscode-plain-wordmark codeIcon mx-1 my-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
