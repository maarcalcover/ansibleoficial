const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => res.send("Examen DAW Despliegue inicial\n"));
app.listen(port, () => console.log(`Listening on ${port}`));
