import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white">
        <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:px-8 px-5 py-16">
          <div className="col-span-2">
            <h1 className="mb-1 font-semibold">TECH Job</h1>
            <p className="text-gray-400 text-sm mb-3">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img src="https://i.ibb.co/hWHmYLd/Group-9969.png" alt="" />
          </div>
          <ul>
            <h1 className="mb-1 font-semibold">Company</h1>
            <p className="text-gray-400 text-sm mb-3">Prototype</p>
            <p className="text-gray-400 text-sm mb-3">Plans & Pricing</p>
            <p className="text-gray-400 text-sm mb-3">Customers</p>
            <p className="text-gray-400 text-sm mb-3">Integration</p>
          </ul>
          <ul>
            <h1 className="mb-1 font-semibold">Product</h1>
            <p className="text-gray-400 text-sm mb-3">Help Desk</p>
            <p className="text-gray-400 text-sm mb-3">Sales</p>
            <p className="text-gray-400 text-sm mb-3">Become a Partner</p>
            <p className="text-gray-400 text-sm mb-3">Developers</p>
          </ul>
          <ul>
            <h1 className="mb-1 font-semibold">Support</h1>
            <p className="text-gray-400 text-sm mb-3">About US</p>
            <p className="text-gray-400 text-sm mb-3">Work</p>
            <p className="text-gray-400 text-sm mb-3">Latest News</p>
            <p className="text-gray-400 text-sm mb-3">Careers</p>
          </ul>
          <ul>
            <h1 className="mb-1 font-semibold">Contact</h1>
            <p className="text-gray-400 text-sm mb-3">524 Broadway , NYC</p>
            <p className="text-gray-400 text-sm mb-3">+1 777 - 978 - 5570</p>
          </ul>
        </div>
        <hr className="w-10/12 mx-auto bg-gray-500" />
        <div className="w-10/12 mx-auto flex flex-row justify-between pt-2 text-gray-400 text-sm pb-12">
          <span>@2023 TECH Job. All Rights Reserved</span>
          <span>Powered by TECH Job</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
