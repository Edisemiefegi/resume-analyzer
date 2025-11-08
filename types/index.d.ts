export interface ResumeFeedbackCategory {
    score: number;
    tips: {
        type: "good" | "improve";
        tip: string
    }[];
}

export interface ResumeFeedback {
    overallScore: number;
    ats: ResumeFeedbackCategory;
    toneAndStyle: ResumeFeedbackCategory;
    content: ResumeFeedbackCategory;
    structure: ResumeFeedbackCategory;
    skills: ResumeFeedbackCategory;
}

export interface ResumeData {
    id: number;
    companyName: string;
    jobTitle: string;
    imagePath: string;
    resumePath: string;
    feedback: ResumeFeedback;
}
