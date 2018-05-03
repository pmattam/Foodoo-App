const ADD_USER_TO_STORE = "ADD_USER_TO_STORE";
const LOAD_EVENTS_TO_STORE = "LOAD_EVENTS_TO_STORE";
const CREATE_NEW_EVENT_METADATA = 'CREATE_NEW_EVENT_METADATA';
const CREATE_NEW_EVENT = 'CREATE_NEW_EVENT';

export let addUserToStore = (user) => ({
    type: ADD_USER_TO_STORE,
    payload: user
});

export let loadEventsToStore = (events) => ({
    type: LOAD_EVENTS_TO_STORE,
    payload: { events }
});

export let newEventMetadataCreator = (metadata) => {
    return {
        type: CREATE_NEW_EVENT_METADATA,
        payload: metadata
    };
}

export let newEventCreator = (details) => {
  return {
    type: CREATE_NEW_EVENT,
    payload: details
  }
}

