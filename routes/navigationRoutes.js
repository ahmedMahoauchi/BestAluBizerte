const express = require("express");
const {
    index,
    explore,
    contact,
    about,
    trending
} = require("../controllers/navigationController");

const router = express.Router();

//router.get("/products", GetProduct);
//router.get("/:productId", getSingleProduct);
//router.patch("/:productId", UpdateProduct);
//router.delete("/:productId", DeleteProduct);
router.get("/explore", explore);
router.get("/contact", contact);
router.get("/about", about);
router.get("/trending", trending);
router.get("/", index);

module.exports = router;
