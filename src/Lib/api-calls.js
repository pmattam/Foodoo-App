export let loginAndFetchUserDetails = (userCredentials) =>
    fetch("http://localhost:3001/login", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(userCredentials),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    })