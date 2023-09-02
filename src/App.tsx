import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:5171/api/User');

    eventSource.onopen = () => {
      console.log('opened');
    };

    eventSource.onmessage = (event) => {
      setData(event.data);
    };

    return () => eventSource.close();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
