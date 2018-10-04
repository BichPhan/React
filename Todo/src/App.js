import React, { Component } from 'react';
import './App.css';
import Short from './components/Short';
import Form from './components/Form';
import {findIndex} from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
         tasks:tasks
      })
    }
  }

  onGenerateData = () => {
    var randomstring = require("randomstring");
    var tasks = [
      {
        id: randomstring.generate(),
        name: 'Học lập trình'
      },
      {
        id: randomstring.generate(),
        name: 'Đi bơi'
      },
      {
        id: randomstring.generate(),
        name: 'Ngủ'
      }
    ];
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onSubmit = (data) => {
    var randomstring = require("randomstring");
    data.id = randomstring.generate();
    data.checked=false;
    var { tasks } = this.state;
    tasks.push(data);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // findIndex = (id) => {
  //   var result = -1;
  //   var { tasks } = this.state;
  //   tasks.forEach((task, index) => {
  //     if (task.id === id) {
  //       result = index;
  //     }
  //   });
  //   return result;
  // }

  onDelete=(id)=>{
    var { tasks } = this.state;
    var index = findIndex(tasks, (task) => {
      return task.id === id;
    });
    if (index !== -1) {
      tasks.splice(index, 1); // splice de xoa phan tu index vaf 1 ban ghi
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  render() {
    var {tasks}=this.state;
    return (
      <div>
        <button type="button" className="btn btn-danger ml-5" onClick={this.onGenerateData}>Generate Data</button>
        <Form onSubmit={this.onSubmit}></Form>
        <Short tasks={tasks} onDelete={this.onDelete}></Short>
      </div>
    );
  }
}

export default App;
