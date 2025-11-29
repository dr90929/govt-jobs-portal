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
  },
  {
    id: 4,
    title: "OICL AO Recruitment 2025 Online Form",
    shortInfo: "Oriental Insurance Company Limited (OICL) has released the recruitment notification for 300 Administrative Officer (Scale-I) posts. Candidates can apply online from 1st December 2025.",
    postDate: "29/11/2025",
    category: "Latest Jobs",

    // 1. Important Dates
    importantDates: [
      { label: "Application Begin", value: "01/12/2025" },
      { label: "Last Date for Apply", value: "15/12/2025" },
      { label: "Exam Date (Prelims)", value: "10/01/2026" },
      { label: "Exam Date (Mains)", value: "28/02/2026" }
    ],

    // 2. Application Fee
    applicationFee: [
      { category: "General / OBC / EWS", amount: "₹1000" },
      { category: "SC / ST / PwD", amount: "₹250" },
      { category: "Payment Mode", amount: "Online" }
    ],

    // 3. Age Limit
    ageLimit: "Min: 21 Years | Max: 30 Years (As on 31/12/2025) | Age Relaxation as per rules",

    // 4. Vacancy Details
    vacancyDetails: [
      { 
        postName: "Administrative Officer (Generalist)", 
        totalPost: 285, 
        eligibility: "Bachelor / Master Degree in Any Stream with 60% Marks (55% for SC/ST)" 
      },
      { 
        postName: "Administrative Officer (Hindi)", 
        totalPost: 15, 
        eligibility: "Post Graduate Degree in Hindi / English with 60% Marks" 
      }
    ],

    // 5. Important Links
    links: {
      applyOnline: "https://orientalinsurance.org.in/careers", 
      notification: "https://orientalinsurance.org.in/careers", 
      officialWebsite: "https://orientalinsurance.org.in/" 
    },
    {
    id: 5,
    title: "SSC CGL 2024 Tier-I Answer Key Released",
    shortInfo: "Staff Selection Commission (SSC) has uploaded the tentative answer keys for Combined Graduate Level Examination (Tier-I) 2024.",
    postDate: "30/11/2025",
    category: "Answer Key", // Ye zaroori hai
    importantDates: [{ label: "Answer Key Released", value: "30/11/2025" }],
    applicationFee: [],
    ageLimit: "",
    vacancyDetails: [],
    links: {
      applyOnline: "#", notification: "#", officialWebsite: "#"
    }
  },
];
