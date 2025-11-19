import { Link } from "react-router";
import type { Resume } from "types";
import Card from "./base/Card";
import ScoreCircle from "./base/ScoreCircle";
import { usePuterStore } from "~/lib/puter";
import { useEffect, useState } from "react";

interface Props {
  resume?: Resume;
}

function ResumeCard({ resume }: Props) {
  const { fs } = usePuterStore();
  const [resumeUrl, setResumeUrl] = useState("");

  useEffect(() => {
    if (!resume?.imagePath) return;
    const loadResume = async () => {
      const blob = await fs.read(resume.imagePath);
      console.log(resume, "resuem", blob);

      if (!blob) return;
      let url = URL.createObjectURL(blob);
      setResumeUrl(url);
    };

    loadResume();
    console.log(resume, resume.imagePath, "resuem");
  }, [resume?.imagePath]);

  const score = resume?.feedback?.overallScore || 0;
  return (
    <Card className="animate-in  h-full  fade-in duration-1000">
      <Link to={`/resume/${resume?.id}`} className="">
        <div className="flex justify-between">
          <div className="">
            {resume?.companyName && (
              <h2 className="!text-black font-bold ">{resume?.companyName}</h2>
            )}{" "}
            {resume?.jobTitle && (
              <h3 className=" text-gray-500">{resume?.jobTitle}</h3>
            )}{" "}
            {!resume?.companyName && !resume?.jobTitle && <h2 className="font-bold">Resume</h2>}
          </div>
          <div className="flex-shrink-0">
            <ScoreCircle score={score} />
          </div>
        </div>

        <Card className="animate-in !p-0 border-4 mt-6 shadow-none border-gray-100 fade-in duration-1000 ">
          {resumeUrl && <div className="w-full h-full">
            <img
              src={resumeUrl}
              alt="Resume Thumbnail"
              className="w-full h-[240px] max-sm:h-[200px] object-cover"
            />
          </div>}
        </Card>
      </Link>
    </Card>
  );
}

export default ResumeCard;
