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

         if(tipDisplay.innerText === 'NaN') {
             tipDisplay.innerText = '0.00'
         }
         //get the total bill per person
         const totalPerPerson = (billValue / numOfPeople.value).toFixed(2);

         //toggling error styling
         if (numOfPeople.value = '') {
             numOfPeople.classList.add('error');
             headingError.style.visibility = 'visible';
             resetButton.style.opacity = '0.35';
             tipDisplay.innerText = '0.00';
             totalDisplay.innerText = '0.00';
         } else if (numOfPeople.value !== '') {
             numOfPeople.classList.remove('error');
             headingError.style.visibility = 'hidden';
             reset.style.opacity = '1';
             reset.style.cursor = 'pointer';
         }

         //update tip amount per person in calculation display
         tipDisplay.innerText = tipPerPerson;

         //update the total per person in calculation display
         totalDisplay.innerText = totalPerPerson;

         if (tipDisplay.innerText === 'NaN' | totalDisplay.innerText === 'infinity'){
             tipDisplay.innerText = '0.00'
         }
         if (tipDisplay.innerText === 'Infinity' | totalDisplay.innerText === 'NaN'){
             tipDisplay.innerText = '0.00'
         }
    })
}

