// Create web server
// 1. Load the express module
// 2. Create an express application
// 3. Start the server
// 4. Create a route
// 5. Send a response
// 6. Listen to a port

// 1. Load the express module
const express = require("express");

// 2. Create an express application
const app = express();

// 4. Create a route
app.get("/comments", (req, res) => {
  res.send("This is a GET request");
});

// 3. Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
