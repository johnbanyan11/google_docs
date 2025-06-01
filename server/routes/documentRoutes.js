const express = require("express");
const {
  createDocument,
  getDocument,
  getAllDocuments,
  updateDocument,
  deleteDocument,
  addCollaborator,
} = require("../controllers/documentController");

const authMiddleware = require("../middleware/authMiddleware"); // ✅ Import middleware

const router = express.Router();

// ✅ Protect routes that require authentication
router.post("/", authMiddleware, createDocument); // Create
router.get("/", authMiddleware, getAllDocuments); // Read all
router.get("/:id", authMiddleware, getDocument); // Read one
router.put("/:id", authMiddleware, updateDocument); // Update
router.delete("/:id", authMiddleware, deleteDocument); // Delete
router.put("/:docId/collaborators", authMiddleware, addCollaborator); // Add Collaborator

module.exports = router;
