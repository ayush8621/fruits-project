const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});


const fruitschema = new mongoose.Schema ({
  name:{
    type:String,
    required:true
  },
  rating:Number,
  review:String
});

const personschema = new mongoose.Schema ({
  name:{
    type:String,
    required:true
  },
  age:Number,
  favoritefruit:fruitschema
});

const Person = mongoose.model("Person",personschema);



const Fruit = mongoose.model("Fruit", fruitschema);

const fruit = new Fruit({
  name:"Apple",
  rating:5,
  review:"Bit sour"
});

const person = new Person({
  name:"John",
  age:19,
  favoritefruit:fruit.name
});


// const orange = new Fruit({
//   name:"Orange",
//   rating:7,
//   review:"just loved it"
// });
fruit.save();
person.save();
// Fruit.find(function(err,fruits){
//   console.log(fruits);
// });
// const banana = new Fruit({
//   name:"banana",
//   rating:4,
//   review:"hate bananas"
// });


// Fruit.insertMany([orange,banana],function(err){});
//
// Fruit.find(function(err,fruits){
//   console.log(fruits);
  // fruits.forEach(function(fruitarr){
  //   console.log(fruitarr.name);
  // });
// });


Fruit.deleteMany({rating:[4,5]},function(err){});
