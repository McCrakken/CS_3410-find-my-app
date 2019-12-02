import React from 'react';
import logo from './logo.svg';

import Card from './components/Card/Card';
import EventCard from "./components/Card/EventCard/EventCard";
import Nav from './components/Navbar/Navbar'
import Content from './hoc/PageContent'

function App() {
  return (
    <div className="">
      <Nav/>
      <Content>
        <header className="App-header">
          {/*Add your component and pass appropriate props, this is missing.text here because I wanted the <code/> style*/}
          <Card image={logo}
                title={'React as Card'}
                classes={'card card-panel'}
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
          <Card
            classes={'card'}
            title={'Not Big'}
                text={'This is a small card'}>
            <p>This is just some content</p>
            <button className={'btn btn-danger'}>Button</button>
          </Card>
          <EventCard
            image={logo}
            title={'EventCard title'}
            text={'This is a simple event card example'}
          />

        </header>
      </Content>
    </div>
  );
}

export default App;
