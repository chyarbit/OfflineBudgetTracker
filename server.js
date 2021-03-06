const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
//console.log("MONGOOSE TEST", process.env.MONGODB_URI);
var mongoURI = process.env.MONGODB_URI ||"mongodb://localhost/budget"
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use("/api", require("./routes/api.js"));
app.use(require("./routes/htmlController"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});