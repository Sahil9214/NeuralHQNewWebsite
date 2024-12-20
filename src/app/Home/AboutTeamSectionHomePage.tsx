import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { teamMembers } from "../utils/Constants/AboutTeamSectionHomeLeader";
export default function TeamSection() {
  return (
    <div className="relative z-20 bg-white min-h-screen ">
      <div className="min-h-screen max-w-8xl mx-auto flex justify-center items-center p-4 lg:p-0 ">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 w-full max-w-[90vw] gap-4 lg:gap-0 lg:h-[80vh]  ">
          {/* Content Area (spans grid areas 1, 2, and 5) */}
          <div className="sm:col-span-2 lg:row-span-1 bg-gray-50 p-6 lg:p-16 flex flex-col rounded-3xl lg:rounded-none">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
                Meet the brain
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8">
                Clarity gives you the blocks & components you need to create a
                truly professional website, landing page or admin panel for your
                SaaS.
              </p>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-start-1 lg:row-start-2 bg-gray-50 p-6 lg:p-12 flex items-end rounded-3xl lg:rounded-none">
            <Link
              href="/AboutUs"
              className="inline-flex items-center text-lg font-medium hover:opacity-80 transition-opacity"
            >
              See All Members
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Team Member Cards */}
          <div className="lg:col-start-3 lg:row-start-1 ">
            <TeamMemberCard {...teamMembers[0]} index={3} />
          </div>
          <div className="lg:col-start-4 lg:row-start-1   ">
            <TeamMemberCard {...teamMembers[1]} index={4} />
          </div>
          <div className="lg:col-start-2 lg:row-start-2">
            <TeamMemberCard {...teamMembers[2]} index={5} />
          </div>
          <div className="lg:col-start-3 lg:row-start-2">
            <TeamMemberCard {...teamMembers[3]} index={6} />
          </div>
          <div className="lg:col-start-4 lg:row-start-2 ">
            <TeamMemberCard {...teamMembers[4]} index={8} />
          </div>
        </section>
      </div>
    </div>
  );
}

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  index: number;
}

function TeamMemberCard({ name, role, imageUrl, index }: TeamMemberProps) {
  return (
    <div
      className={`relative group overflow-hidden h-64 sm:h-80 lg:h-full 
     ${index === 4 ? "rounded-tr-2xl " : ""}
     ${index === 8 ? "rounded-br-2xl " : ""}
    `}
    >
      {/* <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400">Loading...</span>
      </div> */}
      <Image
        src={imageUrl}
        alt={`${name} - ${role}`}
        fill
        className={`object-contain transition-transform duration-500 
           
            group-hover:scale-110`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-xl lg:text-2xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-200">{role}</p>
      </div>
    </div>
  );
}
