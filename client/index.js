import React from 'react';
import ReactDom from 'react-dom';
import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers/index';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
require('./index.css');
import PageContainer from './containers/PageContainer/PageContainer'

function activateVendor() {
    const logMiddleware = createLogger();
    return createStore(
        reducers,
        applyMiddleware(
            thunkMiddleware,
            logMiddleware
        )
    )
}

function renderPage(store) {
    console.log(store);
    ReactDom.render(
        <Provider store={store}>
            <PageContainer />
        </Provider>,
        document.getElementById('root')
    )
}

let store = activateVendor();
renderPage(store);