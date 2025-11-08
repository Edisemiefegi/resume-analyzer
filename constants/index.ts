import type { ResumeData } from "types";

export const resumes: ResumeData[] = [
  {
    id: 1,
    companyName: "TechNova Inc.",
    jobTitle: "Frontend Developer",
    imagePath: "/images/image1.jpg",
    resumePath: "/resumes/john_doe.pdf",
    feedback: {
      overallScore: 78,
      ats: {
        score: 80,
        tips: [
          { type: "good", tip: "Keywords such as React and Tailwind were detected." },
          { type: "improve", tip: "Add more role-specific terms like 'Vue.js' and 'Nuxt'." },
        ],
      },
      toneAndStyle: {
        score: 70,
        tips: [
          { type: "good", tip: "Professional tone is consistent throughout." },
          { type: "improve", tip: "Use more active verbs to emphasize achievements." },
        ],
      },
      content: {
        score: 75,
        tips: [
          { type: "good", tip: "Education and certifications are clearly listed." },
          { type: "improve", tip: "Include measurable results for past projects." },
        ],
      },
      structure: {
        score: 82,
        tips: [
          { type: "good", tip: "Logical flow with clear headings." },
          { type: "improve", tip: "Bullet points could be more concise." },
        ],
      },
      skills: {
        score: 85,
        tips: [
          { type: "good", tip: "Strong technical stack listed." },
          { type: "improve", tip: "Highlight soft skills like communication and teamwork." },
        ],
      }
    }
  },
  {
    id: 2,
    companyName: "FinSolve Ltd.",
    jobTitle: "Data Analyst",
    imagePath: "/images/image2.jpg",
    resumePath: "/resumes/jane_smith.pdf",
    feedback: {
      overallScore: 88,
      ats: {
        score: 90,
        tips: [
          { type: "good", tip: "ATS detected SQL, Python, and Tableau." },
          { type: "improve", tip: "Add domain-specific keywords like 'financial modeling'." },
        ],
      },
      toneAndStyle: {
        score: 85,
        tips: [
          { type: "good", tip: "Tone is professional but approachable." },
          { type: "improve", tip: "Avoid passive sentences in work experience." },
        ],
      },
      content: {
        score: 92,
        tips: [
          { type: "good", tip: "Projects section is well-detailed." },
          { type: "improve", tip: "Add a summary at the top for clarity." },
        ],
      },
      structure: {
        score: 87,
        tips: [
          { type: "good", tip: "Consistent formatting used throughout." },
          { type: "improve", tip: "Margins are slightly inconsistent." },
        ],
      },
      skills: {
        score: 90,
        tips: [
          { type: "good", tip: "Technical skills are comprehensive." },
          { type: "improve", tip: "Group skills into categories (e.g., tools, languages)." },
        ],
      }
    }
  },
  {
    id: 3,
    companyName: "HealthCore Solutions",
    jobTitle: "Project Manager",
    imagePath: "/images/image3.jpg",
    resumePath: "/resumes/michael_lee.pdf",
    feedback: {
      overallScore: 72,
      ats: {
        score: 65,
        tips: [
          { type: "good", tip: "ATS detected UX, UI, and prototyping tools." },
          { type: "improve", tip: "Mention Figma plug-ins or collaboration tools." },
        ],
      },
      toneAndStyle: {
        score: 75,
        tips: [
          { type: "good", tip: "Creative yet professional language used." },
          { type: "improve", tip: "Keep some bullet points shorter." },
        ],
      },
      content: {
        score: 70,
        tips: [
          { type: "good", tip: "Strong portfolio links included." },
          { type: "improve", tip: "Add user research metrics where possible." },
        ],
      },
      structure: {
        score: 74,
        tips: [
          { type: "good", tip: "Excellent visual hierarchy." },
          { type: "improve", tip: "Consider adding a one-page condensed version." },
        ],
      },
      skills: {
        score: 76,
        tips: [
          { type: "good", tip: "Skills clearly mapped to job role." },
          { type: "improve", tip: "Include accessibility design skills." },
        ],
      }
    }
  },
    {
    id: 4,
    companyName: "TechNova Inc.",
    jobTitle: "Frontend Developer",
    imagePath: "/images/image1.jpg",
    resumePath: "/resumes/john_doe.pdf",
    feedback: {
      overallScore: 78,
      ats: {
        score: 80,
        tips: [
          { type: "good", tip: "Keywords such as React and Tailwind were detected." },
          { type: "improve", tip: "Add more role-specific terms like 'Vue.js' and 'Nuxt'." },
        ],
      },
      toneAndStyle: {
        score: 70,
        tips: [
          { type: "good", tip: "Professional tone is consistent throughout." },
          { type: "improve", tip: "Use more active verbs to emphasize achievements." },
        ],
      },
      content: {
        score: 75,
        tips: [
          { type: "good", tip: "Education and certifications are clearly listed." },
          { type: "improve", tip: "Include measurable results for past projects." },
        ],
      },
      structure: {
        score: 82,
        tips: [
          { type: "good", tip: "Logical flow with clear headings." },
          { type: "improve", tip: "Bullet points could be more concise." },
        ],
      },
      skills: {
        score: 85,
        tips: [
          { type: "good", tip: "Strong technical stack listed." },
          { type: "improve", tip: "Highlight soft skills like communication and teamwork." },
        ],
      }
    }
  },
  {
    id: 5,
    companyName: "FinSolve Ltd.",
    jobTitle: "Data Analyst",
    imagePath: "/images/image2.jpg",
    resumePath: "/resumes/jane_smith.pdf",
    feedback: {
      overallScore: 88,
      ats: {
        score: 90,
        tips: [
          { type: "good", tip: "ATS detected SQL, Python, and Tableau." },
          { type: "improve", tip: "Add domain-specific keywords like 'financial modeling'." },
        ],
      },
      toneAndStyle: {
        score: 85,
        tips: [
          { type: "good", tip: "Tone is professional but approachable." },
          { type: "improve", tip: "Avoid passive sentences in work experience." },
        ],
      },
      content: {
        score: 92,
        tips: [
          { type: "good", tip: "Projects section is well-detailed." },
          { type: "improve", tip: "Add a summary at the top for clarity." },
        ],
      },
      structure: {
        score: 87,
        tips: [
          { type: "good", tip: "Consistent formatting used throughout." },
          { type: "improve", tip: "Margins are slightly inconsistent." },
        ],
      },
      skills: {
        score: 90,
        tips: [
          { type: "good", tip: "Technical skills are comprehensive." },
          { type: "improve", tip: "Group skills into categories (e.g., tools, languages)." },
        ],
      }
    }
  },
  {
    id: 6,
    companyName: "HealthCore Solutions",
    jobTitle: "Project Manager",
    imagePath: "/images/image3.jpg",
    resumePath: "/resumes/michael_lee.pdf",
    feedback: {
      overallScore: 72,
      ats: {
        score: 65,
        tips: [
          { type: "good", tip: "ATS detected UX, UI, and prototyping tools." },
          { type: "improve", tip: "Mention Figma plug-ins or collaboration tools." },
        ],
      },
      toneAndStyle: {
        score: 75,
        tips: [
          { type: "good", tip: "Creative yet professional language used." },
          { type: "improve", tip: "Keep some bullet points shorter." },
        ],
      },
      content: {
        score: 70,
        tips: [
          { type: "good", tip: "Strong portfolio links included." },
          { type: "improve", tip: "Add user research metrics where possible." },
        ],
      },
      structure: {
        score: 74,
        tips: [
          { type: "good", tip: "Excellent visual hierarchy." },
          { type: "improve", tip: "Consider adding a one-page condensed version." },
        ],
      },
      skills: {
        score: 76,
        tips: [
          { type: "good", tip: "Skills clearly mapped to job role." },
          { type: "improve", tip: "Include accessibility design skills." },
        ],
      }
    }
  }
];
