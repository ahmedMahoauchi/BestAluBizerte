const express = require("express");
const {
    createProject,
    getProjects
} = require("../controllers/projectController");

const router = express.Router();
const uploader = require("../middlewares/multer-config");
//router.get("/products", GetProduct);
//router.get("/:productId", getSingleProduct);
//router.patch("/:productId", UpdateProduct);
//router.delete("/:productId", DeleteProduct);
router.post("/createProject",uploader.single("image"), createProject);
router.get("/getProject", getProjects);

module.exports = router;
