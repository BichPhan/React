import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker'
import SizeSetting from './components/SizeSetting'
import Reset from './components/Reset'
import Result from './components/Result'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    };
    //this.onchangeSize=this.onchangeSize.bind(this);
  }
  onSetColor = (params) => {
    this.setState({
      color: params
    });
  }
  onchangeSize = (value) => {
    //8 <= size <= 36
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value
      });
    }
  }
  onsettingDefault = (value) => {
    if (value) {
      this.setState({
        color: 'red',
        fontSize: 12
      });
    }
  }


  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}></ColorPicker>

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting fontSize={this.state.fontSize} onchangeSize={this.onchangeSize}></SizeSetting>
            <Reset onsettingDefault={this.onsettingDefault}></Reset>
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize}></Result>
        </div>
      </div >
    );
  }
}

export default App;
