const express = require("express");
const router = express.Router();
const {GlobalSpam} = require("../models");
const {Global} = require("../models");


router.post("/", async (req, res) => {


	try {
		//finding if the spammer exist in globalspam data base
		const no = req.body.number;
		console.log("finding spam user on globalSpam", no);
		const user = await GlobalSpam.findOne({
			where: {
				number: no,
			},
		});

		//check if user is in global database
		const globalUser = await Global.findOne({
			where: {
				number: no,
			},
		});



        //adding to globalSpam_DB if user doesnt exist
		if (!user) {
			const data = {
				number: no,
				spamCount: 1,
			};

			await GlobalSpam.create(data); 
			if (globalUser) {
				Global.update(
					{spamCount: 1},
					{
						where: {
							number: no,
						},
					}
				);
			}

            
            res.status(201).send(`added ${no} to spam` );
            
        } else {
			let x = user.spamCount;
			x = x == null ? 1 : x + 1;
			

            //updating when user found on global spam
			await GlobalSpam.update(
				{spamCount: x},
				{
					where: {
						number: no,
					},
				}
			);

            if (globalUser) {
				await Global.update(
					{spamCount: x},
					{
						where: {
							number: no,
						},
					}
				);
			}
            user.spamCount = user.spamCount + 1;

            res.status(201).send("updating count of number " + user.number);
		}
	} catch (error) {

		console.error("error: here ",  error);
		res.status(500).send("Internal Server Error");
	}
});



module.exports = router;
