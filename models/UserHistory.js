const mongoose = require("mongoose");

const UserHistory = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user",
            required: true,
        }
        ,
        symptoms: [

            {
                type: String,
                required: true,

            }
        ]
        ,
        Data: {
            type: mongoose.Types.ObjectId,
            ref: "Data",
            required: true,
        }
    },


    { timestamps: true }
);

module.exports = mongoose.model("UserHistory", UserHistory);
