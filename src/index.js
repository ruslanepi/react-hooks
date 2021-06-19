import React from 'react';
import ReactDOM from 'react-dom';

import Routes from 'Routes';

const App = () => {
  return (
    <div>
      <div>Welcome to hooks</div>
      <Routes />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
