const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/to-do-list', {useNewUrlParser: true })
.then(() => console.log('Contectado ao MongoDB'))
.catch((err) => console.log(err));