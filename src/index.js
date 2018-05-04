import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';


let initialState = {
    
    currentUser: {},
    
    usersList: [],

    eventsList: [],

    isLoggedIn: false,

    creatingNewEvent: false,

    newEvent: {},

    displayNext: false
}


//refactor for master reducer and create sub reducers
let reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_EVENTS_TO_STORE": {
            return {
                ...state, eventsList: action.payload.events
            }
        }
        case "ADD_USER_TO_STORE": {
            return {
                ...state, currentUser: action.payload, isLoggedIn: true
            }
        }
        case 'DISPLAY_NEXT': {
            return {...state, displayNext: true, creatingNewEvent: true
            }
        }
        // why doesn't this work?
        // case 'CREATE_NEW_EVENT': {
        //     return {...state, newEvent: {...state.newEvent, action.payload}}
        //     }

        case 'CREATE_NEW_EVENT': {
            let newObject = Object.assign(state.newEvent, action.payload);
            return {...state, newEvent: newObject}
            }

        case 'DONE_EDITING': {
            return {...state, creatingNewEvent: false, newEvent: {}, displayNext: false}
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