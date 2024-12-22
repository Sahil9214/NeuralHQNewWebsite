export default function OurSolution() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-50 to-pink-50 lg:top-10vh lg:sticky  ">
      <div className="h-full lg:h-screen w-full md:max-w-[90vw] mx-auto flex items-center justify-center">
        <div className="w-full py-16 lg:py-24">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1
              className="text-xl sm:text-3xl lg:text-[3vw] 2xl:text-[2.4vw] leading-tight lg:leading-[64px] font-semibold mb-4"
              data-scroll
              data-scroll-speed="0.01"
              data-scroll-delay="0.1"
            >
              Our <span className="text-[#6366F1]">Solutions</span>
            </h1>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              data-scroll
              data-scroll-speed="0.05"
              data-scroll-delay="0.1"
            >
              Orci mauris sed pulvinar libero. Volutpat sit quam sed donec
              metus. Orci adipiscing
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 px-4 lg:px-0">
            {/* Left Column - Features */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-8">
                  Intelligent discovery & search
                </h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-medium mb-2">Rapid Inventory Search</h3>
                    <p className="text-gray-600 text-sm">
                      Quickly navigates vast product inventories to find
                      relevant items.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-medium mb-2">Semantic Searches</h3>
                    <p className="text-gray-600 text-sm">
                      Performs intelligent searches across both structured and
                      unstructured data for accurate results
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-medium mb-2">Multi-Turn Dialogue</h3>
                    <p className="text-gray-600 text-sm">
                      Multi-Turn Dialogue: Engages users in deeper, more
                      informative conversations for comprehensive product
                      discovery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Chat Interface */}
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium">Hi there, John</h3>
                  </div>
                  <p className="text-indigo-600 font-medium">
                    What would you like to know?
                  </p>
                  <p className="text-sm text-gray-600">
                    Use one of the most common prompts below or ask your own to
                    start!
                  </p>

                  {/* Chat Interface Mockup */}
                  <div
                    className="space-y-3 mt-6"
                    data-scroll
                    data-scroll-speed="0.05"
                    data-scroll-delay="0.1"
                  >
                    {[
                      "Best practices and how to apply them",
                      "Get best working practices",
                      "Short code buying tactics",
                      "Testing in the team's project plan",
                    ].map((text, i) => (
                      <div
                        key={i}
                        className="p-3 bg-gray-50 rounded-lg text-sm"
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
