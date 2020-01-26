import {combineReducers, createStore} from "redux";
import _ from 'lodash'

let taskStore = [
    {
        id: 1,
        text: 'proa',
        completed: true,
    },
    {
        id: 2,
        text: 'ppiidd',
        completed: false,
    }
]

function taskReducer(state = taskStore, action) {
    switch (action.type) {
        case 'TASK_ADD':
            return ([...state, action.payload]);
            break;
        case 'TASK_DELETE':
            return _.remove(state, function(n){
                console.log('n',n);
                return n.id !== action.payload
            });
            break;
    }
    return state;
}

const allReducers = combineReducers({
    tasks: taskReducer,
});
const Store = createStore(allReducers);
export default Store;