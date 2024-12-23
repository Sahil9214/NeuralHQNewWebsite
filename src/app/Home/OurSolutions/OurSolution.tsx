import {
  OUR_SOLUTIONS_DATA_SCROLL_DELAY,
  OUR_SOLUTIONS_DATA_SCROLL_SPEED,
} from "@/app/utils/Constants/Scroll-timer";
import Image from "next/image";

export default function OurSolution() {
  return (
    <div
      className="min-h-screen w-full relative lg:h-screen"
      style={{
        background:
          "linear-gradient(104.09deg, #CCE2FB 0%, #FADCEA 100%) !important",
      }}
    >
      <div className="h-full lg:h-screen w-full md:max-w-[90vw] mx-auto flex items-center justify-center">
        <div className="w-full py-16 lg:py-24">
          {/* Header Section */}
          <div
            className="text-center mb-16"
            data-scroll
            data-scroll-speed={OUR_SOLUTIONS_DATA_SCROLL_SPEED}
            data-scroll-delay={OUR_SOLUTIONS_DATA_SCROLL_DELAY}
          >
            <h1 className="text-xl sm:text-3xl lg:text-[3vw] 2xl:text-[2.4vw] leading-tight lg:leading-[64px] font-semibold mb-4">
              Our <span className="text-[#6366F1]">Solutions</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Orci mauris sed pulvinar libero. Volutpat sit quam sed donec
              metus. Orci adipiscing.
            </p>
          </div>
          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 px-4 lg:px-0">
            {/* Left Column - Features */}
            <div
              className="space-y-8"
              data-scroll
              data-scroll-speed="-.1"
              data-scroll-delay={OUR_SOLUTIONS_DATA_SCROLL_DELAY}
            >
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

                  <div className="bg-[#fff] rounded-lg p-6 shadow-sm">
                    <h3 className="font-medium mb-2">Semantic Searches</h3>
                    <p className="text-gray-600 text-sm">
                      Performs intelligent searches across both structured and
                      unstructured data for accurate results.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-medium mb-2">Multi-Turn Dialogue</h3>
                    <p className="text-gray-600 text-sm">
                      Engages users in deeper, more informative conversations
                      for comprehensive product discovery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Chat Interface */}
            <div className="flex items-center justify-center ">
              <Image
                data-scroll
                data-scroll-speed={OUR_SOLUTIONS_DATA_SCROLL_SPEED}
                data-scroll-delay={OUR_SOLUTIONS_DATA_SCROLL_DELAY}
                src="/assets/Images/blogImage1.png"
                width={500}
                height={400}
                alt="blogImage1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
