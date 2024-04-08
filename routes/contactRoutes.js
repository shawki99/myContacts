const express = require("express");
const router = express.Router();

router.route("/").get((req,res) => {
    // res.send("Get all contacs");//NOTE-> we use this to retrieve it as normal data
    res.status(200).json({messege:"Get All Contacs"});  //NOTE-> we use this to retrieve it as json data with status code
})

router.route("/").post((req,res) => {
    res.status(200).json({messege:"Create Contact"});  //NOTE-> we use this to retrieve it as json data with status code
})

router.route("/:id").get((req,res) => {
    res.status(200).json({messege:`Get Contact for ${req.params.id}`});  //NOTE-> we use this to retrieve it as json data with status code
})

router.route("/:id").put((req,res) => {
    res.status(200).json({messege:`Update Contact for ${req.params.id}`});  //NOTE-> we use this to retrieve it as json data with status code
})

router.route("/:id").delete((req,res) => {
    res.status(200).json({messege:`Delete Contact for ${req.params.id}`});  //NOTE-> we use this to retrieve it as json data with status code
})

module.exports = router;