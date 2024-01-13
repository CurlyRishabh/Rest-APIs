const express = require("express");
const router = express.Router();
const {User} = require("../models");
const {Global} = require("../models");


const dummyUsersData = [
  {"username": "john_doe", "mail": "john.doe@example.com", "number": "5551234567", "password": "secure", "contact_list": "[]"},
  {"username": "jane_smith", "mail": "jane.smith@example.com", "number": "5559876543", "password": "secure", "contact_list": "[]"},
  {"username": "alice_jones", "mail": "alice.jones@example.com", "number": "5552345678", "password": "secure", "contact_list": "[]"},
  {"username": "bob_jenkins", "mail": "bob.jenkins@example.com", "number": "5558765432", "password": "secure", "contact_list": "[]"},
  {"username": "emma_davis", "mail": "emma.davis@example.com", "number": "5553456789", "password": "secure", "contact_list": "[]"},
  {"username": "william_miller", "mail": "william.miller@example.com", "number": "5557654321", "password": "secure", "contact_list": "[]"},
  {"username": "olivia_taylor", "mail": "olivia.taylor@example.com", "number": "5554567890", "password": "secure", "contact_list": "[]"},
  {"username": "noah_smith", "mail": "noah.smith@example.com", "number": "5559876541", "password": "secure", "contact_list": "[]"},
  {"username": "mia_anderson", "mail": "mia.anderson@example.com", "number": "5556789012", "password": "secure", "contact_list": "[]"},
  {"username": "ethan_wilson", "mail": "ethan.wilson@example.com", "number": "555034567", "password": "secure", "contact_list": "[]"},
];


async function add(x, id) {
	console.log("adding to global ", x);
	const data = {
		userId: id,
		username: x.username,
		number: x.number,
		mail: x.mail,
	};

	try {
		await Global.create(data);
	} catch (error) {
		console.log("error while adding to global table", error);
	}
}


router.post("/", async (req, res) => {
    console.log("DUMMY");
 
    for(let i=0; i<10;i++){
    
        await User.create(dummyUsersData[i]);
        await add(dummyUsersData[i], i+1)
    }
    res.send("done");
});

module.exports = router;
