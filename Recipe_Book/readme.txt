# Recipe Book API

## Overview

This web service provides a way to hold and manage recipes using CRUD operations.

Database Setup (XAMPP & phpMyAdmin)
Recipe Book Web Service

This project uses MySQL through XAMPP to provide a simple web service for managing a collection of recipes using CRUD operations.

---------------------------------------
Requirements
---------------------------------------
- XAMPP (to run MySQL and Apache)
- Node.js (latest LTS recommended)
- A code editor like VS Code

---------------------------------------
Database Setup
---------------------------------------
1. Download and install XAMPP if you haven’t already.

2. Open the XAMPP Control Panel and:
   - Start Apache
   - Start MySQL
   - Click Admin next to MySQL to open phpMyAdmin

3. Import the SQL file:
   - Navigate to "New" on the far left hand side and click it
   - Where it says "Database Name" type in "recipebook-db" and then "Create"
   - On the far left, navigate to the newly created "recipebook-db" and select the name, then navigate to to the Import tab at the top.
   - Choose the file recipebook-db.sql (included in this project)
   - Click Go (keep ALL default settings intact)
4. Add a User
   - Click on the recipebook-db database after it has been created, then from the top menu click on 'Priveleges'.
   - Click on "Add user account".
   - In the "Add user account" page, enter:
	Username: testuser
	Host name (Any host) %
	Password (use text filed): mypassword
	Re-Type: mypassword

---------------------------------------
SQL File Contents
---------------------------------------
The recipebook-db.sql file includes:
- The schema for the recipes table
- 10 sample recipes for testing

---------------------------------------
Installation and Running the Backend
---------------------------------------

1. Open the Project in VS Code
- Unzip the project (if zipped)
- Open the folder in VS Code
- Open the integrated terminal

2. Set Up the Backend
- In the terminal, switch from PowerShell to Command Prompt (or keep using PowerShell if preferred)
- Navigate to the backend directory:

  cd backend

- Initialize the Node.js project and install required dependencies:

  npm init -y
  npm i express nodemon mysql cors

3. Add the Start Script
In your package.json, ensure this file has the following code:

  "scripts": {
    "start": "nodemon index.js"
  }

4. Run the Backend
Start the web service by running:

  npm start

This will launch the Recipe Book backend server, which provides API endpoints for creating, reading, updating, and deleting recipes.

---------------------------------------
Data Source
---------------------------------------
All recipe data is sourced from the recipebook-db.sql file.
It includes a simulated dataset of 10 sample recipes, created for demonstration and testing purposes.

