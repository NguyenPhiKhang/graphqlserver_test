const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

const uri =
    "mongodb+srv://khangse616:khangse616@cluster0-wpib7.mongodb.net/databaseGraphql?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
    console.log("connected to database");
});

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen(process.env.PORT || 4000, () => {
    console.log("now listening for request on port 4000");
});
