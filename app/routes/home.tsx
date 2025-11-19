import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import type { ResumeData } from "types";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ResumeIQ" },
    { name: "description", content: "Smart resume analyzer for skills and job fit" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg.jpg')] bg-cover h-full">

    <div className="mx-auto container  w-11/12 space-y-16 md:w-8/12 py-10">
      {/* navbar */}
      <Navbar />

      {/* hero section */}
      <section className="text-center space-y-2" >
          <h1 className="text-gradient">Track Your Application & Review Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
      </section>

      {/* resume section */}
      {resumes.length > 0 && (<div className="grid  w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumes.map((resume: ResumeData) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>)}


    </div>



  </main>;
}
