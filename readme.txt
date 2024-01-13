Requirements can be found in package.json


npm install express fs jsonwebtoken mysql2 path sequelize sequelize-cli

sequelize init (if not work then, npm install -g sequelize-cli)

Now in Mysql create a schema with the name "samples" or any of your choices
Add it to config/config.json

	"development": {
			"username": "root", 
    			"password": "test123", //mysql password
   			"database": "samples", //schema name 
   			"host": "localhost", // host address
   			"dialect": "mysql"
  	}



Make sure to:
	add header: 
		x-password : "secures" 

	to every req to work or comment the line 21 ( app.use(authorise); ) on app.js if no authorisation is needed 



List of routes:

	to create dummy data for user and global
	Post http://localhost:3000/dummy


	Get http://localhost:3000/users
	return all user on the database;


	Post http://localhost:3000/users
	
	body : {
		
		"username" : "Rishabh",
	      	"mail" : "cool@gmail.com",
      		"number" : "1234567890",
      		"password" : "secure",
      		"contact_list" : "[]"
	}


For search:
	Get http://localhost:3000/users/:id

	If id is string it will search similar name if number will search for similar numbers;

To add number to spam
	
Post http://localhost:3000/spam	
	
	body:{
		"number" :"1102856789"	
	} 

 



