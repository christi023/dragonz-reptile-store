import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Login from './Components/RegisterLogin/Login';
import Register from './Components/RegisterLogin/Register';
import About from './Pages/About/About';
import Packages from './Pages/Packages/Packages';
import Collection from './Pages/Collection/Collection';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';

// style
import './App.css';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/packages" component={Packages} />
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}
