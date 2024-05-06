const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//access public
const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find();
    // res.send("Get all contacs");//NOTE-> we use this to retrieve it as normal data
    res.status(200).json(contacts);  //NOTE-> we use this to retrieve it as json data with status code
});

//@desc Create new contact
//@route POST /api/contacts
//access public
const createContact = asyncHandler(async(req,res) => {
    console.log("the request body is: ",req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);  //NOTE-> we use this to retrieve it as json data with status code
});

//@desc Get  contact
//@route GET /api/contacts/:id
//access public
const getContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact)
        {
            res.status(404);
            throw new Error("Contact not found")
        }
    res.status(200).json(contact);  //NOTE-> we use this to retrieve it as json data with status code
});

//@desc Update contact
//@route PUT /api/contacts/:id
//access public
const updateContact = asyncHandler(async(req,res) => {
    res.status(200).json({messege:`Update Contact for ${req.params.id}`});  //NOTE-> we use this to retrieve it as json data with status code
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//access public
const deleteContact = asyncHandler(async(req,res) => {
    res.status(200).json({messege:`Delete Contact for ${req.params.id}`});  //NOTE-> we use this to retrieve it as json data with status code
});

module.exports = {
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact,
};