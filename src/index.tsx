import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import {App} from './Store/App';
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';
import {store} from './Store/Store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
