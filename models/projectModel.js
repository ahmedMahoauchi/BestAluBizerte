const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
mongoose.set("strictQuery", false);

const projectSchema = mongoose.Schema({
  name: String,
  image: String,
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  }
});

module.exports = Project = mongoose.model("project", projectSchema);
