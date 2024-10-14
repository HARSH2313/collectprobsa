// components/common/Header.js
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            CollectPro
          </h1>
          <p className="text-sm md:text-base">Your partner in effective debt resolution</p>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
