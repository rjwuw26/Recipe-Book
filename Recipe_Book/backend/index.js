// ----------------------------------------------
// TCSS 460: Summer 2025
// Backend REST Service Module
// ----------------------------------------------
// Express is a Node.js web application framework
// that provides a wide range of APIs and methods
// Express API Reference:
// https://expressjs.com/en/resources/middleware/cors.html

// ----------------------------------------------
// retrieve necessary files (express and cors)
const express = require("express")
const cors = require("cors")
// retrieve the MySQL DB Configuration Module
const dbConnection = require("./config")
// use this library for parsing HTTP body requests
var bodyParser = require('body-parser');


// ----------------------------------------------
// (A)  Create an express application instance
//      and parses incoming requests with JSON
//      payloads
// ----------------------------------------------

//var app = express(express.json); 
var app = express(); // ✅ Correct
app.use(express.json()); // ✅ Add this to parse JSON


// ----------------------------------------------
// (B)  Use the epxress cors middleware
//      Cross-origin resource sharing (CORS)
//      is a technique that restricts specified
//      resources within web page to be accessed
//      from other domains on which the origin
//      resource was initiated the HTTP request
//      Also use the bodyParser to parse in 
//      format the body of HTTP Requests
// ----------------------------------------------
app.use(cors());
app.use(bodyParser.json());

// ----------------------------------------------
// (1) Retrieve all recipes in recipe book
// root URI: http://localhost:port/
app.get('/', (request, response) => {
  const sqlQuery = "SELECT * FROM recipes;";
  dbConnection.query(sqlQuery, (err, result) => {
  if (err) {
    return response.status(400).json({Error: "Error in the SQL statement. Please check."});
  }
  response.setHeader('SQLQuery', sqlQuery); // send a custom header attribute
  return response.status(200).json(result);
  });
});

app.get('/:title', (request, response) => {
  const title = request.params.title;
  const sqlQuery = "SELECT * FROM recipes WHERE title = ?;";
  dbConnection.query(sqlQuery, [title], (err, result) => {
    if (err) {
      return response.status(400).json({ Error: "Error in the SQL statement. Please check." });
    }
    response.setHeader('RecipeTitle', title);
    return response.status(200).json(result);
  });
});


// ----------------------------------------------
// (3) insert a recipe by recipe title
// city URI: http://localhost:port/title
app.post('/', (req, res) => {
  const sqlQuery = 'INSERT INTO recipes (id, title, description, instructions, prep_time) VALUES (?, ?, ?, ?, ?);';
  const values = [
    req.body.id,
    req.body.title,
    req.body.description,
    req.body.instructions,
    req.body.prep_time
  ];
  dbConnection.query(sqlQuery, values, (err, result) => {
    if (err) {
      return res.status(400).json({ Error: "Failed to add recipe.", Details: err.sqlMessage });
    }
    return res.status(200).json({ Success: "Recipe added successfully!" });
  });
});



// ----------------------------------------------
// (4) update an existing recipe by title name
// city URI: http://localhost:port/title
app.put('/:title', (req, res) => {
  const title = req.params.title;
  const sqlQuery = `
    UPDATE recipes
    SET title = ?, description = ?, instructions = ?, prep_time = ?
    WHERE title = ?;
  `;
  const values = [
    req.body.title,
    req.body.description,
    req.body.instructions,
    req.body.prep_time,
    title
  ];
  dbConnection.query(sqlQuery, values, (err, result) => {
    if (err) {
      return res.status(400).json({ Error: "Failed to update recipe.", Details: err.sqlMessage });
    }
    return res.status(200).json({ Success: "Recipe updated successfully!" });
  });
});



// ----------------------------------------------
// (5) Delete a recipe by title name
// city URI: http://localhost:port/title
app.delete('/:title', (req, res) => {
  const title = req.params.title;
  const sqlQuery = "DELETE FROM recipes WHERE title = ?;";
  dbConnection.query(sqlQuery, [title], (err, result) => {
    if (err) {
      return res.status(400).json({ Error: "Failed to delete recipe." });
    }
    return res.status(200).json({ Success: "Recipe deleted successfully!" });
  });
});



// ----------------------------------------------
// Ref: https://expressjs.com/en/4x/api.html#app
// (C)  Create a server such that it binds and
//      listens on a specified host and port.
//      We will use default host and port 3000.
app.listen(2000, () => {
    console.log("Express server is running and listening");
}); 


