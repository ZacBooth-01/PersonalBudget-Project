# PersonalBudget-Project
### Project to create and use an API to change a personal budget.

## Technology Used:

1. Javascript
2. Git
3. GitHub
4. Bash Terminal
5. Express.JS
6. Postman
7. Node.JS

## Features:
### Ready Features
+ Ability to create, read, update and delete enveloped in a person budget.
+ Ability to transfer data between specific envelopes.
+ Ability to update and create envelopes and IDs are automated.

## Setup:
Clone the repository to your computer. Then run NPM install and wait for all dependencies to download.
Then CD into the server directory. Run Node Server.js. You can then open your browser and go to Localhost:3000 and then run the API via the instructions below. 

## Using the API:
Accessing the API: add /envelopes to the end of localhost:3000.
+ GET:
 1. To get all the envelopes send a GET request to localhost:3000/envelopes.
 2. To get a specific envelope by ID send a GET request to /envelopes/(ID).
+ POST:
 1. To add a envelope to the database. Send a POST request to /envelopes. Include a JSON object as a body eg. {"title": "Envelope 1", "budget": "2000"}.
 2. To transfer between two envelopes. Send a POST request to /envelopes/transfer with a query which includes to id to move money from to the id to move it to and the amount to move. eg localhost:3000/envelopes/transfer?fromId=1&toId=2&amount=500.
+ PUT:
 1. To update a specific envelope. Send a PUT request to /envelopes/(ID) with a query which includes the property you would like to change ie. title or budget and what you would like to change it to. eg localhost:3000/envelopes/1?changeProp=title&changeItem=Envelope1.
+ DELETE:
 1. To delete a specific envelope. Send a DELETE request to /envelopes/(ID).
## Project Status
Complete

## Author
Created by [@ZacBooth-01](https://github.com/ZacBooth-01).
