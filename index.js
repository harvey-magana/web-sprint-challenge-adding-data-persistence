// start your server here
const server = require('./api/server.js');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

//GO THROUGH THIS FIRST
// 1. complete the index.js file *
// 2. create the api and data directories *
// 3. in the package.json file, add express, nodemon, helmet, knex, sqlite3 *
// 4. in the package add the scripts so the project can be bootted up 
// 5. in api, create a cars directory 
// 6. in the cars directory, create a project-, resource-, task- -router.js files 
// 7. in api, create a server.js file 
// 8. in data file, create a db-config.js file 
// 9. in db-config.js file, connect knex, knexfile.js, add the configuredKnex variable and export the file 
//10. in cars-router.js file, connect db-config.js file, create Router variable and build out the get, post, put and delete methods 
//11. connect cars-router.js file to server.js 
//12. connect server.js file to index.js file 
//13. create database schema with your sqlite editor 
//14. from your sqlite editor, connect and create your database to your data directory in your project 
//15. execute 'knex init' from your terminal to create the knexfile.js file in your root directory 
//16. in your knexfile.js file, buid out your development object 
//17. from your terminal, start your migration process by executing 'npx knex migrate:make cars-schema' 
//17a. populate your knexfile.js file with the migration part of of the object 
//18. build out your up and down stubs 
//19. next, run 'npx knex migrate:latest' 
//19a. If the database is currently, in your data directory, this command will complain. 
//To fix this, turn off your server, disconnect your database from your editor, delete the database from your data diretory, then 
//run the command again and the command should be successful. 
//In Postman, when you make a GET request, you will get back an empty array. This is good. Now you can post data to the table and you should 
//see uew updates to the table. 
//20. next run 'npx knex cars-schema' 
//21. next, to start the seed directory and 
//22. next, populate your knexfile.js file with the seeds part of of the object
//23. in your terminal run 'npx knex seed:make 01-cars' 
//24. in your terminal, run 'npx knex seed:run' 
// if you want to add additional tables, you can do so with an additional migration but do this before seeding.

// GO THROUGH THIS SECOND
// 1. initialize project with 'npm install'
// 2. create tables with 'knex migration:make create-tables'
// migrations folder will be created with the migrations file with the up and down stubs
// 3.  In your migration file, build out your schema, making sure to start with your less dependent 
// tables, then add your more dependent tables toward the bottom of your up stub
// 4. Again, in your migration file, for your down stub, build out your droptables method, 
// making sure to drop in the reverse order as your up method. 
// 5. When you are finished building out your migrations, run 'npx knex migrate:latest'
// this will create your database
// 6. After migrating your latest changes, run 'npx knex seed:run', 
// this will build out your database with the seed data. 
// You may run into FOREIGN KEY or UNIQUE constraints errors here. Fix as you find. 
// 7. Add the pool data to your development object in your knexfile.js file to add the 
// Foreign Key command that turns on FKs in your database.
// 8. Next, run 'npx knex migrate:rollback' then 'npx knex migrate:latest' to update the change to your 
// development object
// 9. To ensure that changes to foreign keys occurs, add the cascade rule to your up method in your 
// migration file