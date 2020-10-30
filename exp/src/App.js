import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      flip: true,
      backgroundRGB: 'rgb(0, 0, 0)'
    }
  }

  flip = () => {
    this.setState(prevState => ({
      flip: !prevState.flip
    }))
  }

  randomizeBackground = () => {
    this.setState({backgroundRGB: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`})
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
      <div className="App" style={{backgroundColor: this.state.backgroundRGB}}>
        <img onClick={this.flip} style={this.getImgStyle()} src={logo} className="App-logo" alt="logo" />
        <p>
          <code>{this.state.flip ? 'flipped' : 'not flipped'}</code>
        </p>
        <button onClick={this.flip}>flip</button>
        <button onClick={this.randomizeBackground}>randomize</button>
      </div>
    );
  }
}

export default App;
