import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import TopBar from 'components/topBar';

import Routes from 'Routes';

const App = () => {
  return (
    <div>
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
