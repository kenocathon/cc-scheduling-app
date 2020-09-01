const Material = require('../models/Material');

module.exports = {
  createSavedMaterial: async (req, res) => {
    const material = new Material(req.body);
    try {
      await material.save();
      return res.status(200).json({
        message: 'New material was created',
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  },

  listSavedMaterials: async (req, res) => {
    try {
      let materials = await Customer.find();
      res.json(materials);
    } catch (err) {
      return res.status(500).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  },

  materialById: async(req, res, next, id) => {
    try {
      let material = await Material.findById(id);
      if (!material)
        return res.status('400').json({
          error: 'Material not found',
        });
      req.material = material;
      next();
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        error: 'Could not retrieve requested material',
      });
    }
  },

  singleMaterial: async(req, res) => {
    try {
      const material
      return res.json(req.material);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  },

  updateMaterial: async(req, res) => {
    try {
      let material = req.material;
      material = extend(material, req.body);
      await material.save();
      res.status(200).json(material);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  },

  deleteMaterial: async(req, res) => {
    try {
      let material = req.material;
      let deletedMaterial = await material.remove();
      res.json(deletedMaterial);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  }
}