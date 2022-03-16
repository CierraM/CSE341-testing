# Lesson 11 Class Activity Starting Code

The purpose of this activity is to help students practice writing tests for their Node.js projects.

## Steps to Complete
### Setup

- Look through the sample code and get familiar with it
- Run npm install to install dependencies.
- Create a .env file and add a your own mongodb connection string: ``` MONGODB_URI=<your connection string here>```
- Install jest with ```npm install --save-dev jest```
- Install supertest with ```npm install --save-dev supertest```. This adds some extra functionality for testing API calls.
- Install jest's mongodb library with ```npm install --save-dev @shelf/jest-mongodb```. This will let you write tests for connecting to MongoDb
- Add the following line to the scripts section of your package.json:```"test": "jest --watch --coverage"```
The jest command runs your test scripts. The --watch option will have your tests rerun every time you make a code change. The --coverage option will show how much of your code has been tested.
- The \_\_tests\_\_ folder is where you will add your test files

### Route Tests
- Write tests for the /users GET and POST routes.
- You can put these in the same file, or in two different files. The file name should end in ".spec.js" (e.g. routes.spec.js)
- Your tests should at least test for the correct response status codes and content types.
- [This tutorial](https://fek.io/blog/how-to-add-unit-testing-to-express-using-jest) has an example of what that could look like
- Also take a look at the docs for [jest](https://jestjs.io/) and [supertest](https://www.npmjs.com/package/supertest)
- When you are finished, compare your solution with the get.spec.js and post.spec.js files in the sample solution.
### MongoDb Tests
- The Jest documentation has an example of working with MongoDb: [https://jestjs.io/docs/mongodb](https://jestjs.io/docs/mongodb)
- Write a test for inserting a user into MongoDb
- Write a test for deleting a user from MongoDb
- When you are finished, compare your solution with the mongo.spec.js file in the sample solution.
### Come Up With Your Own
- Think about what other kinds of things you could test
- Try adding some more routes to the project and writing tests for those as well
