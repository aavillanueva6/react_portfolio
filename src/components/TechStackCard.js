import React from 'react';
import Devicon from './Devicon';

function TechStackCard(props) {
  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {props.techStack.map((item) => {
        return (
          <div className="col-md-3 col-12">
            <div className="row justify-content-evenly h-100">
              <div className="card bg-dark mb-3">
                <div className="card-header text-center">{item.stack.type}</div>
                <Devicon iconList={item.stack.icons} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TechStackCard;
