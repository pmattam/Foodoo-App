import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

let initialState = {
    usersList: [
        {email: "janelle@j.com", password: "one"},
        {email: "jaehee@j.com", password: "two"},
        {email: "dylan@d.com", password: "three"}
    ],
    eventsList: [
        {
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
                item: "cavatelli",
                quantity: 20,
                unit: "lbs"
                },
                {
                item: "bread",
                quantity: 20,
                unit: "loaves"
                },
                {
                item: "Old Bay Seasoning",
                quantity: 10,
                unit: "cans"
                }
            ]
        },
        {
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
                item: "chocolate",
                quantity: 20,
                unit: "lbs"
                },
                {
                item: "shrimp",
                quantity: 20,
                unit: "loaves"
                },
                {
                item: "Champagne",
                quantity: 10,
                unit: "bottles"
                }
            ]
        },
        {
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
                item: "lingonberry jam",
                quantity: 20,
                unit: "jars"
                },
                {
                item: "lemons",
                quantity: 200,
                unit: "units"
                },
                {
                item: "champagne",
                quantity: 10,
                unit: "bottles"
                }
            ]
        }
    ],    
    clientsList: [],
    isLoggedIn: false
}


//refactor for master reducer and create sub reducers
let reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTHENTICATE_USER': {
            return {...state, usersKey: [...state.usersKey, action.payload]}
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
