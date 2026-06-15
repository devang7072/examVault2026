// ==========================================
// Exams Structured Database - 2026 Edition
// ==========================================

export const examsData = {
  "ssc-cgl": {
    id: "ssc-cgl",
    name: "SSC CGL",
    fullName: "Staff Selection Commission — Combined Graduate Level",
    conductingBody: "Staff Selection Commission (SSC)",
    officialWebsite: "https://ssc.gov.in",
    vacancies: "12,256",
    payScale: "Level 4 to Level 8 (7th CPC) | Approx. ₹35,400 to ₹1,51,100 basic",
    selectionProcess: ["Tier 1 (CBT - Qualifying)", "Tier 2 (CBT - Final Merit)", "Skill Test / Document Verification"],
    countdownTarget: "2026-08-25T09:00:00", // August 2026
    importantDates: [
      { label: "Notification Date", value: "21 May 2026" },
      { label: "Application Starts", value: "21 May 2026" },
      { label: "Application Last Date", value: "22 June 2026" },
      { label: "Tier 1 Exam (CBT)", value: "August – September 2026" },
      { label: "Tier 2 Exam (CBT)", value: "December 2026" }
    ],
    eligibility: {
      age: "18–32 years (Relaxation applies for SC/ST/OBC)",
      education: "Bachelor's Degree in any discipline from a recognized university",
      nationality: "Citizen of India / Nepal / Bhutan"
    },
    examPattern: {
      tier1: {
        title: "Tier 1 (NEW 2026 Pattern with Sectional Timing)",
        marking: "+2 per correct, -0.50 per incorrect",
        duration: "60 minutes (15 mins sectional lock)",
        sections: [
          { name: "General Intelligence & Reasoning", questions: 25, marks: 50, time: "15 min" },
          { name: "General Awareness", questions: 25, marks: 50, time: "15 min" },
          { name: "Quantitative Aptitude", questions: 25, marks: 50, time: "15 min" },
          { name: "English Comprehension", questions: 25, marks: 50, time: "15 min" }
        ]
      },
      tier2: {
        title: "Tier 2 (Compulsory Paper 1)",
        marking: "+3 per correct, -1.00 per incorrect",
        duration: "150 minutes",
        sections: [
          { name: "Mathematical Abilities", questions: 30, marks: 90, time: "60 min (combined sec 1)" },
          { name: "Reasoning & General Intelligence", questions: 30, marks: 90, time: "60 min (combined sec 1)" },
          { name: "English Language & Comprehension", questions: 45, marks: 135, time: "60 min (combined sec 2)" },
          { name: "General Awareness", questions: 25, marks: 75, time: "60 min (combined sec 2)" },
          { name: "Computer Knowledge Test", questions: 20, marks: 60, time: "15 min (qualifying)" }
        ]
      }
    },
    syllabus: [
      {
        section: "Reasoning",
        topics: [
          "Analogies (Semantic, Symbolic, Figural)",
          "Classification (Word, Number, Figure)",
          "Series Completion (Arithmetic, Number, Figural)",
          "Coding & Decoding (Operations, Deciphering)",
          "Spatial Orientation & Visualisation",
          "Venn Diagrams & Syllogistic Reasoning",
          "Punched Hole/Pattern Folding & Unfolding",
          "Embedded Figures & Critical Thinking"
        ]
      },
      {
        section: "Quantitative Aptitude",
        topics: [
          "Number Systems (Fractions, Decimals, Whole Numbers)",
          "Arithmetical Operations (Percentage, Ratio, Profit & Loss, Interest, Speed-Distance, Time-Work)",
          "Algebraic Identities & Linear Equations",
          "Geometry (Triangle Similarity, Circles, Chords, Tangents)",
          "Mensuration (Prisms, Cones, Cylinders, Spheres)",
          "Trigonometry (Ratios, Identities, Heights & Distances)",
          "Data Interpretation (Histogram, Frequency Polygon, Bar/Pie charts)"
        ]
      },
      {
        section: "General Awareness",
        topics: [
          "Current Affairs (National & International)",
          "Indian History & Freedom Struggle",
          "Geography (India & World)",
          "Polity, Constitution & Governance",
          "Indian Economy & Government Schemes",
          "General Science (Physics, Chemistry, Biology)",
          "Science & Technology / IT Developments"
        ]
      },
      {
        section: "English",
        topics: [
          "Spotting Errors & Sentence Correction",
          "Synonyms, Antonyms & Word Substitutions",
          "Idioms & Phrases",
          "Active/Passive Voice & Direct/Indirect Speech",
          "Cloze Test & Fill in the Blanks",
          "Reading Comprehension & Para Jumbles"
        ]
      }
    ],
    recommendedBooks: [
      { subject: "Quantitative Aptitude", title: "Quantitative Aptitude for Competitive Examinations", author: "R.S. Aggarwal" },
      { subject: "Reasoning", title: "A Modern Approach to Verbal & Non-Verbal Reasoning", author: "R.S. Aggarwal" },
      { subject: "English", title: "Objective General English", author: "S.P. Bakshi" },
      { subject: "General Studies", title: "General Knowledge", author: "Lucent Publications" }
    ]
  },

  "coal-india-mt": {
    id: "coal-india-mt",
    name: "Coal India MT",
    fullName: "Coal India Limited Management Trainee (Systems)",
    conductingBody: "Coal India Limited (CIL) - Maharatna PSU",
    officialWebsite: "https://coalindia.in",
    vacancies: "660 (All disciplines)",
    payScale: "₹60,000 - ₹1,80,000/month (E-1 Grade Management Trainee)",
    selectionProcess: ["Computer-Based Test (CBT - Pure Merit)", "Document Verification & Medical Examination", "No Interview stage"],
    countdownTarget: "2026-10-15T09:00:00", // October 2026
    importantDates: [
      { label: "Notification Released", value: "May 2026" },
      { label: "Application Start", value: "12 May 2026" },
      { label: "Application Last Date", value: "11 June 2026" },
      { label: "CBT Exam Date", value: "To be announced (Expected Sept-Oct 2026)" }
    ],
    eligibility: {
      age: "18–30 years (Relaxations for reserved categories)",
      education: "Full-time BE/B.Tech/B.Sc (Engg) in CS / IT / Computer Engg OR MCA, with minimum 60% marks (55% for SC/ST/PwBD)",
      nationality: "Indian Citizen"
    },
    examPattern: {
      tier1: {
        title: "CBT Exam Pattern (Single-Sitting, No Negative Marking)",
        marking: "+1 per correct, 0 for incorrect (No negative marking)",
        duration: "180 minutes (3 hours)",
        sections: [
          { name: "General GK/Awareness (Paper 1)", questions: 25, marks: 25, time: "Flexible" },
          { name: "Reasoning Ability (Paper 1)", questions: 25, marks: 25, time: "Flexible" },
          { name: "Numerical Ability (Paper 1)", questions: 25, marks: 25, time: "Flexible" },
          { name: "General English (Paper 1)", questions: 25, marks: 25, time: "Flexible" },
          { name: "Professional Knowledge: IT/CS (Paper 2)", questions: 100, marks: 100, time: "Flexible" }
        ]
      }
    },
    syllabus: [
      {
        section: "Paper I: General Aptitude",
        topics: [
          "GK: Coal Sector Awareness, Indian Economy, Climate Change",
          "Reasoning: Blood Relations, Syllogisms, Input-Output, Seating Arrangement",
          "Numerical: Percentages, Averages, Profit/Loss, Speed-Time-Distance, Mensuration",
          "English: Grammar rules, Reading Comprehension, Para Jumbles, Synonyms"
        ]
      },
      {
        section: "Paper II: CS & Systems",
        topics: [
          "Programming & Data Structures: C, Stacks, Queues, Linked Lists, Trees, Graph Traversals",
          "Algorithms: Complexities, Greedy, Dynamic Programming, NP-completeness",
          "Operating Systems: Scheduling, Deadlocks, Paging, Virtual Memory, Disk Scheduling",
          "DBMS: Relational algebra, SQL, Normalisation, ACID properties, Transaction locks",
          "Computer Networks: OSI/TCP layers, IP addressing/Subnetting, SSL/TLS, VPNs",
          "Software Engineering: SDLC models (Agile/Scrum), Software testing (White/Black box)",
          "Web Technologies: HTML5, CSS3, JS, REST/SOAP services, Security (SQLi, XSS)",
          "Digital Logic & COA: Boolean Algebra, Multiplexers, Memory hierarchy, Cache, Pipelining"
        ]
      }
    ],
    recommendedBooks: [
      { subject: "Professional (GATE Ref)", title: "GATE Computer Science and Information Technology", author: "Arihant Experts" },
      { subject: "Data Structures", title: "Data Structures and Algorithms Made Easy", author: "Narasimha Karumanchi" },
      { subject: "Operating Systems", title: "Operating System Concepts", author: "Silberschatz, Galvin" },
      { subject: "Networks", title: "Computer Networks", author: "Andrew S. Tanenbaum" }
    ]
  },

  "sbi-po": {
    id: "sbi-po",
    name: "SBI PO",
    fullName: "State Bank of India Probationary Officer",
    conductingBody: "State Bank of India (SBI)",
    officialWebsite: "https://sbi.co.in/web/careers",
    vacancies: "850 (Expected)",
    payScale: "Starting Basic Pay ₹48,480/month (In-hand: ₹80,000+) | CTC: ~₹20.4 Lakhs",
    selectionProcess: ["Phase 1: Prelims (Qualifying)", "Phase 2: Mains (Obj + Descriptive)", "Phase 3: Psychometric Test", "Phase 4: GD & Interview"],
    countdownTarget: "2026-08-01T09:00:00", // August 2026
    importantDates: [
      { label: "Notification Release", value: "June 2026" },
      { label: "Prelims Exam Date", value: "1–2 August 2026" },
      { label: "Mains Exam Date", value: "12 September 2026" },
      { label: "GD / Interview", value: "October–November 2026" }
    ],
    eligibility: {
      age: "21–30 years (SC/ST +5, OBC +3 relaxation)",
      education: "Graduation in any discipline from a recognized university",
      nationality: "Indian Citizen"
    },
    examPattern: {
      tier1: {
        title: "Phase 1 - Prelims (Qualifying)",
        marking: "+1 per correct, -0.25 per incorrect",
        duration: "60 minutes (20 min sectional lock)",
        sections: [
          { name: "English Language", questions: 30, marks: 30, time: "20 min" },
          { name: "Quantitative Aptitude", questions: 35, marks: 35, time: "20 min" },
          { name: "Reasoning Ability", questions: 35, marks: 35, time: "20 min" }
        ]
      },
      tier2: {
        title: "Phase 2 - Mains (Objective + Descriptive)",
        marking: "Varies, -0.25 negative marking on objective questions",
        duration: "3.5 Hours (3 hrs obj + 30 mins desc)",
        sections: [
          { name: "Reasoning & Computer Aptitude", questions: 45, marks: 60, time: "60 min" },
          { name: "Data Analysis & Interpretation", questions: 35, marks: 60, time: "45 min" },
          { name: "General/Economy/Banking Awareness", questions: 40, marks: 40, time: "35 min" },
          { name: "English Language (Mains)", questions: 35, marks: 40, time: "40 min" },
          { name: "Descriptive Paper (Letter & Essay)", questions: 2, marks: 50, time: "30 min" }
        ]
      }
    },
    syllabus: [
      {
        section: "Quantitative & Data Analysis",
        topics: [
          "Data Interpretation (Tables, Line/Bar graphs, Pie charts, Radar charts, Caselet DI)",
          "Number Series (Missing, Wrong term series)",
          "Quadratic Equations & Quantity Comparison",
          "Arithmetic: Percentage, Profit-Loss, Partnerships, Average, Age, Time-Work, Speed-Time"
        ]
      },
      {
        section: "Reasoning",
        topics: [
          "Puzzles (Floor, Box, Scheduling, Matrix, Variable-based)",
          "Seating Arrangement (Circular, Linear, Parallel row, Uncertain number)",
          "Logical Reasoning (Statement-Assumption, Cause-Effect, Course of Action)",
          "Coded Inequalities, Direction Sense, Blood Relations, Input-Output"
        ]
      },
      {
        section: "General/Banking Awareness",
        topics: [
          "Banking Terminology & Policies (Repo, CRR, SLR, Inflation indicators)",
          "RBI Guidelines & Functions, Financial Market Developments",
          "Government Schemes (PMJDY, Mudra, Banking reforms)",
          "National & International Current Affairs (Last 6 months)"
        ]
      },
      {
        section: "Computer Aptitude",
        topics: [
          "Computer Basics, Operating System architecture",
          "Networking basics, internet protocols, cybersecurity",
          "DBMS overview, binary number representations"
        ]
      }
    ],
    recommendedBooks: [
      { subject: "Data Analysis", title: "Quantitative Aptitude for Competitive Exams", author: "R.S. Aggarwal" },
      { subject: "Advanced DI", title: "Data Interpretation & Data Sufficiency", author: "Arihant Publications" },
      { subject: "Banking Awareness", title: "Banking Awareness", author: "Arihant Experts" },
      { subject: "English", title: "Word Power Made Easy", author: "Norman Lewis" }
    ]
  },

  "ibps-po": {
    id: "ibps-po",
    name: "IBPS PO",
    fullName: "IBPS CRP PO/MT-XVI Management Trainee Recruitment",
    conductingBody: "Institute of Banking Personnel Selection (IBPS)",
    officialWebsite: "https://ibps.in",
    vacancies: "4,500 (Expected across 11 PSBs)",
    payScale: "Starting Basic Pay ₹48,480/month | Approx. In-hand ₹78,000",
    selectionProcess: ["Prelims Online CBT (Qualifying)", "Mains Online CBT + Descriptive (Merit)", "Common Interview (20% weight)", "Provisional Allotment in 11 PSBs"],
    countdownTarget: "2026-08-22T09:00:00",
    importantDates: [
      { label: "Notification Released", value: "June–July 2026" },
      { label: "Application Period", value: "July 2026" },
      { label: "Prelims Exam Date", value: "22–23 August 2026" },
      { label: "Mains Exam Date", value: "4 October 2026" },
      { label: "Interview Schedule", value: "November–December 2026" }
    ],
    eligibility: {
      age: "20–30 years (Standard Govt relaxations)",
      education: "Graduation in any discipline from a recognized University",
      nationality: "Indian Citizen"
    },
    examPattern: {
      tier1: {
        title: "Prelims CBT (Qualifying)",
        marking: "+1 per correct, -0.25 per incorrect",
        duration: "60 minutes (20 min sectional lock)",
        sections: [
          { name: "English Language", questions: 30, marks: 30, time: "20 min" },
          { name: "Quantitative Aptitude", questions: 35, marks: 35, time: "20 min" },
          { name: "Reasoning Ability", questions: 35, marks: 35, time: "20 min" }
        ]
      },
      tier2: {
        title: "Mains CBT + Descriptive",
        marking: "Objective (-0.25 marking)",
        duration: "3 hours 30 mins",
        sections: [
          { name: "Reasoning & Computer Aptitude", questions: 45, marks: 60, time: "60 min" },
          { name: "Data Analysis & Interpretation", questions: 35, marks: 60, time: "45 min" },
          { name: "General/Economy/Banking Awareness", questions: 40, marks: 40, time: "35 min" },
          { name: "English Language", questions: 35, marks: 40, time: "40 min" },
          { name: "Descriptive Writing (Essay + Letter)", questions: 2, marks: 25, time: "30 min" }
        ]
      }
    },
    syllabus: [
      {
        section: "Reasoning & Quant",
        topics: [
          "Logical Puzzles, Tabulation, Coding/Decoding, Direction Sense, Blood Relations",
          "Simplification/Approximation, Number series, Data Interpretation (Tables, Charts)",
          "Arithmetic (Profit/Loss, Time/Distance, SI/CI, Partnership, Probability)"
        ]
      },
      {
        section: "Banking & Current Affairs",
        topics: [
          "Financial awareness, banking terminology, regulatory bodies (RBI, SEBI)",
          "Government welfare policies, union budget highlights",
          "Current events (National/International news, sports, appointments)"
        ]
      }
    ],
    recommendedBooks: [
      { subject: "Quant/Aptitude", title: "Fast Track Objective Arithmetic", author: "Rajesh Verma" },
      { subject: "Reasoning", title: "A New Approach to Reasoning Verbal & Non-Verbal", author: "B.S. Sijwali" },
      { subject: "Banking Awareness", title: "Banking Awareness", author: "Arihant Experts" }
    ]
  },

  "ibps-so-it": {
    id: "ibps-so-it",
    name: "IBPS SO IT",
    fullName: "IBPS CRP Specialist Officers — IT Officer Scale I",
    conductingBody: "Institute of Banking Personnel Selection (IBPS)",
    officialWebsite: "https://ibps.in",
    vacancies: "220 (Expected)",
    payScale: "Scale I Officer | Approx. Gross ₹75,000/month",
    selectionProcess: ["Prelims CBT (Qualifying)", "Mains CBT (Professional IT Knowledge - Merit)", "Interview (20% weight)", "Provisional Allotment"],
    countdownTarget: "2026-08-29T09:00:00",
    importantDates: [
      { label: "Notification Released", value: "June–July 2026" },
      { label: "Prelims Exam Date", value: "29 August 2026" },
      { label: "Mains Exam Date", value: "1 November 2026" },
      { label: "Interview", value: "December 2026 – January 2027" }
    ],
    eligibility: {
      age: "20–30 years",
      education: "4-year engineering degree in CS/IT/ECE/Instrumentation OR Post Grad in CS/IT/ECE/Instrumentation OR MCA",
      nationality: "Indian Citizen"
    },
    examPattern: {
      tier1: {
        title: "Prelims (Qualifying)",
        marking: "-0.25 negative marking",
        duration: "120 minutes (40 min sectional lock)",
        sections: [
          { name: "English Language", questions: 50, marks: 25, time: "40 min" },
          { name: "Reasoning", questions: 50, marks: 25, time: "40 min" },
          { name: "Quantitative Aptitude", questions: 50, marks: 25, time: "40 min" }
        ]
      },
      tier2: {
        title: "Mains (Professional IT Knowledge)",
        marking: "+1 per correct, -0.25 incorrect",
        duration: "45 minutes",
        sections: [
          { name: "Professional Knowledge (IT)", questions: 60, marks: 60, time: "45 min" }
        ]
      }
    },
    syllabus: [
      {
        section: "Professional IT Knowledge",
        topics: [
          "DBMS: ER diagrams, Normalisation, SQL joins/subqueries, ACID properties, Locks",
          "Computer Networks: IP addressing/CIDR, OSI/TCP models, Routing protocols, SSL/TLS, firewalls",
          "Operating Systems: Scheduling (SJF, RR), Deadlock safety, Paging/Segmentation, Page replacement",
          "Data Structures & Algorithms: Trees (BST, AVL, B+), Graphs (Dijkstra, MST), Sorting complexities",
          "Software Engineering: SDLC lifecycle (Agile, Waterfall), Testing methodologies, Design patterns",
          "Cybersecurity: Cryptography (symmetric/asymmetric), Web vulnerabilities (OWASP top 10), digital signatures",
          "Cloud & Emerging Tech: IaaS/PaaS/SaaS, Docker container basics, Big Data (MapReduce), AI/ML basics"
        ]
      }
    ],
    recommendedBooks: [
      { subject: "Database Systems", title: "Database System Concepts", author: "Korth, Silberschatz" },
      { subject: "Networks", title: "Data Communications and Networking", author: "Behrouz A. Forouzan" },
      { subject: "Operating Systems", title: "Operating System Concepts", author: "Galvin, Gagne" }
    ]
  },

  "rbi-assistant": {
    id: "rbi-assistant",
    name: "RBI Assistant",
    fullName: "Reserve Bank of India Assistant Recruitment",
    conductingBody: "Reserve Bank of India (RBI)",
    officialWebsite: "https://rbi.org.in",
    vacancies: "650",
    payScale: "₹29,000 – ₹78,640/month | Approx Gross: ₹55,000/month",
    selectionProcess: ["Prelims CBT (Qualifying)", "Mains CBT (Final Merit)", "Language Proficiency Test (LPT - Qualifying)"],
    countdownTarget: "2026-04-11T09:00:00", // Past or future target - let's make it next cycle target
    importantDates: [
      { label: "Notification Released", value: "16 February 2026" },
      { label: "Application Ends", value: "8 March 2026" },
      { label: "Prelims Exam Date", value: "11 April 2026 (Completed)" },
      { label: "Mains Exam Date", value: "7 June 2026 (Completed)" },
      { label: "LPT Test", value: "Expected June–July 2026" }
    ],
    eligibility: {
      age: "20–28 years (SC/ST +5, OBC +3 relaxation)",
      education: "Bachelor's Degree in any discipline with minimum 50% marks (Pass for SC/ST/PwBD)",
      nationality: "Indian Citizen"
    },
    examPattern: {
      tier1: {
        title: "Prelims CBT (Qualifying)",
        marking: "+1 per correct, -0.25 incorrect",
        duration: "60 minutes (20 min sectional lock)",
        sections: [
          { name: "English Language", questions: 30, marks: 30, time: "20 min" },
          { name: "Numerical Ability", questions: 35, marks: 35, time: "20 min" },
          { name: "Reasoning Ability", questions: 35, marks: 35, time: "20 min" }
        ]
      },
      tier2: {
        title: "Mains CBT (Final Merit)",
        marking: "+1 per correct, -0.25 incorrect",
        duration: "135 minutes (sectional)",
        sections: [
          { name: "Reasoning", questions: 40, marks: 40, time: "30 min" },
          { name: "English Language", questions: 40, marks: 40, time: "30 min" },
          { name: "Numerical Ability", questions: 40, marks: 40, time: "30 min" },
          { name: "General Awareness (Banking Focus)", questions: 40, marks: 40, time: "25 min" },
          { name: "Computer Knowledge", questions: 40, marks: 40, time: "20 min" }
        ]
      }
    },
    syllabus: [
      {
        section: "Computer Knowledge (RBI Specific)",
        topics: [
          "Computer architecture & hardware/software specifications",
          "Windows OS & Microsoft Office (Word, Excel, PPT, Outlook)",
          "Networking basics, Web protocols, Internet security & email client configurations",
          "Cybersecurity hygiene, Trojan/Virus detection, input/output device types"
        ]
      },
      {
        section: "General Awareness (Banking Focus)",
        topics: [
          "RBI Structure, Monetary Policy Committee (MPC) dynamics",
          "Repo Rate, Reverse Repo, CRR, SLR, MSF definitions & current numbers",
          "UPI, NEFT, RTGS, IMPS transaction rules & limits",
          "Priority sector lending, financial inclusion schemes, banking regulatory acts"
        ]
      }
    ],
    recommendedBooks: [
      { subject: "Computer Awareness", title: "Objective Computer Awareness", author: "Arihant Experts" },
      { subject: "General Awareness", title: "General Awareness with special reference to Banking", author: "Manohar Pandey" }
    ]
  },

  "sbi-clerk": {
    id: "sbi-clerk",
    name: "SBI Clerk",
    fullName: "SBI Junior Associates (Customer Support & Sales)",
    conductingBody: "State Bank of India (SBI)",
    officialWebsite: "https://sbi.co.in/web/careers",
    vacancies: "8,500+",
    payScale: "₹17,900 – ₹47,920/month | Approx In-hand: ₹29,000",
    selectionProcess: ["Prelims CBT (Qualifying)", "Mains CBT (Final Merit)", "Local Language Test (LPT - Qualifying)", "No Interview Stage"],
    countdownTarget: "2026-09-15T09:00:00",
    importantDates: [
      { label: "Notification Expected", value: "July–August 2026" },
      { label: "Application Window", value: "August 2026" },
      { label: "Prelims Exam Date", value: "Expected Sept-Oct 2026" },
      { label: "Mains Exam Date", value: "Expected Nov-Dec 2026" }
    ],
    eligibility: {
      age: "20–28 years (relaxation applies)",
      education: "Graduation in any discipline from a recognized University",
      nationality: "Indian Citizen"
    },
    examPattern: {
      tier1: {
        title: "Prelims CBT (Qualifying)",
        marking: "+1 per correct, -0.25 incorrect",
        duration: "60 minutes (20 min sectional lock)",
        sections: [
          { name: "English Language", questions: 30, marks: 30, time: "20 min" },
          { name: "Numerical Ability", questions: 35, marks: 35, time: "20 min" },
          { name: "Reasoning Ability", questions: 35, marks: 35, time: "20 min" }
        ]
      },
      tier2: {
        title: "Mains CBT (Final Merit)",
        marking: "+1 per correct, -0.25 incorrect",
        duration: "160 minutes (2 hrs 40 mins)",
        sections: [
          { name: "General/Financial Awareness", questions: 50, marks: 50, time: "35 min" },
          { name: "General English", questions: 40, marks: 40, time: "35 min" },
          { name: "Quantitative Aptitude & DI", questions: 50, marks: 50, time: "45 min" },
          { name: "Reasoning Ability & Computer Aptitude", questions: 50, marks: 60, time: "45 min" }
        ]
      }
    },
    syllabus: [
      {
        section: "Numerical Ability & Reasoning",
        topics: [
          "Simplification & Approximation (High weightage in Prelims)",
          "Data Interpretation tables, Bar/Line charts, missing numbers",
          "Reasoning: Seating arrangements, Syllogisms, coding relationships, alphabet tests"
        ]
      }
    ],
    recommendedBooks: [
      { subject: "Aptitude", title: "Quantitative Aptitude for Competitive Exams", author: "R.S. Aggarwal" },
      { subject: "Reasoning", title: "Analytical Reasoning", author: "M.K. Pandey" }
    ]
  },

  "nabard-grade-a": {
    id: "nabard-grade-a",
    name: "NABARD Grade A",
    fullName: "NABARD Assistant Manager (Grade A) Recruitment",
    conductingBody: "National Bank for Agriculture and Rural Development",
    officialWebsite: "https://nabard.org",
    vacancies: "150 (Expected)",
    payScale: "₹44,500 – ₹89,150/month | Approx CTC: ₹14–17 Lakhs per annum",
    selectionProcess: ["Phase 1: Prelims (Qualifying)", "Phase 2: Mains CBT (Obj + Descriptive - Merit)", "Phase 3: Personal Interview (25 marks)"],
    countdownTarget: "2026-12-10T09:00:00",
    importantDates: [
      { label: "Notification Release", value: "Expected November 2026" },
      { label: "Phase 1 Prelims Date", value: "Expected December 2026" },
      { label: "Phase 2 Mains Date", value: "Expected Jan-Feb 2027" },
      { label: "Interview", value: "March 2027" }
    ],
    eligibility: {
      age: "21–30 years (Standard Govt category relaxations)",
      education: "Graduation with 60% (55% for legal, 50% SC/ST) in relevant streams: General, Agriculture, IT, Finance, Legal",
      nationality: "Indian Citizen"
    },
    examPattern: {
      tier1: {
        title: "Phase 1 - Preliminary CBT (Qualifying)",
        marking: "+1 per correct, -0.25 incorrect",
        duration: "120 minutes (2 hours)",
        sections: [
          { name: "Reasoning & Decision Making", questions: 20, marks: 20, time: "Flexible" },
          { name: "English Language", questions: 30, marks: 30, time: "Flexible" },
          { name: "Computer Knowledge", questions: 10, marks: 10, time: "Flexible" },
          { name: "General Awareness", questions: 10, marks: 10, time: "Flexible" },
          { name: "Quantitative Aptitude", questions: 30, marks: 30, time: "Flexible" }
        ]
      },
      tier2: {
        title: "Phase 2 - Mains (Objective + Descriptive)",
        marking: "-0.25 for objective questions",
        duration: "180 minutes (90 min + 90 min)",
        sections: [
          { name: "Paper A: Objective (Economic & Social Issues + Agriculture)", questions: 40, marks: 40, time: "90 min" },
          { name: "Paper B: Descriptive English (Essay, Precis)", questions: 3, marks: 100, time: "90 min" }
        ]
      }
    },
    syllabus: [
      {
        section: "Economic & Social Issues (ESI)",
        topics: [
          "Human Development indicators, Poverty metrics & measurement, unemployment in India",
          "Monetary Policy, Fiscal Policy, Balance of Payments, trade regulations",
          "Financial Inclusion, Microfinance Institutions, Self-Help Group (SHG) bank linkage",
          "MSME sector, Social structure in India, demography, urbanisation challenges"
        ]
      },
      {
        section: "Agriculture & Rural Development (ARD)",
        topics: [
          "Indian Agriculture: Cropping patterns, soils, irrigation, climate effects",
          "Govt Schemes: PM-KISAN, PMFBY (Crop Insurance), eNAM (National Agri Market), FPOs",
          "Rural Infrastructure: MGNREGA, PMAY-G, rural health, drinking water schemes",
          "NABARD projects: RIDF, Watershed Development, Wadi Projects, Tribal Development"
        ]
      }
    ],
    recommendedBooks: [
      { subject: "Economic/Social Issues", title: "Indian Economy", author: "Ramesh Singh" },
      { subject: "Agriculture", title: "Handbook of Agriculture", author: "ICAR Publications" },
      { subject: "Rural Development", title: "Reports on Rural Development & NABARD initiatives", author: "NABARD Official" }
    ]
  }
};
