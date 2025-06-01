const Document = require('../models/Document');

// 📄 Create a new document
exports.createDocument = async (req, res) => {
  try {
    const { _id, title = 'Untitled Document', content = '' } = req.body;
    const doc = new Document({ _id, title, content });
    await doc.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create document', error: error.message });
  }
};

// 📖 Get a single document by ID
exports.getDocument = async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Document not found' });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get document', error: error.message });
  }
};

// 📋 Get all documents
exports.getAllDocuments = async (req, res) => {
  try {
    const docs = await Document.find();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get documents', error: error.message });
  }
};

// ✏️ Update a document by ID
exports.updateDocument = async (req, res) => {
  try {
    const updates = req.body;
    const doc = await Document.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!doc) return res.status(404).json({ message: 'Document not found' });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update document', error: error.message });
  }
};

// ❌ Delete a document by ID
exports.deleteDocument = async (req, res) => {
  try {
    const doc = await Document.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Document not found' });
    res.status(200).json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete document', error: error.message });
  }
};
