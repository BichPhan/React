import * as types from './../constants/ActionType'

var randomstring = require("randomstring");

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];
var findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
}
var myReducer = (state = initialState, action) => {
    var id = '';
    var index = -1;
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            var task = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status
            };
            console.log(action.task);
            if (!task.id) {
                task.id = randomstring.generate();
                state.push(task);
            }
            else {
                index = findIndex(state, task.id);
                state[index]=task;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]; // copy sang 1 array mới r trả về

        case types.UPDATE_STATUS:
            id = action.id;
            index = findIndex(state, id);
            state[index] = { ...state[index], status: !state[index].status }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        case types.DELETE_TASK:
            id = action.id;
            index = findIndex(state, id);
            state.splice(index, 1); // splice de xoa phan tu index vaf 1 ban ghi
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        default: return state;
    }

};
export default myReducer;