import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { createStore } from '../node_modules/redux/index';
import rootReducer, { rootSaga } from './modules/index';
import { composeWithDevTools } from '../node_modules/redux-devtools-extension/index';
// import Provider from '../node_modules/react-redux/es/exports';
import { applyMiddleware, createStore } from 'redux';
// import rootReducer from '.index';
// import { composeWithDevTools } from '@redux-devtools/extension';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
);
