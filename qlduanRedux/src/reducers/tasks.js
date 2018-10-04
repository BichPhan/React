import * as types from './../constants/ActionType'

var randomstring = require("randomstring");

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            //console.log(action);
            //return state;
        var newTask = {
            id: randomstring.generate(),
            name: action.task.name,
            status: action.task.status === 'true' ? true : false
        }
        state.push(newTask);
        localStorage.setItem('tasks',JSON.stringify(state));
        return [...state]; // copy sang 1 array mới r trả về
        default: return state;

    }

};
export default myReducer;