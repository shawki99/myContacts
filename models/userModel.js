const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : {
        type: String,
        require: [true, "Please add the username"],
    },
    email : {
        type: String,
        require: [true, "Please add the contact email address"],
        unique: [true,"email address is already taken"],
    },
    password : {
        type: String,
        require: [true, "Please add the user password"],
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("User", userSchema);