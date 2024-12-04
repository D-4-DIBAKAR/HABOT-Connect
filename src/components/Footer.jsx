import logo from "../assets/habot-logo-removebg.png";

const Footer = () => {
     return (
          <footer className="bg-[#123557] text-white py-8 w-full">

               <hr className="w-10/12 mx-auto py-2 border-gray-400" />
               <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start w-10/12">

                    <div className="mb-6 md:mb-0 text-center md:text-left">
                         <div className="flex justify-center md:justify-start items-center mb-3">
                              <img src={logo} alt="Habot Logo" className="h-10 w-auto object-contain" />
                         </div>
                         <p className="text-sm">© R Singhania</p>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-center md:text-left ">

                         <div>
                              <h3 className="font-bold mb-2">Company</h3>
                              <ul>
                                   <li className="mb-1 hover:underline cursor-pointer">About</li>
                                   <li className="hover:underline cursor-pointer">FAQ</li>
                              </ul>
                         </div>

                         <div>
                              <h3 className="font-bold mb-2">Terms</h3>
                              <ul>
                                   <li className="mb-1 hover:underline cursor-pointer">Data Privacy</li>
                                   <li className="mb-1 hover:underline cursor-pointer">Terms</li>
                                   <li className="hover:underline cursor-pointer">Accessibility</li>
                              </ul>
                         </div>

                         <div>
                              <h3 className="font-bold mb-2">Related</h3>
                              <ul>
                                   <li className="mb-1 hover:underline cursor-pointer">Find Buyer</li>
                                   <li className="hover:underline cursor-pointer">Feedback</li>
                              </ul>
                         </div>
                    </div>


                    <div className="flex gap-4 mt-6 md:mt-0 justify-center">
                         {[
                              { icon: "fab fa-linkedin", label: "LinkedIn" },
                              { icon: "fab fa-twitter", label: "Twitter" },
                              { icon: "fab fa-facebook", label: "Facebook" },
                              { icon: "fab fa-instagram", label: "Instagram" },
                         ].map((social, index) => (
                              <a
                                   key={index}
                                   href="#"
                                   aria-label={social.label}
                                   className="w-8 h-8 flex items-center justify-center bg-[#123557] text-white border border-gray-300 rounded-full hover:bg-gray-200 hover:text-[#123557]"
                              >
                                   <i className={social.icon}></i>
                              </a>
                         ))}
                    </div>
               </div>

               <hr className="w-10/12 mx-auto mt-6 border-gray-400" />
          </footer>
     );
};

export default Footer;
