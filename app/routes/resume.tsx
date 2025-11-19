import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import type { Feedback } from "types";
import Ats from "~/components/Ats";
import Button from "~/components/base/Button";
import Details from "~/components/Details";
import Summary from "~/components/Summary";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  { title: "ResumeIQ | Review" },
  { name: "description", content: "Detailed overview of your resume" },
];

function resume() {
  const { id } = useParams();
  const { auth, isLoading, fs, kv } = usePuterStore();
  const [imageUrl, setImageUrl] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) navigate(`/auth?next=/resume/${id}`);
  }, [isLoading]);

  useEffect(() => {
    const loadResume = async () => {
      const resume = await kv.get(`resume:${id}`);
      if (!resume) return;
      const data = JSON.parse(resume);
      const resumeBlob = await fs.read(data.resumePath);
      if (!resumeBlob) return;
      const pdfBlob = new Blob([resumeBlob], { type: "application/pdf" });
      const resumeUrl = URL.createObjectURL(pdfBlob);
      setResumeUrl(resumeUrl);

      const imageBlob = await fs.read(data.imagePath);
      if (!imageBlob) return;
      const imageUrl = URL.createObjectURL(imageBlob);
      setImageUrl(imageUrl);

      setFeedback(data.feedback);

      console.log(resumeUrl, imageUrl, feedback, "imgurl");
    };

    loadResume();
  }, [id]);

  console.log("imttd", feedback);
  return (
    <main className="">
      <nav className="p-3 shadow-lg">
        <Button size="small" className="">
          <Link to="/" className="outline-none">
            {" "}
            <i className="pi pi-arrow-left  mr-1"></i>
            Back to Homepage
          </Link>
        </Button>
      </nav>
      <div className="flex mx-auto container  w-11/12  md:w-8/12  flex-row mt-8 max-lg:flex-col-reverse gap-8">
        <section className="h-screen sticky top-0 items-center justify-center ">
          {imageUrl && resumeUrl && (
            <div className="animate-in   fade-in border-gray-600 duration-1000 max-sm:m-0 h-[90%] max-w-xl:h-fit w-full border">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={imageUrl}
                  alt="resume"
                  className="w-full h-full object-contain "
                />
              </a>
            </div>
          )}
        </section>
        <section className="w-full space-y-8">
          <h1 className="!text-3xl">Resume Review</h1>
          {feedback ? (
            <div className="flex flex-col gap-6 animate-in fade-in duration-1000">
              <Summary feedback={feedback}/>
              <Ats score={feedback?.ATS?.score ?? 0} suggestions={feedback?.ATS?.tips || []}/>
              <Details feedback={feedback}/>
            </div>
          ) : (
            <img src="/resume-scanner.gif" alt="" className="w-full mx-auto object-contain h-96" />
          )}
        </section>
      </div>
    </main>
  );
}

export default resume;
