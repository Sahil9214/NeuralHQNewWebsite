import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { features } from "../utils/Constants/EnterPrisesFeature";
export default function EnterpriseFeatures() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  const visibility = useTransform(scrollYProgress, (value) =>
    value >= 1 ? "hidden" : "visible"
  );

  return (
    <motion.div
      style={{
        opacity,
        visibility,

        top: "10vh",
        zIndex: 10,
      }}
      className="h-full lg:min-h-screen w-full lg:sticky"
    >
      <motion.section className="max-w-[90vw] mx-auto flex justify-center items-center p-2 lg:p-0 ">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 space-y-3"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-[3vw] 2xl:text-[2.4vw] font-semibold lg:leading-[64px] mb-4 text-gray-800">
              Enterprise-ready,{" "}
              <span className="bg-gradient-to-r from-[#6265C6] to-[#543BD9] bg-clip-text text-transparent">
                future-proof
              </span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl">
              Built for organisations that demand excellence
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className=" rounded-lg py-2 h-full sm:h-[80vh] flex flex-col justify-between overflow-hidden  md:h-auto">
                  <div className="space-y-2">
                    <div
                      className="relative aspect-[255/282] w-full max-w-[255px] mx-auto 
                    sm:max-w-[200px] md:max-w-[220px] lg:max-w-[22.5vw] lg:h-[35vh] "
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className={`object-contain ${
                          index === 0
                            ? "mt-14 z-50"
                            : index === 1
                            ? "mt-6"
                            : index === 2
                            ? "mt-12"
                            : index === 3
                            ? "mt-12"
                            : "inline-block"
                        }`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1440px) 17.708vw"
                      />
                    </div>

                    <div
                      className=" rounded-lg p-4 text-black opacity-80 
                   
                      w-full sm:w-auto  h-full
                      
                      flex flex-col justify-around"
                    >
                      <h3
                        className="text-gray-800 font-extrabold
                        text-lg sm:text-xl lg:text-[1.5vw]
                        leading-tight sm:leading-normal lg:leading-[clamp(24px,2.222vw,32px)]
                        w-full sm:w-[80%] lg:w-[60%]"
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-gray-600 md:mb-9
                        text-base sm:text-lg lg:text-[clamp(14px,1.3vw,18px)] lg:mt-[1.7vw]
                        leading-relaxed sm:leading-relaxed lg:leading-[clamp(22px,1.944vw,28px)]"
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
