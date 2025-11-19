import type { Feedback } from "types";
import Card from "./base/Card";
import ScoreGauge from "./base/ScoreGauge";
import ScoreBadge from "./base/ScoreBadge";

const Category = ({ title, score }: { title: string; score: number }) => {
  const textColor =
    score > 70
      ? "text-green-600"
      : score > 49
        ? "text-yellow-600"
        : "text-red-600";
  return (
    <div className="  mb-4">
      <div className="flex  text-gray-700 items-center w-full  rounded-lg bg-gray-100 p-2 justify-between gap-2 ">
       <div className="flex gap-2 items-center justify-center">
         <p className="text-xl">{title}</p>
        <ScoreBadge score={score}/>
       </div>
        <p className="text-2xl">
          <span className={textColor}>{score}</span>/100
        </p>
      </div>
    </div>
  );
};

function Summary({ feedback }: { feedback: Feedback }) {
  console.log(feedback, "feedback");

  return (
    <Card className="">
      <div className="flex flex-row items-center p-4 gap-8">
        <ScoreGauge score={feedback?.overallScore} />
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Your Resume Score</h2>
          <p className="text-sm text-gray-500">
            This score is calculated based on the variable listed below
          </p>
        </div>
      </div>

      <Category
        title="Tone & Style"
        score={feedback.toneAndStyle?.score ?? 0}
      />
      <Category title="Content" score={feedback.content?.score ?? 0} />
      <Category title="Structure" score={feedback.structure?.score ?? 0} />
      <Category title="Skills" score={feedback.skills?.score ?? 0} />
    </Card>
  );
}

export default Summary;
