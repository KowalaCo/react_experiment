import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      flip: true
    }
  }

  flip = () => {
    this.setState(prevState => ({
      flip: !prevState.flip
    }))
  }

  getImgStyle = () => {
    if (this.state.flip){
      return {transform: 'scaleX(-1)', header: 'scaleX(-1)'}
    } else {
      return {}
    }
  }

  render() {
    return (
      <div className="App">
        <img onClick={this.flip} style={this.getImgStyle()} src={logo} className="App-logo" alt="logo" />
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
      </div>
    );
  }
}

export default App;
