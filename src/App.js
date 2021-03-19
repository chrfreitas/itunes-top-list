import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from "@sentry/tracing";

import Menu from './components/menu/menu';
import TopAlbums from './views/top-albums/top-albums';
import TopSongs from './views/top-songs/top-songs';
import routes from './routes/routes';

Sentry.init({
    dsn: "https://9e2c7453a34f4b09a34debab45b2be2b@o258723.ingest.sentry.io/5681554",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
});

export const App = () => (
    
    <Router>
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

