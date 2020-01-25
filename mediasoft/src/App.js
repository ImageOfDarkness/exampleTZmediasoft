import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';

import Header from './components/header/Header'
import pathname from './constants/pathname';
import TaskList from './screens/taskList/TaskList';
import DeletedTask from './screens/deletedTask/DeletedTask';

function App() {
    return (
        <>
            <Header/>
            <div className="container">
                <Router>
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
                </Router>
            </div>
        </>
    );
}

export default App;
