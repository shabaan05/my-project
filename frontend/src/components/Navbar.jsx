// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { FaBars } from "react-icons/fa";

// // export default function Navbar() {
// //   return (
// //     <nav className="bg-green-500 text-white shadow-md">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between h-16 items-center">
// //           {/* Logo */}
// //           <div className="flex-shrink-0">
// //             <Link to="/" className="text-2xl font-bold">
// //               Food Donation
// //             </Link>
// //           </div>

// //           {/* Desktop Menu */}
// //           <div className="hidden md:flex space-x-6">
// //             <Link to="/" className="hover:text-yellow-300">Home</Link>
// //             <Link to="/donate" className="hover:text-yellow-300">Donate Food</Link>
// //             <Link to="/ngos" className="hover:text-yellow-300">NGOs</Link>
// //             <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
// //             <Link to="/login" className="hover:text-yellow-300">Login/Signup</Link>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <div className="md:hidden">
// //             <button>
// //               <FaBars size={24} />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-green-600 text-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="text-2xl font-bold">
//               Food Donation
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             <Link to="/" className="hover:text-yellow-300">Home</Link>
//             <Link to="/donate" className="hover:text-yellow-300">Donate Food</Link>
//             <Link to="/ngos" className="hover:text-yellow-300">NGOs</Link>
//             <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
//             <Link to="/login" className="hover:text-yellow-300">Login/Signup</Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-green-500 px-4 pt-2 pb-4 space-y-2">
//           <Link to="/" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link to="/donate" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Donate Food</Link>
//           <Link to="/ngos" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>NGOs</Link>
//           <Link to="/dashboard" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Dashboard</Link>
//           <Link to="/login" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Login/Signup</Link>
//         </div>
//       )}
//     </nav>
//   );
// }

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="">FoodDonation</Link>
      </div>

      {/* Menu Links */}
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/donate" className="hover:text-yellow-300">Donate Food</Link>
        <Link to="/ngos" className="hover:text-yellow-300">NGOs</Link>
        <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
      </div>

      {/* Auth Buttons */}
      <div>
        <Link
          to="/login"
          className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500"
        >
          Login / Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
