import React from 'react';
import logo from './logo.svg';

import Card from './components/Card/Card';
import Nav from './components/Navbar/Navbar'
import Content from './hoc/PageContent'

function App() {
  return (
    <div className="">
      <Nav/>
      <Content>
        <header className="App-header">
          {/*Add your component and pass appropriate props, this is missing.text here because I wanted the <code/> style*/}
          <Card classes={"card"}
                image={logo}
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
      </Content>
    </div>
  );
}

export default App;
