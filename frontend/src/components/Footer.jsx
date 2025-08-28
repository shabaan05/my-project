const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center mt-10">
      <p>© {new Date().getFullYear()} FoodDonation. All rights reserved.</p>
      <p className="text-sm">Connecting Donors with NGOs for a Hunger-Free World 🌍</p>
    </footer>
  );
};

export default Footer;
