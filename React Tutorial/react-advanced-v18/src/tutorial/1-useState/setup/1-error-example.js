import React, { useState } from 'react';

const ErrorExample = () => {
  // console.log(useState('Hello World'));
  // const value = useState(1)[0];
  // console.log(value);
  // let title = 'random title';

  const [text, setText] = useState('random title');

  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
