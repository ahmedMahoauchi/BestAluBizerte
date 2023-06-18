const Contact = require("../models/contactModel.js");


exports.createContact = async (req, res) => {
    const { name, email, phoneNumber, subject,message } = req.body;
  
    try {
      const newContact = new Contact({
        name,
        email, 
        phoneNumber, 
        subject,
        message
      });
  
      await newContact.save();
      res.status(200).json({status:"created", newContact});
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  };

  exports.getAllContact = async (req, res) => {
  
    try {
      const contacts = await Contact.find();
      
      res.status(200).json(contacts);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };