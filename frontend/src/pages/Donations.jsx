import { useState } from "react";
import axios from "axios";

export default function Donation() {
  const [formData, setFormData] = useState({
    foodName: "",
    quantity: "",
    expiryTime: "",
    location: "",
  });

  const [message, setMessage] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your backend API endpoint
      const res = await axios.post("http://localhost:5000/api/food/add", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // token from login
        },
      });

      if (res.status === 201) {
        setMessage("Donation submitted successfully 🎉");
        setFormData({
          foodName: "",
          quantity: "",
          expiryTime: "",
          location: "",
        });
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Try again!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Donate Food</h2>

      {message && <p className="mb-4 text-green-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Food Name */}
        <div>
          <label className="block font-medium">Food Name</label>
          <input
            type="text"
            name="foodName"
            value={formData.foodName}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block font-medium">Quantity (in units)</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Expiry Time */}
        <div>
          <label className="block font-medium">Expiry Time</label>
          <input
            type="datetime-local"
            name="expiryTime"
            value={formData.expiryTime}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          Submit Donation
        </button>
      </form>
    </div>
  );
}
