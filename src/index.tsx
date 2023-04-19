import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/scss/index.scss';
import {App} from './Store/App';
import {Provider} from "react-redux";
import {HashRouter} from 'react-router-dom';
import {store} from './Store/Store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>
    </React.StrictMode>
);
