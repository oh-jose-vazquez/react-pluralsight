import React, { Component, useState } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Button></Button>
        <Display></Display>
      </div>
    );
  }
}


function Button() {
  const [counter, setCounter] = useState(5);
  const clickHandler = () => setCounter(counter * 2);
  return (
    <button type="button" class="btn btn-primary" onClick={clickHandler}>
      {counter}
    </button>
  )
}

function Display() {
  return (
    <div>...</div>
  )
}

export default App;