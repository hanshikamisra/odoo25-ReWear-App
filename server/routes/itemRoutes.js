const express = require('express');
const router = express.Router();

// GET /api/items - List all items (placeholder)
router.get('/', (req, res) => {
  res.json({ message: 'GET all items (DB integration pending)' });
});

// POST /api/items - Add a new item (placeholder)
router.post('/', (req, res) => {
  res.json({ message: 'POST new item (DB integration pending)' });
});

// GET /api/items/:id - Get single item by ID (placeholder)
router.get('/:id', (req, res) => {
  res.json({ message: `GET item with ID ${req.params.id} (DB integration pending)` });
});

// PUT /api/items/:id - Update item by ID (placeholder)
router.put('/:id', (req, res) => {
  res.json({ message: `PUT update item with ID ${req.params.id} (DB integration pending)` });
});

// DELETE /api/items/:id - Delete item by ID (placeholder)
router.delete('/:id', (req, res) => {
  res.json({ message: `DELETE item with ID ${req.params.id} (DB integration pending)` });
});

module.exports = router;
