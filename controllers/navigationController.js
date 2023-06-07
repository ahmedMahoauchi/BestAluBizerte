
const Project = require("../models/projectModel.js");


   exports.explore = async (req, res) => {
    res.render('explore');
  };

   exports.about = async (req, res) => {
    res.render('about');
  };

   exports.contact = async (req, res) => {
    res.render('contact');
  };

   exports.trending = async (req, res) => {

    try {
      const UserMessages = await Project.find();
      const itemObjects = UserMessages.map(item => item.toObject());
      res.render('trending',{itemObjects})
    } catch (error) {
      res.status(404);
    }

  };