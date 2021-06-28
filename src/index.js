import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import TopBar from 'components/topBar';

import Routes from 'Routes';
import {CurrentUserProvider} from 'contexts/currentUser';
import CurrentUserChecker from 'components/CurrentUserChecker';

const App = () => {
    return (
        <CurrentUserProvider>
            <CurrentUserChecker>
                <Router>
                    <TopBar/>
                    <Routes/>
                </Router>
            </CurrentUserChecker >
        </CurrentUserProvider>
    );
};

ReactDOM.render(
    <App/>, document.getElementById('root'));
