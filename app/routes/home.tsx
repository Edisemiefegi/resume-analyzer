import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import ResumeCard from "~/components/ResumeCard";
import type { Resume } from "types";
import { Link, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import { useEffect, useState } from "react";
import Button from "~/components/base/Button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeIQ" },
    {
      name: "description",
      content: "Smart resume analyzer for skills and job fit",
    },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);

  useEffect(() => {
    const loadResume = async () => {
      setLoadingResumes(true);
      const resumes = (await kv.list("resume:*", true)) as KVItem[];
      const parsedResumes = resumes?.map(
        (resume) => JSON.parse(resume.value) as Resume
      );
      console.log(parsedResumes, "resuem");

      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    };

    loadResume();
  }, []);

  return (
    <main className="bg-[url('/images/bg.jpg')] bg-cover h-full min-h-screen">
      <div className="mx-auto container  w-11/12 space-y-16 md:w-8/12 py-10">
        {/* navbar */}
        <Navbar />

        {/* hero section */}
        <section className="text-center ">
          <div className="space-y-2">
            <h1 className="text-gradient">
              Track Your Application & Review Ratings
            </h1>
            {!loadingResumes && resumes?.length === 0 ? (
              <h2>
                No resume found, upload your first resume to get feedback.{" "}
              </h2>
            ) : (
              <h2>Review your submissions and check AI-powered feedback</h2>
            )}
            <h2>Review your submissions and check AI-powered feedback.</h2>
          </div>{" "}
          {loadingResumes && (
            <div className="flex flex-col items-center justify-center">
              <img src="/resume-scanner.gif" alt="" className="w-[200px]" />
            </div>
          )}{" "}
        </section>

        {/* resume section */}
        {!loadingResumes && resumes.length > 0 && (
          <div className="grid  w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumes.map((resume: Resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}

        {!loadingResumes && resumes?.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-10 gap-4">
            <Button>
              <Link to="/upload">Upload Resume</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
