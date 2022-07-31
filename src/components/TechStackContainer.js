import React from 'react';
import TechStackCard from './TechStackCard';

function TechStackContainer(props) {
  return (
    <div>
      <div className="row">
        <div className="container-fluid">
          <h5 className="card-title text-center">{props.techStack.name}</h5>
          <div className="row text-light justify-content-evenly">
            <TechStackCard techStack={props.techStack.stacks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStackContainer;
