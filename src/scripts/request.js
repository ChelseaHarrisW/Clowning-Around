import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()
    const convertRequestToListElement = (request) => { // defining a fx varible...this fx is returning the discrription from the request we first have to get the whole obj then interate through
        //we are passing request through as a parameter because the user input is requires
        return `
        <li>
            Youre invited to ${request.description}'s party! the parent ${request.description2} submitted a request, will be hosting at: ${request.address}, on ${request.neededBy}. Ignore to auto accept otherwise 
            <button class="request__delete"
                    id="request--${request.id}">
                Deny
            </button>
        </li>
    `
    
     
        }

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("") 
            }
        </ul>
    `
    return html
}
