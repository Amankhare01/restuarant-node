const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routers");
const PORT = 8000;

const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Routes
app.use("/food", router);

app.listen(PORT, () => console.log(`Server running at ${PORT}`))
