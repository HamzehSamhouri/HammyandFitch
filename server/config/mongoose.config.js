const mongoose = require('mongoose')

// MongoDB Database
const database = 'Abercrombie&Fitch'

mongoose.set("strictQuery", true);

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Established a connection to the database, ${database}.`))
.catch(err => console.log('Something went wrong while connecting to the database', err))