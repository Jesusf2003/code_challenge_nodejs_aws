const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/persona", require("./routes"));

var port = 3005;

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
})