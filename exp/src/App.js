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
          <code>{this.state.flip ? 'flipped' : 'not flipped'}</code>
        </p>
        <button onClick={this.flip}>flip</button>
      </div>
    );
  }
}

export default App;
