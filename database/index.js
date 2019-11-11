const mongoose = require('mongoose');
const dbConnect = process.env.MONGOATLAS || 'mongodb://localhost:27017/playbookapi'

mongoose
  .connect(dbConnect, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  }).then(() => {
    console.log('connected with mongodb');
  }).catch((err) => {
    console.log('error with mongodb', err);
  });

mongoose.Promise = global.Promise;
module.exports = mongoose;
