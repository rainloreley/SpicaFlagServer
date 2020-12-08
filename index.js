require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");
const spicaCredits = require("./data/spicaCredits.json");
const allowedRings = require("./data/allowedRings.json");

app.use(require("body-parser").json());
app.use((err, req, res, next) =>
	res.status(500).json({ err: "internalError" })
);

db.sync().then(() => {
	app.listen(process.env.PORT || 8080, () =>
		console.log("Spica Profile Flag Server started and active.")
	);
});

app.get("/", (req, res) => {
	res.status(200).json({
		name: "Spica Profile Flag server",
		version: "high enough",
		repo: "https://github.com/SpicaApp/FlagServer",
	});
});

app.get("/credits", (req, res) => {
	res.status(200).json({
		credits: spicaCredits,
	});
});
app.get("/rings", (req, res) => {
	res.status(200).json({
		rings: allowedRings,
	});
});
app.get("/:id", require("./api/index"));
app.post("/:id", require("./api/update"));

// 404
app.use((req, res) => {
	res.status(404).json({ err: "notFound" });
});
