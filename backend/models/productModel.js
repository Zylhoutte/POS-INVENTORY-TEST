const mongoose = require('mongoose')

//for create table into db
const productSchema = mongoose.Schema({

    name: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number,
         required: true
         },
    image: { 
        type: String, 
        required: true 
    }

}, {
    //for date
    timestamps: true
});

module.exports = mongoose.model("Product", productSchema);
