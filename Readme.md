**This assessment was done using maven.**

---

## Frameworks Used

1. Cypress

---


## How To Run Tests 
- Install Cypress using npm install cypress
-  node_modules/.bin/cypress run on terminal

---
## Reports

- Cypress will generate a video of execution in the folder /videos for the test that was executed **Factoria.spec.js.mp4**

---

## Header Information on Request

- Cypress logs the API request on the side tab during execution and one can see how long it took for the api to respond and I have added the screenshot of how the header is printed on the cypress console

![Alt text](./Images/ConsoleHeaderLog.png?raw=true "Log View")

---
### For Defect report and testcase please refer to the folder /docs or see below

## Test Case

| TestCase | Steps  | #Expected Result  |
| ------- | --- | --- |
| Validate that 7 is a factorial of 5040 | Navigate to the application url | A text is printed on the screen that shows that “The factorial of 7 is: 5040” |
|  | Enter a valid input 7 in the text field  |  |
|  | Click on calculate | |

---
# Defect Report

### Title:
Text field color is red when user types a correct value after error display.

### Severity:
Low

### Priority:
Low

### Steps to Reproduce:
- Naviagte to the application url http://localhost:6464/
- Click on calculate without entering any value in the text field. 
- The text field should be highlighted in red and is displayed “Please enter an integer”
- Try entering a valid data like 7 in the Text field

#### Expected Result:
- Text Field should not the highlighted on red

### Actual Result:
- Text Field was highlighted in red

