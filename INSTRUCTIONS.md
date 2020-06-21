# Weekend Challenge: jQuery Salary Calculator
Create an application that records employee salaries and adds salaries up to report monthly costs. 

## Topics Covered
- JavaScript
- jQuery - Selectors, append, and event handling

## Assignment

The application should ha vvan input form that collects _employee first name, last name, ID number, job title, annual salary_.

[x] input for employee first name
[x] input for employee last name
[x] input for ID number
[x] input for job title
[x] input for annual salary
[x] a Submit button

[x] collect form information from above
[x] store employe information as an object
[x] clear input fields

[x] function to calculate the monthy costs of having all employees
    [x] loop through array of employees and add up their salaries / 12
    [x] return total sum

[x] create a place to view all employees on dom, ul list
    [x] create function to append employee li elements with unique tags

[x] create a place to display total monthly cost
[x] append the total monthly cost to the dom
[x] if total monthly cost > 20k change background to red

[x] create a delete button 'x' that removes an employee from the DOM
    [x] research the .data() jquery function
        [x] removes employee from array and DOM
        [x] recalulate total monthly costs with function
    
--- Stretch Goals ---

[x] Add styling that fits the assignment
    [x] red outlines when not filled in inputs
    
[] Add extra functionality (your choice) to the assignment
    [] retrieve removed employee information and rejoin it to the array/dom/total
    [x] add input field shakes

A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.



Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.

### Files Provided
No files have been provided. Fork and clone this repository or create a new GitHub repository to get started. Make sure to commit regularily!

### Wireframe

![Wireframe](salary-calc-wireframe.png)

## Stretch Mode

Add styling or extra functionality that fits with the theme of this assignment.

Once the employee is deleted, update the total spend on salaries account for this employee's removal. This will require that the logic knows which element was removed. You will need to use `.text()` as a getter or look into jQuery's `.data()` function. This is tricky! 

## Reminder About Modes

Above, we introduced the concept of levels of difficulty. "Mode" is how we will typically refer to each level. Below is a brief explanation of

* what to expect when attempting each mode
* if they are required or not

Mode | Description
--- | ---
Base | required
Stretch | optional, stretches your understanding and may require additional research

## Assignment Submission
Check in your repo, then turn in your work via the Prime Academy Assignment Application at [http://primeacademy.io](http://primeacademy.io), as usual and don't hesitate to hit up the Slack channel as needed!
