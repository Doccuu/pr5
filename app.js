const express = require("express")
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const fs = require("fs")

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(3000, () => {
    console.log("server listening on http://localhost:3000");
})

app.post("/api/data", (req,res) => {
    const data = req.body;
    console.log(data);
    res.send(data);
})



app.get('/html', (req, res) => {
	const filePath = path.join(__dirname, 'index.html'); // путь к файлу
	fs.readFile(filePath, 'utf8', (err, data) => { // чтение файла
		res.send(data); // отправка содержимого файла
	});
});
