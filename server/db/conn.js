const mongoose = require('mongoose')

module.exports = {
    connectToServer: async function () {
        try {
            let mongo = await mongoose.connect(process.env.DB_URI);
            console.log('Connected to mongoDB')
        }
        catch (err) { console.log(err) }
    },
};