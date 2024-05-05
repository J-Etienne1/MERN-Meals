const express = require("express");
const mongoose = require("mongoose");
//const cors = require("cors"); // To handle CORS routing 

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));



// TO DO
//Define data models (Ingredient and Recipe) using Mongoose schemas


// TO DO
// Define API endpoints (using Express routes)
app.get("/recipes", async (req, res) => {
  // Handle recipe retrieval logic based on user ingredients
});


const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}` ));
