Framework: Cypress
IDE: VS code

The rease why I choose Cypress is that I found Cypress is a framework which is easy to set up. Based on my previous knowledge of selenium and javascript, I learned to develop test cases in few hours.

How to run test cases locally?

1. Install Cypress

$cd /your/project/path
$npm install cypress --save-dev


2. Run Cypress
$./node_modules/.bin/cypress open


3. In the GUI of Cypress, select the test case you want to execute.

For example, in this assignment, click billPayTest.js under the folder of ParabankTests, that test case will be executed in a new opening Chrome browser. 

Username I used to login: admin
password: 123456

login method is in support/commands.js.