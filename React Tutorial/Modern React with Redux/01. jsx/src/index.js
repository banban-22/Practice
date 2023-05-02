// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
/* 
function App() {
  //   <h4>Hi there!</h4>; this does not work. Need to RETURN
  return <h1>Hi there!</h1>;
} 
*/

/* 
function App() {
  let message = 'Bye there!';
  if (Math.random() > 0.5) {
    message = 'Hello there!';
  }

  return <h1>{message}</h1>;
} 
*/

/* 
function App() {
  //   const date = new Date();
  //   const time = date.toLocaleTimeString();

  return <h1>{new Date().toLocaleTimeString()}</h1>;
}
 */

/* 
function App() {
  const name = 'Samantha';
  const age = 23;

  //   return (
  //     <h1>
  //       {name} {age}
  //     </h1>
  //   );
  return (
    <h1>
      Hi, my name is {name} and my age is {age}
    </h1>
  );
}
 */
/* 
function App() {
  const message = 'Hello';
  const sum = 1 + 1;

  return (
    <div>
      <div>Message is: {message}</div>
      <div>Sum is: {sum}</div>
    </div>
  );
}
 */

/* 
function App() {
  const inputType = 'number';
  const minValue = 5;

  return <input type={inputType} min={minValue} />;
}
 */
/* 
function App() {
  //   const config = { color: 'red' };
  //   return (
  //     <div>
  //       { <h1>{config}</h1> }
  //       <input style={{ border: '3px solid red' }} type="number" />
  //     </div>
  //   );
  //   return <textarea autoFocus={true} />;
  return <input placeholder="hi there" />;
} 
*/
/* 
function App() {
  return (
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        spellCheck
        style={{ backgroundColor: 'gray' }}
      />
    </div>
  );
}
 */
// 5) Show the component on the screen
root.render(<App />);
