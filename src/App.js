import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
// Pages
import News from './Pages/News/News';
import About from './Pages/About/About';
import Packages from './Pages/Packages/Packages';
import Collection from './Pages/Collection/Collection';
import Blog from './Pages/Blog/Blog';

// style
import './App.css';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/about" component={About} />
        <Route exact path="/packages" component={Packages} />
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
}
