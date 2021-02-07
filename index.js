// start your server here
const server = require('./api/server.js');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});



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