export const portfolioData = {
  personal: {
    name: "Jagadeesh Sura",
    title: "Senior Software Engineer",
    tagline: "Building scalable enterprise solutions with .NET & SQL Server",
    subtitle: "Specializing in performance optimization, data engineering, and building robust backend systems that handle real-world complexity.",
    email: "jagadeesh.sura1997@gmail.com",
    phone: "+91 9629929141",
    linkedin: "https://linkedin.com/in/jagadeesh-sura",
    github: "https://github.com/jagadeesh-sura",
    location: "Bangalore, India"
  },

  about: {
    intro: "Hey there! I'm Jagadeesh, a software engineer who loves turning complex problems into elegant solutions. Over the past 4+ years at Aurigo, I've worked on everything from optimizing database queries that were taking forever to migrating half a million records without breaking a sweat.",
    mission: "I believe great software isn't just about clean code—it's about understanding the real problem, delivering value fast, and making systems that don't fall apart when things get messy. Whether it's shaving seconds off report load times or mentoring teammates through tricky bugs, I'm all in."
  },

  proofBullets: [
    "Currently at Aurigo — performance optimization, SSIS migrations, enterprise reporting",
    "C#/.NET Core, SQL Server, SSRS/SSIS, REST APIs, Entity Framework",
    "4+ years building scalable backend systems and data pipelines"
  ],

  featuredProjects: [
    {
      title: "Large-Scale Data Migration Pipeline",
      role: "Lead Developer @ Aurigo",
      summary: "Architected and executed a mission-critical data migration using SSIS, moving 500,000+ records from Excel to SQL Server. Optimized ETL processes to achieve 70% faster load times, ensuring zero data loss and minimal downtime during cutover.",
      bullets: [
        "SSIS-based ETL pipeline processing 500K+ records with zero data loss",
        "70% improvement in load times through query optimization",
        "Automated validation workflows ensuring data integrity"
      ],
      stack: ["SSIS", "SQL Server", "ETL", "Performance"],
      slug: "data-migration"
    },
    {
      title: "High-Performance SSRS Reporting Engine",
      role: "Senior Software Engineer @ Aurigo",
      summary: "Re-engineered complex enterprise reports that were causing user frustration due to 3-minute load times. Refactored queries, optimized data retrieval logic, and introduced intelligent caching—bringing execution time down to under 20 seconds.",
      bullets: [
        "89% reduction in report execution time (3 min to 20 sec)",
        "Query refactoring and intelligent caching strategies",
        "Improved user satisfaction across enterprise reporting"
      ],
      stack: ["SSRS", "SQL Optimization", "C#", "Caching"],
      slug: "ssrs-reporting"
    },
    {
      title: "REST API Integration Framework",
      role: "Software Engineer @ Aurigo",
      summary: "Designed and implemented a flexible REST API integration layer to enable seamless data exchange between our legacy ERP system and modern third-party platforms. Built with extensibility in mind, supporting dynamic endpoint configuration and retry logic.",
      bullets: [
        "Extensible integration layer for legacy ERP modernization",
        "Dynamic endpoint configuration with retry logic",
        "Automated inter-system workflows reducing manual effort"
      ],
      stack: ["REST APIs", ".NET Core", "C#", "Integration"],
      slug: "api-framework"
    }
  ],

  coreCapabilities: [
    {
      title: "Performance Optimization",
      description: "Expert at identifying bottlenecks and refactoring code for speed. From SQL query tuning to minimizing API roundtrips, I know how to make systems fast.",
      link: { text: "See: SSRS Reporting Project", href: "#projects" }
    },
    {
      title: "Data Engineering & Migration",
      description: "Skilled in designing robust ETL pipelines with SSIS, handling large-scale data migrations, and ensuring data integrity across complex transformations.",
      link: { text: "See: Data Migration Project", href: "#projects" }
    },
    {
      title: "API Design & Integration",
      description: "Proficient in building RESTful APIs and integrating third-party systems, with a focus on reliability, security, and maintainability.",
      link: { text: "See: API Framework Project", href: "#projects" }
    },
    {
      title: "Enterprise Backend Systems",
      description: "Experience building scalable C#/.NET applications with Entity Framework, handling complex business logic and high-traffic modules.",
      link: { text: "View Resume", href: "#" }
    }
  ],

  experience: [
    {
      company: "Aurigo Software",
      dates: "Jan 2021 — Present",
      role: "Senior Software Engineer",
      bullets: [
        "Led SSIS-based data migration project, achieving 70% faster load time for 500K+ records",
        "Developed high-performance SSRS reports, cutting execution time from 3 minutes to under 20 seconds"
      ]
    },
    {
      company: "Aurigo Software",
      dates: "Oct 2020 — Dec 2020",
      role: "Intern",
      bullets: [
        "Enhanced product modules using C# and JavaScript, automating data validation workflows",
        "Configured dynamic Kendo UI grids with event-driven logic"
      ]
    }
  ],

  exploring: [
    ".NET 8 Features",
    "Azure Functions",
    "AI-Assisted Development",
    "Performance Profiling",
    "Clean Architecture"
  ],

  writing: [
    {
      date: "Jan 2026",
      title: "The Art of SQL Query Optimization",
      summary: "Practical tips on how I reduced report execution time from minutes to seconds using indexing strategies and query refactoring.",
      tags: ["SQL", "Performance"],
      slug: "sql-optimization"
    },
    {
      date: "Dec 2025",
      title: "SSIS Best Practices for Large Migrations",
      summary: "Lessons learned from migrating half a million records—what worked, what didn't, and how to avoid common pitfalls.",
      tags: ["SSIS", "Data Engineering"],
      slug: "ssis-best-practices"
    },
    {
      date: "Nov 2025",
      title: "Building Extensible Enterprise Software",
      summary: "How we designed hooks and customization points to make a legacy product more flexible without rewriting everything.",
      tags: ["Architecture", "C#"],
      slug: "extensible-software"
    }
  ],

  skills: {
    primary: [
      { name: "C# & .NET Core", level: "expert", category: "Backend" },
      { name: "SQL Server", level: "expert", category: "Database" },
      { name: "ASP.NET Core", level: "expert", category: "Backend" },
      { name: "Entity Framework", level: "advanced", category: "Backend" },
      { name: "SSRS & SSIS", level: "advanced", category: "Data Engineering" }
    ],
    secondary: [
      { name: "REST APIs", category: "Integration" },
      { name: "Azure DevOps", category: "DevOps" },
      { name: "JavaScript & jQuery", category: "Frontend" },
      { name: "Kendo UI", category: "Frontend" },
      { name: "Agile/Scrum", category: "Methodology" }
    ],
    emerging: [
      { name: "ChatGPT & GitHub Copilot", category: "AI Tools" },
      { name: "Claude AI", category: "AI Tools" },
      { name: "HTML/CSS", category: "Frontend" }
    ]
  },

  education: {
    degree: "B.Tech in Electrical and Electronics Engineering",
    institution: "National Institute of Technology, Tiruchirappalli",
    period: "July 2016 – June 2020",
    highlights: [
      "Strong foundation in problem-solving and analytical thinking",
      "Active in technical and cultural leadership roles"
    ]
  },

  awards: [
    {
      title: "Bravo Award",
      period: "Q2 2022 & Q3 2024",
      description: "Awarded for exemplary contribution and being a role model"
    },
    {
      title: "Spot Awards",
      period: "Q3 2021, Q1 2022, Q3 2023, Q1 2025",
      description: "Recognized for delivering critical solutions beyond expectations"
    }
  ],

  leadership: [
    {
      role: "Head of PR & Hospitality",
      event: "Currents-20, NIT Trichy",
      description: "Led a 20-member team managing sponsor relations, guest coordination, and logistics for a 5,000+ attendee symposium"
    },
    {
      role: "Captain of Kho-Kho Team",
      event: "NIT Trichy",
      description: "Led the institute team to finals at inter-college tournaments"
    },
    {
      role: "Event Head",
      event: "Manoranjan (NITTFEST-20)",
      description: "Organized large-scale cultural events with 200+ participants"
    }
  ]
};
