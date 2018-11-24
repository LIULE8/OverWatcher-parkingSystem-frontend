import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import rootReducer from './reducers'
import {Provider} from "react-redux"
import './index.css';
import App from './App';
import EmployeesApi from "./apis/UsersApi";
import ParkingLotsApi from "./apis/ParkingLotsApi";
import ParkingBoysApi from "./apis/ParkingBoysApi";
import DashBoardsApi from "./apis/DashBoardsApi";
import ordersApi from "./apis/orderApi";

const store = createStore(rootReducer);
const rootEl = document.getElementById('root');
// EmployeesApi.init(store.dispatch);
// ParkingLotsApi.init(store.dispatch);
// ParkingBoysApi.init(store.dispatch);
// DashBoardsApi.init(store.dispatch);
// ordersApi.init(store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
);

export default store;