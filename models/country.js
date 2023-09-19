const mongoose = require('mongoose')

const countrySchema  = new mongoose.Schema({

    name: {
        //common,
        type: String,
        required: true
    },
    
    unMember: {
        type: Boolean,
        required: true
    }

})

module.exports = mongoose.model('Country', countrySchema)