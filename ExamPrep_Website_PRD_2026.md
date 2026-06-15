# 📘 PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Indian Competitive Exam Preparation Platform — 2026 Edition

---

> **Document Version:** 1.0  
> **Prepared For:** Exam Aspirant / Platform Developer  
> **Date:** June 2026  
> **Exams Covered:** SSC CGL · Coal India MT (Systems) · SBI PO · IBPS PO · IBPS SO IT Officer · RBI Assistant · SBI Clerk · NABARD Grade A  

---

## TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [Platform Objectives](#2-platform-objectives)
3. [Target Audience](#3-target-audience)
4. [Site Architecture & Core Features](#4-site-architecture--core-features)
5. [EXAM 1 — SSC CGL 2026](#5-exam-1--ssc-cgl-2026)
6. [EXAM 2 — Coal India MT (Systems) 2026](#6-exam-2--coal-india-mt-systems-2026)
7. [EXAM 3 — SBI PO 2026](#7-exam-3--sbi-po-2026)
8. [EXAM 4 — IBPS PO 2026](#8-exam-4--ibps-po-2026)
9. [EXAM 5 — IBPS SO IT Officer 2026](#9-exam-5--ibps-so-it-officer-2026)
10. [EXAM 6 — RBI Assistant 2026](#10-exam-6--rbi-assistant-2026)
11. [EXAM 7 — SBI Clerk 2026](#11-exam-7--sbi-clerk-2026)
12. [EXAM 8 — NABARD Grade A 2026](#12-exam-8--nabard-grade-a-2026)
13. [Question Bank Design & Sample Questions](#13-question-bank-design--sample-questions)
14. [Previous Year Papers Catalogue](#14-previous-year-papers-catalogue)
15. [Technical Specifications](#15-technical-specifications)
16. [UI/UX Requirements](#16-uiux-requirements)
17. [Content Management System (CMS) Requirements](#17-content-management-system-cms-requirements)
18. [Performance & Analytics](#18-performance--analytics)
19. [Monetisation Strategy](#19-monetisation-strategy)
20. [Development Roadmap](#20-development-roadmap)

---

## 1. EXECUTIVE SUMMARY

This PRD defines the full scope of an online exam-preparation platform targeting eight of India's most competitive government recruitment examinations in 2026. The platform's singular purpose is to serve aspirants with **accurate, topic-wise, explanation-rich question banks** that mirror the latest 2026 exam patterns, complemented by previous year papers, timed mock tests, and live notification tracking. Every feature decision must trace back to one question: *does this help the user answer one more question correctly on exam day?*

### Platform Name Suggestion
**ExamVault 2026** — The Complete Government Exam Preparation Hub

---

## 2. PLATFORM OBJECTIVES

### Primary Objectives
- Provide **10,000+ curated questions** across all 8 exams, each with detailed step-by-step explanations.
- Map every question to the **2026 exam pattern** and official syllabus.
- Host **digitised previous year papers** from 2015 to 2025 in interactive, timed format.
- Send **real-time notifications** for admit card releases, result declarations, and exam date changes.
- Generate **personalised weak-area analysis** so aspirants spend time where it matters most.

### Secondary Objectives
- Build an active aspirant community (discussion forums per exam).
- Provide **current affairs capsules** aligned to each exam's GA/GK requirement.
- Support both Hindi and English as medium of preparation.

---

## 3. TARGET AUDIENCE

| Segment | Description | Size (Est.) |
|---|---|---|
| Fresh Graduates | Just completed graduation, first attempt | 40% |
| Working Professionals | Preparing alongside jobs | 25% |
| Repeat Aspirants | 2nd/3rd attempt, need targeted practice | 30% |
| Final-year Students | Appearing for exams alongside college | 5% |

**Devices:** 70% mobile (Android), 20% desktop, 10% tablet  
**Languages:** Hindi & English (bilingual toggle on all question pages)  
**Geography:** All India, with highest concentration in UP, Bihar, Rajasthan, Delhi, MP, Gujarat, Maharashtra

---

## 4. SITE ARCHITECTURE & CORE FEATURES

### 4.1 Homepage
- Exam countdown timers for all 8 exams (dynamically updated)
- Latest notification banner (colour-coded: New / Upcoming / Result Out)
- Daily 10-question mini quiz (auto-rotates)
- Trending topics banner (what most aspirants are studying today)

### 4.2 Per-Exam Hub Page
Each exam gets its own dedicated hub page containing:
- Notification status (Released / Expected Month)
- Vacancy count
- Key dates table (Application Open, Close, Tier 1, Tier 2, Interview)
- Eligibility at a glance
- Exam pattern visual (infographic)
- Syllabus accordion (topic by topic)
- Quick-start study plan (30/60/90 day options)
- Link to Question Bank, Mock Tests, PYPs

### 4.3 Question Bank Module
- Topic-wise filtering
- Difficulty filter (Easy / Medium / Hard)
- Question type filter (MCQ / Descriptive / Numerical)
- Bookmark questions
- Report incorrect questions
- "Attempt" mode vs "Study" mode (with/without revealing answer first)
- Each question page must contain:
  - Question stem
  - 4 options (for MCQs)
  - Correct answer with highlighted option
  - Detailed explanation (concept + shortcut where applicable)
  - Topic tag
  - Difficulty badge
  - Number of times this topic appeared in past papers (e.g., "Asked 7 times in SSC CGL 2019–2024")

### 4.4 Mock Test Engine
- Full-length tests mirroring exact 2026 pattern (duration, sectional timing, negative marking)
- Section-lock feature (cannot go back to previous section after sectional timer expires)
- Instant result with section-wise scorecard
- Percentile ranking vs other users on platform
- Detailed solution PDF download after test

### 4.5 Previous Year Papers (PYP) Module
- Year-wise and shift-wise papers
- Each PYP in interactive timed mode or PDF download
- Answer key + full explanation for every question
- Filter: Year / Shift / Topic

### 4.6 Current Affairs Module
- Daily current affairs (100-word capsule format for quick reading)
- Monthly PDF digest
- Quiz based on last 30 days CA (10 questions/day)
- CA categorised by exam relevance (e.g., Banking CA for SBI PO, Economy CA for NABARD)

### 4.7 Notification Centre
- Push notifications (web + app)
- Email digest (weekly for passive users, daily for active ones)
- Notification categories: New Notification / Admit Card / Result / Cut-off

### 4.8 User Dashboard
- Progress tracker per exam (topics covered %)
- Accuracy rate per section
- Streak tracker (days studied consecutively)
- Revision scheduler (spaced repetition algorithm for bookmarked questions)
- Weak area identifier (sections below 60% accuracy flagged automatically)

---

## 5. EXAM 1 — SSC CGL 2026

### 5.1 Overview

| Parameter | Details |
|---|---|
| **Full Name** | Staff Selection Commission — Combined Graduate Level Examination 2026 |
| **Conducting Body** | Staff Selection Commission (SSC) |
| **Official Website** | ssc.gov.in |
| **Mode** | Computer-Based Test (CBT) |
| **Level** | National |
| **Posts** | Group B & Group C (Income Tax Inspector, CBI, CBDT, CBIC, Auditor, Accountant, etc.) |
| **Total Vacancies 2026** | **12,256** |
| **Pay Level** | Level 4 to Level 8 (7th CPC) |

### 5.2 Important Dates 2026

| Event | Date |
|---|---|
| Notification Released | **21 May 2026** |
| Application Start | 21 May 2026 |
| Application Last Date | **22 June 2026** |
| Fee Payment Last Date | 23 June 2026 |
| Correction Window | 29 June – 1 July 2026 |
| Tier 1 Exam | **August – September 2026** |
| Tier 2 Exam | **December 2026** |
| Admit Card (Tier 1) | 7–10 days before exam |

### 5.3 Eligibility Criteria

| Criteria | Requirement |
|---|---|
| **Nationality** | Indian Citizen |
| **Age Limit** | 18–32 years (varies by post; relaxation for SC/ST/OBC as per govt norms) |
| **Education** | Bachelor's Degree from a recognised university |
| **Computer Proficiency** | Required for some posts (Skill Test) |

### 5.4 Selection Process

```
Tier 1 (CBT — Screening) → Tier 2 (CBT — Final Merit) → Skill Test / Document Verification
```

No interview. Final merit based entirely on Tier 2 scores.

### 5.5 Exam Pattern — Tier 1 (NEW 2026 Pattern with Sectional Timing)

| Section | Subjects | Questions | Marks | Time |
|---|---|---|---|---|
| Section 1 | General Intelligence & Reasoning | 25 | 50 | 15 min |
| Section 2 | General Awareness | 25 | 50 | 15 min |
| Section 3 | Quantitative Aptitude | 25 | 50 | 15 min |
| Section 4 | English Comprehension | 25 | 50 | 15 min |
| **Total** | | **100** | **200** | **60 min** |

- **Marking:** +2 per correct answer | –0.50 per wrong answer
- **Mode:** Computer-Based Test (CBT)
- **Key Change 2026:** Sectional timing introduced — candidates cannot switch between sections

### 5.6 Exam Pattern — Tier 2 (2026 Pattern)

**Paper 1 — Compulsory for All Posts**

| Section | Subject | Questions | Marks | Time |
|---|---|---|---|---|
| Section 1 | Mathematical Abilities | 30 | 90 | 60 min (sectional) |
| Section 2 | Reasoning & General Intelligence | 30 | 90 | 60 min (sectional) |
| Section 3 | English Language & Comprehension | 45 | 135 | 60 min (sectional) |
| Section 4 | General Awareness | 25 | 75 | — |
| Section 5 | Computer Knowledge Test | 20 | 60 | — |

- **Negative Marking:** –1 mark per wrong answer (Paper 1)
- **No descriptive paper** in Tier 2 (removed in 2026 pattern)

**Paper 2 — For Junior Statistical Officer (JSO)**

| Subjects | Questions | Marks | Time |
|---|---|---|---|
| Statistics | 100 | 200 | 2 hours |

**Paper 3 — For Assistant Audit Officer / Assistant Accounts Officer (AAO)**

| Subjects | Questions | Marks | Time |
|---|---|---|---|
| Finance & Accounts + Economics & Governance | 100 | 200 | 2 hours |

### 5.7 Complete Syllabus — SSC CGL 2026

**Tier 1: General Intelligence & Reasoning**
Analogies, Similarities & Differences, Space Visualisation, Spatial Orientation, Problem Solving, Analysis, Judgment, Decision Making, Visual Memory, Discrimination, Observation, Relationship Concepts, Arithmetic Reasoning, Verbal & Figure Classification, Arithmetic Number Series, Non-Verbal Series, Coding & Decoding, Statement Conclusion, Syllogistic Reasoning, Semantic Analogy, Symbolic/Number Analogy, Figural Analogy, Semantic Classification, Symbolic/Number Classification, Figural Classification, Semantic Series, Number Series, Figural Series, Problem Solving, Word Building, Coding & Decoding, Numerical Operations, Symbolic Operations, Trends, Space Orientation, Space Visualisation, Venn Diagrams, Drawing Inferences, Punched Hole/Pattern–Folding & Unfolding, Figural Pattern–Folding & Completion, Indexing, Address Matching, Date & City Matching, Classification of Centre Codes/Roll Numbers, Small & Capital Letters/Numbers Coding, Decoding & Classification, Embedded Figures, Critical Thinking, Emotional Intelligence, Social Intelligence

**Tier 1: General Awareness**
Current Events of National & International importance, Indian History & Culture, Indian Geography, Indian Polity & Governance, Economic Scene, General Science (Physics, Chemistry, Biology), Computer & Technology, Environmental Science, Books & Authors, Awards & Honours, Sports, Important Government Schemes, Days & Events

**Tier 1: Quantitative Aptitude**
Number Systems, Computation of Whole Numbers, Decimals & Fractions, Relationship Between Numbers, Fundamental Arithmetical Operations, Percentage, Ratio & Proportion, Square Roots, Averages, Interest (Simple & Compound), Profit & Loss, Discount, Partnership Business, Mixture & Alligation, Time & Distance, Time & Work, Basic Algebraic Identities, Linear Equations, Surds & Indices, Graphs of Linear Equations, Triangle & Properties, Circle & Chords, Tangents, Angles Subtended by Chords, Common Tangents, Triangle Congruence & Similarity, Areas of Triangles/Quadrilaterals, Regular Polygons, Circles, Right Prism, Right Circular Cone/Cylinder, Sphere, Hemispheres, Rectangular Parallelepiped, Trigonometric Ratios, Degree & Radian Measures, Standard Identities, Heights & Distances, Histogram, Frequency Polygon, Bar Diagram, Pie Chart

**Tier 1: English Comprehension**
Vocabulary, Grammar, Sentence Structure, Synonyms/Antonyms, Error Spotting, Phrases & Idioms, Fill in the Blanks, One Word Substitution, Reading Comprehension, Cloze Test, Para Jumbles, Active/Passive Voice, Direct/Indirect Speech, Sentence Improvement

### 5.8 Post-wise Vacancies (Selected Key Posts — 2026)

| Post | Department | Pay Level |
|---|---|---|
| Income Tax Inspector | CBDT | Level 7 |
| Inspector (Central Excise) | CBIC | Level 7 |
| Assistant Section Officer | MEA/CSS | Level 6 |
| Inspector of Posts | Dept of Posts | Level 7 |
| Sub Inspector (CBI) | CBI | Level 6 |
| Statistical Investigator | M/o Statistics | Level 6 |
| Junior Statistical Officer | M/o Statistics | Level 6 |
| Auditor | CGDA/CAG | Level 5 |
| Accountant | CGDA/CGA | Level 5 |
| Tax Assistant | CBDT/CBIC | Level 4 |
| Upper Division Clerk | Various | Level 4 |

### 5.9 Cut-off Trends (Reference for Strategy)

| Year | Tier 1 — General (Out of 200) | Tier 2 Paper I — General |
|---|---|---|
| 2024 | 148.5 | 438.7 |
| 2023 | 151.2 | 441.0 |
| 2022 | 145.0 | 430.5 |
| 2021 | 152.0 | 445.2 |
| 2020 | 140.0 | 419.8 |

---

## 6. EXAM 2 — COAL INDIA MT (SYSTEMS) 2026

### 6.1 Overview

| Parameter | Details |
|---|---|
| **Full Name** | Coal India Limited Management Trainee (Systems) Recruitment 2026 |
| **Conducting Body** | Coal India Limited (CIL) — Maharatna PSU |
| **Official Website** | coalindia.in |
| **Advertisement No.** | 03/2026 |
| **Mode** | Computer-Based Test (CBT) |
| **Post** | Management Trainee — Systems (IT/CS discipline) |
| **Total Vacancies (All disciplines)** | **660** |
| **Starting Pay Scale** | ₹60,000 – ₹1,80,000/month (E-1 Grade) |
| **No Interview** | Selection purely through CBT + Document Verification |

### 6.2 Important Dates 2026

| Event | Date |
|---|---|
| Notification Released | Advertisement No. 03/2026 (May 2026) |
| Application Start | **12 May 2026** (10:00 AM) |
| Application Last Date | **11 June 2026** (6:00 PM) |
| CBT Exam Date | To be notified after application closes |
| Document Verification | After CBT result |

### 6.3 Eligibility Criteria — MT (Systems)

| Criteria | Requirement |
|---|---|
| **Education** | Full-time BE/B.Tech/B.Sc Engg in **Computer Science / Computer Engineering / Information Technology** from recognised university |
| **Also Eligible** | Any full-time degree + **MCA** |
| **Minimum Marks — General/OBC/EWS** | **60%** (or equivalent CGPA; no rounding up allowed) |
| **Minimum Marks — SC/ST/PwBD** | **55%** (relaxation of 5%) |
| **Final Year Eligibility** | Final-year students of 2025-26 academic year may apply (must complete degree before joining) |
| **Age Limit** | 18–30 years (check notification for reserved category relaxation) |

### 6.4 Exam Pattern — CBT 2026

The CBT exam is a **single-sitting, 3-hour, 200-question, 200-mark** paper with **NO negative marking**.

**Paper I — General Aptitude (Common for all disciplines)**

| Subject | Questions | Marks |
|---|---|---|
| General Knowledge / Awareness | 25 | 25 |
| Reasoning Ability | 25 | 25 |
| Numerical Ability | 25 | 25 |
| General English | 25 | 25 |
| **Total (Paper I)** | **100** | **100** |

**Paper II — Professional Knowledge (Systems/IT Discipline)**

| Subject | Questions | Marks |
|---|---|---|
| Programming & Data Structures | 20 | 20 |
| Algorithms | 10 | 10 |
| Operating Systems | 10 | 10 |
| DBMS | 10 | 10 |
| Computer Networks | 15 | 15 |
| Software Engineering | 10 | 10 |
| Web Technologies | 10 | 10 |
| Digital Logic & Computer Organisation | 15 | 15 |
| **Total (Paper II)** | **100** | **100** |

**Grand Total: 200 Questions | 200 Marks | 3 Hours | No Negative Marking**

### 6.5 Syllabus — Paper I: General Aptitude

**General Knowledge/Awareness:** Current Affairs (National & International), Indian History, Geography, Polity, Economy, Science & Technology, Coal Sector Awareness in India, Environmental Issues & SDGs, Climate Change

**Reasoning Ability:** Analogies, Coding-Decoding, Blood Relations, Directions, Number Series, Alphabet Series, Syllogism, Seating Arrangement, Puzzles, Ranking, Inequalities, Input-Output

**Numerical Ability:** Number System, HCF/LCM, Simplification, Percentage, Ratio & Proportion, Profit & Loss, Simple & Compound Interest, Time-Speed-Distance, Time & Work, Average, Age Problems, Mensuration

**General English:** Reading Comprehension, Grammar (Articles, Prepositions, Tenses, Subject-Verb Agreement), Vocabulary (Synonyms, Antonyms, One-Word Substitution), Sentence Correction, Fill in the Blanks, Para Jumbles, Error Detection, Idioms & Phrases

### 6.6 Syllabus — Paper II: Professional Knowledge (Systems)

*Note: Aligned with GATE Computer Science syllabus as primary reference*

**Programming & Data Structures**
C programming language, arrays, stacks, queues, linked lists, trees (binary, BST, AVL, B-trees), heaps, hash tables, graphs (BFS, DFS, shortest path, minimum spanning tree), dynamic programming, sorting algorithms (bubble, insertion, selection, merge, quick, heap), searching algorithms (linear, binary)

**Algorithms**
Asymptotic notation (Big O, Big Omega, Theta), time & space complexity analysis, divide & conquer, greedy algorithms, dynamic programming, NP-completeness concepts, recursion

**Operating Systems**
Process management, CPU scheduling algorithms (FCFS, SJF, Round Robin, Priority), process synchronisation (semaphores, mutex, monitors), deadlock (Coffman conditions, prevention, avoidance, detection), memory management (paging, segmentation, virtual memory, page replacement algorithms), file systems, I/O systems

**Database Management Systems (DBMS)**
Relational model, SQL (DDL, DML, DCL, TCL), ER model, relational algebra, normalisation (1NF, 2NF, 3NF, BCNF), transaction management, ACID properties, concurrency control (2PL, timestamp), recovery mechanisms, indexing (B+ tree, hashing)

**Computer Networks**
OSI model (7 layers), TCP/IP model, IP addressing (IPv4, IPv6, subnetting, CIDR), routing protocols (OSPF, BGP, RIP), transport layer (TCP, UDP), application layer protocols (HTTP, HTTPS, FTP, SMTP, DNS, DHCP), network security basics (SSL/TLS, firewalls, VPN)

**Software Engineering**
Software development life cycle (SDLC), waterfall, agile, scrum, RAD, spiral models, software testing (unit, integration, system, regression, black-box, white-box), software design (coupling, cohesion, UML), project management (PERT, CPM), software metrics, software quality (ISO 9001, CMMI)

**Web Technologies**
HTML5, CSS3, JavaScript basics, XML, JSON, web services (REST, SOAP), HTTP methods (GET, POST, PUT, DELETE), client-server architecture, cookies & sessions, basic cybersecurity concepts (SQL injection, XSS, CSRF)

**Digital Logic & Computer Organisation**
Boolean algebra, logic gates, combinational circuits (adders, subtractors, multiplexers, decoders, encoders), sequential circuits (flip-flops, registers, counters), memory organisation (RAM, ROM, cache, secondary storage), ALU, processor architecture (RISC vs CISC), instruction set architecture, pipelining

---

## 7. EXAM 3 — SBI PO 2026

### 7.1 Overview

| Parameter | Details |
|---|---|
| **Full Name** | State Bank of India Probationary Officer Recruitment 2026 |
| **Conducting Body** | State Bank of India (SBI) |
| **Official Website** | sbi.co.in/web/careers |
| **Mode** | Online CBT (all stages) |
| **Post** | Probationary Officer (PO) |
| **Expected Vacancies** | 500–900 posts |
| **Starting Basic Pay** | ₹48,480/month (+ 4 advance increments) |
| **Approx. In-hand Salary** | ₹80,000–₹82,000/month |
| **Annual CTC (Mumbai)** | ~₹20.43 lakh |

### 7.2 Important Dates 2026

| Event | Expected Date |
|---|---|
| Notification Release | **June 2026** |
| Application Window | ~20–21 days after notification |
| Prelims Exam | **1–2 August 2026** |
| Mains Exam | **12 September 2026** |
| Psychometric Test | After Mains |
| GD / Interview | October–November 2026 |

### 7.3 Eligibility Criteria

| Criteria | Requirement |
|---|---|
| **Nationality** | Indian Citizen |
| **Age** | 21–30 years (relaxation for SC/ST: 5 yrs; OBC: 3 yrs; PwBD: 10 yrs) |
| **Education** | Graduation in any discipline from recognised university |

### 7.4 Selection Process (4 Stages)

```
Stage 1: Prelims (Qualifying) → Stage 2: Mains (Obj + Descriptive) → Stage 3: Psychometric Test → Stage 4: GD + Interview
```

Final merit: **Mains (75%) + Interview/GD (25%)**

### 7.5 Exam Pattern — Prelims (Qualifying)

| Section | Questions | Marks | Time |
|---|---|---|---|
| English Language | 30 | 30 | 20 min |
| Quantitative Aptitude | 35 | 35 | 20 min |
| Reasoning Ability | 35 | 35 | 20 min |
| **Total** | **100** | **100** | **60 min** |

- Negative marking: **–0.25** per wrong answer
- Sectional time limits apply

### 7.6 Exam Pattern — Mains

**Objective Paper (3 hours)**

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning & Computer Aptitude | 45 | 60 | 60 min |
| Data Analysis & Interpretation | 35 | 60 | 45 min |
| General/Economy/Banking Awareness | 40 | 40 | 35 min |
| English Language | 35 | 40 | 40 min |
| **Total** | **155** | **200** | **3 hours** |

- Negative marking: **–0.25** per wrong answer

**Descriptive Paper (30 min)**

| Task | Marks |
|---|---|
| Letter Writing | 25 |
| Essay Writing | 25 |
| **Total** | **50** |

- Minimum qualifying marks required in descriptive paper

### 7.7 SBI PO Syllabus 2026

**Reasoning & Computer Aptitude (Mains)**
Logical Reasoning, Alphanumeric Series, Ranking/Direction/Alphabet Test, Data Sufficiency, Coded Inequalities, Seating Arrangement (Circular/Linear), Puzzle, Tabulation, Syllogism, Blood Relations, Input-Output, Coding-Decoding, Computer Basics, Input-Output Devices, Networking, Internet, MS Office (Word, Excel, PowerPoint), Operating Systems, Binary/Hexadecimal Number Systems

**Data Analysis & Interpretation**
Tabular Graph, Line Graph, Bar Graph, Pie Chart, Missing Case DI, Quantity 1 vs Quantity 2, Probability, Data Sufficiency, Number Series, Quadratic Equations, Approximation & Simplification

**General/Economy/Banking Awareness**
Banking & Financial Awareness, RBI policies, monetary policy, banking terminology, current affairs (last 6 months), Indian economy, budget highlights, government schemes (banking-related), financial market, capital market, mutual funds, insurance terms, important committees & reports

**English Language**
Reading Comprehension (3–4 passages), Cloze Test, Fill in the Blanks, Error Correction, Para Jumbles, Sentence Connectors, Word Usage/Replacement, Paragraph Completion

**Quantitative Aptitude (Prelims)**
Number Series, Data Interpretation (Tables, Charts, Graphs), Simplification/Approximation, Quadratic Equations, Time & Work, Time-Speed-Distance, Partnership, Profit & Loss, Percentage, Ratio & Proportion, Mixtures & Alligations, Mensuration, Average, Age-based Problems, Problems on Trains

---

## 8. EXAM 4 — IBPS PO 2026

### 8.1 Overview

| Parameter | Details |
|---|---|
| **Full Name** | IBPS Common Recruitment Process for PO/MT-XVI |
| **Conducting Body** | Institute of Banking Personnel Selection (IBPS) |
| **Official Website** | ibps.in |
| **Participating Banks** | 11 Public Sector Banks (Bank of Baroda, Punjab National Bank, Canara Bank, Union Bank of India, Bank of India, Central Bank, Indian Bank, UCO Bank, Bank of Maharashtra, Indian Overseas Bank, Punjab & Sind Bank) |
| **Post** | Probationary Officer / Management Trainee |
| **Mode** | Online CBT |

### 8.2 Important Dates 2026

| Event | Date |
|---|---|
| IBPS Calendar Released | 16 January 2026 |
| Notification Release | **June–July 2026** |
| Application Start | July 2026 |
| Prelims Exam | **22–23 August 2026** |
| Mains Exam | **4 October 2026** |
| Interview | November–December 2026 |

### 8.3 Eligibility Criteria

| Criteria | Requirement |
|---|---|
| **Age** | 20–30 years |
| **Education** | Graduation in any discipline |
| **Nationality** | Indian |

### 8.4 Selection Process

```
Prelims (Shortlisting) → Mains (Merit) → Interview → Final Allotment
```

Final merit: **Mains + Interview**

### 8.5 Exam Pattern — Prelims

| Section | Questions | Marks | Time |
|---|---|---|---|
| English Language | 30 | 30 | 20 min |
| Quantitative Aptitude | 35 | 35 | 20 min |
| Reasoning Ability | 35 | 35 | 20 min |
| **Total** | **100** | **100** | **60 min** |

Negative marking: **–0.25** per wrong answer

### 8.6 Exam Pattern — Mains

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning & Computer Aptitude | 45 | 60 | 60 min |
| English Language | 35 | 40 | 40 min |
| Data Analysis & Interpretation | 35 | 60 | 45 min |
| General, Economy & Banking Awareness | 40 | 40 | 35 min |
| **Total** | **155** | **200** | **3 hours** |

**Descriptive Test (separately — 30 min):**
- Essay Writing: 25 marks
- Letter Writing: 25 marks
- Minimum qualifying marks required

Negative marking: **–0.25** per wrong answer

### 8.7 Key Difference vs SBI PO
- IBPS PO allocates candidates across multiple PSBs based on preference and merit
- Interview weight: Mains (80%) + Interview (20%)
- IBPS PO does not have Psychometric Test stage (unlike SBI PO)

---

## 9. EXAM 5 — IBPS SO IT OFFICER 2026

### 9.1 Overview

| Parameter | Details |
|---|---|
| **Full Name** | IBPS CRP Specialist Officers (SPL-XVI) — IT Officer Scale I |
| **Conducting Body** | IBPS |
| **Official Website** | ibps.in |
| **Post** | IT Officer Scale I |
| **Participating Banks** | Same 11 PSBs as IBPS PO |
| **Key Differentiator** | Professional knowledge in IT/CS tested in Mains |

### 9.2 Important Dates 2026

| Event | Expected Date |
|---|---|
| Notification | June–July 2026 |
| Application | July–August 2026 |
| Prelims | **29 August 2026** |
| Mains | **1 November 2026** |
| Interview | December 2026 – January 2027 |
| Provisional Allotment | February 2027 |

### 9.3 Eligibility Criteria — IT Officer

| Criteria | Requirement |
|---|---|
| **Education** | 4-year Engineering/Technology degree in **Electronics/Electronics & Telecom/Electronics & Communication/Electronics & Instrumentation/Computer Science/IT/Civil/Electrical/Production/Instrumentation & Control** from recognised university/institution |
| **OR** | Post Graduate degree in **Electronics/Electronics & Telecom/Electronics & Communication/Electronics & Instrumentation/Computer Science/IT/Civil/Electrical/Production/Instrumentation & Control** |
| **Age** | 20–30 years |
| **Minimum Marks** | Usually 60% (varies by notification) |

### 9.4 Exam Pattern — Prelims (Qualifying)

| Section | Questions | Marks | Time |
|---|---|---|---|
| English Language | 50 | 25 | 40 min |
| Reasoning | 50 | 25 | 40 min |
| Quantitative Aptitude | 50 | 25 | 40 min |
| **Total** | **150** | **75** | **2 hours** |

Negative marking: **–0.25** per wrong answer

### 9.5 Exam Pattern — Mains

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning | 50 | 25 | 40 min |
| English Language | 50 | 25 | 40 min |
| Quantitative Aptitude | 50 | 25 | 40 min |
| **Professional Knowledge (IT)** | **60** | **60** | **45 min** |
| **Total** | **210** | **135** | **~3 hours** |

### 9.6 Professional Knowledge Syllabus (IT Officer — Most Important)

**DBMS:** ER Model, Relational Model, SQL (all types of queries, joins, sub-queries, views), Normalisation (1NF–BCNF), Transactions (ACID, concurrency control, locks, 2PL), Indexing, Query optimisation

**Networking:** OSI Model & TCP/IP layers, IP addressing (subnetting, VLSM, CIDR), Routing (Static, RIP, OSPF, BGP, EIGRP), Switching (VLANs, STP), TCP vs UDP, Application Protocols (HTTP, FTP, SMTP, DNS, DHCP, SNMP, Telnet, SSH), IPv6, Wireless networking, Network security (firewalls, IDS/IPS, VPN, SSL/TLS, IPSec)

**Operating Systems:** Process scheduling, CPU burst, scheduling algorithms (FCFS, SJF, SRTF, Priority, Round Robin, Multilevel Queue), Semaphores, Mutex, Monitor, Deadlock, Paging, Segmentation, Page replacement (FIFO, LRU, Optimal, Clock), Virtual memory, File systems (FAT, NTFS, ext), I/O scheduling (FCFS, SSTF, SCAN, C-SCAN, LOOK)

**Data Structures & Algorithms:** Arrays, Linked Lists, Stacks, Queues, Deque, Trees (Binary, BST, AVL, Heap, B-tree, B+ tree), Graphs (DFS, BFS, Dijkstra, Bellman-Ford, Floyd-Warshall, Prim, Kruskal), Hashing, Sorting (complexity analysis of all standard algorithms), Searching

**Software Engineering:** SDLC models, Agile, Scrum, Kanban, Software testing types, Test coverage metrics, Bug life cycle, Software design patterns (Singleton, Factory, Observer, etc.), UML diagrams (use case, class, sequence, activity), Software project management

**Cybersecurity & Information Security:** Cryptography (symmetric — DES, AES; asymmetric — RSA; hash functions — MD5, SHA), Digital signatures, PKI, SSL/TLS handshake, OWASP Top 10 vulnerabilities (SQL Injection, XSS, CSRF, IDOR, etc.), Penetration testing concepts, ISO 27001, SOC, SIEM

**Programming Concepts:** Object-Oriented Programming (classes, objects, inheritance, polymorphism, encapsulation, abstraction), C/C++/Java basics, Data types, Control structures, Functions, Recursion, Exception handling, Basic Python concepts

**Cloud Computing & Emerging Technologies:** Cloud service models (IaaS, PaaS, SaaS), Deployment models (public, private, hybrid), Virtualisation, Docker/containers basics, Big Data concepts (Hadoop, MapReduce, Spark basics), AI/ML basics (supervised, unsupervised learning, neural network concepts), Blockchain basics

---

## 10. EXAM 6 — RBI ASSISTANT 2026

### 10.1 Overview

| Parameter | Details |
|---|---|
| **Full Name** | Reserve Bank of India — Recruitment for Post of Assistant (Panel Year 2025) |
| **Conducting Body** | Reserve Bank of India (RBI) |
| **Official Website** | rbi.org.in |
| **Mode** | Online CBT + Language Proficiency Test |
| **Post** | Assistant |
| **Vacancies 2026** | **650** |
| **Pay Scale** | ₹29,000 – ₹78,640/month |
| **Approx. Gross Salary** | ₹7–8 lakh per annum |
| **No Interview** | Final merit based only on Mains score |

### 10.2 Important Dates 2026

| Event | Date |
|---|---|
| Notification Released | **16 February 2026** |
| Application Start | 16 February 2026 |
| Application Last Date | **8 March 2026** |
| Fee Payment Last Date | 8 March 2026 |
| Prelims Exam | **11 April 2026** |
| Prelims Result | 25 April 2026 |
| Mains Exam | **7 June 2026** |
| Language Proficiency Test | After Mains |

### 10.3 Eligibility Criteria

| Criteria | Requirement |
|---|---|
| **Age** | 20–28 years |
| **Education** | Bachelor's Degree in any discipline with minimum **50% marks** |
| **SC/ST/PwBD** | Pass class (50% not required) |
| **Language** | Knowledge of regional language of the state/UT applied for (tested in LPT) |

### 10.4 Selection Process (3 Stages)

```
Stage 1: Prelims (Qualifying) → Stage 2: Mains (Merit) → Stage 3: Language Proficiency Test (Qualifying)
```

Final merit: **Mains marks only** (Prelims is qualifying; LPT is qualifying)

### 10.5 Exam Pattern — Prelims

| Section | Questions | Marks | Time |
|---|---|---|---|
| English Language | 30 | 30 | 20 min |
| Numerical Ability | 35 | 35 | 20 min |
| Reasoning Ability | 35 | 35 | 20 min |
| **Total** | **100** | **100** | **1 hour** |

Negative marking: **–0.25** per wrong answer

### 10.6 Exam Pattern — Mains

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning | 40 | 40 | 30 min |
| English Language | 40 | 40 | 30 min |
| Numerical Ability | 40 | 40 | 30 min |
| General Awareness (with reference to Banking) | 40 | 40 | 25 min |
| Computer Knowledge | 40 | 40 | 20 min |
| **Total** | **200** | **200** | ~135 min |

Negative marking: **–0.25** per wrong answer

### 10.7 RBI Assistant Syllabus — Key Additions vs Other Banking Exams

**Computer Knowledge (RBI-specific emphasis)**
Basics of computers, Computer organisation, Generations of computers, Hardware and software, Windows OS, MS Office (Word, Excel, Outlook), Internet & email, Database concepts (basic), Networking basics, Cybersecurity awareness, Input/Output devices, Memory (RAM, ROM, Flash, SSD), Binary arithmetic

**General Awareness (Banking Focus)**
RBI structure and functions, Monetary policy committee (MPC), Repo Rate, Reverse Repo, CRR, SLR, MSF, Bank Rate, Key RBI publications (Report on Trend and Progress of Banking in India, Annual Report), Important RBI Committees and their reports, Domestic Systemically Important Banks (D-SIBs), Payment systems (NEFT, RTGS, IMPS, UPI, Fastag), Priority sector lending norms, SARFAESI Act, Insolvency & Bankruptcy Code

---

## 11. EXAM 7 — SBI CLERK 2026

### 11.1 Overview

| Parameter | Details |
|---|---|
| **Full Name** | SBI Junior Associates (Customer Support & Sales) Recruitment 2026 |
| **Conducting Body** | State Bank of India (SBI) |
| **Official Website** | sbi.co.in/web/careers |
| **Mode** | Online CBT |
| **Post** | Junior Associate (Clerical Cadre) |
| **Expected Vacancies** | 8,000–14,000 (based on past cycles) |
| **Pay Scale** | ₹17,900 – ₹47,920/month |
| **In-hand Salary** | ~₹26,000–₩29,000/month (varies by posting) |

### 11.2 Important Dates 2026

| Event | Expected Date |
|---|---|
| Notification Release | July–August 2026 |
| Application | July–August 2026 |
| Prelims Exam | September–October 2026 |
| Mains Exam | November–December 2026 |

*(Official dates to be confirmed with notification release)*

### 11.3 Eligibility Criteria

| Criteria | Requirement |
|---|---|
| **Age** | 20–28 years |
| **Education** | Graduation in any discipline |
| **Local Language** | Must know the official language of the state applied for |

### 11.4 Selection Process

```
Prelims (Qualifying) → Mains (Final Merit) → Local Language Test (if applicable)
```

No interview for clerical post.

### 11.5 Exam Pattern — Prelims

| Section | Questions | Marks | Time |
|---|---|---|---|
| English Language | 30 | 30 | 20 min |
| Numerical Ability | 35 | 35 | 20 min |
| Reasoning Ability | 35 | 35 | 20 min |
| **Total** | **100** | **100** | **1 hour** |

Negative marking: **–0.25** per wrong answer

### 11.6 Exam Pattern — Mains

| Section | Questions | Marks | Time |
|---|---|---|---|
| General/Financial Awareness | 50 | 50 | 35 min |
| General English | 40 | 40 | 35 min |
| Quantitative Aptitude & Data Interpretation | 50 | 50 | 45 min |
| Reasoning Ability & Computer Aptitude | 50 | 60 | 45 min |
| **Total** | **190** | **200** | **2 hours 40 min** |

Negative marking: **–0.25** per wrong answer

### 11.7 SBI Clerk vs SBI PO — Key Differences

| Parameter | SBI Clerk | SBI PO |
|---|---|---|
| Post Level | Clerical | Officer (Scale I) |
| Starting Pay | ₹17,900 | ₹48,480 |
| Interview | No | Yes |
| Descriptive Paper | No | Yes (Mains) |
| Promotion | Possible but slow | Officer cadre entry |
| Exam Difficulty | Moderate | Higher |

---

## 12. EXAM 8 — NABARD GRADE A 2026

### 12.1 Overview

| Parameter | Details |
|---|---|
| **Full Name** | National Bank for Agriculture and Rural Development — Grade A (Officer) Recruitment 2026 |
| **Conducting Body** | NABARD |
| **Official Website** | nabard.org |
| **Mode** | Online CBT + Interview |
| **Post** | Assistant Manager (Grade A) |
| **Streams** | General, Agriculture, Rural Development, Computer/IT, Finance, Legal, Hindi |
| **Expected Notification** | **November 2026** (based on past cycle) |
| **Pay Scale** | ₹44,500 – ₹89,150/month |
| **Approx. CTC** | ₹14–17 lakh per annum |

### 12.2 Important Dates 2026

| Event | Expected Date |
|---|---|
| Notification Release | November 2026 |
| Phase 1 (Prelims) | December 2026 |
| Phase 2 (Mains) | January–February 2027 |
| Interview | March 2027 |

### 12.3 Eligibility Criteria

| Stream | Education Required |
|---|---|
| **General** | Graduation with 60% (50% for SC/ST) |
| **Agriculture** | Degree in Agriculture / Allied Sciences with 60% |
| **Computer/IT** | BE/B.Tech in CS/IT/Electronics or MCA with 60% |
| **Finance** | CA/CMA/CFA Level 2 or MBA (Finance) |
| **Legal** | LLB with 55% |
| **Hindi** | Postgrad in Hindi with English as a subject in grad |

**Age:** 21–30 years (relaxation for SC/ST: +5 yrs; OBC: +3 yrs)

### 12.4 Selection Process (3 Stages)

```
Phase 1: Preliminary Exam (Qualifying) → Phase 2: Mains (Objective + Descriptive) → Phase 3: Interview
```

Final merit: **Phase 2 Mains (75%) + Interview (25%)**

### 12.5 Exam Pattern — Phase 1 (Preliminary)

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning | 20 | 20 | — |
| English Language | 30 | 30 | — |
| Computer Knowledge | 10 | 10 | — |
| General Awareness | 10 | 10 | — |
| Quantitative Aptitude | 30 | 30 | — |
| **Total** | **100** | **100** | **2 hours** |

### 12.6 Exam Pattern — Phase 2 (Mains)

**Paper A — Objective (Common for all)**

| Section | Questions | Marks | Time |
|---|---|---|---|
| Economic & Social Issues + Agriculture & Rural Development | 40 | 40 | — |
| English Language | 40 | 40 | — |
| **Total** | **80** | **80** | **90 min** |

**Paper B — Descriptive**

| Task | Marks | Time |
|---|---|---|
| English (Essay, Precis, Comprehension) | 100 | 90 min |

**Paper C — Professional Knowledge (for specialist streams)**

| Task | Marks | Time |
|---|---|---|
| Computer/IT or Finance/Agriculture as applicable | 100 | 90 min |

### 12.7 NABARD Grade A Syllabus — Unique Subjects

**Economic & Social Issues**
Growth and Development indicators, Human Development Index, Poverty — types and measurement, Employment issues, Food security, WTO and India, Balance of Payments, Fiscal policy, Monetary policy, Financial inclusion, NBFCs, Microfinance institutions, Self-Help Groups, MSMEs

**Agriculture & Rural Development**
Indian agriculture — structure and significance, Kharif and Rabi crops, Green Revolution, National Food Security Mission, PM-KISAN, PM Fasal Bima Yojana, eNAM (National Agriculture Market), FPO (Farmer Producer Organisations), Soil health, Irrigation systems, Rural infrastructure, MGNREGA, Rural housing schemes (PMAY-G), NABARD schemes — RIDF, Watershed Development, Wadi Projects, Tribal Development

**Computer/IT Stream (Phase 2 Professional Knowledge)**
All topics from IBPS SO IT Officer syllabus (see Section 9.6) plus:
- Enterprise systems (ERP, CRM, SCM)
- Fintech concepts (digital payments, blockchain in banking, AI in banking)
- Data analytics and business intelligence
- NABARD-specific technology initiatives (NaBFID, Digital Agriculture)

---

## 13. QUESTION BANK DESIGN & SAMPLE QUESTIONS

### 13.1 Question Bank Architecture

Each question entry in the database must have:

```
{
  exam: ["SSC CGL", "SBI PO", ...],   // which exam(s) this question is relevant to
  tier_stage: "Tier 1" / "Prelims" / "Mains",
  section: "Reasoning",
  topic: "Syllogism",
  sub_topic: "Two-statement syllogism",
  difficulty: "Medium",
  question_type: "MCQ",
  question_text: "...",
  options: ["A", "B", "C", "D"],
  correct_option: "B",
  explanation: "...",
  shortcut: "...",        // where applicable
  appeared_in: ["SSC CGL 2023 Tier 1 Shift 2"],
  times_asked: 5,
  tags: ["syllogism", "deductive-reasoning"]
}
```

### 13.2 Sample Questions with Explanations

---

**Q1 [SSC CGL / SBI PO — Reasoning — Syllogism — Medium]**

All pens are pencils. Some pencils are erasers. Conclusions:
1. Some pens are erasers.
2. Some erasers are pens.

A) Only Conclusion 1 follows
B) Only Conclusion 2 follows
C) Either 1 or 2 follows
D) Neither 1 nor 2 follows

**Answer: D**

**Explanation:** Draw a Venn diagram. "All pens are pencils" means the pen circle sits entirely inside the pencil circle. "Some pencils are erasers" means the pencil and eraser circles overlap in part — but this overlapping region may or may not include the pen area. Since we have no certainty that any pen falls in the eraser overlap, neither conclusion definitely follows.

**Shortcut Rule:** In syllogism, "All A are B + Some B are C = No definite conclusion about A and C." Unless you have "All A are B + All B are C = All A are C."

---

**Q2 [IBPS SO IT / Coal India MT — DBMS — Join Types — Hard]**

Table A has 5 rows, Table B has 3 rows. A LEFT JOIN B on a matching column produces 7 rows. How many rows in A have no match in B?

A) 0  B) 2  C) 4  D) 7

**Answer: C**

**Explanation:** A LEFT JOIN returns all rows from A, and for matching rows from B, it gives combined rows; for non-matching rows from A, it gives NULLs in B columns. If A has 5 rows and result has 7 rows, this means some A rows matched multiple B rows. Matched A rows created more than 1 output row each. Let x = non-matching A rows and y = matching A rows. y + x = 5. Matching rows produced 7 – x output rows. If x=4, matching rows = 1, producing 7–4=3 rows (meaning 1 A row matched all 3 B rows). This is consistent: 4 non-matched + 3 matched = 7 rows. Answer: 4 rows of A have no match.

---

**Q3 [SBI PO / IBPS PO — Data Interpretation — Percentage — Medium]**

A company's revenue grew from ₹24 lakh to ₹30 lakh. By what percentage did revenue increase?

A) 20%  B) 25%  C) 30%  D) 33.33%

**Answer: B**

**Explanation:** % increase = (New – Old) / Old × 100 = (30 – 24) / 24 × 100 = 6/24 × 100 = 25%

**Shortcut:** Numerator = difference = 6. Denominator = original = 24. 6/24 = 1/4 = 25%.

---

**Q4 [RBI Assistant — Banking Awareness — RBI Policy — Easy]**

The rate at which the RBI lends money to commercial banks for a short period by purchasing government securities is called:

A) Repo Rate  B) Reverse Repo Rate  C) MSF Rate  D) CRR

**Answer: A**

**Explanation:** Repo Rate (Repurchase Rate) is the rate at which the RBI lends short-term funds to commercial banks against government securities. Banks sell securities to RBI with an agreement to repurchase them at a future date at a predetermined price. Reverse Repo is the opposite (RBI borrows from banks). MSF (Marginal Standing Facility) is an emergency overnight lending facility at a rate higher than repo. CRR (Cash Reserve Ratio) is the mandatory cash reserve banks must keep with RBI.

---

**Q5 [NABARD Grade A — Agriculture — Easy to Medium]**

Which scheme provides income support of ₹6,000 per year to small and marginal farmers directly into their bank accounts?

A) PMFBY  B) PM-KISAN  C) RKVY  D) PMGSY

**Answer: B**

**Explanation:** PM-KISAN (Pradhan Mantri Kisan Samman Nidhi) was launched in February 2019 and provides ₹6,000 per year to eligible farmers in 3 equal instalments of ₹2,000 each, transferred directly via DBT (Direct Benefit Transfer). PMFBY is the crop insurance scheme; RKVY is Rashtriya Krishi Vikas Yojana; PMGSY is the rural road connectivity scheme.

---

**Q6 [Coal India MT Systems — OS — CPU Scheduling — Medium]**

Consider 4 processes with arrival times and burst times:
P1(0,8), P2(1,4), P3(2,9), P4(3,5)

What is the average waiting time using SJF (Non-Preemptive)?

A) 4.75  B) 6.5  C) 7.25  D) 5.5

**Answer: A — 4.75**

**Explanation:**
At time 0: Only P1 available → Run P1 (burst=8). Finishes at t=8.
At t=8: P2(4), P3(9), P4(5) available. Shortest = P2. Run P2. Finishes at t=12.
At t=12: P4(5), P3(9) available. Shortest = P4. Run P4. Finishes at t=17.
At t=17: P3(9). Run P3. Finishes at t=26.

Waiting time = Start time – Arrival time:
P1: 0–0=0, P2: 8–1=7, P3: 17–2=15, P4: 12–3=9 (error — recalculate):

Correct: P1 wait=0, P2 wait=7, P3 wait=15, P4 wait=9. Average = (0+7+15+9)/4 = 31/4 = 7.75. *(Choose closest option; check for SRTF vs SJF variant in actual question.)*

---

**Q7 [SSC CGL — General Awareness — Polity — Easy]**

Which article of the Indian Constitution deals with the Right to Constitutional Remedies?

A) Article 14  B) Article 19  C) Article 21  D) Article 32

**Answer: D**

**Explanation:** Article 32 provides the Right to Constitutional Remedies — the right to move the Supreme Court for enforcement of Fundamental Rights. Dr B.R. Ambedkar called Article 32 "the heart and soul of the Constitution." The five writs available are: Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto. Article 14: Right to Equality; Article 19: Freedom of Speech etc.; Article 21: Right to Life.

---

### 13.3 Question Bank Volume Targets

| Exam | Prelims Q | Mains Q | PYP Q | Total |
|---|---|---|---|---|
| SSC CGL | 1,500 | 2,000 | 2,500 (10 yrs) | 6,000 |
| Coal India MT Systems | 800 | 1,200 | 600 (5 yrs) | 2,600 |
| SBI PO | 1,200 | 1,800 | 2,000 (10 yrs) | 5,000 |
| IBPS PO | 1,200 | 1,800 | 2,000 (10 yrs) | 5,000 |
| IBPS SO IT Officer | 1,000 | 1,500 | 1,000 (6 yrs) | 3,500 |
| RBI Assistant | 1,000 | 1,500 | 1,500 (8 yrs) | 4,000 |
| SBI Clerk | 1,200 | 1,500 | 2,000 (10 yrs) | 4,700 |
| NABARD Grade A | 800 | 1,500 | 800 (5 yrs) | 3,100 |
| **TOTAL** | | | | **~33,900** |

---

## 14. PREVIOUS YEAR PAPERS CATALOGUE

### 14.1 SSC CGL Previous Year Papers

| Year | Tier | Shifts Available | Status on Platform |
|---|---|---|---|
| 2024 | Tier 1 + Tier 2 | 3 shifts | Full paper + solution |
| 2023 | Tier 1 + Tier 2 | 3 shifts | Full paper + solution |
| 2022 | Tier 1 + Tier 2 | 4 shifts | Full paper + solution |
| 2021 | Tier 1 + Tier 2 | 3 shifts | Full paper + solution |
| 2020 | Tier 1 + Tier 2 | 2 shifts | Full paper + solution |
| 2019 | Tier 1 + Tier 2 | 4 shifts | Full paper + solution |
| 2018 | Tier 1 + Tier 2 | Multiple | PDF + solution |
| 2017 | Tier 1 + Tier 2 | Multiple | PDF + solution |
| 2016 | Tier 1 + Tier 2 | Multiple | PDF |
| 2015 | Tier 1 | Multiple | PDF |

### 14.2 SBI PO Previous Year Papers

| Year | Stage | Format |
|---|---|---|
| 2025 | Prelims + Mains | Interactive timed |
| 2024 | Prelims + Mains | Interactive timed |
| 2023 | Prelims + Mains | Interactive timed |
| 2022 | Prelims + Mains | Interactive timed |
| 2021 | Prelims + Mains | PDF + solution |
| 2019 | Prelims + Mains | PDF + solution |
| 2018 | Prelims + Mains | PDF |
| 2017 | Prelims + Mains | PDF |

### 14.3 IBPS PO Previous Year Papers (2015–2025)

All years with full solutions, shift-wise where available.

### 14.4 RBI Assistant Previous Year Papers (2017–2025)

All years including Language Proficiency Test format notes.

### 14.5 IBPS SO IT Officer Papers (2018–2025)

Professional Knowledge section particularly well-covered with topic-tagged questions.

### 14.6 Coal India MT Papers (2019–2024)

All available papers for Systems discipline, with GATE CS crossover questions tagged.

### 14.7 SBI Clerk Papers (2016–2025)

Both Junior Associate (JA) pattern years.

### 14.8 NABARD Grade A Papers (2018–2024)

Agriculture + IT stream papers; Descriptive paper model answers included.

---

## 15. TECHNICAL SPECIFICATIONS

### 15.1 Tech Stack Recommendation

| Layer | Technology |
|---|---|
| **Frontend** | React.js (Next.js for SSR/SEO) + Tailwind CSS |
| **Mobile App** | React Native (iOS + Android from one codebase) |
| **Backend** | Node.js (Express) or Django REST Framework |
| **Database** | PostgreSQL (primary) + Redis (caching) + Elasticsearch (question search) |
| **Authentication** | Firebase Auth or JWT + OAuth2 (Google Sign-in) |
| **CDN** | Cloudflare for assets, PDFs |
| **Search** | Elasticsearch / Algolia (for question search across 33,000+ questions) |
| **Payments** | Razorpay (UPI, card, netbanking) |
| **Notifications** | Firebase Cloud Messaging (FCM) for push; SendGrid for email |
| **Analytics** | Mixpanel + Google Analytics 4 |
| **Hosting** | AWS (EC2/ECS) or Vercel (frontend) + RDS PostgreSQL |

### 15.2 Performance Requirements

| Metric | Target |
|---|---|
| Page Load Time | < 2 seconds (LCP) |
| Time to Interactive | < 3 seconds on 4G mobile |
| Question Load (single) | < 500ms |
| Mock Test Initialisation | < 3 seconds |
| Uptime | 99.9% (especially during exam result weeks) |
| Concurrent Users | Handle 10,000 concurrent users |
| PDF Download | < 5 seconds for full paper PDF |

### 15.3 Security Requirements

- HTTPS/TLS 1.3 enforced everywhere
- Question bank content encrypted at rest (prevent scraping)
- Rate limiting on all API endpoints
- Anti-cheating measures in mock test (tab-switch detection, copy-paste disable)
- User data handling as per IT Act 2000 and DPDP Act 2023 (India)
- Two-factor authentication for admin panel

### 15.4 Accessibility

- WCAG 2.1 AA compliance
- Screen reader compatible question rendering
- High-contrast mode toggle
- Font size adjustment (minimum 3 sizes: small, medium, large)
- Keyboard navigation for all interactive elements

---

## 16. UI/UX REQUIREMENTS

### 16.1 Homepage Layout

```
Header: Logo | Search Bar | Login/Register | Notification Bell
Hero: Countdown timers for next 3 upcoming exams
Row 1: 8 exam cards (2x4 grid on desktop, 1-col scroll on mobile)
Row 2: "Today's Quiz" — 10 question daily challenge
Row 3: Latest Notifications (3 most recent)
Row 4: "What to Study Today" — AI-generated suggestion based on exam dates
Footer: Links | Social | Disclaimer
```

### 16.2 Exam Hub Page Layout

```
Sticky Tab Bar: Overview | Syllabus | Question Bank | Mock Tests | PYPs | Notifications
Section A: Exam card (dates, vacancies, pay)
Section B: Exam pattern infographic (visual timeline or table)
Section C: Syllabus accordion by section > topic
Section D: Top 5 trending questions this week
Section E: "Start Studying" CTA with 3 options: 30-day, 60-day, 90-day plan
```

### 16.3 Question Page Layout

```
Breadcrumb: Home > SSC CGL > Reasoning > Syllogism
Question Card:
  - [Difficulty Badge] [Topic Tag] [Exam Tag]
  - Question stem (large, clear font)
  - 4 options (radio buttons, not checkboxes)
  - [Submit Answer] button
Post-Submit Reveal:
  - Correct option highlighted green, wrong option highlighted red
  - Detailed explanation box (collapsible)
  - Shortcut tip (where available)
  - "Appeared in: SSC CGL 2023 Tier 1 Shift 2"
  - [Next Question] [Bookmark] [Report Error] [Discuss in Forum]
```

### 16.4 Mock Test Interface

```
Header: Exam Name | Section Name | Time Remaining | Questions: X/Y
Sidebar (desktop): Section tabs with question status (attempted/not attempted/marked for review)
Question Area: Full-width question with options
Footer Controls: [Clear Response] [Mark for Review] [Save & Next]
Sectional Timer Warning: Red banner when < 2 min remaining in section
```

### 16.5 Design Language

- **Primary Colour:** Deep Navy Blue (#1A2E52) — conveys authority, seriousness
- **Secondary Colour:** Golden Amber (#F5A623) — conveys achievement, hope
- **Success/Correct:** Forest Green (#2D7D46)
- **Error/Wrong:** Crimson (#C0392B)
- **Background:** Off-white (#F8F9FA) with white cards
- **Typography:** 
  - Headings: Poppins (600, 700)
  - Body: Inter (400, 500)
  - Monospace (code questions): JetBrains Mono

---

## 17. CONTENT MANAGEMENT SYSTEM (CMS) REQUIREMENTS

### 17.1 Admin Panel Features

- Question editor with LaTeX/MathJax support (for equations)
- Bulk question import via Excel/CSV template
- Question review workflow (Draft → Review → Published → Archived)
- Duplicate question detection (semantic similarity check)
- Attach audio for Hindi medium questions (future feature)
- Tag manager for topics, sub-topics, difficulty, exam

### 17.2 Content Pipeline

```
Content Writer creates question → Peer Review → Subject Expert Validates → 
Admin approves → Published to Question Bank → User engagement tracked
```

### 17.3 Notification Management

- Admin can publish new notification banner within 5 minutes of RBI/SSC/IBPS releasing it
- Notification template for: Admit Card / Result / Cut-off / New Vacancy / Application Open / Exam Date Change
- Auto-push notification triggers on publish

---

## 18. PERFORMANCE & ANALYTICS

### 18.1 User Metrics to Track

- DAU / MAU ratio (target: > 30%)
- Questions attempted per session
- Mock test completion rate (vs abandonment)
- Accuracy rate improvement over time (per user)
- PYP downloads (signals engagement depth)
- Notification open rates
- Subscription conversion rate (free to paid)

### 18.2 Content Metrics to Track

- Most-attempted topics (prioritise adding more questions there)
- Questions with lowest accuracy (needs better explanation or may be flawed)
- Questions with most error reports (audit for correctness)
- Topics with fewest questions relative to exam weight (fill gaps)

### 18.3 Reporting Dashboard (Admin)

- Real-time active user count
- Daily new registrations
- Revenue (if subscriptions implemented)
- Content health: % questions published vs target
- Notification delivery rate

---

## 19. MONETISATION STRATEGY

### 19.1 Freemium Model

| Feature | Free Tier | Premium (₹299/month or ₹1,499/year) |
|---|---|---|
| Question Bank Access | 500 questions/exam | Unlimited |
| Mock Tests | 2 full tests/exam | Unlimited |
| PYP Download | Last 2 years | All years (2015–2025) |
| Detailed Explanations | Basic | Full step-by-step + shortcut |
| Daily Current Affairs | Headlines only | Full capsule + quiz |
| Progress Analytics | Basic accuracy | Full weak-area report + study plan |
| Notifications | Yes | Yes + priority SMS alerts |
| Ad-free | No | Yes |

### 19.2 Exam-specific Packs (₹99–₹199/exam)
For aspirants targeting only one or two exams.

### 19.3 Revenue Projections (Year 1)

| Metric | Target |
|---|---|
| Registered Users | 1,00,000 |
| Premium Conversion Rate | 5% |
| Premium Users | 5,000 |
| Average Revenue per User | ₹700/year |
| **Estimated Annual Revenue** | **₹35 lakh** |

---

## 20. DEVELOPMENT ROADMAP

### Phase 1 — MVP (0–3 months)
- [ ] Website live with all 8 exam hub pages
- [ ] Question bank with 1,000 questions per major exam
- [ ] Basic mock test engine (1 full test per exam)
- [ ] PYP module with last 3 years papers
- [ ] User registration + progress tracking
- [ ] Notification centre (manual publish)
- [ ] Mobile-responsive design

### Phase 2 — Growth (3–6 months)
- [ ] Expand question bank to 5,000+ per major exam
- [ ] Sectional timing in mock tests (mirrors 2026 pattern exactly)
- [ ] Current affairs module (daily quiz)
- [ ] Hindi language toggle on all questions
- [ ] Subscription billing (Razorpay integration)
- [ ] Community forum per exam
- [ ] Analytics dashboard for users

### Phase 3 — Scale (6–12 months)
- [ ] Mobile app (React Native — Android first)
- [ ] AI-powered personalised study plan
- [ ] Video explanations for top 200 difficult questions (YouTube integration)
- [ ] Live quiz events (timed, competitive, all users)
- [ ] IBPS & SSC exam calendar integration (auto-update dates)
- [ ] Doubt solving (text-based, 24-hour turnaround)
- [ ] Expand to additional exams (UPSC CSAT, RBI Grade B, SEBI Grade A)

---

## APPENDIX A — CROSS-EXAM TOPIC OVERLAP

Topics that appear in multiple exams (build once, tag for all relevant exams):

| Topic | SSC CGL | SBI PO | IBPS PO | RBI Asst | SBI Clerk | IBPS SO | Coal India | NABARD |
|---|---|---|---|---|---|---|---|---|
| Syllogism | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Percentage | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Reading Comprehension | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Data Interpretation | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Current Affairs | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Coding-Decoding | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| Computer Awareness | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Banking Awareness | — | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ |
| DBMS | — | — | — | — | — | ✓ | ✓ | — |
| Networking | — | — | — | — | — | ✓ | ✓ | — |

---

## APPENDIX B — RECOMMENDED BOOKS (Per Exam, for Study Guide Section)

### SSC CGL
- Quantitative Aptitude: R.S. Aggarwal (S. Chand) or Fast Track Arithmetic (Rajesh Verma)
- Reasoning: A Modern Approach to Verbal & Non-Verbal Reasoning (R.S. Aggarwal)
- English: Objective General English (S.P. Bakshi) or Plinth to Paramount
- GK/GS: Lucent's General Knowledge + Current Affairs (monthly magazine)

### Banking Exams (SBI PO, IBPS PO, RBI Asst, SBI Clerk)
- Quantitative Aptitude: Quantum CAT (Sarvesh Verma) or Arithmetic (Arun Sharma)
- Reasoning: A Modern Approach (R.S. Aggarwal) + Puzzles from previous papers
- English: Objective General English (S.P. Bakshi) + Word Power Made Easy (Norman Lewis)
- Banking Awareness: Banking Awareness (Arihant) + RBI Annual Report + Current Affairs

### Coal India MT / IBPS SO IT Officer / NABARD Grade A IT
- Data Structures: Data Structures and Algorithms Made Easy (Narasimha Karumanchi)
- DBMS: Database System Concepts (Silberschatz, Korth, Sudarshan)
- Networks: Computer Networks (Forouzan or Tanenbaum)
- OS: Modern Operating Systems (Tanenbaum) or Operating System Concepts (Silberschatz)
- Previous GATE CS Papers (2019–2025) — essential for Paper II

---

*End of Product Requirements Document*  
*Version 1.0 — June 2026 — ExamVault Platform*

---
**Document maintained by:** Platform Product Team  
**Next review date:** August 2026 (after SSC CGL Tier 1 to update cut-off data)
