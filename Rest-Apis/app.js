// app.js
const express = require("express");
const {sequelize} = require("./models");
const userRoutes = require("./routes/user");
const spamRoutes = require("./routes/spam")
const dummyRoutes = require("./routes/dummy")

const app = express();
const PORT = process.env.PORT || 3000;

const secureKey = "secure";

function authorise(req, res, next) {
	const password = req.headers["x-password"];

	console.log("middlewear auth ");
	if (password == "secure") next();
	else res.status(401).json({error: "Unauthorized"});
}

// app.use(authorise);

app.use(express.json());


app.use("/users", userRoutes);


app.use("/spam", spamRoutes)
app.use("/dummy", dummyRoutes)


sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
});
