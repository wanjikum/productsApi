// First we started with requiring mongoose and then we define the schema for our model. Last thing is exporting the model so it can be used by other files in our project.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  price: { type: Number, required: true }
});

// Export the model
module.exports = mongoose.model("Product", ProductSchema);
