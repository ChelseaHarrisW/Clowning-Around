import { ServiceForm } from "./clownForm.js"
import { Requests } from "./request.js"

export const Clownin = () => {
    return `
        <h1>Clowning Around</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="Clown invitation">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}

//we want to render the html to the dom in this module for the form we have created, and the 