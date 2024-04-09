//@desc Get all contacts
//@route GET /api/contacts
//access public
const getContacts = (req,res) => {
    // res.send("Get all contacs");//NOTE-> we use this to retrieve it as normal data
    res.status(200).json({messege:"Get All Contacs"});  //NOTE-> we use this to retrieve it as json data with status code
};

//@desc Create new contact
//@route POST /api/contacts
//access public
const createContact = (req,res) => {
    res.status(201).json({messege:"Create Contact"});  //NOTE-> we use this to retrieve it as json data with status code
};

//@desc Get  contact
//@route GET /api/contacts/:id
//access public
const getContact = (req,res) => {
    res.status(200).json({messege:`Get Contact for ${req.params.id}`});  //NOTE-> we use this to retrieve it as json data with status code
};

//@desc Update contact
//@route PUT /api/contacts/:id
//access public
const updateContact = (req,res) => {
    res.status(200).json({messege:`Update Contact for ${req.params.id}`});  //NOTE-> we use this to retrieve it as json data with status code
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
//access public
const deleteContact = (req,res) => {
    res.status(200).json({messege:`Delete Contact for ${req.params.id}`});  //NOTE-> we use this to retrieve it as json data with status code
};

module.exports = {
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact,
};