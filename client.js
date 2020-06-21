$(document).ready(onReady);

let employeesArray = [];
let series = []

function onReady(){
    //create listener for submit employee button
    $('#submitButton').on('click', collectInputs);
}

function collectInputs(event){

    //disable form page refresh default
    event.preventDefault();

    //create variables for dom selectors
    let firstName  = $('#firstNameInput');
    let lastName = $('#lastNameInput');
    let title = $('#titleInput');
    let id = $('#IDInput');
    let annualSalary = $('#annualSalaryInput');

    //create check to see if inputs are empty
    firstName.removeClass('redBorder');
    lastName.removeClass('redBorder');
    title.removeClass('redBorder');
    id.removeClass('redBorder');
    annualSalary.removeClass('redBorder');

    //check for conflicting employee id
    let conflictingId = false;
    for(employee of employeesArray){
        if(employee.employeeId === id.val()){
            conflictingId = true;
        }
    }

    if(firstName.val() === ''){
        firstName.effect('shake', {distance: 3});
        firstName.addClass('redBorder');
    }
    if(lastName.val() === ''){
        lastName.effect('shake', {distance: 3});
        lastName.addClass('redBorder');
    }
    if(title.val() === ''){
        title.effect('shake', {distance: 3});
        title.addClass('redBorder');
    }
    if(id.val() === ''){
        id.effect('shake', {distance: 3});
        id.addClass('redBorder');
    }
    else if(conflictingId === true){
        id.effect('shake', {distance: 3});
        id.addClass('redBorder');
        alert('Please use unique employee ID numbers!');
    }
    if(annualSalary.val() === ''){
        annualSalary.effect('shake', {distance: 3});
        annualSalary.addClass('redBorder');
    }



    if( firstName.val() !== '' && lastName.val() !== '' &&
        title.val() !== '' && id.val() !== '' && annualSalary.val() !== '' && conflictingId === false){
            //create employee object with dom selector values
            let employee = {
                firstName: firstName.val(),
                lastName: lastName.val(),
                jobTitle: title.val(), 
                employeeId: id.val(), 
                annualSalary: annualSalary.val()
                };
        
            //push employee object into employee array
            employeesArray.push(employee);
                
            //create chartData for employee and push into series array for highCharts to use
            let chartData = {
                name: `${employee.firstName} ${employee.lastName}`,
                data: [Math.round(Number(`${employee.annualSalary}`)/12)],
                };

            series.push(chartData);

            //reset all input field values
            firstName.val('');
            lastName.val('');
            title.val('');
            id.val('');
            annualSalary.val('');
        
            console.log(employeesArray);
            console.log(calculateMonthlyCost());
    }
}

function deleteAndUpdateTotal(){

    //create id variable which holds button id
    let id = $(this).attr('id');
    
    //search for matching employeeID in employees array
    for(let i = 0; i<employeesArray.length; i++){
        if(employeesArray[i].employeeId === id){
        //remove employee from array upon successful find
        employeesArray.splice(i,1);
        series.splice(i,1);
        }
    }

    //recalculate / update employees list on DOM and total monthly cost
    calculateMonthlyCost();
    addEmployeeChart();
}

function calculateMonthlyCost(){

    //empty <tbody> of all employee <tr>'s
    $('tbody').empty();

    //for each employee, append a <tr> to <tbody> containing employee info.
    for(employee of employeesArray){
    $('tbody').append(`
        <tr id="tr${employee.employeeId}">
            <td>${employee.employeeId}</td>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.annualSalary}</td>
            <td>
                <button class="delete" id="${employee.employeeId}">Delete</button>
            </td>
        </tr>`);
    
    //add a listener to newly created delete button in <td>
    $(`#${employee.employeeId}`).on('click',deleteAndUpdateTotal);
    }

    //create/recreate chart display with highCharts
    addEmployeeChart();

    //start from 0, add all employees.annualSalary/12 to this new total
    let totalCost = 0;
    for(person of employeesArray){
        totalCost += Math.round(person.annualSalary/12);
    }

    //empty old total, insert new total into DOM
    $('#totalMonthlyCost').empty().text(`Total Monthly Cost: $${totalCost}`);
    
    //Change background color of total cost depending on its value
    if(totalCost > 20000){
        $('#totalMonthlyCost').css('background-color','red');
    }
    else{
        $('#totalMonthlyCost').css('background-color','rgb(79, 185, 120)');
    }
}


//create a column chart using highcharts library, 
function addEmployeeChart() {

    if(!$('#employeeChart').length){
        $(`<section id="employeeChart"></section>`).appendTo('main').effect('slide', 'slow');
        //there is a bug that doesnt round border corners the first time it appears due to animation
    }

    let chart = {
        type: 'column'
    };

    let title = {
        text: 'Employee Budget Impact'
    };

    let subtitle = {
        text: 'Max Monthly Budget: $20,000'
    };

    let xAxis = {
        categories: ['Employees']
    };

    let yAxis = {
        min: 0,
        max: 20000,
        title: {
            text: 'Employee Monthly Cost'
        }
    };
    //not fully sure what this one does
    let plotOptions = {
        column: {
        pointPadding: 0.2,
        borderWidth: 0
        }
    };  
    //I do not own nor did I make the highcharts library.
    let credits = {
        enabled: false //looks ugly when enabled
    };

    //add variables as properties and values to an object
    let json = {};
    json.chart = chart; 
    json.title = title;   
    json.subtitle = subtitle;
    json.xAxis = xAxis;
    json.yAxis = yAxis;  
    json.series = series; //this will be the employee objects to display on the chart
    json.plotOptions = plotOptions;  
    json.credits = credits;
    $('#employeeChart').highcharts(json);
}
