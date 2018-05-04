const ADD_USER_TO_STORE = "ADD_USER_TO_STORE";
const LOAD_EVENTS_TO_STORE = "LOAD_EVENTS_TO_STORE";
const DISPLAY_NEXT = "DISPLAY_NEXT";
const CREATE_NEW_EVENT = 'CREATE_NEW_EVENT';
const DONE_EDITING = 'DONE_EDITING';
const CREATE_NEW_SHOPPINGLIST = "CREATE_NEW_SHOPPINGLIST";
const REMOVE_USER_FROM_STORE = "REMOVE_USER_FROM_STORE";


export let addUserToStore = (user) => ({
    type: ADD_USER_TO_STORE,
    payload: user
});

export let loadEventsToStore = (events) => ({
    type: LOAD_EVENTS_TO_STORE,
    payload: { events }
});


export let displayNext = () => {
    return {
        type: DISPLAY_NEXT
    };
}

export let newEventShoppingCreator = (shoppinglist) => {
    return {
      type: CREATE_NEW_SHOPPINGLIST,
      payload: {shoppinglist: shoppinglist}
    }
  }

export let doneEditing = () => {
    return {
      type: DONE_EDITING
    }
  }

export let removeUserFromStore = () => ({
    type: REMOVE_USER_FROM_STORE,
    payload: {}
});

export let newEventCreator = (details) => {
    return {
        type: CREATE_NEW_EVENT,
        payload: details
    }
};

