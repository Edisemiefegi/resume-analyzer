import { cn } from "~/lib/utils";

const Ats = ({
  score,
  suggestions,
}: {
  score: number;
  suggestions: { type: "good" | "improve"; tip: string }[];
}) => {

  console.log(score, suggestions, 'test');
  
  return (
    <div
      className={cn(
        "rounded-2xl shadow-md w-full bg-gradient-to-b to-light-white p-8 flex flex-col gap-4",
        score > 69
          ? "from-green-100"
          : score > 49
          ? "from-yellow-100"
          : "from-red-100"
      )}
    >
      <div className="flex flex-row gap-4 items-center">
     
        <div className="px-2 py-1 text-white rounded-md bg-amber-400">
          {score > 69 ? <i className="pi pi-check-circle "></i>  : score > 49
              ? <i className="pi pi-ban "></i>
              : <i className="pi pi-times-circle "></i> }
        </div>
        <p className="text-2xl font-semibold">ATS Score - {score}/100</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-xl">
          How well does your resume pass through Applicant Tracking Systems?
        </p>
        <p className="text-lg text-gray-500">
          Your resume was scanned like an employer would. Here's how it
          performed:
        </p>
        {suggestions.map((suggestion, index) => (
          <div className="flex flex-row gap-2 items-center" key={index}>
            { suggestion.type === "good"
                ? <i className="pi pi-check-circle text-green-500"></i>
              : <i className="pi pi-exclamation-triangle text-amber-400"></i> }
               
              
            <p className="text-lg text-gray-500">{suggestion.tip}</p>
          </div>
        ))}
        <p className="text-lg text-gray-500">
          Want a better score? Improve your resume by applying the suggestions
          listed below.
        </p>
      </div>
    </div>
  );
};

export default Ats;