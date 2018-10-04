import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:""
    }
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]:value
    });
  }
  onSubmit=(event)=>{
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: ''
    });
  }
  render() {
    return (
      <form id="myDIV" className="header" onSubmit={this.onSubmit}>
        <h2 className='cssH2'>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Title..." name="name" value={this.state.name} onChange={this.onChange} />
        <input type='submit'  className="addBtn"/>
      </form>
    );
  }
}

export default Form;
