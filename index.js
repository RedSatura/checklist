import express from "express";

const app = express();
const port = 3000;

var items = 0

var listTextData = {
	
}

app.use(express.static("public"));

app.get("/", (req, res) => {
	listTextData = {};
	res.render("index.ejs", {
		listTextData: listTextData,
	});
});

app.post("/new-item", (req, res) => {
	items += 1;
	listTextData["item" + String(items)] = "";
	res.render("index.ejs", {
		listTextData: listTextData,
	});
});

app.listen(port);

function underlineText() {
	alert("hey");
}