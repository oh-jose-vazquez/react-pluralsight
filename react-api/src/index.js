import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App2 />,
  document.getElementById('root')
);

function App2() {
  const [counter, setCounter] = useState(42);
  const clickHandler = () => setCounter(counter + 1);
  return (
    <div>
      <Button clickHandler={clickHandler} />
      <Display message={counter} />
    </div>
  )
}

function Button(props) {
  return (
    <button type="button" class="btn btn-primary" onClick={props.clickHandler}>
      +1
    </button>
  )
}

function Display(props) {
  return (
    <div>{props.message}</div>
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
