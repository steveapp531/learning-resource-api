import LearningResource from "../models/learning-resource.js";

// add a new learning resource

export const addResource = async (req, res) => {
  try {
    const { title, url, category, completed } = req.body;
    const userId = req.user.id; 

    const newResource = new LearningResource({
      user: userId,
      title,
      url,
      category,
      completed,
    });

    await newResource.save();
    res.status(201).json(newResource); 
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all resources for the logged-in user
export const getResources = async (req, res) => {
  try {
    const userId = req.user.id; 
    const resources = await LearningResource.find({ user: userId }); 

    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete a resource
export const deleteResource = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const resource = await LearningResource.findOneAndDelete({
      _id: id,
      user: userId,
    });

    if (!resource) {
      return res
        .status(404)
        .json({
          message:
            "Resource not found or you do not have permission to delete this resource",
        });
    }

    res.json({ message: "Resource deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
