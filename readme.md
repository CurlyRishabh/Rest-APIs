
# Project Setup Guide

## Prerequisites

Ensure that you have Node.js and npm installed on your machine.

## Installation

Run the following command to install the required dependencies listed in the `package.json` file:

```bash
	npm install express fs jsonwebtoken mysql2 path sequelize sequelize-cli dotenv
```
```bash
	sequelize init
```
If `sequelize init` does not work, you may need to install the Sequelize CLI globally:
```bash
	npm install -g sequelize-cli
```
```bash
	sequelize init
```
# Database Setup

1. **Create a MySQL Schema:**

   In MySQL, create a schema with the name "samples" or any name of your choice.

2. **Configure Database Connection:**

	  Add the database connection details to `config/config.json`:

   ```json
   "development": {
       "username": "root",
       "password": "test123", // MySQL password
       "database": "samples", // Schema name
       "host": "localhost", // Host address
       "dialect": "mysql"
   }
   ```
  # Authentication and Authorization Setup

To ensure proper functioning of your requests, follow the steps below for authentication and authorization:

1. **Add Header to Every Request:**

   Include the following header in every request:

   ```plaintext
   x-password: "secures"
	```
	
  


# List of Routes

1. **Create Dummy Data:**

   - **Method:** POST
   - **Endpoint:** [http://localhost:3000/dummy](http://localhost:3000/dummy)
   - **Description:** Creates dummy data for users and global.

2. **Get All Users:**

   - **Method:** GET
   - **Endpoint:** [http://localhost:3000/users](http://localhost:3000/users)
   - **Description:** Retrieves all users from the database.

3. **Create a User:**

   - **Method:** POST
   - **Endpoint:** [http://localhost:3000/users](http://localhost:3000/users)
   - **Body:**
     ```json
     {
         "username": "Rishabh",
         "mail": "cool@gmail.com",
         "number": "1234567890",
         "password": "secure",
         "contact_list": "[]"
     }
     ```
     - **Description:** Adds a new user to the database.

4. **Search for User:**

   - **Method:** GET
   - **Endpoint:** [http://localhost:3000/users/:id](http://localhost:3000/users/:id)
   - **Description:** If the `id` is a string, it will search for a similar name. If it's a number, it will search for similar numbers.

5. **Add Number to Spam:**

   - **Method:** POST
   - **Endpoint:** [http://localhost:3000/spam](http://localhost:3000/spam)
   - **Body:**
     ```json
     {
         "number": "1102856789"
     }
     ```
     - **Description:** Adds a phone number to the spam list.

Feel free to adapt and enhance this documentation based on your specific project details and requirements.
