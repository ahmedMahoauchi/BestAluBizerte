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



  exports.getContactById = async (req, res) => {
    const contactId = req.params.id; // Assuming the project ID is passed as a parameter in the route
  
    try {
      const contact = await Contact.findById(contactId);
      if (!contact) {
        return res.status(404).json({ message: 'contact not found' });
      }
  
      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };