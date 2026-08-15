export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  period: string;
  institution: string;
  role: string;
  problem: string;
  context: string;
  users: string[];
  businessObjective: string;
  requirements: string[];
  systemApproach: string;
  architectureNodes: { name: string; desc: string; iconName: string }[];
  techStack: string[];
  keyDecisions: string[];
  risksConstraints: string[];
  implementationHighlights: string[];
  outcome: string;
  lessonsLearned: string;
  managementPerspective?: {
    title: string;
    points: { label: string; detail: string }[];
  };
  aiPerspective?: {
    title: string;
    points: { label: string; detail: string }[];
  };
  whyItMattersMgmt?: {
    title: string;
    points: { label: string; detail: string }[];
  };
}

export interface LifecycleStage {
  id: string;
  step: string;
  name: string;
  objective: string;
  questions: string[];
  outputs: string[];
  experienceContext: string;
}

export interface RiskCategory {
  id: string;
  category: string;
  description: string;
  typicalRisks: string[];
  mitigationStrategy: string;
  monitoringApproach: string;
}

export interface StakeholderGroup {
  id: string;
  role: string;
  focusArea: string;
  primaryQuestions: string[];
  communicationStrategy: string;
  keyDeliverable: string;
}

export interface ArchitectureModel {
  id: string;
  title: string;
  description: string;
  nodes: {
    id: string;
    label: string;
    type: 'client' | 'api' | 'logic' | 'data' | 'ai' | 'external';
    summary: string;
    details: string;
  }[];
  connections: { from: string; to: string; label: string }[];
}

export const PERSONAL_INFO = {
  name: 'Yosef Abire',
  eyebrow: 'INFORMATION SYSTEMS • TECHNOLOGY • AI',
  heroHeadline: 'Building technology systems that connect business, people, data, and decisions.',
  positioningTitle: 'Information Systems Professional & Technology Builder',
  heroSupportingText:
    'Information Systems professional and backend-heavy engineer focused on digital marketplaces, enterprise systems, AI-powered platforms, and data-intensive solutions.',
  location: 'Arba Minch, South Ethiopia Region, Ethiopia',
  phones: ['+251 984 909 329', '+251 957 425 458'],
  email: 'yosefabire@gmail.com', // standard format
  github: 'https://github.com/YosefAbire',
  linkedin: 'https://linkedin.com/in/yosefabire',
  education: {
    degree: 'Bachelor of Science in Information Systems',
    institution: 'Bahir Dar University',
    period: '2023–2026',
    status: 'Graduating 2026',
  },
  certification: {
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
  },
  languages: [
    { language: 'English', proficiency: 'Advanced' },
    { language: 'Amharic', proficiency: 'Fluent' },
    { language: 'Gamogna', proficiency: 'Fluent' },
  ],
  softSkills: [
    'Communication',
    'Problem Solving',
    'Time Management',
    'Adaptability',
    'Critical Thinking',
    'Analytical Mindset',
    'Cross-functional Collaboration',
    'Attention to Detail',
    'Team Collaboration',
  ],
  techStack: {
    backend: ['Python', 'Node.js', 'REST APIs', 'Scalable Backend Services'],
    frontend: ['TypeScript', 'JavaScript', 'Next.js', 'Nest.js'],
    data: ['PostgreSQL / Relational Databases', 'PostGIS', 'Database Design & Schema Optimization'],
    ai: ['Machine Learning Basics', 'LLM Evaluation & Alignment', 'Prompt Engineering', 'AI Data Pipelines'],
    engineering: ['Git', 'GitHub', 'Linux Environment', 'System Architecture'],
    geospatial: ['QGIS', 'PostGIS Spatial Analytics'],
  },
};

export const CAPABILITY_CARDS = [
  {
    number: '01',
    title: 'Systems Thinking',
    description: 'Understanding business processes and translating them into technology systems.',
    detail:
      'Analyzing operational workflows, user requirements, and data governance models to architect systems that directly support organizational goals.',
    iconName: 'Network',
  },
  {
    number: '02',
    title: 'Technology Delivery',
    description: 'Designing and implementing backend-heavy systems and APIs.',
    detail:
      'Building robust RESTful microservices, structured database schemas, and reliable integration pipelines that ensure high performance and system availability.',
    iconName: 'Server',
  },
  {
    number: '03',
    title: 'AI & Data',
    description: 'Building and evaluating AI-powered workflows and data pipelines.',
    detail:
      'Designing prompt architectures, evaluating LLM outputs for hallucination/bias, and developing AI agents that enhance marketplace decision-making.',
    iconName: 'Cpu',
  },
  {
    number: '04',
    title: 'Cross-functional Collaboration',
    description: 'Connecting technical implementation with stakeholder requirements.',
    detail:
      'Bridging technical language gaps between domain experts, administrative leadership, and software engineers to ensure seamless system adoption.',
    iconName: 'Users',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'agrogobeya',
    title: 'AgroGebeya — Digital Agricultural Marketplace',
    subtitle: 'A digital marketplace designed to connect farmers directly with retailers and improve agricultural market transparency.',
    tag: 'Digital Marketplace & AgTech',
    period: '2023–2026',
    institution: 'Bahir Dar University',
    role: 'Final Year Project Lead Developer & IS Architect',
    problem:
      'Fragmented agricultural market access in regional supply chains leads to heavy reliance on intermediaries, severe price opacity for rural farmers, and inventory spoilage for retailers.',
    context:
      'Agricultural producers in regional Ethiopia lack direct access to commercial retail buyers, resulting in depressed farmgate prices while urban retailers face unpredictable wholesale supply.',
    users: ['Smallholder Farmers', 'Agricultural Retailers', 'Wholesale Market Brokers'],
    businessObjective:
      'Establish a transparent digital commerce platform that eliminates unnecessary middleman margins, enables real-time price discovery, and streamlines order logistics.',
    requirements: [
      'Farmer produce listing management with quantity and grade verification',
      'Real-time market price tracking and trend visibility for major crops',
      'Retailer inventory management and bulk order processing',
      'Scalable Python backend REST APIs for mobile & web endpoints',
      'Relational database models enforcing transaction integrity',
    ],
    systemApproach:
      'Architected a modular backend API service paired with a clean relational database. Modeled transaction states explicitly (Listing -> Offer -> Order -> Fulfillment) to guarantee data accuracy across low-bandwidth environments.',
    architectureNodes: [
      { name: 'Users', desc: 'Farmers & Retailers accessing mobile/web interfaces', iconName: 'Users' },
      { name: 'Frontend', desc: 'Responsive web application interface', iconName: 'Layout' },
      { name: 'REST API', desc: 'Python API Gateway & endpoint handlers', iconName: 'Route' },
      { name: 'Business Logic', desc: 'Price tracking, order matching & inventory engine', iconName: 'Cpu' },
      { name: 'PostgreSQL Layer', desc: 'Relational database enforcing data integrity', iconName: 'Database' },
      { name: 'Market Operations', desc: 'Fulfillment tracking & market analytics', iconName: 'CheckCircle' },
    ],
    techStack: ['Python', 'REST APIs', 'PostgreSQL', 'JavaScript', 'Database Design', 'Linux'],
    keyDecisions: [
      'Used Python backend services for efficient API development and seamless data analytics integration.',
      'Designed strict ACID-compliant transaction models for order processing to prevent double-booking of agricultural inventory.',
      'Structured price tracking data points chronologically to enable historical trend generation for rural traders.',
    ],
    risksConstraints: [
      'Constraint: Intermittent cellular connectivity in rural farming zones.',
      'Risk: User adoption resistance among non-tech-literate agricultural producers.',
      'Mitigation: Simplified data input schemas and cached price indicators for offline resilience.',
    ],
    implementationHighlights: [
      'Developed core REST API endpoints for user authentication, produce catalog, price telemetry, and order routing.',
      'Designed relational schema tables for users, farms, produce items, daily market prices, and order logs.',
      'Integrated real-time price aggregation logic calculating rolling average price per commodity.',
    ],
    outcome:
      'Delivered a fully functional prototype demonstrating direct farmer-to-retailer trade workflows, transparent market pricing, and automated inventory management.',
    lessonsLearned:
      'Domain understanding is paramount; technology solutions in agriculture must align tightly with existing physical trade behaviors and low-trust environments to succeed.',
    managementPerspective: {
      title: 'Management Perspective — Requirements & System Alignment',
      points: [
        { label: 'Requirements Engineering', detail: 'Conducted field requirement gathering to capture the exact workflow of farmgate sales versus retail bulk buying.' },
        { label: 'Stakeholder Needs', detail: 'Balanced simple mobile-friendly interactions for farmers with multi-item inventory management for commercial retailers.' },
        { label: 'Business Workflow', detail: 'Mapped supply chain stages from harvest declaration to payment clearance, creating explicit digital checkpoints.' },
        { label: 'Data Ownership & Privacy', detail: 'Structured vendor data controls so individual harvest forecasts remain confidential until listed.' },
        { label: 'Scalability Considerations', detail: 'Engineered stateless backend API routes allowing horizontal scaling as regional transaction volumes grow.' },
      ],
    },
  },
  {
    id: 'hr-management-system',
    title: 'HR Management System — Gamo Development Association',
    subtitle: 'An enterprise information system designed for streamlined employee data management, attendance tracking, and reporting.',
    tag: 'Enterprise Information Systems',
    period: '2025–2026',
    institution: 'Gamo Development Association',
    role: 'Internship / Systems Analyst & Backend Developer',
    problem:
      'Manual, paper-based HR recordkeeping created administrative bottlenecks, accurate attendance tracking failures, and delayed monthly reporting for organizational leadership.',
    context:
      'Gamo Development Association required a centralized digital HR system to maintain comprehensive employee records across departments and produce verifiable operational reports.',
    users: ['HR Administrators', 'Department Managers', 'Executive Leadership', 'Association Employees'],
    businessObjective:
      'Digitize end-to-end HR operations to reduce administrative overhead, ensure accurate attendance audit trails, and enable instant executive reporting.',
    requirements: [
      'Centralized digital employee record database (personal, departmental, salary, and contract details)',
      'Automated daily attendance recording and leave management workflow',
      'Role-based access control (RBAC) separating administrative actions from department views',
      'Automated report generation module producing PDF/CSV export for executive review',
      'Relational database schema enforcing normalization and data integrity',
    ],
    systemApproach:
      'Gathered business requirements directly from administrative stakeholders, mapped existing HR operational workflows, and implemented a structured relational database with robust backend API services.',
    architectureNodes: [
      { name: 'Stakeholders', desc: 'HR Leads & Department Managers', iconName: 'UserCheck' },
      { name: 'Requirements', desc: 'Formalized operational workflows & RBAC policies', iconName: 'FileText' },
      { name: 'Business Processes', desc: 'Attendance verification & leave authorization engine', iconName: 'Workflow' },
      { name: 'System Functions', desc: 'Backend application logic & reporting service', iconName: 'Server' },
      { name: 'Database Layer', desc: 'Normalized relational database (Employee, HR Records)', iconName: 'Database' },
      { name: 'Reports / Operations', desc: 'Automated executive dashboards & compliance summaries', iconName: 'BarChart' },
    ],
    techStack: ['Python', 'Node.js', 'REST APIs', 'Relational Databases', 'System Architecture', 'Stakeholder Requirements'],
    keyDecisions: [
      'Normalized HR database schemas to 3NF to eliminate duplicate record storage across departmental transfers.',
      'Implemented automated reporting queries to replace weekly manual spreadsheet calculations.',
      'Designed intuitive data collection forms reflecting physical paper forms to minimize training time for administrative staff.',
    ],
    risksConstraints: [
      'Constraint: strict data privacy requirements regarding personal employee records.',
      'Risk: Transition friction from legacy paper logs to digital attendance modules.',
      'Mitigation: Conducted iterative user testing and validation sessions with HR administrative staff.',
    ],
    implementationHighlights: [
      'Developed core backend services for employee profile CRUD operations and leave request routing.',
      'Created automated reporting SQL scripts compiling attendance compliance and leave balances.',
      'Collaborated closely with non-technical department heads to align software terminology with internal policies.',
    ],
    outcome:
      'Successfully digitized organizational HR workflows, streamlined administrative processing time, and eliminated paper record loss.',
    lessonsLearned:
      'Technology systems are successful when technical functionality reflects the real operational processes of the organization.',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform — Backend & Integration',
    subtitle: 'A high-reliability e-commerce backend supporting product catalog listings, transaction workflows, and REST API integration.',
    tag: 'Backend Architecture & API Design',
    period: '2025–2026',
    institution: 'Bahir Dar University',
    role: 'Personal Project / Backend Architect',
    problem:
      'Inconsistent order processing, unoptimized database queries, and fragile API contracts lead to cart drop-offs and data inconsistencies during peak checkout flows.',
    context:
      'Modern digital commerce platforms demand decoupled API architectures where backend microservices reliably manage inventory states, cart sessions, and payment authorization.',
    users: ['Online Shoppers', 'Store Operations Team', 'Platform Administrators'],
    businessObjective:
      'Build a robust, highly reliable backend architecture capable of handling full transaction lifecycles with strict data consistency and fast API response times.',
    requirements: [
      'RESTful API endpoints for user authentication, product catalog, cart, and checkout',
      'Relational database schemas for users, products, categories, orders, and order items',
      'Transaction state management handling payment processing and inventory reservation',
      'Decoupled frontend/backend communication using structured JSON contracts',
      'Backend performance optimization to ensure high system reliability',
    ],
    systemApproach:
      'Designed a modular REST API architecture using Node.js / Nest.js concepts and Python micro-components. Enforced separation of concerns between HTTP presentation, business services, and database persistence.',
    architectureNodes: [
      { name: 'Frontend App', desc: 'Next.js / TypeScript client application', iconName: 'Monitor' },
      { name: 'REST APIs', desc: 'API Gateway handling auth, validation & rate limiting', iconName: 'Globe' },
      { name: 'Business Services', desc: 'Catalog, Cart, Payment & Order fulfillment modules', iconName: 'Cpu' },
      { name: 'Database Layer', desc: 'Relational schema enforcing foreign key integrity', iconName: 'Database' },
      { name: 'Order Workflow', desc: 'Transaction state machine (Pending -> Paid -> Shipped)', iconName: 'ShoppingBag' },
    ],
    techStack: ['Node.js', 'Nest.js', 'TypeScript', 'REST APIs', 'PostgreSQL', 'Database Schemas'],
    keyDecisions: [
      'Enforced explicit relational schema constraints to guarantee order items remain linked to snapshot product pricing.',
      'Adopted standardized JSON API response specifications for predictable frontend consumption.',
      'Implemented database transaction blocks around checkout operations to prevent inventory race conditions.',
    ],
    risksConstraints: [
      'Constraint: Maintaining low latency on multi-table JOIN operations for catalog filtering.',
      'Risk: Orphaned order records during dropped client connections during payment callbacks.',
      'Mitigation: Created database index strategies on foreign keys and implemented idempotent transaction handlers.',
    ],
    implementationHighlights: [
      'Implemented RESTful endpoints with comprehensive request validation and structured HTTP error handling.',
      'Designed 5 core relational tables with optimized index structures for fast catalog search.',
      'Collaborated on frontend integration to ensure smooth UI updates during asynchronous checkout flows.',
    ],
    outcome:
      'Created a clean, modular backend codebase demonstrating industry-standard API design, strict transaction handling, and scalable architectural patterns.',
    lessonsLearned:
      'Reliable systems depend on clean contract definitions between frontend interfaces and backend data layers.',
  },
  {
    id: 'marketplace-ai-agent',
    title: 'Marketplace AI Agent',
    subtitle: 'AI-powered decision support for marketplace discovery, intelligent product search, and automated recommendations.',
    tag: 'AI Systems & Smart Workflows',
    period: '2025–2026',
    institution: 'Bahir Dar University',
    role: 'Personal Project / AI Systems Developer',
    problem:
      'Standard keyword search in complex marketplaces fails to capture intent, causing user fatigue during product comparison across heterogeneous seller listings.',
    context:
      'Integrating artificial intelligence into e-commerce navigation transforms rigid category filtering into conversational, intent-aware decision support systems.',
    users: ['Marketplace Buyers', 'Product Researchers', 'Category Managers'],
    businessObjective:
      'Develop an intelligent assistant capable of understanding natural language buyer criteria, filtering catalog data dynamically, and delivering personalized recommendations.',
    requirements: [
      'Natural language query parsing and intent extraction module',
      'Intelligent product search, filtering, and cross-item feature comparison algorithms',
      'Automated recommendation pipeline combining user preferences with inventory data',
      'Backend REST APIs linking the AI reasoning module to marketplace catalog services',
      'Data processing pipelines for catalog ingestion and attribute extraction',
    ],
    systemApproach:
      'Engineered an AI agent backend service that receives user queries, processes intent via LLM logic, executes contextual data queries against marketplace APIs, and formats structured recommendation responses.',
    architectureNodes: [
      { name: 'User Query', desc: 'Conversational input or filtered search criteria', iconName: 'MessageSquare' },
      { name: 'AI Assistant', desc: 'Intent extractor & context processing module', iconName: 'Bot' },
      { name: 'Search & Rec Engine', desc: 'Filtering, ranking & feature comparison logic', iconName: 'Sliders' },
      { name: 'Data Pipelines', desc: 'Catalog ingestion & vector/attribute processing', iconName: 'GitBranch' },
      { name: 'Marketplace APIs', desc: 'REST endpoints connecting inventory data sources', iconName: 'Database' },
      { name: 'Product Decisions', desc: 'Structured recommendation output & comparative view', iconName: 'CheckSquare' },
    ],
    techStack: ['Python', 'Machine Learning Basics', 'REST APIs', 'TypeScript', 'Data Pipelines', 'System Architecture'],
    keyDecisions: [
      'Separated the AI reasoning component from the core catalog service to ensure system decoupling.',
      'Used structured JSON outputs from AI inference routines to populate UI comparison cards directly.',
      'Designed fallback search mechanisms to handle out-of-catalog query scenarios gracefully.',
    ],
    risksConstraints: [
      'Constraint: Response latency during complex multi-product inference tasks.',
      'Risk: Incorrect product attribute mapping during automated recommendation delivery.',
      'Mitigation: Implemented strict validation filters verifying stock status before displaying AI suggestions.',
    ],
    implementationHighlights: [
      'Built automated data pipelines parsing raw product specs into structured attribute tables.',
      'Implemented RESTful endpoints serving real-time AI recommendation payloads to frontend clients.',
      'Developed comparative visual card components highlighting price-to-spec ratios for buyers.',
    ],
    outcome:
      'Demonstrated significant improvement in product discovery efficiency and streamlined decision-making for complex marketplace catalogs.',
    lessonsLearned:
      'AI agents are most impactful when tightly integrated into existing data infrastructure with robust validation boundaries.',
    aiPerspective: {
      title: 'AI System Perspective — Decision Support Architecture',
      points: [
        { label: 'AI Integration', detail: 'Embedded machine learning logic into standard REST web services without disrupting core catalog throughput.' },
        { label: 'Data Processing Pipelines', detail: 'Built ETL routines cleaning raw product descriptions into normalized feature vectors.' },
        { label: 'User Interaction Design', detail: 'Created conversational interfaces that present complex comparative specs cleanly.' },
        { label: 'Decision Support', detail: 'Focused on assisting human decision-making rather than black-box automated purchasing.' },
        { label: 'System Integration', detail: 'Connected disparate data sources via standardized API contracts.' },
      ],
    },
  },
  {
    id: 'llm-training-evaluation',
    title: 'LLM Training & Evaluation',
    subtitle: 'AI quality control, instruction tuning dataset design, hallucination detection, and human-in-the-loop governance.',
    tag: 'AI Quality & Governance',
    period: '2026 (6 Months)',
    institution: 'Revelo (Remote Contract Role)',
    role: 'AI Data Specialist — LLM Training & Evaluation',
    problem:
      'Deploying Large Language Models into high-stakes enterprise environments carries severe risks of hallucination, toxic bias, reasoning breakdown, and factual inconsistency.',
    context:
      'Enterprise AI adoption requires rigorous quality evaluation methodologies, instruction dataset curation, and continuous human-in-the-loop (HITL) feedback to align model behaviors.',
    users: ['Enterprise AI Engineering Teams', 'Model Alignment Researchers', 'End Enterprise Users'],
    businessObjective:
      'Establish standardized evaluation protocols and benchmark datasets to detect failure modes, improve model reasoning accuracy, and ensure enterprise compliance.',
    requirements: [
      'Comprehensive output evaluation across reasoning, factual accuracy, and safety constraints',
      'Design of high-quality prompt-completion instruction datasets across diverse domains',
      'Systematic error analysis pinpointing hallucinations, bias, and instruction drift',
      'Implementation of human-in-the-loop (HITL) feedback loops for continuous model tuning',
      'Analysis of large-scale text datasets to improve instruction dataset diversity',
    ],
    systemApproach:
      'Applied systematic data specialist methodologies: constructed challenging test prompts, systematically categorized model failures, scored outputs against rigorous rubrics, and engineered high-signal training datasets.',
    architectureNodes: [
      { name: 'Raw Datasets', desc: 'Large-scale multi-domain text datasets', iconName: 'Files' },
      { name: 'Prompt & Instruction', desc: 'Curated instruction prompts & system instructions', iconName: 'Terminal' },
      { name: 'LLM Generation', desc: 'Model inference across candidate baseline models', iconName: 'Cpu' },
      { name: 'Evaluation Engine', desc: 'Rubric-based scoring across reasoning & alignment', iconName: 'Sliders' },
      { name: 'Error Analysis', desc: 'Hallucination, bias & inconsistency classification', iconName: 'AlertTriangle' },
      { name: 'HITL Feedback Loop', desc: 'Human refinement pipeline driving model improvement', iconName: 'RefreshCw' },
    ],
    techStack: ['LLM Evaluation', 'Prompt Design', 'Dataset Curation', 'Error Analysis', 'Hallucination Detection', 'Python', 'Data Quality'],
    keyDecisions: [
      'Created standardized error taxonomies categorizing failures into factual, logical, and formatting errors.',
      'Designed multi-step reasoning prompts requiring explicit intermediate steps to isolate logical breaks.',
      'Prioritized edge-case instruction samples to maximize model generalization performance per training sample.',
    ],
    risksConstraints: [
      'Constraint: Subjective variability in human alignment evaluation.',
      'Risk: Overfitting models to narrow prompt formats at the expense of general reasoning capability.',
      'Mitigation: Developed objective multi-judge scoring rubrics and diverse domain prompt distribution.',
    ],
    implementationHighlights: [
      'Evaluated and refined thousands of complex LLM response pairs across technical and analytical domains.',
      'Designed high-signal instruction datasets for supervised fine-tuning and alignment benchmarking.',
      'Conducted deep error analysis detecting subtle hallucinations and instruction non-compliance.',
    ],
    outcome:
      'Contributed to measurable improvements in LLM reasoning precision, reduced hallucination rates, and established robust evaluation pipelines for enterprise model training.',
    lessonsLearned:
      'AI system quality is fundamentally a data engineering and governance problem; garbage in guarantees failure out.',
    whyItMattersMgmt: {
      title: 'Why This Matters for Technology Management',
      points: [
        { label: 'Evaluation Frameworks', detail: 'Technology managers must establish quantitative benchmarks before deploying non-deterministic AI into production.' },
        { label: 'Quality Controls', detail: 'Rigorous data quality audits prevent costly production failures and reputational risk.' },
        { label: 'Data Governance', detail: 'Managing intellectual property and data lineage is essential for compliant AI systems.' },
        { label: 'Human Oversight (HITL)', detail: 'Designing effective human-in-the-loop workflows ensures human accountability over automated outputs.' },
        { label: 'Continuous Improvement', detail: 'AI lifecycle management requires perpetual monitoring, error feedback, and dataset iteration.' },
      ],
    },
  },
];

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    id: 'discover',
    step: '01',
    name: 'DISCOVER',
    objective: 'Uncover the underlying operational problem, business drivers, and organizational constraints.',
    questions: [
      'What core business problem are we attempting to solve?',
      'Who are the primary end users and administrative stakeholders?',
      'What operational constraints (budget, timeline, legacy systems) exist?',
      'What does measurable success look like for the business?',
    ],
    outputs: ['Problem Statement Document', 'Stakeholder Map', 'High-level Business Objectives', 'Feasibility Summary'],
    experienceContext: 'Applied during initial stakeholder interviews for the Gamo HR System to identify manual bottlenecks.',
  },
  {
    id: 'define',
    step: '02',
    name: 'DEFINE',
    objective: 'Translate raw stakeholder expectations into formal system specifications and scope boundaries.',
    questions: [
      'What are the explicit functional and non-functional requirements?',
      'Which process workflows must be digitized first?',
      'What data attributes are essential versus nice-to-have?',
      'Where do system security and access control boundaries lie?',
    ],
    outputs: ['Functional Requirements Specification (FRS)', 'Use Case Scenarios', 'Data Governance Policy', 'Scope Matrix'],
    experienceContext: 'Formulated the user listing and pricing discovery specifications for AgroGebeya.',
  },
  {
    id: 'plan',
    step: '03',
    name: 'PLAN',
    objective: 'Structure execution timelines, component dependencies, resource allocations, and risk management plans.',
    questions: [
      'How do we decompose the system into independent delivery modules?',
      'What technical dependencies exist between data layers and APIs?',
      'What critical paths impact project delivery milestones?',
      'How will risks be escalated and mitigated during development?',
    ],
    outputs: ['Project Work Breakdown Structure (WBS)', 'Dependency Graph', 'Risk Management Matrix', 'Delivery Timeline'],
    experienceContext: 'Structured sprint modules for backend API construction in the E-commerce platform project.',
  },
  {
    id: 'design',
    step: '04',
    name: 'DESIGN',
    objective: 'Architect scalable data structures, API contracts, domain logic, and user interfaces.',
    questions: [
      'What relational database schemas ensure 3NF data integrity?',
      'How should REST APIs be structured for low-latency client consumption?',
      'What security boundaries protect sensitive data endpoints?',
      'How will frontend interfaces interact with backend state machines?',
    ],
    outputs: ['Entity-Relationship Diagrams (ERD)', 'REST API Specification', 'System Architecture Diagram', 'UI Mockups'],
    experienceContext: 'Designed the relational ERD schema and API specs for the Gamo HR Management System.',
  },
  {
    id: 'build',
    step: '05',
    name: 'BUILD',
    objective: 'Implement clean, maintainable backend services, database scripts, and integrated application code.',
    questions: [
      'Are coding standards, modular design patterns, and clean code practices enforced?',
      'Are API endpoints properly validated against malformed requests?',
      'How are database migrations and environment configs managed?',
      'Is cross-functional developer collaboration proceeding smoothly?',
    ],
    outputs: ['Production Application Codebase', 'API Endpoint Documentation', 'Database Migration Scripts', 'Build Logs'],
    experienceContext: 'Constructed Python & Node.js REST services and SQL database layers across all core projects.',
  },
  {
    id: 'test',
    step: '06',
    name: 'TEST',
    objective: 'Validate functional compliance, data integrity, system performance, and edge-case resilience.',
    questions: [
      'Does the system satisfy all documented acceptance criteria?',
      'How does the data layer perform under concurrency and invalid inputs?',
      'Are edge cases and security vulnerabilities handled cleanly?',
      'Have stakeholders validated functional prototypes in staging?',
    ],
    outputs: ['Test Execution Logs', 'Bug Tracking & Resolution Matrix', 'User Acceptance Testing (UAT) Sign-off'],
    experienceContext: 'Evaluated model outputs for LLM Training/Evaluation & tested transaction states in E-commerce.',
  },
  {
    id: 'deploy',
    step: '07',
    name: 'DEPLOY',
    objective: 'Release validated system builds into operational environments safely with rollback plans.',
    questions: [
      'Is the production infrastructure provisioned and secured properly?',
      'What database seed scripts and configuration flags are required?',
      'What is the rollback procedure if deployment anomalies occur?',
      'Are system monitoring tools capturing live API health metrics?',
    ],
    outputs: ['Deployment Runbook', 'Production Release Build', 'Environment Configuration Checklist', 'Health Metrics'],
    experienceContext: 'Configured Linux environments and database seeds for digital marketplace deployment.',
  },
  {
    id: 'measure',
    step: '08',
    name: 'MEASURE',
    objective: 'Monitor operational telemetry, user adoption, system latency, and business impact metrics.',
    questions: [
      'Is the system meeting target performance SLA expectations?',
      'Are end users adopting digital workflows effectively?',
      'Where are operational bottlenecks or API latencies accumulating?',
      'What measurable business value has been unlocked?',
    ],
    outputs: ['System Telemetry Dashboard', 'User Adoption Report', 'SLA Performance Review', 'Business Impact Log'],
    experienceContext: 'Monitored automated report generation speeds and data retrieval latency in HR systems.',
  },
  {
    id: 'improve',
    step: '09',
    name: 'IMPROVE',
    objective: 'Iterate on system features based on empirical usage data, error feedback, and evolving user needs.',
    questions: [
      'What post-deployment feature enhancements deliver highest ROI?',
      'How can data schemas be optimized for expanding user scale?',
      'What user feedback points highlight UX friction?',
      'How will upcoming technology upgrades be integrated seamlessly?',
    ],
    outputs: ['Feature Enhancement Roadmap', 'System Refactoring Plan', 'Lessons Learned Repository'],
    experienceContext: 'Applied continuous human-in-the-loop feedback loops for LLM instruction model optimization.',
  },
];

export const RISK_CATEGORIES: RiskCategory[] = [
  {
    id: 'technical',
    category: 'Technical Risk',
    description: 'System architectural limits, API latency spikes, technology stack mismatches, or unexpected framework breaking changes.',
    typicalRisks: ['API latency bottlenecks under database JOIN loads', 'Unanticipated third-party dependency deprecation', 'Decoupled API state desynchronization'],
    mitigationStrategy: 'Enforce modular system boundaries, conduct early API benchmarking, and maintain fallback offline caching.',
    monitoringApproach: 'Monitor API response execution times, error rates, and server resource usage in staging.',
  },
  {
    id: 'data',
    category: 'Data & Schema Risk',
    description: 'Data corruption, schema desynchronization, incomplete transactions, or missing relational audit constraints.',
    typicalRisks: ['Orphaned transaction records during network drops', 'Duplicate record entries from unnormalized schemas', 'Data type truncation in migration scripts'],
    mitigationStrategy: 'Enforce 3NF relational schemas, implement strict foreign key integrity, and wrap checkout steps in ACID transaction blocks.',
    monitoringApproach: 'Automate weekly database integrity checks and query constraint validation scripts.',
  },
  {
    id: 'security',
    category: 'Security Risk',
    description: 'Unauthorized access to administrative endpoints, sensitive data leakage, or unvalidated API payloads.',
    typicalRisks: ['Insufficient Role-Based Access Control (RBAC)', 'Unsanitized user inputs causing injection vulnerability', 'Exposed environment variables or API keys'],
    mitigationStrategy: 'Implement strict payload validation layers, RBAC policies on REST endpoints, and environment variable isolation.',
    monitoringApproach: 'Perform static input validation checks and enforce strict authorization header verification on all routes.',
  },
  {
    id: 'schedule',
    category: 'Schedule Risk',
    description: 'Timeline slippage caused by scope creep, shifting stakeholder priorities, or under-estimated component complexity.',
    typicalRisks: ['Unplanned feature requests mid-sprint', 'Bottlenecks during complex database migration tasks', 'Delayed feedback from non-technical stakeholders'],
    mitigationStrategy: 'Decompose projects into modular 2-week deliverables, freeze core requirements early, and maintain explicit WBS tracking.',
    monitoringApproach: 'Review weekly milestone burndown graphs and flag blocking dependencies early.',
  },
  {
    id: 'dependencies',
    category: 'Dependency Risk',
    description: 'Third-party service outages, cross-team blockers, or hardware/network infrastructure limitations.',
    typicalRisks: ['Intermittent rural cellular connectivity', 'Delayed API integrations from external vendors', 'Uncertain infrastructure provisioning'],
    mitigationStrategy: 'Design asynchronous queue patterns, build mock API services for testing, and maintain localized data caches.',
    monitoringApproach: 'Log external service latency and establish graceful fallback handlers when external calls fail.',
  },
  {
    id: 'requirements',
    category: 'Requirements Risk',
    description: 'Misinterpretation of business processes, vague stakeholder expectations, or misalignment between UI and operational reality.',
    typicalRisks: ['Building features that conflict with administrative rules', 'Over-engineering software beyond operational needs', 'Inadequate workflow definition during discovery'],
    mitigationStrategy: 'Conduct structured discovery workshops, formalize use case specifications, and validate interactive prototypes early with end users.',
    monitoringApproach: 'Obtain written UAT sign-offs at each major phase gate before commencing backend construction.',
  },
  {
    id: 'operations',
    category: 'Operational Risk',
    description: 'Low user adoption, inadequate administrative training, or lack of maintenance documentation post-handoff.',
    typicalRisks: ['Administrative staff reverting to manual paper logs', 'System downtime during peak operational hours', 'Lack of troubleshooting documentation'],
    mitigationStrategy: 'Design simple intuitive UI workflows mirroring paper forms, provide comprehensive user documentation, and deliver hands-on training sessions.',
    monitoringApproach: 'Track active user logins, feature usage analytics, and administrative support ticket rates.',
  },
];

export const STAKEHOLDER_GROUPS: StakeholderGroup[] = [
  {
    id: 'executive',
    role: 'Executive Leadership (CTOs, CIOs, Directors)',
    focusArea: 'Strategic alignment, operational ROI, risk exposure, and milestone delivery dates.',
    primaryQuestions: [
      'How does this technology initiative advance our organizational strategy?',
      'What are the primary operational risks and mitigation plans?',
      'Is the project tracking on schedule and within budget boundaries?',
    ],
    communicationStrategy:
      'High-level executive dashboards, succinct risk matrices, strategic milestone updates, and clear decision recommendations.',
    keyDeliverable: 'Executive Summary Briefing & Strategic System Roadmap',
  },
  {
    id: 'business',
    role: 'Business Unit Leads & Domain Experts',
    focusArea: 'Process automation, operational efficiency, reporting accuracy, and functional capability.',
    primaryQuestions: [
      'Will this system solve our daily operational bottlenecks?',
      'How will our team generate required weekly and monthly reports?',
      'How much training will our staff need to operate this system?',
    ],
    communicationStrategy:
      'Process workflow diagrams, clear non-technical function descriptions, functional prototype demonstrations, and collaborative feedback sessions.',
    keyDeliverable: 'Functional Requirements Specification & User Acceptance Criteria',
  },
  {
    id: 'operations',
    role: 'Operations & Administrative Staff',
    focusArea: 'Usability, task speed, data entry accuracy, and system reliability.',
    primaryQuestions: [
      'Is this system easier and faster to use than our existing manual log?',
      'What happens if I make an error during data entry?',
      'How do I view daily department records and attendance counts?',
    ],
    communicationStrategy:
      'Interactive walkthroughs, hands-on user acceptance sessions, step-by-step operational guides, and simplified data entry interfaces.',
    keyDeliverable: 'User Operations Guide & Interactive Prototypes',
  },
  {
    id: 'engineering',
    role: 'Software Engineers & Technical Leads',
    focusArea: 'Architecture purity, API contracts, database schemas, code maintainability, and scalability.',
    primaryQuestions: [
      'What are the exact REST API endpoint contracts and payload formats?',
      'How is database normalization structured across tables?',
      'What error codes and validation standards are expected?',
    ],
    communicationStrategy:
      'Detailed API documentation, ERD diagrams, Git branch management guidelines, clean code reviews, and explicit technical specifications.',
    keyDeliverable: 'API Technical Specification & Relational Schema ERD',
  },
  {
    id: 'data-ai',
    role: 'Data Specialists & AI Engineers',
    focusArea: 'Data pipeline hygiene, dataset quality, model evaluation rubrics, and error detection.',
    primaryQuestions: [
      'What is the distribution and quality of instruction tuning datasets?',
      'How are hallucination and bias metrics being benchmarked?',
      'How does human-in-the-loop feedback route back into fine-tuning?',
    ],
    communicationStrategy:
      'Structured error taxonomies, evaluation rubric spreadsheets, dataset summary distributions, and systematic benchmarking reports.',
    keyDeliverable: 'Model Benchmark Report & Dataset Curation Guidelines',
  },
  {
    id: 'users',
    role: 'End Users (Farmers, Retailers, Shoppers)',
    focusArea: 'Simplicity, speed, task completion, and offline accessibility.',
    primaryQuestions: [
      'Can I complete my transaction quickly on a low-end mobile device?',
      'Is product pricing accurate and easy to compare?',
      'Is my personal and listing data secure?',
    ],
    communicationStrategy:
      'Minimalist intuitive user interfaces, clear feedback notifications, fast page load times, and simple workflow steps.',
    keyDeliverable: 'Responsive Web/Mobile Application Interface',
  },
];

export const ARCHITECTURE_MODELS: ArchitectureModel[] = [
  {
    id: 'marketplace',
    title: 'Digital Agricultural Marketplace Architecture (AgroGebeya)',
    description: 'A decoupled multi-tier architecture connecting rural producer listing workflows with commercial retail order systems.',
    nodes: [
      { id: 'client', label: 'Client Layer', type: 'client', summary: 'Mobile & Web Frontends', details: 'Responsive UI tailored for farmers and bulk retail buyers.' },
      { id: 'gateway', label: 'API Gateway', type: 'api', summary: 'REST Endpoint Routing & Auth', details: 'Validates requests, manages JWT session auth, and enforces rate limits.' },
      { id: 'catalog', label: 'Produce Catalog Service', type: 'logic', summary: 'Listing & Grade Engine', details: 'Manages farmer produce submissions, location tags, and crop grading.' },
      { id: 'pricing', label: 'Price Analytics Service', type: 'logic', summary: 'Real-time Price Tracker', details: 'Calculates regional commodity price averages and chronological trend metrics.' },
      { id: 'orders', label: 'Order & Inventory Engine', type: 'logic', summary: 'ACID Transaction Manager', details: 'Processes purchase orders, updates stock availability, and manages reservation timeouts.' },
      { id: 'postgres', label: 'PostgreSQL Database', type: 'data', summary: 'Normalized Data Layer', details: 'Stores user accounts, farm attributes, listing tables, and audit logs.' },
    ],
    connections: [
      { from: 'client', to: 'gateway', label: 'HTTPS / JSON' },
      { from: 'gateway', to: 'catalog', label: 'Route: /listings' },
      { from: 'gateway', to: 'pricing', label: 'Route: /prices' },
      { from: 'gateway', to: 'orders', label: 'Route: /orders' },
      { from: 'catalog', to: 'postgres', label: 'SQL Read/Write' },
      { from: 'pricing', to: 'postgres', label: 'SQL Aggregations' },
      { from: 'orders', to: 'postgres', label: 'ACID Transactions' },
    ],
  },
  {
    id: 'hr-system',
    title: 'Enterprise HR Management System Architecture',
    description: 'Relational information system architecture managing employee records, daily attendance tracking, and automated reporting.',
    nodes: [
      { id: 'ui', label: 'Admin Dashboard', type: 'client', summary: 'HR & Executive Portal', details: 'Web portal for HR managers, department heads, and compliance officers.' },
      { id: 'auth', label: 'RBAC Access Controller', type: 'api', summary: 'Role-based Security', details: 'Enforces permission boundaries between department managers and HR directors.' },
      { id: 'employee-service', label: 'Employee Profile Service', type: 'logic', summary: 'Records & Contracts', details: 'Manages personal records, departmental transfers, and active contract states.' },
      { id: 'attendance-service', label: 'Attendance & Leave Engine', type: 'logic', summary: 'Time & Absence Tracker', details: 'Processes daily check-ins, leave authorizations, and balance calculations.' },
      { id: 'reporting-service', label: 'Automated Reporting Engine', type: 'logic', summary: 'PDF/CSV Compiler', details: 'Executes complex SQL aggregations to compile monthly executive compliance reports.' },
      { id: 'db', label: 'Relational HR Database', type: 'data', summary: '3NF Normalized Schema', details: 'Enforces relational constraints on employee IDs, department codes, and attendance logs.' },
    ],
    connections: [
      { from: 'ui', to: 'auth', label: 'Session Check' },
      { from: 'auth', to: 'employee-service', label: 'Authorized API Calls' },
      { from: 'auth', to: 'attendance-service', label: 'Authorized API Calls' },
      { from: 'auth', to: 'reporting-service', label: 'Executive Reports' },
      { from: 'employee-service', to: 'db', label: 'Relational Queries' },
      { from: 'attendance-service', to: 'db', label: 'Attendance Logs' },
      { from: 'reporting-service', to: 'db', label: 'Aggregate Queries' },
    ],
  },
  {
    id: 'ai-pipeline',
    title: 'LLM Evaluation & Alignment Architecture',
    description: 'Quality control pipeline for dataset curation, model benchmark inference, hallucination scoring, and human feedback loops.',
    nodes: [
      { id: 'datasets', label: 'Raw Dataset Repository', type: 'data', summary: 'Multi-domain Text Data', details: 'Unstructured and structured text datasets curated for evaluation.' },
      { id: 'prompt-curator', label: 'Instruction & Prompt Engine', type: 'logic', summary: 'Prompt Engineering', details: 'Constructs complex instruction-following test suites and domain benchmarks.' },
      { id: 'llm-infer', label: 'LLM Candidate Models', type: 'ai', summary: 'Model Inference API', details: 'Generates candidate outputs across multiple baseline and fine-tuned models.' },
      { id: 'eval-engine', label: 'Automated Scoring Engine', type: 'logic', summary: 'Rubric Evaluator', details: 'Scores outputs against factual, logical, and formatting rubric metrics.' },
      { id: 'error-taxonomy', label: 'Error Classifier', type: 'ai', summary: 'Hallucination & Bias Detector', details: 'Categorizes failures into hallucination, toxic bias, reasoning gap, or instruction drift.' },
      { id: 'hitl', label: 'Human-in-the-Loop Portal', type: 'client', summary: 'Human Feedback & Curation', details: 'Data specialists review, refine, and label edge-case model outputs for continuous tuning.' },
    ],
    connections: [
      { from: 'datasets', to: 'prompt-curator', label: 'Dataset Samples' },
      { from: 'prompt-curator', to: 'llm-infer', label: 'Instruction Prompts' },
      { from: 'llm-infer', to: 'eval-engine', label: 'Candidate Generations' },
      { from: 'eval-engine', to: 'error-taxonomy', label: 'Flagged Outputs' },
      { from: 'error-taxonomy', to: 'hitl', label: 'Categorized Errors' },
      { from: 'hitl', to: 'datasets', label: 'High-signal Fine-tuning Data' },
    ],
  },
];
