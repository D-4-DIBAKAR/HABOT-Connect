import logo from "../assets/habot-logo.png";

const Navbar = () => {
     return (
          <nav className="bg-white-100 text-black p-4">
               <div className="container mx-auto flex justify-between items-center px-6">

                    <div className="flex-shrink-0">
                         <img src={logo} alt="HABOT Logo" className="h-8 w-auto object-contain" />
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                         <a href="#" className="text-gray-700 hover:text-gray-900">
                              Find Suppliers
                         </a>
                         <select
                              name="service-tags"
                              id="service-tags"
                              className="bg-white-500 text-gray-700  p-2 rounded"
                         >
                              <option value="" disabled selected>
                                   Find Service Tags
                              </option>
                              <option value="service1">Service 1</option>
                              <option value="service2">Service 2</option>
                         </select>
                         <button className="bg-white-600 border border-green-800 text-green-800 hover:text-white font-bold px-4 py-2 rounded hover:bg-green-700">
                              Login / Sign Up
                         </button>
                    </div>


               </div>


               <div className="md:hidden bg-gray-200 mt-4 space-y-4 px-4 py-2">
                    <a href="#" className="block text-gray-700 hover:text-gray-900">
                         Find Suppliers
                    </a>
                    <select
                         name="service-tags"
                         id="service-tags"
                         className="bg-gray-200 text-gray-700 border border-gray-400 p-2 rounded w-full"
                    >
                         <option value="" disabled selected>
                              Find Service Tags
                         </option>
                         <option value="service1">Service 1</option>
                         <option value="service2">Service 2</option>
                    </select>
                    <button className="bg-green-600 text-white font-bold px-4 py-2 rounded w-full hover:bg-green-700">
                         Login / Sign Up
                    </button>
               </div>
          </nav>
     );
};

export default Navbar;
