export const jobsData = [
  {
    id: 1,
    title: "Bombay High Court Stenographer (Lower Grade) Recruitment 2025",
    shortInfo: "High Court of Judicature At Bombay has issued an official advertisement for the post of Stenographer (Lower Grade). Candidates can check important dates, application fees, age limit, and vacancy details below.",
    postDate: "27/10/2025",
    category: "Latest Jobs",
    
    // Dates & Fees Table
    importantDates: [
      { label: "Application Begin", value: "27/10/2025" },
      { label: "Last Date for Apply", value: "10/11/2025" },
      { label: "Pay Exam Fee Last Date", value: "10/11/2025" },
      { label: "Exam Date", value: "As per Schedule" }
    ],
    applicationFee: [
      { category: "General / OBC", amount: "₹500" },
      { category: "SC / ST", amount: "₹500" },
      { category: "Payment Mode", amount: "Online (SBI Collect)" }
    ],

    // Age Limit
    ageLimit: "Minimum Age: 21 Years | Maximum Age: 38 Years (Age relaxation applicable as per rules)",

    // Vacancy Table
    vacancyDetails: [
      { 
        postName: "Stenographer (Lower Grade)", 
        totalPost: 13, 
        eligibility: "Degree in any stream + English Short Hand 80 wpm + Typing 40 wpm" 
      }
    ],

    // Links Table
    links: {
      applyOnline: "https://bombayhighcourt.nic.in/",
      notification: "https://bombayhighcourt.nic.in/",
      officialWebsite: "https://bombayhighcourt.nic.in/"
    }
  },
  {
    id: 2,
    title: "UP Police Constable Admit Card 2025",
    category: "Admit Card",
    postDate: "28/10/2025",
    // Agar full details nahi hain toh short object bhi chalega
    shortInfo: "Download UP Police Constable Admit Card now.",
    importantDates: [],
    applicationFee: [],
    vacancyDetails: [],
    links: { applyOnline: "#", notification: "#", officialWebsite: "#" }
  },
  {
    id: 3,
    title: "SSC CGL 2024 Final Result Declared",
    category: "Result",
    postDate: "29/10/2025",
    shortInfo: "SSC has declared the CGL 2024 final result.",
    importantDates: [],
    applicationFee: [],
    vacancyDetails: [],
    links: { applyOnline: "#", notification: "#", officialWebsite: "#" }
  }
];
