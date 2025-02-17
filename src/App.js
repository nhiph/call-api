import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
     <Router>
       <h3>Hello, Cừu moe moe</h3>
       <Menu />
        <div className="container">
          <div className="row">
            <Switch>
              {this.showContentMenus(routes)}
            </Switch>
          </div>
        </div>
     </Router>
    );
  }
  showContentMenus = routes => {
    var result = null;
    if (routes.length > 0){
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      });
    }
    return result;
  }
}

export default App;
