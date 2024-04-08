const express = require("express");
const dontenv = require("dotenv").config();
const app =express();

const port =process .env.PORT || 5000;

app.use("/api/contacs", require("./routes/contactRoutes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});