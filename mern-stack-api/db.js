const mongoose = require('mongoose');


const dbURI = 'mongodb+srv://ninja:test1234@nodetuts.fphot.mongodb.net/postManagerDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('Connected'))
    .catch((err) => console.log(err));
