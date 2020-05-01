var mongoose = require("mongoose");

var categorySchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    }
},
{timestamps: true}
);

modeule.export = mongoose.model("Category", categorySchema);