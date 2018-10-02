import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import {findIndex,filter} from 'lodash';
// import { connect } from 'react-redux';
// import * as actions from './actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], //id : unique, name, status, 
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sortBy: 'name',
      sortValue: 1
    }
  }

  componentWillMount() { // luu tru du lieu vao state
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }
  }

  // onGenerateData = () => {
  //   var randomstring = require("randomstring");
  //   var tasks = [
  //     {
  //       id: randomstring.generate(),
  //       name: 'Học lập trình',
  //       status: true
  //     },
  //     {
  //       id: randomstring.generate(),
  //       name: 'Đi bơi',
  //       status: false
  //     },
  //     {
  //       id: randomstring.generate(),
  //       name: 'Ngủ',
  //       status: true
  //     }
  //   ];
  //   this.setState({
  //     tasks: tasks
  //   });
  //   localStorage.setItem('tasks', JSON.stringify(tasks)); //giong nhu cookie luu tam thoi tren trinh duyet
  // }

  // toggle redux
  onToggleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null
      });
    }
    else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null
      });
    }
  }
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }
  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    });
  }

  onSubmit = (data) => {
    var randomstring = require("randomstring");
    var { tasks } = this.state;
    if (data.id === '') {
      data.id = randomstring.generate();
      tasks.push(data);
    }
    else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      taskEditing: null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  findIndex = (id) => {
    var result = -1;
    var { tasks } = this.state;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }

  onDelete = (id) => {
    var { tasks } = this.state;
    // var index = this.findIndex(id);
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
    this.onCloseForm();
  }

  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing
    });
    this.onShowForm();
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })
  }
  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    });
  }

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    });

  }


  render() {
    var { tasks, isDisplayForm, taskEditing, filter, keyword, sortBy, sortValue } = this.state; // var tasks = this.state.tasks tạo biến tasks,isDisplayForm từ state

    if (filter) {
      if (filter.name) {


        // tasks = tasks.filter((task) => {
        //   return task.name.toLowerCase().indexOf(filter.name) !== -1;
        // });

        tasks=filter(tasks,(task)=>{
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        })


      }
      tasks = tasks.filter((task) => {
        if (filter.status === -1) {
          return task;
        } else {
          return task.status === (filter.status === 1 ? true : false)
        }
      });
    }
    if (sortBy === 'name') {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sortValue;
        else if (a.name < b.name) return -sortValue;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sortValue;
        else if (a.status < b.status) return sortValue;
        else return 0;
      });
    }
    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }
    var elTaskForm = isDisplayForm ? <TaskForm
      onSubmit={this.onSubmit}
      onCloseForm={this.onCloseForm}
      task={taskEditing}

    /> : '';

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1><hr />
        </div>
        <div className="row">
          <div className={isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {elTaskForm}
          </div>
          <div className={isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button type="button" className="btn btn-primary" onClick={this.onToggleForm} >
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            {/* <button type="button" className="btn btn-danger ml-5" onClick={this.onGenerateData}>Generate Data</button> */}
            <TaskControl
              onSearch={this.onSearch}
              onSort={this.onSort}
              sortBy={sortBy}
              sortValue={sortValue}
            />
            <TaskList
              tasks={tasks}
              onUpdateStatus={this.onUpdateStatus}
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              onFilter={this.onFilter}
            />
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     isDisplayForm: state.isDisplayForm,
//     itemEditing: state.itemEditing
//   };
// };

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         onToggleForm : () => {
//             dispatch(actions.toggleForm());
//         },
//         onClearTask : (task) => {
//             dispatch(actions.editTask(task));
//         },
//         onOpenForm : () => {
//             dispatch(actions.openForm());
//         }
//     };
// };
export default App