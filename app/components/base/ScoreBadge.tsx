import React from "react";
interface ScoreBadgeProps {
  score: number;
}

function ScoreBadge({ score }: ScoreBadgeProps) {
  let badgeColor = "";
  let badgeText = "";

  if (score > 70) {
    badgeColor = "bg-green-200 text-green-600";
    badgeText = "Strong";
  } else if (score > 49) {
    badgeColor = "bg-yellow-200 text-yellow-600";
    badgeText = "Good Start";
  } else {
    badgeColor = "bg-red-200 text-red-600";
    badgeText = "Needs Work";
  }
  return (
    <div className={`px-3 py-1 rounded-full ${badgeColor}`}>
      <p className="text-xs font-medium"> {badgeText}</p>
    </div>
  );
}

export default ScoreBadge;
