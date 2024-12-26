import {
  OUR_SOLUTIONS_DATA_SCROLL_DELAY,
  OUR_SOLUTIONS_DATA_SCROLL_SPEED,
} from "@/app/utils/Constants/Scroll-timer";
import Image from "next/image";

export default function OurSolution3() {
  return (
    <div className="min-h-screen w-full relative lg:h-screen ">
      <div
        className="h-full lg:h-screen w-full md:max-w-[90vw] mx-auto flex items-center justify-center"
        data-scroll
        data-scroll-speed={OUR_SOLUTIONS_DATA_SCROLL_SPEED}
        data-scroll-delay={OUR_SOLUTIONS_DATA_SCROLL_DELAY}
      >
        <div className="w-full py-2 lg:py-2">
          {/* Header Section */}

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 px-4 lg:px-0">
            {/* Left Column - Features */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-8">
                  Personalisation Engine
                </h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-medium mb-2">
                      Real-Time Content Personalisation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Dynamically customizes content based on user behavior,
                      preferences.
                    </p>
                  </div>

                  <div className="bg-[#fff] rounded-lg p-6 shadow-sm">
                    <h3 className="font-medium mb-2">Adaptive Learning</h3>
                    <p className="text-gray-600 text-sm">
                      Continously refine recommendations based on user
                      interactions and feedback.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-medium mb-2">Data-Driven Experience</h3>
                    <p className="text-gray-600 text-sm">
                      Utilizes customer data to deliver tailored experiences
                      that resonate with individual users.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Chat Interface */}
            <div className="flex items-center justify-center ">
              <Image
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
