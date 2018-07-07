import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import thunk from 'redux-thunk';

import SignInComponent from './main/auth/sign-in/sign-in.component';
import App from './main/app/App';
import checkAuth from './main/auth/auth-component';
import authReducer from './main/auth/auth-reducer';

import { loadState, saveState } from './localStorage';

import './index.css';

const persistedState = loadState();

const reducer = combineReducers({
    auth: authReducer,
    form: reduxFormReducer
});

const store = createStore(reducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/login" component={SignInComponent} />
                <Route path="/" component={checkAuth(App)} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

export { store };
