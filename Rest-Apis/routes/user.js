// routes/user.js
const express = require("express");
const router = express.Router();
const {User} = require("../models");
const {Global} = require("../models");
const {Op} = require("sequelize");


//function to add in global databasse
async function add(x){
    console.log("adding to global ",x);
    const data = {
		"userId": x.id,
        "username": x.username,
        "number": x.number,
		"mail": x.mail,
    };
    
    try {
        await Global.create(data);
    } catch (error) {
        console.log("error while adding to global table", error);
    }
    
}


// Create a new user
router.post("/", async (req, res) => {
	try {

		let no = req.body.number;
		//check if exist
		const globalUser = await Global.findOne({
			where: {
				number: no,
			},
		});
		if(globalUser){
			res.send("Mobile/mail  already taken")
		}else{

			// adding to user table
			const user = await User.create(req.body);
			add(user);
			res.status(201).json(user);
		}
        
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});


// Get all users search
router.get("/", async (req, res) => {
	try {
		const users = await User.findAll();
		res.status(200).json(users);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});

// Get a user by ID
router.get("/:id", async (req, res) => {
	const query = req.params.id;
	console.log(query);
	try {
		//if query is a string then search by username
		if(isNaN(query)){
			const users = await Global.findAll({
				where: {
					username: {[Op.like]: `${query}%`},
				},
			});

			res.status(200).json(users);
		}else{

			//if query is a number then search by number
			const Num = parseInt(query);
			const users = await Global.findAll({
				where: {
					number: {[Op.like]: `${Num}%`},
				},
			});

			res.status(200).json(users);
		}
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});








module.exports = router;
