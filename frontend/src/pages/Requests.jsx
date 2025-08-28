import { useEffect, useState } from "react";
import axios from "axios";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/food/donations"); // adjust endpoint
        setRequests(res.data);
      } catch (err) {
        console.error("Error fetching requests:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) return <p className="text-center mt-6">Loading requests...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Available Food Donations</h2>

      {requests.length === 0 ? (
        <p className="text-center text-gray-500">No food donations available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((food) => (
            <div
              key={food._id}
              className="p-5 border rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{food.foodName}</h3>
              <p><strong>Quantity:</strong> {food.quantity}</p>
              <p><strong>Expiry:</strong> {new Date(food.expiryTime).toLocaleString()}</p>
              <p><strong>Location:</strong> {food.location}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className="text-green-600 font-medium">{food.status}</span>
              </p>
              <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Claim
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Requests;
