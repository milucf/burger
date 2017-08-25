# burger

## Overview

 This is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!).

 ## How It Works

 Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

Whenever a user submits a burger's name, app will display the burger on the left side of the page -- waiting to be devoured.

Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

This app will store every burger in a database(mysql), whether devoured or not.

##How To Set Up And Run

Download this repository. 

Open terminal and navigate to the downloaded folder. Run `npm install` in your terminal to install dependencies. 

Open Connection.js file in Config folder and enter your mysql's username and password. 

In db folder, open schema.sql file and copy its sql command. In your mysql workbench, run the schema's command to create required database.

 In your terminal run `node server.js` to start the server. 
 
 Open your browser and  navigate to http://localhost:8080/ to see the example in action. 

 ##Seqeulized Version

For a sequelize version of this app go to [Sequelize Burger](https://github.com/milucf/sequelizedBurger)

