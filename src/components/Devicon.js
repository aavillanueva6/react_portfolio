import React from 'react';

function Devicon(props) {
  return (
    <div className="card-body d-flex flex-wrap justify-content-center align-items-center">
      {props.iconList.map((item) => {
        return (
          <i className={`${item.devicon} codeIcon mx-1 my-1`} key={item.id}></i>
        );
      })}
    </div>
  );
}

export default Devicon;
