const ADD_USER_TO_STORE = "ADD_USER_TO_STORE";
const ADD_EVENTS_TO_STORE = "ADD_EVENTS_TO_STORE";

export let addUserToStore = (user) => ({
    type: ADD_USER_TO_STORE,
    payload: user
});

export let addEventsToStore = (events) => ({
    type: ADD_EVENTS_TO_STORE,
    payload: { events }
});