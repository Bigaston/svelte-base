const express = require('express')
const path = require("path")

var app = express()

const PORT = 1697;

app.use("/static", express.static('./web/static'));

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "./web/index.html"))
})

var serv = app.listen(PORT, () => console.log(`Serveur lauched on port ${PORT}`))
