import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import co2MeasurementReducer from './reducers';
import { emitCo2Measurement } from './actions';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = createStore(co2MeasurementReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

setInterval(() => {
    const minPpm = 350;
    const maxPpm = 5000;
    const randomPpm = Math.floor(Math.random() * (maxPpm - minPpm + 1)) + minPpm;
    store.dispatch(emitCo2Measurement(randomPpm));
}, 10000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
