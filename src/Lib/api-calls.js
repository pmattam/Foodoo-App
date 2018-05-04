export let loginAndFetchUserDetails = (userCredentials) =>
    fetch("http://localhost:3001/login", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(userCredentials),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    })

export let getAllEvents = () =>
    fetch("http://localhost:3001/events", {
        method: "GET",
        mode: "cors",
        headers: new Headers({
            "Authorization": `Bearer ${localStorage.getItem("authorization")}`
        })
    })

export let postNewEvent = (eventDetails) =>
    fetch("http://localhost:3001/events", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(eventDetails),
        headers: new Headers({
            "Authorization": `Bearer ${localStorage.getItem("authorization")}`
        })
    })

export let registerNewUser = (userCredentials) =>
    fetch("http://localhost:3001/register", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(userCredentials),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    })