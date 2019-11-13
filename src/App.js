import React from 'react';
import './App.css';
import Hotel from './Hotels';
import Activities from './Activities';

class App extends React.Component {
  state = { 
    
  }
  render() { 
    return (
      <div>
        <Hotel />
        <Activities />
      </div>
    );
  }
}
 
export default App;