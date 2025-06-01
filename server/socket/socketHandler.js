const Document = require('../models/Document');
const activeEditors = new Map(); // docId -> Set of socket ids

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('join-document', async (docId) => {
      let doc = await Document.findById(docId);
      if (!doc) {
        doc = await Document.create({ _id: docId, content: '' });
      }

      if (!activeEditors.has(docId)) activeEditors.set(docId, new Set());

      const editors = activeEditors.get(docId);

      if (editors.size >= 10) {
        socket.emit('document-full');
        return;
      }

      editors.add(socket.id);
      socket.join(docId);
      socket.emit('load-document', doc.content);

      socket.on('send-changes', (data) => {
        socket.broadcast.to(docId).emit('receive-changes', data);
      });

      socket.on('save-document', async (data) => {
        await Document.findByIdAndUpdate(docId, { content: data });
      });

      socket.on('disconnect', () => {
        editors.delete(socket.id);
        if (editors.size === 0) activeEditors.delete(docId);
      });
    });
  });
};
