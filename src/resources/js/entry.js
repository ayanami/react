import React from 'react';
import { Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { store } from './redux/store';
import { history } from './react/history';
import TopContainer from './containers/top.container';

const root = document.getElementById('root');
if (root) {
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" component={TopContainer} />
                </Switch>
            </ConnectedRouter>
        </Provider>,
        root
    );
}