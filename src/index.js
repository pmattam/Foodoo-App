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
    eventsList: [
        {
            eventid: "1",
            eventTitle: "Alexander Graduation",
            eventDate: "17-May-2018",
            eventDescription: "Casual event for a coding bootcamp graduation",
            eventSize: 25,
            eventType: "Graduation",
            mealType: "Buffet",
            clientName: "Janelle Alexander",
            menu: {
                appetizer: "Crabcakes",
                main: "Pasta",
                dessert: "Bread Pudding",
                drink: "Moscow Mule Mocktail"
            },
            shoppingList: [
                {
                ingredient: "cavatelli",
                quantity: 20,
                unit: "lbs"
                },
                {
                ingredient: "bread",
                quantity: 20,
                unit: "loaves"
                },
                {
                ingredient: "Old Bay Seasoning",
                quantity: 10,
                unit: "cans"
                }
            ]
        },
        {
            eventid: "2",
            eventTitle: "Kim Birthday",
            eventDate: "17-August-2018",
            eventDescription: "Elegant birthday",
            eventSize: 100,
            eventType: "Birthday",
            mealType: "Sit-Down",
            clientName: "Jaehee Kim",
            menu: {
                appetizer: "Shrimp Cocktail",
                main: "Roasted Salmon",
                dessert: "Chocolate Mousse",
                drink: "Champagne"
            },
            shoppingList: [
                {
                ingredient: "chocolate",
                quantity: 20,
                unit: "lbs"
                },
                {
                ingredient: "shrimp",
                quantity: 20,
                unit: "loaves"
                },
                {
                ingredient: "champagne",
                quantity: 10,
                unit: "bottles"
                }
            ]
        },
        {
            eventid: "3",
            eventTitle: "Bailey Launch Party",
            eventDate: "17-October-2018",
            eventDescription: "Cool event for company launch party",
            eventSize: 200,
            eventType: "Corporate",
            mealType: "Buffet",
            clientName: "Dylan Bailey",
            menu: {
                appetizer: "Swedish Meatballs",
                main: "Duck",
                dessert: "Lemon Tart",
                drink: "French 75"
            },
            shoppingList: [
                {
                ingredient: "lingonberry jam",
                quantity: 20,
                unit: "jars"
                },
                {
                ingredient: "lemons",
                quantity: 200,
                unit: "units"
                },
                {
                ingredient: "champagne",
                quantity: 10,
                unit: "bottles"
                }
            ]
        },
        {
            eventid: "4",
            eventTitle: "Mattam Anniversary",
            eventDate: "16-December-2018",
            eventDescription: "Festive wedding anniversary",
            eventSize: 75,
            eventType: "Anniversary",
            mealType: "Buffet",
            clientName: "Prathyusha Mattam",
            menu: {
                appetizer: "Spinach Quiche",
                main: "Grilled Lamb",
                dessert: "Gelato",
                drink: "Wine Spritzer"
            },
            shoppingList: [
                {
                ingredient: "spinach",
                quantity: 20,
                unit: "lbs"
                },
                {
                ingredient: "leg of lamb",
                quantity: 30,
                unit: "lbs"
                },
                {
                ingredient: "chardonnay",
                quantity: 10,
                unit: "bottles"
                }
            ]
        }
    ],    
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
