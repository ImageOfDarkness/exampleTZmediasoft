import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';

import Header from './components/header/Header'
import pathname from './constants/pathname';
import TaskList from './screens/taskList/TaskList';
import DeletedTask from './screens/deletedTask/DeletedTask';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import Store from './store/Combain'

function App() {
    return (
        <Provider store={Store}>
            <Router>
                <Header/>
                <div className="container">
                    <Route exact path={pathname.main} component={() => (<div>main page</div>)}/>
                    <Route path={pathname.list} component={TaskList}/>
                    <Route
                        path={`${pathname.task}/:id`}
                        component={
                            (e) => {
                                console.log(e);
                                return (
                                    <div>Задача {e.match.params.id}</div>
                                )
                            }
                        }
                    />
                    <Route path={pathname.deletedTask} component={DeletedTask}
                    />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
