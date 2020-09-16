import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Button />
  </React.StrictMode>,
  document.getElementById('root')
);

function Button() {
  const [counter, setCounter] = useState(5);
  const clickHandler = () => setCounter(counter * 2);
  return (
    <button type="button" class="btn btn-primary" onClick={clickHandler}>
      {counter}
    </button>
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
