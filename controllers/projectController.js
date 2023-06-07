const Project = require("../models/projectModel.js");


exports.createProject = async (req, res) => {
    const { name, description } = req.body;
    const image = `${"img--" + req.file.originalname}`;
    try {
      const newProject = new Project({
        name,
        image,
        description
      });
  
      await newProject.save();
      res.status(200).json(newProject);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  exports.getProjects = async (req, res) => {
   
    try {
      const UserMessages = await Project.find();
      console.log(UserMessages);
      res.status(200).json(UserMessages);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };