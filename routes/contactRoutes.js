const express = require("express");
const {
    createContact,
    getAllContact
} = require("../controllers/contactController");

const router = express.Router();

//router.get("/products", GetProduct);
//router.get("/:productId", getSingleProduct);
//router.patch("/:productId", UpdateProduct);
//router.delete("/:productId", DeleteProduct);
router.post("/createContact", createContact);
router.get("/getAllContacts", getAllContact);
module.exports = router;
