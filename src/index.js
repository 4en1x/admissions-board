import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import thunk from 'redux-thunk';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import SignInComponent from './main/auth/sign-in/sign-in.component';
import RegistrationComponent from './main/auth/registration/registration.component';
import App from './main/app/App';
import checkAuth from './main/auth/auth-component';

import authReducer from './main/auth/auth-reducer';
import facultyReducer from './main/faculty/faculty-reducer';
import entrantReducer from './main/entrant/entrant-reducer';
import cabinetReducer from './main/cabinet/cabinet-reducer';

import commonDe from './translations/de/common.json';
import commonEn from './translations/en/common.json';
import commonCn from './translations/cn/common.json';

import { loadState, saveState } from './localStorage';

import './index.css';

const persistedState = loadState();

const reducer = combineReducers({
    auth: authReducer,
    faculty: facultyReducer,
    entrant: entrantReducer,
    form: reduxFormReducer,
    cabinet: cabinetReducer,
});

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
        en: {
            common: commonEn,
        },
        de: {
            common: commonDe,
        },
        cn: {
            common: commonCn,
        },
    },
});

const store = createStore(reducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/login" component={SignInComponent} />
                    <Route path="/registration" component={RegistrationComponent} />
                    <Route path="/" component={checkAuth(App)} />
                </Switch>
            </Router>
        </Provider>
    </I18nextProvider>,
    document.getElementById('root'),
);

export default store;
