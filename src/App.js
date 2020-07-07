import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';
import Pagination from './components/common/Pagination';
import Footer from './components/common/Footer';
import Home from './components/Home';
import { Route, Link, BrowserRouter as Router, Switch  } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Category from './components/Category';
import SingleBlog  from './components/SingleBlog';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/category" component={Category} />


            <Route exact path="/singleBlog" component={SingleBlog} />
            {/* <Route exact path="/category" component={Home} /> */}
            {/* <Route component={NoMatch} /> */}

          </Switch>
        </Router>
      </React.Fragment>
      // <div className="App"> 
      //  <Home/>


      // </div>
    );
  }
}

export default App;
