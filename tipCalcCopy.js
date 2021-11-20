// Create Global variables for getting element by ID or query Selector

const bill = document.getElementById('bill');
const buttons = document.querySelectorAll('.percent-button');
const customButton = document.getElementById('custom');
const numOfPeople = document.getElementById('num-people');
const headingError = document.getElementById('.num-error');
const resetButton = document.getElementById('reset');
const tipDisplay = document.getElementById('tip-value');
const totalDisplay = document.getElementById('total-value');

// Goal: Calcualte the tip amount and total per person

// Input: billAmount(bill), tipPercentage(.percent-button), numberPeople(num-people)
// Output: Tip Amount per person and Total per person
    //(Bill * Tip Percentage) / numOfPeople
    //Bill / numOfPeople

//Loop over Buttons:
    //get % when button is clicked
    //divide total by numbr of persons = total per person
    //divide % by number of persons = tip per person

for (let button of buttons) {
    button.addEventListener('click', function() {
        (document.querySelector('.clicked')) ? document.querySelector('clicked').classList.remove('clicked') : '';
        this.classList.add('clicked');

        //convert button text to a decimal number
        const buttonPercent = (parseFloat(button.innerText, 10) * 0.01);

        //convert bill value to a number
        const billValue = parseFloat(bill.value);

        const numPeople = parseInt(numOfPeople.value, 10);

        //multiply buttonPercent by bill Value to get total tip amount
        const totalTip = buttonPercent * billValue;

         /* divide totalTip by numOfPeople to get total tip per person */
         const tipPerPerson = (Math.trunc((totalTip / numPeople)*100)) / 100;
    })
}