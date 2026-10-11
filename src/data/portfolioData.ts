export interface PersonalInfo {
  name: string
  preferredName: string
  title: string
  headline: string
  location: string
  email: string
  phone: string
  github: string
  githubUrl: string
  linkedin: string
  linkedinUrl: string
  resumeUrl: string
  openToRoles: string[]
  bioSummary: string
  fullSummary: string
}

export interface Metric {
  label: string
  value: string
  description: string
  context: string
}

export interface SkillCategory {
  id: string
  name: string
  description: string
  skills: {
    name: string
    isPrimary?: boolean
    context?: string
  }[]
}

export interface ExperienceItem {
  id: string
  title: string
  company: string
  organizationDetail?: string
  period: string
  location?: string
  type: string
  isCurrent?: boolean
  overview: string
  bulletPoints: string[]
  technologies: string[]
}

export interface ProjectSystem {
  id: string
  title: string
  subtitle: string
  category: 'distributed' | 'ai-engineering' | 'fullstack' | 'automation'
  summary: string
  architectureHighlights: string[]
  problemSolved: string
  technologies: string[]
  metrics?: { label: string; value: string }[]
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface EducationItem {
  degree: string
  field: string
  institution: string
  score: string
  highlights?: string[]
}

export const portfolioData = {
  personal: {
    name: "SREERAG E G",
    preferredName: "Sreerag",
    title: "Backend Engineer",
    headline: "Backend Software Engineer | Distributed Systems & AI-Assisted Architecture",
    location: "Kerala, India",
    email: "sreerageg@gmail.com",
    phone: "+91 9567870963",
    github: "sreerageg",
    githubUrl: "https://github.com/sreerageg",
    linkedin: "sreerag-e-g",
    linkedinUrl: "https://linkedin.com/in/sreerag-e-g",
    resumeUrl: "./resume.pdf",
    openToRoles: ["Backend Software Engineer", "Platform / Distributed Systems Engineer", "Full Stack Engineer"],
    bioSummary: "Backend software engineer owning resilient systems end-to-end: high-throughput backend services, event-driven distributed workloads on AWS, and data pipelines. Primary author of the production healthcare automation platform handling 233 modules across 40+ payer portals under strict HIPAA compliance.",
    fullSummary: "Backend software engineer who owns systems end to end — high-throughput backend services and REST APIs, event-driven distributed workloads on AWS, and production automation. Primary author (roughly 73% of commits) and technical owner of the production platform running US healthcare copay-assistance, claim submission and revenue-cycle workflows: 233 modules across 40+ payer and manufacturer portals, orchestrated over queue-driven Celery/SQS pipelines into containerized AWS ECS worker pools, under HIPAA and PHI controls. Drives AI-assisted development across the SDLC — built the in-house LLM agent pipeline that generates, reviews and standardizes production code, with every AI-generated output gated by peer review, automated testing and secure-coding standards. Sets framework conventions other engineers build against, leads design-level discussions, and works directly with business stakeholders in a regulated, compliance-heavy domain."
  } as PersonalInfo,

  verifiedMetrics: [
    {
      label: "Production Modules",
      value: "233",
      description: "Automated healthcare workflows across 40+ payer portals",
      context: "Modeled across 8 extensible base classes with zero per-script duplication"
    },
    {
      label: "Core Codebase Ownership",
      value: "73%",
      description: "Primary author of production platform commits",
      context: "Direct architectural oversight, code reviews, and framework conventions"
    },
    {
      label: "Weekly Claim Submissions",
      value: "500+",
      description: "Sustained via queue-driven AWS ECS worker pools",
      context: "100+ daily runs across 4 Celery/SQS queues with workload-class isolation"
    },
    {
      label: "Custom LLM Agent Tooling",
      value: "2,100 LoC",
      description: "Converts browser sessions into production-grade OOP code",
      context: "Collapsed new-portal onboarding timeline from days to hours"
    },
    {
      label: "Maintenance Reduction",
      value: "30%",
      description: "Through centralized typed error classification registry",
      context: "Made cross-system failures observable and auto-triageable"
    },
    {
      label: "Query Latency Improvement",
      value: "20%",
      description: "REST API & MySQL optimization for enterprise workloads",
      context: "Delivered 12+ optimized endpoints with Swagger documentation"
    }
  ] as Metric[],

  skillCategories: [
    {
      id: "languages",
      name: "Programming Languages",
      description: "Core languages for enterprise backend, scripts, and front-end architectures",
      skills: [
        { name: "Java", isPrimary: true, context: "OOP, collections, generics, concurrency" },
        { name: "Python", isPrimary: true, context: "Advanced OOP, framework & API design, AST" },
        { name: "JavaScript (ES6+)", isPrimary: true, context: "Modern async/await, DOM APIs, tooling" },
        { name: "TypeScript", isPrimary: true, context: "Type safety, interfaces, scalable components" },
        { name: "SQL", isPrimary: true, context: "Schema design, joins, index & query optimization" },
        { name: "HTML5 / CSS3", isPrimary: false, context: "Semantic structure, responsive layouts, tokens" }
      ]
    },
    {
      id: "backend",
      name: "Backend & Microservices",
      description: "Scalable API gateways, event processors, and authentication layers",
      skills: [
        { name: "FastAPI", isPrimary: true, context: "Asynchronous REST gateway, pydantic validation" },
        { name: "Spring Boot", isPrimary: true, context: "REST controllers, dependency injection, JPA, Security" },
        { name: "Django REST Framework", isPrimary: true, context: "Enterprise API serialization, viewsets, auth" },
        { name: "Microservices Design", isPrimary: true, context: "Service decomposition, API versioning" },
        { name: "OAuth 2.0 / JWT", isPrimary: true, context: "Google OAuth, Okta, token validation flows" },
        { name: "Swagger / OpenAPI", isPrimary: false, context: "Automated API contract generation" }
      ]
    },
    {
      id: "cloud-devops",
      name: "Cloud (AWS) & DevOps",
      description: "Containerized deployments, queue orchestration, and CI/CD pipelines",
      skills: [
        { name: "AWS ECS", isPrimary: true, context: "Containerized worker pools sized by workload class" },
        { name: "AWS SQS", isPrimary: true, context: "Message queuing, dead-letter queues, idempotent retry" },
        { name: "AWS S3 & Lambda", isPrimary: true, context: "Asset storage, serverless event triggers" },
        { name: "AWS IAM & CloudWatch", isPrimary: false, context: "Least-privilege policies, metrics & centralized logs" },
        { name: "Docker", isPrimary: true, context: "Multi-stage builds, container orchestration" },
        { name: "GitHub Actions", isPrimary: true, context: "Automated CI/CD, lint gates, test suites" },
        { name: "Kubernetes", isPrimary: false, context: "Working knowledge of pods, services & deployments" }
      ]
    },
    {
      id: "data-messaging",
      name: "Data & Distributed Messaging",
      description: "Transactional databases, document stores, and asynchronous queues",
      skills: [
        { name: "Celery / SQS", isPrimary: true, context: "Producer/consumer patterns, distributed task queues" },
        { name: "PostgreSQL", isPrimary: true, context: "Relational modeling, constraints, transactional integrity" },
        { name: "MySQL", isPrimary: true, context: "Query tuning, index strategy, enterprise REST backend" },
        { name: "MongoDB", isPrimary: false, context: "NoSQL document storage, unstructured run logs" },
        { name: "Kafka Concepts", isPrimary: false, context: "Partitioning, streaming consumer offsets" },
        { name: "Idempotent Semantics", isPrimary: true, context: "Deduplication, dead-letter handling, retry backoff" }
      ]
    },
    {
      id: "ai-engineering",
      name: "AI Engineering & LLM Tooling",
      description: "Pragmatic developer-assist pipelines and HIPAA-compliant code automation",
      skills: [
        { name: "Custom LLM Agent Pipelines", isPrimary: true, context: "Browser session to production OOP module generation" },
        { name: "Responsible AI in SDLC", isPrimary: true, context: "PHI screening, credential sanitization, human validation" },
        { name: "Prompt & Spec Design", isPrimary: true, context: "Structured schema extraction, deterministic code outputs" },
        { name: "Daily AI Tooling", isPrimary: false, context: "Cursor, Claude Code, GitHub Copilot integration" },
        { name: "Automated Review Gates", isPrimary: true, context: "AST verification, pytest suites gating AI-generated PRs" }
      ]
    },
    {
      id: "frontend",
      name: "Frontend Development",
      description: "Interactive single-page apps, responsive design, and contract integration",
      skills: [
        { name: "ReactJS", isPrimary: true, context: "Functional components, custom hooks, context API" },
        { name: "State Management", isPrimary: true, context: "Predictable state, optimistic UI, memoization" },
        { name: "REST / JSON Integration", isPrimary: true, context: "Strict contract alignment, error boundary states" },
        { name: "Responsive UI & UX", isPrimary: true, context: "Mobile-first layouts, modern CSS tokens, dark mode" },
        { name: "DOM & Cross-Browser", isPrimary: false, context: "Event lifecycle, accessibility standards, blur & glass" }
      ]
    },
    {
      id: "reliability-security",
      name: "Reliability & Security",
      description: "Fault-tolerant architectures, compliance safeguards, and error hierarchies",
      skills: [
        { name: "Typed Error Classification", isPrimary: true, context: "Severity, retryability & automated remediation" },
        { name: "PHI Masking & HIPAA", isPrimary: true, context: "Zero patient data leakage at logging boundaries" },
        { name: "Retry & Backoff Patterns", isPrimary: true, context: "Exponential backoff with jitter, graceful degradation" },
        { name: "Secure Coding Standards", isPrimary: true, context: "Input sanitation, OWASP guidelines, secrets isolation" },
        { name: "2FA / OTP Extraction", isPrimary: true, context: "Watermark-based freshness, consume-once semantics" }
      ]
    },
    {
      id: "testing-practices",
      name: "Testing & Engineering Practices",
      description: "End-to-end SDLC discipline, test automation, and collaborative delivery",
      skills: [
        { name: "Playwright & Selenium", isPrimary: true, context: "Page Object Model, self-healing selectors" },
        { name: "Pytest & Unit Testing", isPrimary: true, context: "Parametrized testing, mocking, automated CI checks" },
        { name: "JUnit & Mockito", isPrimary: false, context: "Java test suites, dependency mocking" },
        { name: "Agile / Scrum SDLC", isPrimary: true, context: "Sprint planning, estimation, peer code reviews" },
        { name: "Technical Leadership", isPrimary: true, context: "Architecture conventions, junior mentoring, documentation" }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      id: "getcopayhelp",
      title: "Automation Platform Engineer",
      company: "GetCopayHelp",
      organizationDetail: "Kalki Safalya Consulting Services LLP",
      period: "May 2025 – Present",
      location: "Hybrid / Remote",
      type: "Full-Time",
      isCurrent: true,
      overview: "Technical owner and primary author (73% of platform commits) of the production platform executing US healthcare copay-assistance, claims submission, and revenue-cycle workflows across 40+ payer portals under strict HIPAA controls.",
      bulletPoints: [
        "AI-Assisted Development Pipeline: Engineered roughly 2,100 lines of custom LLM agent tooling that translates recorded browser sessions into framework-compliant production modules — selecting base classes, wiring queue registrations, configuring API routing, and enforcing review rules — reducing new-portal onboarding from days to hours.",
        "Responsible AI in the SDLC: Leveraged AI coding assistants daily for code generation, refactoring, test suites, and documentation, ensuring every generated output is gated by peer code reviews, automated CI tests, and strict data-sensitivity checks that completely prevent PHI or credentials in prompts.",
        "Event-Driven Microservices on AWS: Built a FastAPI service gateway that dispatches 100+ daily runs across 4 Celery/SQS queues into containerized AWS ECS worker pools sized by workload class, sustaining 500+ claim submissions weekly with horizontal autoscaling, idempotent retries, and workload isolation.",
        "Platform & Framework Architecture: Designed the shared OOP framework powering all 233 automation modules, modeling 8 distinct workflow types (enrollment, claim submission, claim retrieval, payment fetch, consent, waitlist, verification) as extensible base classes and replacing per-script duplication with a clean modular core.",
        "API Design & System Integration: Owned the REST contracts between the orchestration gateway, worker services, and downstream billing/reporting systems, designing each change with explicit consideration for payer portals and downstream revenue-cycle systems.",
        "Application Resiliency: Built a typed error registry where retryability, severity, and remediation are properties of classified error types rather than ad-hoc call-site handling — cutting maintenance overhead by 30% and making cross-system failures observable and triageable.",
        "Third-Party Integration & 2FA: Designed a portal-agnostic email-OTP retrieval layer with watermark-based freshness and consume-once semantics, restoring automated login after payer portals migrated to Okta two-factor authentication.",
        "Secure SDLC & Compliance: Enforced PHI masking at the logging boundary through typed maskers and a logging filter so no service leaks patient data regardless of call site; shipped all changes via GitHub Actions CI/CD with automated quality gates.",
        "Data-Driven Prioritization: Analyzed run-outcome and error-class data across 100+ daily executions and 40+ portals to identify failure patterns, quantify impact, and prioritize engineering work against business throughput.",
        "Technical Leadership: Defined framework conventions all contributors build against, reviewed incoming pull requests for security and correctness, and onboarded new engineers onto platform architecture."
      ],
      technologies: ["Python", "FastAPI", "AWS ECS", "AWS SQS", "Celery", "Docker", "Playwright", "LLM Tooling", "PostgreSQL", "GitHub Actions", "HIPAA/PHI"]
    },
    {
      id: "aspire-systems",
      title: "Full Stack Developer (Intern)",
      company: "Aspire Systems",
      organizationDetail: "Enterprise Digital Services",
      period: "Nov 2024 – May 2025",
      location: "India",
      type: "Internship",
      isCurrent: false,
      overview: "Developed and optimized enterprise REST services, database query performance, and authenticated user flows integrated with modern ReactJS interfaces within large-scale Agile sprints.",
      bulletPoints: [
        "Built and optimized 12+ REST endpoints using Django REST Framework and MySQL, improving query response times by 20% for enterprise applications.",
        "Integrated backend services with ReactJS front ends, working through JSON contracts, error states, and authenticated requests alongside the UI team.",
        "Implemented OAuth 2.0 authentication flows (including Google OAuth) onboarding 200+ internal users; automated API documentation with Swagger/OpenAPI.",
        "Delivered in two-week Agile sprints within a large corporate engineering environment — story estimation, peer code review, and defect triage across the full SDLC."
      ],
      technologies: ["Django REST Framework", "Python", "ReactJS", "MySQL", "OAuth 2.0", "Google OAuth", "Swagger", "Agile/Scrum"]
    },
    {
      id: "freelance-automation",
      title: "Freelance Python Developer (Automation)",
      company: "Self-Employed",
      organizationDetail: "Client Engagements",
      period: "May 2024 – Nov 2024",
      location: "Remote",
      type: "Contract",
      isCurrent: false,
      overview: "Delivered custom automation frameworks and web scraping solutions for clients, transforming unstable legacy scripts into maintainable, modular test architectures.",
      bulletPoints: [
        "Legacy Framework Migration: Restructured 30+ legacy Selenium scripts into a modular Page Object Model (POM) framework, reducing script failure rates by 50%.",
        "Client Collaboration: Worked directly with clients to gather requirements, scope deliverables, present technical trade-offs, and deliver and support each engagement end-to-end."
      ],
      technologies: ["Python", "Selenium", "Page Object Model", "Web Automation", "Data Extraction"]
    }
  ] as ExperienceItem[],

  featuredSystems: [
    {
      id: "healthcare-copay-platform",
      title: "Healthcare Copay & Claims Orchestration Platform",
      subtitle: "Event-driven distributed workload engine managing 233 automation modules across 40+ payer portals",
      category: "distributed",
      summary: "Production platform powering US healthcare copay-assistance, claims submission, and revenue-cycle workflows. Orchestrated via FastAPI gateway, Celery, and AWS SQS into containerized ECS worker pools under strict HIPAA controls.",
      architectureHighlights: [
        "Shared OOP framework modeling 8 workflow types (enrollment, claim submission, retrieval, payment fetch, consent, waitlist, verification)",
        "FastAPI service gateway routing 100+ daily runs across 4 priority SQS queues",
        "Containerized AWS ECS worker pools sized by workload class with horizontal scaling",
        "Typed error registry with automatic severity classification and exponential retry backoff",
        "PHI masking at the logging boundary through typed maskers preventing patient data leaks"
      ],
      problemSolved: "Manual portal onboarding was slow, prone to code duplication across 40+ different insurance portals, and fragile under frequent portal UI changes and Okta 2FA migrations.",
      technologies: ["Python", "FastAPI", "AWS ECS", "AWS SQS", "Celery", "Docker", "Playwright", "PostgreSQL", "GitHub Actions"],
      metrics: [
        { label: "Active Modules", value: "233" },
        { label: "Weekly Submissions", value: "500+" },
        { label: "Payer Portals", value: "40+" }
      ],
      featured: true
    },
    {
      id: "llm-agent-pipeline",
      title: "Autonomous Browser-to-Code LLM Agent Pipeline",
      subtitle: "In-house developer tooling translating recorded browser actions into framework-compliant OOP code",
      category: "ai-engineering",
      summary: "Custom 2,100-line LLM agent system that automates the creation of production automation modules from recorded browser sessions, collapsing portal onboarding from days to hours while strictly safeguarding sensitive healthcare data.",
      architectureHighlights: [
        "AST analysis and Page Object Model structure generation conforming to the core 8 base classes",
        "Automated queue registration, API routing wiring, and lint verification",
        "Mandatory data-sensitivity screening: Zero PHI or credentials allowed in prompts",
        "Automated pytest test suite generation for deterministic validation before human review"
      ],
      problemSolved: "Engineers spent days writing boilerplate DOM interaction logic for each new payer portal. The LLM agent generates standard-compliant code in minutes.",
      technologies: ["Python", "LLM APIs", "AST Analysis", "Page Object Model", "Pytest", "Regex / Parsers"],
      metrics: [
        { label: "Tooling Code", value: "2,100 LoC" },
        { label: "Onboarding Time", value: "Days → Hours" },
        { label: "PHI Leakage", value: "0%" }
      ],
      featured: true
    },
    {
      id: "resilience-typed-error-registry",
      title: "Resilience Engine & Typed Error Classification Registry",
      subtitle: "Systematic fault tolerance and observability layer across distributed automation workers",
      category: "distributed",
      summary: "Eliminated ad-hoc call-site exception handling by turning retryability, severity, and remediation steps into first-class properties of classified error types across all 233 automation modules.",
      architectureHighlights: [
        "Hierarchical typed error classes categorizing portal transient failures, selector shifts, and auth expired states",
        "Configurable exponential backoff with jitter and dead-letter queue routing",
        "Centralized telemetry aggregating error occurrences by portal and error-class for data-driven sprint prioritization",
        "Cut ongoing engineering maintenance overhead by 30%"
      ],
      problemSolved: "Ad-hoc try/catch blocks across 200+ scripts resulted in unpredictable retries, unobservable failures, and high maintenance costs.",
      technologies: ["Python", "FastAPI", "AWS SQS DLQ", "CloudWatch", "Telemetry Design"],
      metrics: [
        { label: "Maintenance Drop", value: "30%" },
        { label: "Failure Visibility", value: "100%" }
      ],
      featured: true
    },
    {
      id: "watermarked-2fa-resolver",
      title: "Universal Watermarked Okta 2FA & Email-OTP Resolver",
      subtitle: "Portal-agnostic automated login recovery engine with consume-once semantics",
      category: "automation",
      summary: "Architected a reliable email-OTP retrieval system with watermark-based freshness and consume-once semantics to bypass automated login hurdles when payer portals enforced Okta two-factor authentication.",
      architectureHighlights: [
        "Watermark timestamp tracking to eliminate race conditions between stale and new verification emails",
        "Consume-once token semantics ensuring zero replay attempts across concurrent worker threads",
        "Portal-agnostic abstraction seamlessly integrated into the base authentication workflow"
      ],
      problemSolved: "Payer portals introducing mandatory 2FA broke automated pipelines; naive email scraping caused race conditions with stale verification codes.",
      technologies: ["Python", "IMAP/OAuth", "Concurrent Processing", "Security Protocols"],
      metrics: [
        { label: "Login Recovery", value: "100%" },
        { label: "Stale Token Errors", value: "0" }
      ],
      featured: false
    },
    {
      id: "enterprise-oauth-rest-services",
      title: "Enterprise OAuth 2.0 & High-Throughput REST Gateway",
      subtitle: "Enterprise REST endpoints with Google OAuth and React front-end integration",
      category: "fullstack",
      summary: "Architected and delivered 12+ optimized REST endpoints with Django REST Framework, integrating with ReactJS client interfaces and implementing Google OAuth 2.0 onboarding 200+ users.",
      architectureHighlights: [
        "Optimized complex SQL queries and serializers, achieving 20% latency reduction",
        "Seamless JSON contract design and state synchronization with ReactJS front end",
        "Automated interactive API documentation with Swagger/OpenAPI"
      ],
      problemSolved: "High endpoint latency and cumbersome manual user onboarding across enterprise teams.",
      technologies: ["Django REST Framework", "Python", "ReactJS", "MySQL", "OAuth 2.0", "Swagger"],
      metrics: [
        { label: "Query Speedup", value: "+20%" },
        { label: "Onboarded Users", value: "200+" }
      ],
      featured: false
    }
  ] as ProjectSystem[],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institution: "Christ College of Engineering",
      score: "7.85 CGPA",
      highlights: [
        "Core foundational focus on Data Structures, Algorithms, Distributed Computing, Object-Oriented Software Design, and Database Management Systems",
        "Hands-on engineering projects in full-stack web architectures and automated data processing"
      ]
    }
  ] as EducationItem[],

  engineeringPrinciples: [
    {
      title: "End-to-End System Ownership",
      description: "From data schema design and API contracts to distributed queue execution and front-end interface integration, owning every layer ensures zero friction and high delivery velocity."
    },
    {
      title: "Resilience Over Assumptions",
      description: "Distributed networks and third-party portals will fail. Building typed error classifications, exponential backoff, idempotent retries, and circuit breakers makes failure predictable and recoverable."
    },
    {
      title: "Responsible, Human-Gated AI",
      description: "AI dramatically accelerates development when paired with strict guardrails: zero PHI or sensitive credentials in prompts, AST validation, automated test suites, and mandatory peer review before merge."
    },
    {
      title: "Compliance & Security by Design",
      description: "In regulated domains like healthcare, security is non-negotiable. PHI masking at the logging boundary, least-privilege IAM roles, and automated CI/CD security gates protect patient privacy."
    }
  ]
}
