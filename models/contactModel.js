const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
mongoose.set("strictQuery", false);

const contactSchema = mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  subject: String,
  message: String,
  createdAt: {
    type: Date,
    default: new Date(),
  }
});

module.exports = Contact = mongoose.model("contact", contactSchema);
