const applicationState = {
    requests: []
    }
    const mainContainer = document.querySelector("#container")
    
    const API = "http://localhost:8088"
    
    export const fetchRequests = () => { // defining a var. fetchRequest... fetch is a way to get data on the web. 
        return fetch(`${API}/requests`) //step 1. fetch and input the site, or api, what ever were fetching. we will get a promice 
            .then(response => response.json()) // step 2. using the then method when the promice of data is recived. the promice (responce from the web) will be returned. *we are getting json back here this is why .json() is invoked here. we get another promice here (this is parsedData)
            .then( // step 3. we use the second promice and tell it what to do. here were passing it in as a parameter and then storing this in the application state.
                (serviceRequests) => {
                    // Store the external state in application state (line 1 where request are housed here in js.)
                    applicationState.requests = serviceRequests //these will be stored in the aplication state obj
                }
            )
    }
    //^^ this entire function is being exported to main.js to be used as a
    
    export const getRequests = () => { //returning a copy of resuest to the applications state
        return applicationState.requests.map(Requests => ({...Requests}))
    }
    // ^^ this is being used to be imported into 
    export const sendRequest = (userServiceRequest) => { // this function is to send the request accross the internet
        const fetchOptions = { // defining a variable that is an object
            method: "POST", // we use the key of method to define the post
            headers: { // the header object is here to define what type of content
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServiceRequest) //we use this JSON.stringify to pass in the parameter: userRequest
        }
    
    
        return fetch(`${API}/requests`, fetchOptions)// here we are returning the users responds here
            .then(response => response.json()) //waiting for promice to transfer to json
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged")) // when thats done instructing the info to announce that the state has changes
            })
    }
    
    export const denyRequest = (id) => { // deny button
        return fetch(`${API}/requests/${id}`, { method: "DELETE" })
            .then(
                () => {
                    mainContainer.dispatchEvent(new CustomEvent("stateChanged")) // this is where we are being explisit about what we are doing when the button is clicked
                }
            )
    }
    
    //this module is manage the aplication state
    