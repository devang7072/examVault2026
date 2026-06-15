// ==========================================
// Study Wiki Articles Database - 2026 Edition
// ==========================================

export const wikiData = {
  "reasoning-syllogism": {
    id: "reasoning-syllogism",
    title: "Understanding Syllogism - Venn Diagrams & Rules",
    examId: "ssc-cgl",
    subject: "Reasoning",
    topic: "Syllogism",
    lastUpdated: "June 2026",
    introduction: "Syllogism is a key logical deduction topic appearing in SSC, Banking, and PSU exams. It tests your ability to deduce valid conclusions from a given set of statements, regardless of whether they match real-world facts.",
    theory: [
      {
        subtitle: "1. The Four Standard Categorical Propositions",
        content: "Every syllogism statement falls into one of these four standard categories:\n\n• **A-Type (Universal Positive):** 'All A are B'. Represented by a circle A completely inside circle B.\n• **E-Type (Universal Negative):** 'No A is B'. Represented by two disjoint circles A and B with a line separating them.\n• **I-Type (Particular Positive):** 'Some A are B'. Represented by two overlapping circles A and B.\n• **O-Type (Particular Negative):** 'Some A are not B'. Represented by circle A having a region that does not touch circle B."
      },
      {
        subtitle: "2. Venn Diagram Method",
        content: "To validate a conclusion:\n1. Draw the **minimal overlapping Venn diagram** representing the statements (this is your basic diagram).\n2. If a conclusion is false in the basic diagram, it is **definitely false**.\n3. If it is true in the basic diagram, draw alternative/possible diagrams (e.g. maximum overlap) to see if you can make it false.\n4. A conclusion is considered **valid** only if it is true in ALL possible Venn diagram representations."
      }
    ],
    shortcuts: [
      {
        title: "Rule of Complementary Pairs (Either-Or Case)",
        desc: "Two conclusions form an 'Either-Or' pair if they satisfy these conditions:\n1. Both conclusions are individually invalid/doubtful.\n2. The subjects and predicates are the same in both conclusions.\n3. They form one of these pairs: (Some + No) or (All + Some Not)."
      },
      {
        title: "Instant Elimination Check",
        desc: "If all statements are positive, NO negative conclusion can ever follow definitely. You can instantly eliminate any negative conclusions!"
      }
    ],
    practice: [
      {
        questionText: "Statements:\n1. All squares are rectangles.\n2. All rectangles are polygons.\n\nConclusions:\nI. All squares are polygons.\nII. Some polygons are rectangles.",
        options: [
          "Only Conclusion I follows",
          "Only Conclusion II follows",
          "Both I and II follow",
          "Neither I nor II follows"
        ],
        correctOption: 2, // Both follow
        explanation: "1. 'All squares are rectangles' means Square circle is inside Rectangle. 2. 'All rectangles are polygons' means Rectangle circle is inside Polygon. Therefore, the Square circle is automatically inside the Polygon circle (Conclusion I follows). Also, the Polygon circle contains the Rectangle circle, so the overlapping region represents 'Some polygons are rectangles' (Conclusion II follows)."
      }
    ]
  },

  "dbms-sql-joins": {
    id: "dbms-sql-joins",
    title: "Mastering SQL Joins - Inner, Left, Right & Full Joins",
    examId: "coal-india-mt",
    subject: "Professional IT",
    topic: "DBMS",
    lastUpdated: "June 2026",
    introduction: "Joins are the backbone of relational database queries. In technical exams like Coal India MT Systems and IBPS SO IT, questions on joins frequently test cardinality, query output rows, and conceptual logic.",
    theory: [
      {
        subtitle: "1. Types of SQL Joins",
        content: "• **INNER JOIN:** Returns records that have matching values in both tables.\n• **LEFT (OUTER) JOIN:** Returns all records from the left table, and the matched records from the right table. If no match, NULLs are returned for right table columns.\n• **RIGHT (OUTER) JOIN:** Returns all records from the right table, and the matched records from the left table. If no match, NULLs are returned for left table columns.\n• **FULL (OUTER) JOIN:** Returns all records when there is a match in either left or right table."
      },
      {
        subtitle: "2. Math of Join Cardinality",
        content: "Let Table A have M rows and Table B have N rows. \n• The **maximum** rows produced by an INNER JOIN is M * N (when all key values match, i.e., cross product).\n• The **minimum** rows produced by an INNER JOIN is 0 (when no key values match).\n• The **minimum** rows produced by a LEFT JOIN is M (even if no matches, all M rows of A are kept)."
      }
    ],
    shortcuts: [
      {
        title: "Left Join Cardinality Rule",
        desc: "Left Join Output Rows = (Rows of A having matches * matching factor in B) + (Rows of A with no matches). Use this formula to solve row calculation questions instantly."
      }
    ],
    practice: [
      {
        questionText: "Table R has 10 rows and Table S has 5 rows. What is the maximum and minimum number of rows that can be returned by an INNER JOIN on a column R.id = S.id?",
        options: [
          "Max 15, Min 5",
          "Max 50, Min 0",
          "Max 10, Min 0",
          "Max 50, Min 5"
        ],
        correctOption: 1, // Max 50, Min 0
        explanation: "1. Maximum: If all rows in R have the same id (e.g. 1) and all rows in S have the same id (e.g. 1), the join will produce a Cartesian product of 10 * 5 = 50 rows. \n2. Minimum: If there are no common ids between the two tables, the join condition is never met, returning 0 rows."
      }
    ]
  },

  "quant-percentage": {
    id: "quant-percentage",
    title: "Percentages & Growth Metrics - Quick Arithmetic",
    examId: "sbi-po",
    subject: "Quantitative Aptitude",
    topic: "Percentage",
    lastUpdated: "June 2026",
    introduction: "Percentage calculations form the base of Data Interpretation (DI) sets, profit & loss, and simple interest problems. Mastering fraction-to-percentage conversions is key to finishing Quant sections on time.",
    theory: [
      {
        subtitle: "1. Core Formulas",
        content: "• **Percentage Increase:** [(New Value - Original Value) / Original Value] * 100\n• **Percentage Decrease:** [(Original Value - New Value) / Original Value] * 100\n• **A is what % of B?** (A / B) * 100\n• **A is what % more/less than B?** [(Difference between A and B) / B] * 100"
      },
      {
        subtitle: "2. Successive Percentage Change",
        content: "If a value is increased by x% and then increased by y%, the net percentage change is given by the formula:\n\n**Net Change = x + y + (x * y) / 100**\n\n*(Use negative values for percentage decreases/discounts.)*"
      }
    ],
    shortcuts: [
      {
        title: "Fraction to Percentage Table",
        desc: "Memorize these conversions to save 30+ seconds per DI question:\n• 1/2 = 50% | 1/3 = 33.33% | 1/4 = 25% | 1/5 = 20%\n• 1/6 = 16.67% | 1/7 = 14.28% | 1/8 = 12.5% | 1/9 = 11.11%\n• 1/11 = 9.09% | 1/12 = 8.33% | 1/15 = 6.67%"
      },
      {
        title: "Product Constancy Rule",
        desc: "If Price of a commodity increases by r%, to keep the expenditure constant, the consumption must be reduced by:\n\n**Reduction = [r / (100 + r)] * 100 %**"
      }
    ],
    practice: [
      {
        questionText: "If the price of sugar increases by 25%, by what percentage must a household reduce its sugar consumption so that its expenditure remains unchanged?",
        options: [
          "20%",
          "25%",
          "16.67%",
          "33.33%"
        ],
        correctOption: 0, // 20%
        explanation: "Using the Product Constancy shortcut formula:\nReduction = [25 / (100 + 25)] * 100 = (25 / 125) * 100 = 1/5 * 100 = 20%."
      }
    ]
  },

  "banking-monetary-policy": {
    id: "banking-monetary-policy",
    title: "RBI Monetary Policy Instruments & Ratios",
    examId: "rbi-assistant",
    subject: "General Awareness",
    topic: "Banking Awareness",
    lastUpdated: "June 2026",
    introduction: "The Reserve Bank of India (RBI) controls the money supply and credit in the Indian economy using various quantitative and qualitative tools. Questions about these policy rates are compulsory in RBI and SBI tests.",
    theory: [
      {
        subtitle: "1. Quantitative Tools (Reserve Ratios)",
        content: "• **Cash Reserve Ratio (CRR):** The percentage of net demand and time liabilities (NDTL) that commercial banks must keep as cash balance with the RBI. No interest is paid by RBI on CRR.\n• **Statutory Liquidity Ratio (SLR):** The percentage of NDTL that banks must maintain in safe, liquid assets like gold, government securities, or cash with themselves."
      },
      {
        subtitle: "2. Quantitative Tools (Policy Rates)",
        content: "• **Repo Rate:** The rate at which the RBI lends short-term funds to banks against government collateral. High repo rate reduces inflation.\n• **Reverse Repo Rate:** The rate at which banks park surplus funds with the RBI.\n• **Bank Rate:** The rate at which RBI lends long-term funds to banks without collateral.\n• **Marginal Standing Facility (MSF):** A window for banks to borrow overnight funds up to a limit in emergency, at a rate higher than repo."
      }
    ],
    shortcuts: [
      {
        title: "Monetary Policy Transmission Rule",
        desc: "To control Inflation -> RBI INCREASES Repo, CRR, SLR (reduces liquidity).\nTo boost Growth/Investment -> RBI DECREASES Repo, CRR, SLR (increases liquidity)."
      }
    ],
    practice: [
      {
        questionText: "When the Reserve Bank of India increases the Cash Reserve Ratio (CRR), what is the immediate impact on the banking system?",
        options: [
          "It increases the lending capacity of commercial banks.",
          "It decreases the money supply in the economy.",
          "It reduces the interest rates on fixed deposits.",
          "It increases the profits of commercial banks."
        ],
        correctOption: 1, // Decreases money supply
        explanation: "Increasing CRR means commercial banks must keep a larger portion of their deposits as cash reserves with the RBI. This reduces the investable/lending capital with banks, leading to credit contraction and a decrease in the overall money supply."
      }
    ]
  },

  "dbms-normalization": {
    id: "dbms-normalization",
    title: "Database Normalization - 1NF, 2NF, 3NF & BCNF",
    examId: "ibps-so-it",
    subject: "Professional IT",
    topic: "Database Normalization",
    lastUpdated: "June 2026",
    introduction: "Normalization is a systematic process of organizing data in a database to reduce redundancy and eliminate anomalies (Insertion, Update, Deletion). It divides large tables into smaller tables and links them using relationships.",
    theory: [
      {
        subtitle: "1. The First Three Normal Forms (1NF, 2NF, 3NF)",
        content: "• **1st Normal Form (1NF):** A relation is in 1NF if and only if all attribute values are atomic (no repeating groups or multi-valued attributes).\n• **2nd Normal Form (2NF):** A relation is in 2NF if it is in 1NF and every non-prime attribute is fully functionally dependent on the primary key (no partial dependency, i.e., dependency on a proper subset of a composite primary key).\n• **3rd Normal Form (3NF):** A relation is in 3NF if it is in 2NF and no non-prime attribute is transitively dependent on the primary key. (i.e., for any non-trivial FD X -> A, either X is a super key or A is a prime attribute)."
      },
      {
        subtitle: "2. Boyce-Codd Normal Form (BCNF)",
        content: "A relation is in BCNF (stronger version of 3NF) if and only if for every one of its non-trivial functional dependencies X -> Y, X is a super key. In BCNF, no prime attribute can be dependent on a non-prime attribute."
      }
    ],
    shortcuts: [
      {
        title: "Dependency Check Strategy",
        desc: "• If the primary key is a single attribute -> Table is automatically in 2NF (as partial dependency cannot exist).\n• 3NF allows X -> A where A is prime, but BCNF strictly forbids it. BCNF is required if prime attributes depend on other attributes."
      }
    ],
    practice: [
      {
        questionText: "A relation R(A, B, C, D) has functional dependencies: A -> B, B -> C, C -> D. The candidate key is A. What is the highest normal form of R?",
        options: [
          "1NF",
          "2NF",
          "3NF",
          "BCNF"
        ],
        correctOption: 1, // 2NF
        explanation: "1. Key is A. Non-prime attributes are B, C, D.\n2. In A -> B, key fully determines B (no partial dependency because key A is a single attribute). So it is in 2NF.\n3. In B -> C and C -> D, non-key attributes determine other non-key attributes. This represents transitive dependency (A -> B -> C -> D). Since transitive dependencies exist, it is NOT in 3NF. Thus, the highest normal form is 2NF."
      }
    ]
  },

  "coa-memory-hierarchy": {
    id: "coa-memory-hierarchy",
    title: "Computer Organisation & Memory Hierarchy",
    examId: "coal-india-mt",
    subject: "Professional IT",
    topic: "Digital Logic & COA",
    lastUpdated: "June 2026",
    introduction: "Memory hierarchy is a system design pattern in computer architecture to organize storage systems by cost, capacity, access latency, and bandwidth.",
    theory: [
      {
        subtitle: "1. The Hierarchy Pyramid",
        content: "Storage devices are structured in levels:\n\n1. **CPU Registers:** Fastest, smallest capacity (bytes), zero cycle access.\n2. **Cache Memory (L1, L2, L3):** Fast SRAM, holds frequently used blocks, 2-10 cycle access.\n3. **Main Memory (RAM):** Medium speed DRAM, holds active processes, 100 cycle access.\n4. **Secondary Storage (SSD, HDD):** Non-volatile flash/magnetic, high capacity, millisecond access."
      },
      {
        subtitle: "2. Cache Mapping Techniques",
        content: "To determine where a block from main memory is placed in the cache, three mapping methods are used:\n• **Direct Mapping:** Each main memory block maps to exactly one cache line: line = block_no MOD cache_lines.\n• **Fully Associative:** A block can be placed in any cache line.\n• **Set Associative:** Cache is divided into sets. A block maps to a specific set, but can be placed in any line within that set."
      }
    ],
    shortcuts: [
      {
        title: "Locality of Reference Rule",
        desc: "Memory design depends on two types of locality:\n• **Temporal Locality:** If a memory location is accessed, it is likely to be accessed again soon (loop variables).\n• **Spatial Locality:** If a memory location is accessed, nearby locations are likely to be accessed soon (array elements)."
      }
    ],
    practice: [
      {
        questionText: "Which of the following cache mapping techniques offers the highest flexibility and has zero conflict misses, but requires complex search hardware?",
        options: [
          "Direct Mapping",
          "Fully Associative Mapping",
          "Set Associative Mapping",
          "Sector Mapping"
        ],
        correctOption: 1, // Fully Associative
        explanation: "Fully Associative mapping allows any block of main memory to sit in any line of cache, eliminating conflict misses. However, finding if a block is in cache requires searching all lines in parallel using expensive Content Addressable Memory (CAM) hardware."
      }
    ]
  }
};
