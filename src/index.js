import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';


let initialState = {
    
    currentUser: {},
    
    usersList: [
        {userid: "1", email: "janelle@j.com", password: "one"},
        {userid: "2",email: "jaehee@j.com", password: "two"},
        {userid: "3",email: "dylan@d.com", password: "three"},
        {userid: "4",email: "prathyusha@p.com", password: "four"}
    ],
    eventsList: [],

    clientsList: [
        {clientid: "1", clientName: "Janelle Alexander"},
        {clientid: "2", clientName: "Jaehee Kim"},
        {clientid: "3", clientName: "Dylan Bailey"},
        {clientid: "4", clientName: "Prathyusha Mattam"},
    ],
    isLoggedIn: false
}


//refactor for master reducer and create sub reducers
let reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_EVENTS_TO_STORE": {
            return {
                ...state, eventsList: action.payload.events
            }
        }
        case "ADD_USER_TO_STORE": {
            return {
                ...state, currentUser: action.payload, isLoggedIn: true
            }
        }
        case 'CREATE_NEW_EVENT': {
            return {...state, 
                eventsList: [...state.eventsList, action.payload], 
                clientsList: [...state.clientsList, {clientName: action.payload.clientName}]}
        }
        default: return state;
    }
}

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


let UI = 
    <Provider store={store}> 
        <App />
    </Provider>


ReactDOM.render(UI, document.getElementById('root'));
registerServiceWorker();
