const Working = () => {
     return (
          <section className="bg-white">

               <div className="text-center py-8 sm:py-10 flex flex-col sm:flex-row sm:justify-around items-center bg-[#e8fbff] px-6  mx-auto">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                         Let Suppliers{" "}
                         <span className="underline decoration-orange-600 underline-offset-4">
                              Find You
                         </span>
                    </h1>
                    <button className="mt-4 sm:mt-0 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
                         Get Verified
                    </button>
               </div>


               <div className="container mx-auto py-10 px-4 sm:px-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4">
                         How it works?
                    </h2>
                    <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
                         Buyers post their needs and review top suppliers, while suppliers complete profiles,
                         connect with potential buyers, and build successful business relationships, sharing
                         valuable feedback.
                    </p>


                    <div className="flex justify-center">
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  w-full max-w-4xl">

                              {[
                                   { icon: "➕", text: "Select Your Role and Sign Up", bgColor: "bg-[#e8fbff]" },
                                   { icon: "📄", text: "Buyers Post Your Requirements", bgColor: "bg-white" },
                                   { icon: "🔍", text: "Review, Select, and Contact the Best Suppliers", bgColor: "bg-[#e8fbff]" },
                                   { icon: "📝", text: "Suppliers Complete Profiles & Get Notified", bgColor: "bg-white" },
                                   { icon: "💬", text: "Contact Buyers and Share Your Quotes", bgColor: "bg-[#e8fbff]" },
                                   { icon: "🤝", text: "Connect, Make Business, and Leave Feedback", bgColor: "bg-white" },
                              ].map((step, index) => (
                                   <div
                                        key={index}
                                        className={`w-full h-56 ${step.bgColor} p-6 flex flex-col items-center justify-center text-center rounded-lg`}
                                   >
                                        <div className="text-4xl mb-4">{step.icon}</div>
                                        <h3 className="font-bold text-gray-800 text-sm sm:text-base">
                                             {step.text}
                                        </h3>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Working;
