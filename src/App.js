import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Menu from './components/menu/menu';
import TopAlbums from './views/top-albums/top-albums';
import TopSongs from './views/top-songs/top-songs';
import routes from './routes/routes';

import "./services/sentry/sentry";


const BASE_PATH = process.env.REACT_APP_BASE_PATH;

export const App = () => (
    <Router basename={BASE_PATH}>
        <React.StrictMode>
            <Menu />
            <Switch>
                <Route path={routes.topAlbums}>
                    <TopAlbums />
                </Route>
                <Route path={routes.topSongs}>
                    <TopSongs />
                </Route>
                <Route exact path="/">
                    <Redirect to={routes.topAlbums} />
                </Route>
            </Switch>
        </React.StrictMode>
    </Router>
)
