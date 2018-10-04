import React, { Component } from 'react';
import classname from 'classname'

class Short extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      tasks: props.tasks,
      total: 0
    }
  }

  componentDidMount = () => {
    // this.Checked()
  }

  onDelete = (id) => {
    this.props.onDelete(id);
  }

  checkList = (id) => {
    var { tasks, total } = this.state;
    tasks.forEach((task, index, array) => {
      if (task.id === id) {
        array[index].checked = !task.checked; //array = newTasks
        
      }
    });
    this.setState({ tasks: tasks })
    // for (let i = 0; i < tasks.length; i++) {
    //   if (!tasks[i].checked) {
    //     total = (total + 1);
    //     this.setState({ total: total })
    //   }
    // }
   



  }

  Completed = () => {
    var { tasks } = this.props;
    this.setState({ tasks: tasks.filter(task => task.checked) })
  }

  Active = () => {
    var { tasks } = this.props;
    this.setState({ tasks: tasks.filter(task => !task.checked) })
  }

  All = () => {
    var { tasks } = this.props;
    this.setState({ tasks: tasks });
  }

  ClearCompleted = () => {
    var { tasks } = this.state;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].checked) {
        tasks.splice(i, 1);
      }
      else {
        tasks = tasks;
      }
    }
    this.setState({ tasks: tasks })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }


  render() {
    var { tasks } = this.state;

    var emlTasks = tasks.map((task, index) => {
      return <React.Fragment key={index}>
        <li className={classname({
          checked: task.checked
        })} id={task.id} onClick={() => this.checkList(task.id)}>{task.name} <span className="close" onClick={() => this.onDelete(task.id)}>×</span></li>
      </React.Fragment>

    });

    var { total } = this.state;
    return (

      <ul id="myUL">
        {emlTasks}
        <li>
          {/* <span className='mgr'><span></span> item left</span> */}
          <span className='mgr'>
            <button type="button" className="btn btn-default" onClick={this.All}>All</button>
            <button type="button" className="btn btn-primary" onClick={this.Active}>Active</button>
            <button type="button" className="btn btn-success" onClick={this.Completed}>Completed</button>
          </span>
          <span className='mgr'>
            <button type="button" className="btn btn-info" onClick={this.ClearCompleted}>Clear Completed</button>
          </span>
        </li>
      </ul>
    );
  }
}

export default Short;
