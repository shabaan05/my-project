// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHandHoldingHeart, FaHandsHelping, FaLeaf } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-200 to-blue-200">
      
//       {/* Hero Section */}
//       <section className="text-center py-20">
//         <h1 className="text-5xl font-bold mb-4 text-green-800">
//           Save Food, Save Lives 🌍
//         </h1>
//         <p className="text-xl mb-8 text-green-700">
//           Donate your surplus food, help NGOs, reduce food waste
//         </p>
//         <div className="space-x-4">
//           <Link
//             to="/donate"
//             className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
//           >
//             Donate Food
//           </Link>
//           <Link
//             to="/ngos"
//             className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
//           >
//             Find NGOs
//           </Link>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="max-w-6xl mx-auto py-16 px-4">
//         <h2 className="text-4xl font-bold text-center mb-12 text-green-800">How It Works</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <div className="bg-white shadow-lg rounded-2xl p-8 hover:scale-105 transform transition">
//             <FaHandHoldingHeart size={50} className="mx-auto mb-4 text-green-500" />
//             <h3 className="text-2xl font-bold mb-2">Donate Food</h3>
//             <p>Provide your surplus food using our simple donation form.</p>
//           </div>
//           <div className="bg-white shadow-lg rounded-2xl p-8 hover:scale-105 transform transition">
//             <FaHandsHelping size={50} className="mx-auto mb-4 text-blue-500" />
//             <h3 className="text-2xl font-bold mb-2">NGO Claims</h3>
//             <p>Verified NGOs claim available food donations.</p>
//           </div>
//           <div className="bg-white shadow-lg rounded-2xl p-8 hover:scale-105 transform transition">
//             <FaLeaf size={50} className="mx-auto mb-4 text-green-700" />
//             <h3 className="text-2xl font-bold mb-2">Food Delivered</h3>
//             <p>Donated food reaches those in need, reducing food waste.</p>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="bg-white py-16 mt-16 shadow-inner">
//         <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Impact So Far</h2>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <div className="bg-green-100 rounded-2xl p-8 shadow hover:scale-105 transform transition">
//             <h3 className="text-3xl font-bold">150+</h3>
//             <p>Donations Made</p>
//           </div>
//           <div className="bg-blue-100 rounded-2xl p-8 shadow hover:scale-105 transform transition">
//             <h3 className="text-3xl font-bold">1200+</h3>
//             <p>Meals Saved</p>
//           </div>
//           <div className="bg-green-200 rounded-2xl p-8 shadow hover:scale-105 transform transition">
//             <h3 className="text-3xl font-bold">50+</h3>
//             <p>Active NGOs</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { FaHandHoldingHeart, FaHandsHelping, FaLeaf } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 to-blue-200">
      
      {/* Hero Section */}
      <section className="text-center py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-green-800 leading-snug">
          Save Food, Save Lives 🌍
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 text-green-700 max-w-2xl mx-auto">
          Donate your surplus food, help NGOs, reduce food waste
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/donate"
            className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
          >
            Donate Food
          </Link>
          <Link
            to="/ngos"
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
          >
            Request for Food
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-green-800">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
          <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 hover:scale-105 transform transition">
            <FaHandHoldingHeart size={50} className="mx-auto mb-4 text-green-500" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Donate Food</h3>
            <p className="text-sm sm:text-base">Provide your surplus food using our simple donation form.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 hover:scale-105 transform transition">
            <FaHandsHelping size={50} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">NGO Claims</h3>
            <p className="text-sm sm:text-base">Verified NGOs claim available food donations.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 hover:scale-105 transform transition">
            <FaLeaf size={50} className="mx-auto mb-4 text-green-700" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Food Delivered</h3>
            <p className="text-sm sm:text-base">Donated food reaches those in need, reducing food waste.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 sm:py-16 mt-12 sm:mt-16 shadow-inner px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-green-800">
          Impact So Far
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
          <div className="bg-green-100 rounded-2xl p-6 sm:p-8 shadow hover:scale-105 transform transition">
            <h3 className="text-2xl md:text-3xl font-bold">150+</h3>
            <p className="text-sm sm:text-base">Donations Made</p>
          </div>
          <div className="bg-blue-100 rounded-2xl p-6 sm:p-8 shadow hover:scale-105 transform transition">
            <h3 className="text-2xl md:text-3xl font-bold">1200+</h3>
            <p className="text-sm sm:text-base">Meals Saved</p>
          </div>
          <div className="bg-green-200 rounded-2xl p-6 sm:p-8 shadow hover:scale-105 transform transition">
            <h3 className="text-2xl md:text-3xl font-bold">50+</h3>
            <p className="text-sm sm:text-base">Active NGOs</p>
          </div>
        </div>
      </section>
    </div>
  );
}
