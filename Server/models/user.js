const mongoose = require('mongoose');

const userSchema=new mongoose.Schema(
    {
        name:{
            type: String,
            require: true,
            trim: true,
        },

        email:{
            type: String,
            require: true,
            unique: true,
            trim: true,
            lowercase: true,
        },

        password:{
            type: String,
            require: true,
        },

        role:{
            type: String,
            enum: ["citizens","Admin"],
            default: "citizens",
        },

    },
    {
        timestamps: true,
    }
);

const User=mongoose.model("User",userSchema);
module.exports=User;