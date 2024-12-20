"use client";

import Image from "next/image";
import { FloatingNav } from "../components/ui/floating-navbar";
import Footer from "../Footer";
import { navItems } from "../utils/Constants/NavItem";
import Link from "next/link";
import { teamMembers } from "../utils/Constants/AboutUs";

export default function AboutUsPage() {
  return (
    <div>
      <AboutUsPageHeroSection />
      <AboutUsPageOurTeamSection />
      <Footer />
    </div>
  );
}

function AboutUsPageOurTeamSection() {
  return (
    <section className=" py-2  lg:py-16 ">
      <div className="mx-auto max-w-[1300px] px-4  ">
        <div className="mb-12 lg:w-[67vw] rounded-[40px]   mx-auto bg-gradient-to-r from-[#CCE2FB] to-[#FADCEA] py-8 md:px-4">
          <div className="flex flex-col-reverse md:flex-row gap-x-2 gap-y-2 w-full mx-auto  ">
            <div className="px-4 py-2 md:w-[45%]  ">
              <h2 className="mb-2 font-quicksand text-2xl font-bold bg-gradient-to-r from-[#6265C6] to-[#543BD9] bg-clip-text text-transparent">
                Our team
              </h2>
              <div className="h-1 w-9 bg-white mb-4" />
              <p className="text-base lg:text-lg">
                <span>
                  {" "}
                  We believe in the transformative power of technology to solve
                  complex problems, enhance human creativity, and drive forward
                  innovation in unprecedented ways.
                </span>
                <br />
                <br />
                <span>
                  {" "}
                  Our team consists of passionate AI researchers, data
                  scientists, engineers & visionaries dedicated to pushing the
                  boundaries of what&apos;s possible with AI.
                </span>
              </p>
            </div>
            <div className=" md:px-0 md:w-[55%] md:h-[50vh]  lg:w-[55%] flex justify-center lg:justify-end ">
              <Image
                src="/assets/Images/MainTeamPhoto.jpg"
                width={422}
                height={281}
                alt="Team"
                className="rounded-[20px] border-[10px] border-white md:w-full "
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 0 lg:py-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="group relative mb-5 h-[270px] w-[270px]">
                <div className="overflow-hidden md:rounded-4xl rounded-6xl transition-all duration-500 md:group-hover:rounded-6xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={270}
                    height={270}
                    className="object-cover cursor-pointer transition-transform duration-500 h-[270px] w-[270px]"
                  />
                </div>

                <div className="absolute bottom-4 left-[-10px] md:opacity-0 opacity-100 transition-opacity duration-300 md:group-hover:opacity-100">
                  <Link
                    href={member.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-8 h-8 hover:scale-110 transition-transform duration-300"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="20" fill="#0B66C2" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.3399 17.864V18.9953C20.5768 18.6345 20.9034 18.3413 21.2876 18.1445C21.6719 17.9477 22.1006 17.854 22.5319 17.8727C24.8352 17.8727 25.3332 19.3127 25.3332 21.186V25H23.1999V21.6187C23.1999 20.812 23.0372 19.7747 21.7812 19.7747C20.5632 19.7747 20.3552 20.6527 20.3552 21.5587V25H18.2286V17.864H20.3399ZM16.7999 16.0707C16.7997 16.282 16.737 16.4886 16.6198 16.6644C16.5027 16.8403 16.3362 16.9777 16.1412 17.0593C15.9464 17.1403 15.7319 17.1615 15.5249 17.1202C15.318 17.0789 15.1281 16.9769 14.9792 16.8273C14.8302 16.6776 14.7287 16.4872 14.6875 16.28C14.6464 16.0728 14.6674 15.858 14.748 15.6627C14.8286 15.4674 14.9651 15.3003 15.1404 15.1824C15.3157 15.0644 15.522 15.001 15.7332 15C15.8737 15 16.0127 15.0277 16.1424 15.0816C16.272 15.1354 16.3898 15.2144 16.4889 15.3138C16.588 15.4133 16.6665 15.5314 16.7199 15.6612C16.7732 15.7911 16.8004 15.9303 16.7999 16.0707Z"
                        fill="white"
                      />
                      <path
                        d="M16.8003 17.873H14.667V25.0004H16.8003V17.873Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <h3 className="font-quicksand text-2xl font-bold text-[#292929]">
                {member.name}
              </h3>
              <p className="text-[#292929]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutUsPageHeroSection() {
  return (
    <main>
      <FloatingNav navItems={navItems} />
      <div className="mx-auto max-w-[1200px] py-12 mt-12 px-4 md:py-18 lg:px-4 lg:pt-24 lg:pb-10  ">
        <div className="flex flex-col gap-16 lg:flex-row ">
          <div className="w-full md:w-[50vw] relative h-[50vh] lg:h-[400px]  lg:w-[491px]  mx-auto">
            {/* Image 1 - Top Left */}
            <div className="absolute left-0 top-0 h-[171px] w-[171px] overflow-hidden rounded-tl-[100px] ">
              <Image
                src="/assets/Images/AboutUsHeroSection1.png"
                alt="Team 1"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 - Top Right Small */}
            <div className="absolute left-[160px] top-[150px] lg:left-[198px] lg:top-[27px] h-[59px] w-[59px] overflow-hidden rounded-2xl">
              <Image
                src="/assets/Images/AboutUsHeroSection5.png"
                alt="Team 2"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 3 - Top Right */}
            <div className="absolute left-[306px] top-0 h-[83px] w-[83px] overflow-hidden rounded-tr-[50px]  hidden lg:block">
              <Image
                src="/assets/Images/AboutUsHeroSection7.png"
                alt="Team 3"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 4 - Middle Right */}
            <div className="absolute left-[210px] top-[30px] lg:left-[220px] lg:top-[112px] h-[141px] w-[141px] overflow-hidden rounded-tr-[100px]">
              <Image
                src="/assets/Images/AboutUsHeroSectionMain.png"
                alt="Team 4"
                width={141}
                height={141}
                className="object-fill"
              />
            </div>

            {/* Image 5 - Middle Left */}
            <div className="absolute left-[83px] top-[216px] h-[89px] w-[88px] overflow-hidden rounded-bl-[50px] hidden lg:block">
              <Image
                src="/assets/Images/AboutUsHeroSection3.png"
                alt="Team 5"
                width={88}
                height={89}
              />
            </div>

            {/* Image 6 - Middle Right Bottom */}
            <div className="absolute left-[206px] top-[288px] h-[101px] w-[100px] overflow-hidden rounded-br-[60px] hidden lg:block">
              <Image
                src="/assets/Images/AboutUsHeroSection6.png"
                alt="Team 6"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 7 - Bottom Left */}
            <div className="absolute left-[50px] top-[200px] h-[100px] lg:top-[338px] lg:h-[111px] w-[111px] overflow-hidden rounded-bl-[90px]">
              <Image
                src="/assets/Images/AboutUsHeroSection8.png"
                alt="Team 7"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 8 - Bottom Right */}
            <div className="absolute left-[210px] top-[200px] lg:left-[363px] lg:top-[232px] h-[129px] w-[128px] overflow-hidden rounded-br-[90px]">
              <Image
                src="/assets/Images/AboutUsHeroSection9.png"
                alt="Team 9"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-[648px] h-auto mt-8 lg:mt-0">
            <div>
              <h1 className="font-quicksand text-4xl font-semibold lg:text-6xl lg:mt-[7vh]">
                About <span className="text-[#543BD9]">neuralhq.ai</span>
              </h1>
              <p className="text-lg text-gray-600 lg:text-2xl mt-[5vh]">
                At NeuralHQ we are committed to building responsible and
                human-centric AI systems that support your business day after
                day, offering solutions that are as dynamic and adaptable as the
                industries we serve.
              </p>
              <div className="mt-4 h-px w-28 bg-black lg:mt-[5vh]" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
