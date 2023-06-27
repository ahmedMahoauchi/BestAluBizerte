const express = require("express");
const {
    createContact,
    getAllContact,
    getContactById
} = require("../controllers/contactController");

const router = express.Router();

//router.get("/products", GetProduct);
//router.get("/:productId", getSingleProduct);
//router.patch("/:productId", UpdateProduct);
//router.delete("/:productId", DeleteProduct);
router.post("/createContact", createContact);
router.get("/getAllContacts", getAllContact);
router.get("/getContactById/:id", getContactById);
module.exports = router;
