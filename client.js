$(document).ready(onReady);

let employees = [];

function onReady(){
    $('#submitButton').on('click', collectInputs);
}

function collectInputs(event){

    event.preventDefault();

    let firstName  = $('#firstNameInput');
    let lastName = $('#lastNameInput');
    let title = $('#titleInput');
    let id = $('#IDInput');
    let annualSalary = $('#annualSalaryInput');

    //create check to see if inputs are empty

    employees.push(
        {firstName: firstName.val(), lastName: lastName.val(), jobTitle: title.val(),
         employeeId: id.val(), annualSalary: annualSalary.val()});

    firstName.val('');
    lastName.val('');
    title.val('');
    id.val('');
    annualSalary.val('');
}