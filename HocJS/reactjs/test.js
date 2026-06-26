import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-black text-white text-sm">
      <div className="flex justify-between px-6 py-2">
        <div>
          <span>cskh.vans@gmail.com</span> / <span>0866956907</span>
        </div>
        <div>
          <a href="#" className="hover:underline">Đăng ký</a> /{" "}
          <a href="#" className="hover:underline">Đăng nhập</a>
        </div>
      </div>
      <div className="flex justify-between items-center px-8 py-4 bg-white text-black font-semibold">
        <div className="text-xl">NEW ARRIVAL</div>
        <ul className="flex space-x-6">
          <li className="bg-red-600 text-white px-3 py-1 rounded">HOME PAGE</li>
          <li>ALL VANS</li>
          <li className="relative group">
            SHOES
            <ul className="absolute hidden group-hover:block bg-white text-black shadow mt-2">
              <li className="px-4 py-2 hover:bg-gray-200">Men</li>
              <li className="px-4 py-2 hover:bg-gray-200">Women</li>
            </ul>
          </li>
          <li>NEW ARRIVALS</li>
          <li>ORDER</li>
          <li>COLLECTIONS</li>
          <li>SALE OFF</li>
          <li>SIZE CHART</li>
          <li>ABOUT US</li>
          <li>LATEST VANS NEWS</li>
          <li>ACCESSORIES</li>
        </ul>
        <div className="flex items-center space-x-4">
          <button>🔍</button>
          <button>🛒 (0)</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
