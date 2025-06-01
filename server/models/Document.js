const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  _id: String,
  title: String,
  content: String,
  collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Document', DocumentSchema);
