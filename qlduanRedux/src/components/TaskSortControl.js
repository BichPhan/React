import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskSortControl extends Component {
    onClick = (sortBy,sortValue) => {
        this.props.onSort({
            by: sortBy,
            value: sortValue
        });
    }


    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Sắp Xếp <i className="far fa-caret-square-down ml-5"></i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClick('name', 1)}>
                            <a
                                role="button"
                            // className={(this.props.sortBy === 'name' && this.props.sortValue === 1) ? 'sort_selected' : ''}
                            >
                                <i className="fas fa-sort-alpha-down pr-5">
                                    Tên A-Z
                                </i>
                                <i className={(this.props.sort.by === 'name' && this.props.sort.value === 1) ? 'fa fa-check' : ''}></i>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <a
                                role="button"
                            >
                                <i className="fas fa-sort-alpha-up pr-5">
                                    Tên Z-A
                                </i>
                                <i className={(this.props.sort.by === 'name' && this.props.sort.value === -1) ? 'fa fa-check' : ''}></i>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onClick('status', 1)}>
                            <a
                                role="button"
                            >
                                Trạng Thái Kích Hoạt
                                <i className={(this.props.sort.by === 'status' && this.props.sort.value === 1) ? 'fa fa-check' : ''}></i>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('status', -1)}>
                            <a
                                role="button"
                            >
                                Trạng Thái Ẩn
                                <i className={(this.props.sort.by === 'status' && this.props.sort.value === -1) ? 'fa fa-check' : ''}></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sort: state.sort 
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => { // sort.by sort.value
            dispatch(actions.sortTask(sort));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskSortControl);
