import { ScrollReveal } from "./components/ui/scroll-reveal-framer";

export default function TextReveal() {
  return (
    <div className="mx-auto max-w-[1200px] py-12 px-4 lg:px-4 lg:py-16">
      <div className="flex flex-col gap-16 lg:flex-row">
        {/* Images section remains the same */}

        <div className="flex flex-col gap-4 w-full lg:w-[648px] h-auto mt-8 lg:mt-0">
          <div>
            <ScrollReveal>
              <h1 className="font-quicksand text-4xl font-semibold lg:text-6xl lg:mt-[7vh]">
                About <span className="text-[#543BD9]">neuralhq.ai</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-lg text-gray-600 lg:text-2xl mt-[5vh]">
                At NeuralHQ we are committed to building responsible and
                human-centric AI systems that support your business day after
                day, offering solutions that are as dynamic and adaptable as the
                industries we serve.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-4 h-px w-28 bg-black lg:mt-[5vh]" />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
