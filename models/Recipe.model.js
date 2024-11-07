const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LEVEL = ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'];
const DISH = [ "breakfast" , "main_course" , "soup" , "snack" , "drink" , "dessert", "other"];


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
    type:[String]
  },
  
  cuisine :{
    type:String,
    required : [true, 'A recipe needs a cuisine']
  },
  dishType:{
    type:String,
    enum: DISH
  },
  image:{
    type:String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"

  },
  duration:{
    type:Number,
    min: [0, 'At least 0']
  },
  creator:{
      type:String,

  },
  created:{
    type:Date,
    default: Date.now()
}
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
