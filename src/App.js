import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import Confirm from './components/pages/Confirm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/products' component={Products}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/confirm' component={Confirm}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
