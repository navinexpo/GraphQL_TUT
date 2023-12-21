//create entry point
const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema/schema");
const port = process.env.PORT || 5000;

//set stored variable app and initail the express method.
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development", //true for developement
  })
);

//to listen the app invoking
app.listen(port, console.log(`Server is running on port: ${port}`));
