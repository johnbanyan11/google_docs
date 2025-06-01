const express = require("express");
const {
  createDocument,
  getDocument,
  getAllDocuments,
  updateDocument,
  deleteDocument,
} = require("../controllers/documentController");

const router = express.Router();

router.post("/", createDocument); // Create
router.get("/", getAllDocuments); // Read all
router.get("/:id", getDocument); // Read one
router.put("/:id", updateDocument); // Update
router.delete("/:id", deleteDocument); // Delete
router.put("/:docId/collaborators", addCollaborator); //addCollaborator

module.exports = router;
