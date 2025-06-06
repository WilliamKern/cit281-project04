# CIT 281 Project 04

## Overview  
Project 04 centered around building a REST API using Node.js and Express. I created a `p4-module.js` file that stores and manages an array of question/answer objects, then used an Express server to provide endpoints for retrieving, adding, and deleting questions via HTTP requests. This project helped solidify my understanding of REST architecture and how servers interact with data modules.

## Objectives  
- Design and implement a simple REST API  
- Create and export multiple data-handling functions from a module file  
- Use Express routing to create `GET`, `POST`, and `DELETE` endpoints  
- Parse URL parameters and request bodies with `express.json()`  
- Send structured responses using `res.json()` and proper status codes  

## Deliverables  
- `p4-module.js`: A module that manages a question/answer data array  
- `server.js`: An Express server that maps RESTful routes to the module functions  
- JSON responses that provide success/error messages and relevant data  
- Proper handling of missing or invalid input  

## What I Learned  
This project deepened my understanding of RESTful APIs and how backend modules can expose functionality to a client via structured endpoints. I practiced organizing routes, validating request data, and returning appropriate responses. It also helped clarify how to structure modular, testable server code that separates data logic from routing.
