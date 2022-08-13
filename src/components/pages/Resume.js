import React from 'react';
import TechStackCard from '../TechStackCard';
import TechStackContainer from '../TechStackContainer';

const techStack = {
  name: 'Proficiencies',
  stacks: [
    {
      id: 1,
      stack: {
        type: 'Front End',
        icons: [
          {
            id: 1,
            tech: 'bootstrap',
            devicon: 'devicon-bootstrap-plain-wordmark',
          },
          {
            id: 2,
            tech: 'javascript',
            devicon: 'devicon-javascript-plain',
          },
          {
            id: 3,
            tech: 'react',
            devicon: 'devicon-react-original-wordmark',
          },
          {
            id: 4,
            tech: 'handlebars',
            devicon: 'devicon-handlebars-plain-wordmark',
          },
          {
            id: 5,
            tech: 'css',
            devicon: 'devicon-css3-plain-wordmark',
          },
          {
            id: 6,
            tech: 'html',
            devicon: 'devicon-html5-plain-wordmark',
          },
          {
            id: 7,
            tech: 'sass',
            devicon: 'devicon-sass-original',
          },
          {
            id: 8,
            tech: 'bulma',
            devicon: 'devicon-bulma-plain',
          },
        ],
      },
    },
    {
      id: 2,
      stack: {
        type: 'Back End',
        icons: [
          {
            id: 1,
            tech: 'express',
            devicon: 'devicon-express-original-wordmark',
          },
          {
            id: 2,
            tech: 'mySQL',
            devicon: 'devicon-mysql-plain-wordmark',
          },
          {
            id: 3,
            tech: 'node',
            devicon: 'devicon-nodejs-plain-wordmark',
          },
          {
            id: 4,
            tech: 'Sequelize',
            devicon: 'devicon-sequelize-plain-wordmark',
          },
          {
            id: 5,
            tech: 'socket.io',
            devicon: 'devicon-socketio-original-wordmark',
          },
          {
            id: 6,
            tech: 'mongodb',
            devicon: 'devicon-mongodb-plain-wordmark',
          },
        ],
      },
    },
    {
      id: 3,
      stack: {
        type: 'Tools',
        icons: [
          {
            id: 1,
            tech: 'gitBash',
            devicon: 'devicon-bash-plain',
          },
          {
            id: 2,
            tech: 'github',
            devicon: 'devicon-git-plain-wordmark',
          },
          {
            id: 3,
            tech: 'heroku',
            devicon: 'devicon-heroku-original-wordmark',
          },
          {
            id: 4,
            tech: 'Jest',
            devicon: 'devicon-jest-plain',
          },
          {
            id: 5,
            tech: 'npm',
            devicon: 'devicon-npm-original-wordmark',
          },
          {
            id: 6,
            tech: 'vsCode',
            devicon: 'devicon-vscode-plain-wordmark',
          },
        ],
      },
    },
  ],
};

export default function Resume() {
  return (
    <div className="ResumeContainer">
      <p>
        Download my{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="./assets/files/VillanuevaAlejandroResume.pdf"
        >
          resume
        </a>
      </p>
      <TechStackContainer techStack={techStack} />
    </div>
  );
}
