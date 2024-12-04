import bgImage from "../assets/Hero-Section.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Hero = () => {
     return (
          <section
               className="relative bg-cover bg-center h-[85vh]"
               style={{ backgroundImage: `url(${bgImage})` }}
          >
               <div className="absolute inset-0 bg-black bg-opacity-55"></div>
               <div className="relative container mx-auto flex flex-col justify-center items-center h-full px-6 text-center text-white">

                    <h1 className="text-4xl md:text-5xl font-bold">Are You a Supplier?</h1>
                    <p className="text-2xl md:text-3xl mt-2">Explore Matching Opportunities.</p>


                    <div className="mt-8 flex flex-col md:flex-row gap-2 w-full max-w-2xl">

                         <div className="flex items-center bg-white rounded-md overflow-hidden w-full">
                              <span className="text-[#e7760d] px-2">
                                   <i className="fas fa-envelope"></i>
                              </span>
                              <input
                                   type="text"
                                   placeholder="Search your required service here"
                                   className="flex-1  outline-none text-gray-700"
                              />
                         </div>


                         <div className="flex items-center bg-white rounded-md overflow-hidden w-full">
                              <span className="text-[#e7760d] px-2">
                                   <i className="fas fa-map-marker-alt"></i>
                              </span>
                              <input
                                   type="text"
                                   placeholder="Search your desired location here"
                                   className="flex-1 outline-none text-gray-700"
                              />
                         </div>


                         <button className="bg-green-600 text-white font-bold px-6 py-4 rounded-md hover:bg-green-700 ">
                              Search
                         </button>
                    </div>


                    <p className="mt-6 text-lg font-semibold">
                         Are you a buyer?{" "}
                         <a href="#" className="text-white-200 underline text-sm font-normal">
                              Click here if you are looking to post a requirement
                         </a>
                    </p>
               </div>
          </section>
     );
};

export default Hero;
