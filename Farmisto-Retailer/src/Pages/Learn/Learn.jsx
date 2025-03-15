import React from "react";
import NavBar from "../../Components/Major/NavBar";
import Footer from "../../Components/Footer/Footer";

const Learn = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <NavBar />
      <div className="flex flex-col w-full overflow-y-auto flex-1 px-4 sm:px-6 lg:px-10">
        <div className="mt-10 sm:mt-14 flex flex-col items-center justify-center text-center rounded-2xl mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-[#2A293E] px-2">
            Welcome to Farmisto: A Guide for Farmers
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl font-medium text-[#2A293E] max-w-2xl">
            Learn how to use the Farmisto website to sell your produce directly to customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20 w-full mt-8 sm:mt-10">
          {/* Dashboard Overview Section */}
          <section className="flex flex-col items-center justify-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-green-600 text-center">
              1. Your Dashboard
            </h2>
            <div className="w-full flex justify-center items-center">
              <iframe
                width="100%"
                height="auto"
                style={{ maxWidth: "853px", aspectRatio: "16/9" }}
                src="https://www.youtube.com/embed/px1EeqpKDUI?list=PLopq6yGfmFAtRWTFWaX46sfusrL84e5fx"
                title="Reshaping Food Security Analytics: An In-Depth Look at Emerging Solutions for Rapid Insights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg w-full"
              ></iframe>
            </div>
          </section>

          {/* Listing Produce Section */}
          <section className="flex flex-col items-center justify-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-green-600 text-center">
              2. Listing Your Produce
            </h2>
            <div className="w-full flex justify-center items-center">
              <iframe
                width="100%"
                height="auto"
                style={{ maxWidth: "853px", aspectRatio: "16/9" }}
                src="https://www.youtube.com/embed/px1EeqpKDUI?list=PLopq6yGfmFAtRWTFWaX46sfusrL84e5fx"
                title="Reshaping Food Security Analytics: An In-Depth Look at Emerging Solutions for Rapid Insights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg w-full"
              ></iframe>
            </div>
          </section>

          {/* Orders Management Section */}
          <section className="flex flex-col items-center justify-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-green-600 text-center">
              3. Managing Orders
            </h2>
            <div className="w-full flex justify-center items-center">
              <iframe
                width="100%"
                height="auto"
                style={{ maxWidth: "853px", aspectRatio: "16/9" }}
                src="https://www.youtube.com/embed/px1EeqpKDUI?list=PLopq6yGfmFAtRWTFWaX46sfusrL84e5fx"
                title="Reshaping Food Security Analytics: An In-Depth Look at Emerging Solutions for Rapid Insights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg w-full"
              ></iframe>
            </div>
          </section>

          {/* Settings Page Section */}
          <section className="flex flex-col items-center justify-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-green-600 text-center">
              4. Settings
            </h2>
            <div className="w-full flex justify-center items-center">
              <iframe
                width="100%"
                height="auto"
                style={{ maxWidth: "853px", aspectRatio: "16/9" }}
                src="https://www.youtube.com/embed/px1EeqpKDUI?list=PLopq6yGfmFAtRWTFWaX46sfusrL84e5fx"
                title="Reshaping Food Security Analytics: An In-Depth Look at Emerging Solutions for Rapid Insights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg w-full"
              ></iframe>
            </div>
          </section>

          {/* Sales Stats Section */}
          <section className="flex flex-col items-center justify-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-green-600 text-center">
              5. Sales Stats & Reports
            </h2>
            <div className="w-full flex justify-center items-center">
              <iframe
                width="100%"
                height="auto"
                style={{ maxWidth: "853px", aspectRatio: "16/9" }}
                src="https://www.youtube.com/embed/px1EeqpKDUI?list=PLopq6yGfmFAtRWTFWaX46sfusrL84e5fx"
                title="Reshaping Food Security Analytics: An In-Depth Look at Emerging Solutions for Rapid Insights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg w-full"
              ></iframe>
            </div>
          </section>

          {/* Graphics & Tutorials Section */}
          <section className="flex flex-col items-center justify-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-green-600 text-center">
              6. Graphics & Tutorials
            </h2>
            <div className="w-full flex justify-center items-center">
              <iframe
                width="100%"
                height="auto"
                style={{ maxWidth: "853px", aspectRatio: "16/9" }}
                src="https://www.youtube.com/embed/px1EeqpKDUI?list=PLopq6yGfmFAtRWTFWaX46sfusrL84e5fx"
                title="Reshaping Food Security Analytics: An In-Depth Look at Emerging Solutions for Rapid Insights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg w-full"
              ></iframe>
            </div>
          </section>
        </div>

        {/* Final Note */}
        <section className="text-center w-full mb-8 sm:mb-10">
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 max-w-3xl mx-auto">
            We hope this guide helps you get started on Farmisto! If you need further assistance, feel free to contact our support team.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Learn;