import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from './../actions/index';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }
    }

    componentWillMount() {// sau khi nhan sua se chay vao ham nay
        if (this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status,
            });
        }
    }

    componentWillReceiveProps(nextProps) {//khi form thêm được mở thì form sửa vẫn được hiểu sau khi gọi
        if (nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status,
            });
        }
        else if (!nextProps.task) {
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state); //truyen this.state sang App
        //Cancel && Close
        this.onClear();
        this.onCloseForm();
    }
    onClear = () => {
        this.setState({
            name: '',
            status: false
        })
    }

    render() {
        var { id } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id !== '' ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={this.onCloseForm}
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select
                            className="form-control"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select><br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fa fa-plus mr-5"></span>Lưu Lại
                            </button>&nbsp;
                            <button type="button" onClick={this.onClear} className="btn btn-danger">
                                <i className="fa fa-times mr-5"></i>Hủy Bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         isDisplayForm : state.isDisplayForm,
//         itemEditing : state.itemEditing
//     }
// };

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         onSaveTask : (task) => {
//             dispatch(actions.saveTask(task));
//         },
//         onCloseForm : () => {
//             dispatch(actions.closeForm());
//         }
//     }
// }

export default TaskForm;
