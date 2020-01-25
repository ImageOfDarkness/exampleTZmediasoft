import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './styles/style.sass';
import pathname from './constants/pathname';
import logo from './logo.svg';

function App() {
  return (
    <>
      
      <Router>
        <Route exact path={pathname.main} component={() => (<div>main page</div>)} />
        <Route path={pathname.list} component={() => (<div>Задачи</div>)} />
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
        <Route
          path="/deletedTask/:id"
          component={
            (e) => {
              console.log(e);
              return (
                <div>Удалённая задача {e.match.params.id}</div>
              )
            }
          }
        />
      </Router>
    </>
  );
}

export default App;
