import React
//, { useState } 
from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import GithubApp from './GithubApp/GithubApp';

ReactDOM.render(
  <GithubApp />,
  document.getElementById('root')
);

// function App2() {
//   const [counter, setCounter] = useState(42);
//   const clickHandler = (increment) => setCounter(counter + increment);
//   return (
//     <div>
//       <Button clickHandler={clickHandler} increment={1} />
//       <Button clickHandler={clickHandler} increment={5} />
//       <Button clickHandler={clickHandler} increment={10} />
//       <Button clickHandler={clickHandler} increment={100} />
//       <Display message={counter} />
//     </div>
//   )
// }

// function Button(props) {
//   const handleClick = () => props.clickHandler(props.increment);
//   return (
//     <button type="button" class="btn btn-primary" onClick={handleClick}>
//       +{props.increment}
//     </button>
//   )
// }

// function Display(props) {
//   return (
//     <div>{props.message}</div>
//   )
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
