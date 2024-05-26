const { createProperty, getProperties, updateProperty, deleteProperty, likeProperty } = require('../models/propertyModel');

exports.createProperty = async (req, res) => {
  const { title, description, location, price, bedrooms, bathrooms } = req.body;
  try {
    const property = await createProperty({ title, description, location, price, bedrooms, bathrooms, owner: req.user.id, likes: 0 });
    res.status(201).json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProperties = async (req, res) => {
  try {
    const properties = await getProperties();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProperty = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const property = await updateProperty(id, updates);
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProperty = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteProperty(id);
    res.json({ message: 'Property deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.likeProperty = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await likeProperty(id);
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
