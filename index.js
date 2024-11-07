const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
.connect(MONGODB_URI)
.then(x => {
  console.log(`Connected to the database: "${x.connection.name}"`);
  // Before adding any recipes to the database, let's remove all existing ones
  return Recipe.deleteMany();
})
.then(() => {
  // Insert the recipes from data.json into the database
  return Recipe.create(data);
})
.then(recipes => {
  // Log each recipe title
  recipes.forEach(recipe => {
    console.log(recipe.title);
  });
  // Update the specific recipe after logging
  return Recipe.findOneAndUpdate(
    { title: "Rigatoni alla Genovese" },
    { duration: 100 },
    { new: true }
  );

})
.then(updatedRecipe => {
  // Log the updated recipe
  console.log(updatedRecipe);
  return Recipe.findOneAndDelete({title: 'Carrot Cake'})
})
.then(deleteRecipe =>{
  if (deleteRecipe) {
    console.log("deleteRecipe:" , deleteRecipe )
  }
  else{
    console.log("no hay receta para eliminar")
  }
})
.then(() => {
  return mongoose.connection.close();
})
.then(() => {
  console.log("Connection closed");
  process.exit(1);
})
.catch(err => {
  console.error(err)
  process.exit()
})
