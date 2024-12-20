import {
  CloudPlatforms,
  ModelTraining,
  ModelServing,
  LargeLanguageModels,
} from "../../utils/Icons/Icons";
import "./OurExpertise.css";

function IconRow({
  icons,
  direction,
}: {
  icons: React.ComponentType<{ className?: string }>[];
  direction: "left" | "right";
}) {
  const animationClass =
    direction === "left" ? "animate-left" : "animate-right";
  const visibleIcons = icons.slice(0, 7);
  const hiddenIcons =
    direction === "left" ? [icons[3], icons[0]] : [icons[0], icons[1]];

  return (
    <div className={`icon-row ${animationClass}`}>
      <div className="icon-container ">
        {visibleIcons.map((Icon, index) => (
          <div key={index} className="icon-wrapper ">
            <Icon className="h-12 w-auto" />
          </div>
        ))}
      </div>
      <div
        className={`hidden-icons ${
          direction === "left" ? "hidden-left" : "hidden-right"
        }`}
      >
        {hiddenIcons.map((Icon, index) => (
          <div key={index} className="icon-wrapper">
            <Icon className="h-12 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExpertiseSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-[3vw] 2xl:text-[2.4vw] lg:leading-[64px] mb-4 font-semibold mb-4">
          Our <span className="text-[#7C3AED]">expertise</span>
        </h1>
        <p className="text-base sm:text-xl lg:text-[1.6vw] leading-normal lg:leading-8 text-gray-600 font-normal">
          Lorem ipsum dolor sit amet consectetur. Sed euismod quis mauris
          tincidunt adipiscing et. Eleifend leo.
        </p>
      </div>

      <div className="space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-1">
            <h3 className="text-base text-gray-600 font-medium">
              Model training
            </h3>
          </div>
          <div className="lg:col-span-4">
            <IconRow icons={ModelTraining} direction="right" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-1">
            <h3 className="text-base text-gray-600 font-medium">
              Cloud platforms
            </h3>
          </div>
          <div className="lg:col-span-4">
            <IconRow icons={CloudPlatforms} direction="left" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-1">
            <h3 className="text-base text-gray-600 font-medium">
              Model serving
            </h3>
          </div>
          <div className="lg:col-span-4">
            <IconRow icons={ModelServing} direction="right" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-1">
            <h3 className="text-base text-gray-600 font-medium">
              Large Language Models
            </h3>
          </div>
          <div className="lg:col-span-4">
            <IconRow icons={LargeLanguageModels} direction="left" />
          </div>
        </div>
      </div>
    </section>
  );
}
