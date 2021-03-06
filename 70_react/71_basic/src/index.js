import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import ReducerSample2 from './ReducerSample2';
//import MusicReducerApp from './MusicReducerApp';
import MovieReducerApp from './MovieReducerApp';
import ContextSample from './ContextSample';

import * as serviceWorker from './serviceWorker';
import MusicReducerApp from './MusicReducerApp';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <MovieReducerApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
