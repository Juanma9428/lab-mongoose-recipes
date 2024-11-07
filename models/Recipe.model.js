const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LEVEL = ['Easy Peasy', 'Chef amateur', 'Chef ultraprofesional'];
const DISH = [ "desayuno" , "plato principal" , "sopa" , "merienda" , "bebida" , "postre", "otro"]
const recipeSchema = new Schema({
  title: {
    type : String,
    required : [true, 'A recipe needs a title']
  },
  level:{
    type: String,
    enum: LEVEL
  },
  ingredients:{
    type:[string]
  },
  
  kitchen:{
    type:string,
    required : [true, 'A recipe needs a kitchen']
},
dishType:{
  type:string,
  enum: DISH
},
image:{
  type:string,
  default: "https://images.media-allrecipes.com/images/75131.jpg"

},
duration:{
  type:Number,
  min: [0, 'At least 0']
},
creator:{
    type:string,

},
created:{
  type:Date,
  default: Date.now()
}
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
