var express = require("express");

var app = express();

var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes
require("./public/assets/js/routes")(app);

// Listen
app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
});