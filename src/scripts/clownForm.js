import { sendRequest } from "./dataAccess.js"
export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="Child Name">Child Name</label>
            <input type="text" name="Child Name" class="input" />
        </div>
        <div class="field">
        <label class="label" for="Description">Parent Name</label>
        <input type="text" name="Parent Name" class="input" />
    </div>
        <div class="field">
            <label class="label" for="Address">Address</label>
            <input type="text" name="Address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="Budget">Budget</label>
            <input type="number" name="Budget" class="input" />
        </div>
        <div class="field">
            <label class="label" for="Date">Date needed</label>
            <input type="date" name="Date" class="input" />
        </div>

        <button class="button" id="submitRequest">Book your clown</button>
    `

    return html
} // above is the form. look at each div and imagine how the for is going to look/. the first section of the div is going to show the display what to input then give space for the input
//

const mainContainer = document.querySelector("#container") //remimber the #stands for id

//storing in permanate state
mainContainer.addEventListener("click", clickEvent => { //this will listen for the button th be clicked
    if (clickEvent.target.id === "submitRequest") { //this is defining out target further. this is telling the button when to store the info
        const userDescription = document.querySelector("input[name='Child Name']").value
        const userDescription2 = document.querySelector("input[name='Parent Name']").value //these varables 
        const userAddress = document.querySelector("input[name='Address']").value
        const userBudget = document.querySelector("input[name='Budget']").value //we  are assigning the value here wiith the .value
        const userDate = document.querySelector("input[name='Date']").value

        // Make an object out of the user input this is what we we are defining here how we want the information to display.
        const dataToSendToAPI = {
            
            description: userDescription,
            description2: userDescription2,
            address: userAddress,
            budget: userBudget,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI) //this is how we are sending the info that has been reserved from the button. passing in the varible defined above to be sure 
        //we have the correct format here. remimber we are sending this across the internet
    }
})
