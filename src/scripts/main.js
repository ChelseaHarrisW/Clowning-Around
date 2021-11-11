import { fetchRequests} from "./dataAccess.js"
import {  Clownin } from "./clowning.js"
import { denyRequest} from "./dataAccess.js"
const mainContainer = document.querySelector("#container") //code to display html to the container

const render = () => { //defining the varible render
    fetchRequests().then( //here we need to fetch request in order to access the info from the sink repair mod.
        () => {
            mainContainer.innerHTML = Clownin() // inner html is going to be the sink repair fx in the end
        }
    )
}

render()  //when rinder this we will want to 

mainContainer.addEventListener( //this function is re rendering this html
    "stateChanged", //we are listening for the state to change
    customEvent => { //on the custom event
        render() //then we will re-render the page ...this is absolutely nessacary when fetching APIs, the data is traveling across the web
    }
)

mainContainer.addEventListener("click", click => { //Event listers listening for click
    if (click.target.id.startsWith("request--")) { //providing the target
        const [,requestId] = click.target.id.split("--") // splitting to innerate through the id
        denyRequest(parseInt(requestId)) //parsing thr id from string to number
    }
})
