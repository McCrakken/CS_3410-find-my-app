import React from 'react';
import logo from './logo.svg';
import './App.css';

//Import your component into the page you intend to use it, convention looks like this
import Card from './components/Card/Card';

function App() {
  return (
    <div className="">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/*Add your component and pass appropriate props, this is missing.text here because I wanted the <code/> style*/}
        <Card image={logo}
              title={'React as Card'}
        >
          {/*You can pass other HTML looking elements (JSX) into your component and generate them as props.children*/}
          <p className='card-text'>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="btn btn-outline-success"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Card>
      </header>
    </div>
  );
}

export default App;
