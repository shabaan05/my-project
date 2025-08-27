import Food from "../models/Food.js";  

// Add new food donation
export const addFood = async (req, res) => {
  try {
    const { foodName, quantity, expiryTime, location } = req.body;

    const food = new Food({
      donor: req.user.id, // comes from auth middleware
      foodName,
      quantity,
      expiryTime,
      location,
    });

    await food.save();
    res.status(201).json({ message: "Food added successfully", food });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all available food donations
export const getAvailableFood = async (req, res) => {
  try {
    const foods = await Food.find({ status: "available" }).populate("donor", "name email");
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update food status (e.g., claimed, collected)
export const updateFoodStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const food = await Food.findByIdAndUpdate(id, { status }, { new: true });

    if (!food) return res.status(404).json({ message: "Food not found" });

    res.json({ message: "Food status updated", food });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
