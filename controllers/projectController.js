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
      
      res.status(200).json(UserMessages);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  exports.getProjectById = async (req, res) => {
    const projectId = req.params.id; // Assuming the project ID is passed as a parameter in the route
  
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
  
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.deleteProjectById = async (req, res) => {
    const projectId = req.params.id; // Assuming the ID is passed as a URL parameter
  
    try {
      const deletedProject = await Project.findByIdAndDelete(projectId);
  
      if (!deletedProject) {
        return res.status(404).json({ message: 'Project not found.' });
      }
  
      res.status(200).json({ message: 'Project deleted successfully.' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };