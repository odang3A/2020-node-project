import React from 'react';
import Home from './Home';
import MusicList from './MusicList';
import MovieList from './MovieList';
import About from './About';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/music">Music</Link></li>
        <li><Link to="/movie">Movie</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/music" component={MusicList} />
        <Route path="/movie" component={MovieList} />
        <Route path="/about" component={About} />
        <Route path="/"><h3>404 Not Found</h3></Route>
      </Switch>
    </>
  );
}

export default App;