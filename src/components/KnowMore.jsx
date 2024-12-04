import { FaCheckCircle } from "react-icons/fa";
const videoLink = 'https://www.youtube.com/embed/IZLp-TZyDkQ';

const KnowMore = () => {
     return (
          <section className="bg-gray-100 p-6 sm:p-10 md:p-20">

               <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                         <div className="lg:col-span-2">
                              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                                   Ready to dive into <span className="text-[#271555]">HABOT</span>?
                              </h2>
                              <p className="text-gray-700 mt-4 text-sm sm:text-base">
                                   Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
                              </p>
                              <button className="mt-6 bg-[#00732f] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold flex items-center hover:bg-green-700">
                                   Sign up Today!
                                   <span className="ml-2">→</span>
                              </button>
                         </div>


                         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
                              {["Abu Dhabi", "Dubai", "Sharjah & Ajman", "Fujairah", "Ras Al Khaimah", "Umm Al Quwain"].map(
                                   (location, index) => (
                                        <button
                                             key={index}
                                             className="border border-orange-600 text-sm sm:text-base px-4 py-2 rounded-lg hover:bg-orange-100"
                                        >
                                             {location}
                                        </button>
                                   )
                              )}
                         </div>
                    </div>
               </div>


               <div className="bg-[#072f57] py-8 sm:py-12 mt-12 rounded-lg">
                    <div className="container mx-auto px-4">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                              <div className="bg-white rounded-lg overflow-hidden w-full h-56 sm:h-72">
                                   <iframe
                                        className="w-full h-full"
                                        src={videoLink}
                                        title="Post Your Requirements Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                   ></iframe>
                              </div>


                              <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">

                                   <div className="flex-1">
                                        <h3 className="text-red-600 font-bold text-center text-lg sm:text-xl relative mb-4">
                                             Buyer
                                             <span className="absolute bottom-[-5px] left-0 w-full h-1 bg-red-600"></span>
                                        </h3>
                                        <ul className="text-white space-y-4">
                                             <li className="flex items-center">
                                                  <FaCheckCircle className="text-green-400 mr-2" />
                                                  Post your requirements.
                                             </li>
                                             <li className="flex items-center">
                                                  <FaCheckCircle className="text-green-400 mr-2" />
                                                  Sit back for multiple suppliers to contact you.
                                             </li>
                                             <li className="flex items-center">
                                                  <FaCheckCircle className="text-green-400 mr-2" />
                                                  Choose among the suppliers based on the ratings and reviews.
                                             </li>
                                        </ul>
                                   </div>


                                   <div className="flex-1">
                                        <h3 className="text-white text-center font-bold text-lg sm:text-xl">
                                             Supplier
                                        </h3>
                                        <ul className="text-white mt-4 space-y-2 hidden">
                                             <li className="flex items-center">
                                                  <FaCheckCircle className="text-green-400 mr-2" />
                                                  Register and create a profile.
                                             </li>
                                             <li className="flex items-center">
                                                  <FaCheckCircle className="text-green-400 mr-2" />
                                                  Bid on buyer requirements.
                                             </li>
                                             <li className="flex items-center">
                                                  <FaCheckCircle className="text-green-400 mr-2" />
                                                  Build your credibility with ratings and reviews.
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default KnowMore;
