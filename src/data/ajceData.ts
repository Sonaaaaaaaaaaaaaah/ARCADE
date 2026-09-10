import { Hotspot, StatItem, JourneyStep, Milestone, AESModule, Programme, CampusZone, ClubItem, ResearchWing } from '../types';

export const HERO_HOTSPOTS: Hotspot[] = [
  {
    id: 'ai-hub',
    name: 'AI & GPU Hub',
    category: 'AI',
    x: 28,
    y: 36,
    title: 'Center for AI & Data Intelligence',
    description: 'High-performance NVIDIA GPU clusters powering computer vision, LLM fine-tuning, and edge AI student research.',
    stat: '14+ Active AI Patents & Projects',
    linkSection: 'research'
  },
  {
    id: 'research-center',
    name: 'Central Research Facility',
    category: 'RESEARCH',
    x: 48,
    y: 26,
    title: 'Interdisciplinary Research Labs',
    description: 'DST & BIRAC funded research facilities across nanotechnology, composite materials, clean energy, and biomedical devices.',
    stat: '₹12+ Cr External Grant Funding',
    linkSection: 'research'
  },
  {
    id: 'aes-suite',
    name: 'AES Software Engineering Hub',
    category: 'AES',
    x: 62,
    y: 45,
    title: 'Academic Enterprise Solutions (AES)',
    description: 'AJCE’s in-house software suite managing 100% of campus operations, built and maintained by our own faculty and student developers.',
    stat: '3,500+ Daily Active Users',
    linkSection: 'aes'
  },
  {
    id: 'tbi-valley',
    name: 'Startups Valley TBI',
    category: 'STARTUPS',
    x: 76,
    y: 38,
    title: 'Startups Valley & Bio-TBI',
    description: 'DST (Govt. of India) approved Technology Business Incubator with 95+ student-founded ventures, prototyping grants, and mentor access.',
    stat: '95+ Tech Startups Incubated',
    linkSection: 'innovation'
  },
  {
    id: 'i2u-incubator',
    name: 'I²U Innovation Sandbox',
    category: 'I²U',
    x: 38,
    y: 58,
    title: 'Idea to Usability (I²U) Initiative',
    description: 'Pioneered in 2006 to provide undergraduates seed funding, hardware fabrication tools, and patent filing support for early inventions.',
    stat: '₹2.5L Prototype Grants per Team',
    linkSection: 'innovation'
  },
  {
    id: 'campus-life-zone',
    name: '68-Acre Green Campus',
    category: 'CAMPUS LIFE',
    x: 58,
    y: 68,
    title: 'Eco-Systemic High-Range Living',
    description: '500kW rooftop solar grid, Radio 90FM studio, Olympic standard sports complex, and residential towers hosting 2,500+ students.',
    stat: '68 Acres in Western Ghats Foothills',
    linkSection: 'campus'
  }
];

export const AJCE_STATS: StatItem[] = [
  {
    value: 25,
    suffix: 'Years',
    label: 'Institutional Legacy',
    subtext: 'Pioneering technical education in Kerala since 2001',
    iconName: 'Award'
  },
  {
    value: 23,
    suffix: '',
    label: 'Accredited Programmes',
    subtext: 'B.Tech, M.Tech, MCA, BCA & Doctoral research tracks',
    iconName: 'GraduationCap'
  },
  {
    value: 3500,
    suffix: '+',
    label: 'Active Student Minds',
    subtext: 'Across 13 specialized engineering & tech disciplines',
    iconName: 'Users'
  },
  {
    value: 240,
    suffix: '+',
    label: 'Expert Faculty Members',
    subtext: 'Over 80+ holding Doctorates and industry patents',
    iconName: 'BookOpen'
  },
  {
    value: 95,
    suffix: '+',
    label: 'Ventures Incubated',
    subtext: 'Launched through Startups Valley TBI and IEDC',
    iconName: 'Rocket'
  },
  {
    value: 2,
    suffix: 'TBIs',
    label: 'Govt. Approved Incubators',
    subtext: 'DST Startups Valley TBI & BIRAC-supported Bio-TBI',
    iconName: 'Cpu'
  },
  {
    value: 68,
    suffix: 'Acres',
    label: 'Eco-Smart Campus',
    subtext: 'Powered by a 500kW green rooftop solar installation',
    iconName: 'Trees'
  },
  {
    value: 13,
    suffix: '',
    label: 'Academic Departments',
    subtext: 'Autonomous curriculum aligned with Industry 4.0',
    iconName: 'Layers'
  }
];

export const IDEA_TO_IMPACT_JOURNEY: JourneyStep[] = [
  {
    stepNumber: 1,
    label: 'IDEA',
    phase: 'Curiosity & Identification',
    tagline: 'Spotting real-world engineering problems in Year 1.',
    description: 'Every student participates in the First-Year Ideation Sprint. Faculty mentors and senior startup founders guide freshmen to transform observations into actionable problem statements.',
    ajceRole: 'Ideation Bootcamps & IEDC Problem Banks',
    realExample: 'Student team identified crop yield loss in Idukki spices, formulating a spectral IoT soil analyzer.'
  },
  {
    stepNumber: 2,
    label: 'I²U',
    phase: 'Idea to Usability Screening',
    tagline: 'Vetting technical feasibility and societal merit.',
    description: 'AJCE’s proprietary I²U framework tests technical viability. Selected ideas receive up to ₹25,000 initial micro-grants for initial components, literature mapping, and simulation modeling.',
    ajceRole: 'Internal Review Board & Seed Feasibility Fund',
    realExample: 'Algorithms validated on AJCE GPU clusters; simulation completed using in-house licensed MATLAB & Ansys suites.'
  },
  {
    stepNumber: 3,
    label: 'PROTOTYPE',
    phase: 'Rapid Hardware & Software Build',
    tagline: 'Transforming CAD models and code into tangible working hardware.',
    description: 'Teams gain 24/7 access to the FabLab, CNC machining center, 3D printing suites, and IoT development rigs. Mentors help build Minimum Viable Products within 90 days.',
    ajceRole: 'FabLab AJCE, Electronics Workbench & AI Workstations',
    realExample: 'Working drone chassis fabricated with localized telemetry modules and sensor arrays.'
  },
  {
    stepNumber: 4,
    label: 'MENTORSHIP',
    phase: 'Industry Guidance & Patenting',
    tagline: 'Refining code, security, commercial viability, and IPR.',
    description: 'Students collaborate with AJCE alumni working at Google, Microsoft, Bosch, and TCS, along with the college’s Intellectual Property Rights (IPR) Cell for patent filings.',
    ajceRole: 'Dedicated IPR Cell (50+ Patents Filed) & Corporate Mentors',
    realExample: 'Provisional patent drafted and filed under Indian Patent Office with 100% AJCE sponsorship.'
  },
  {
    stepNumber: 5,
    label: 'TBI / STARTUPS',
    phase: 'Company Incorporation & Incubation',
    tagline: 'Moving from student project to recognized enterprise.',
    description: 'Incorporation at Startups Valley TBI with formal DST seed funding (up to ₹10 Lakhs), dedicated office cabins, legal compliance assistance, and direct KSUM angel networks.',
    ajceRole: 'Startups Valley TBI + Bio-TBI Facilities',
    realExample: 'Ventures like SectorQube, AgroBot, and CarbonCapture began right inside the AJCE incubation block.'
  },
  {
    stepNumber: 6,
    label: 'IMPACT',
    phase: 'Market Deployment & Global Scale',
    tagline: 'Solving challenges for industry, agriculture, and citizens.',
    description: 'Products enter commercial production or open-source deployment. Founders graduate not as job seekers, but as job creators with high-value equity and global clientele.',
    ajceRole: 'Industry Scale-Up Partnerships & Export Linkages',
    realExample: 'AJCE-incubated medical and agriculture tech products currently deployed across 6 Indian states and exported abroad.'
  }
];

export const TIMELINE_MILESTONES: Milestone[] = [
  {
    year: '2001',
    title: 'Foundation of Excellence',
    category: 'ESTABLISHMENT',
    summary: 'Founded by the Catholic Diocese of Kanjirappally.',
    details: 'Amal Jyothi College of Engineering was established with a vision to create a world-class center of technical learning in rural Kerala, bridging high-end engineering with grassroots impact.',
    keyMetric: 'First 4 B.Tech disciplines introduced'
  },
  {
    year: '2006',
    title: 'Launch of I²U Innovation Initiative',
    category: 'INNOVATION',
    summary: 'Kerala’s first structured campus idea-to-usability model.',
    details: 'AJCE launched the revolutionary "Idea to Usability" (I²U) initiative, pioneering an institutional framework where undergraduate student projects receive systematic prototyping funding and patenting support.',
    keyMetric: '100% Student Project Incubation'
  },
  {
    year: '2009',
    title: 'National IEDC Recognition',
    category: 'ENTREPRENEURSHIP',
    summary: 'Accreditation by National Science & Technology Board.',
    details: 'Formal recognition of the Innovation and Entrepreneurship Development Centre (IEDC) by the Department of Science and Technology (DST), Govt. of India, accelerating student venture funding.',
    keyMetric: 'First DST grants received'
  },
  {
    year: '2015',
    title: 'Startups Valley TBI Inauguration',
    category: 'INCUBATION',
    summary: 'Multi-crore Technology Business Incubator approved by DST.',
    details: 'AJCE became the first engineering college in Kerala to establish a full-fledged Technology Business Incubator with direct funding from DST, Government of India. Over 25,000 sq.ft of co-working space established.',
    keyMetric: '₹3.5+ Cr Infrastructure Grant'
  },
  {
    year: '2017',
    title: 'Green Campus & Radio 90FM',
    category: 'CAMPUS MILESTONE',
    summary: '500kW Solar Installation & Kerala’s 1st Campus Community Radio.',
    details: 'Amal Jyothi became one of the largest self-powered green educational campuses in South India with a 500kW solar grid. Concurrently, Radio 90FM was launched as a licensed community broadcast station.',
    keyMetric: '500kW Clean Energy Generated'
  },
  {
    year: '2023',
    title: 'Autonomous Status & NAAC A+',
    category: 'ACCREDITATION',
    summary: 'Conferred Autonomous Institution Status by UGC & KTU.',
    details: 'Empowered with academic autonomy, enabling AJCE to craft a future-proof, industry-integrated curriculum tailored to emerging tech paradigms while upholding NAAC A+ accreditation standards.',
    keyMetric: 'Autonomous Academic Freedom'
  },
  {
    year: '2024',
    title: 'Cyber Security & Advanced AI Thrust',
    category: 'FUTURE COMPUTING',
    summary: 'Specialized Cyber Defense labs and advanced micro-credentials.',
    details: 'Introduction of dedicated B.Tech in Cyber Security and AI & Data Science specializations with cyber-range simulation ranges and enterprise cloud security alliances.',
    keyMetric: 'State-of-the-art Cyber Range'
  },
  {
    year: '2026',
    title: 'Autonomous AI Curriculum & Global Research',
    category: 'VISION 2026',
    summary: 'Next-generation integrated AI labs and dual-degree pathways.',
    details: 'Celebrating 25 years of relentless pursuit of engineering brilliance with quantum computing modules, autonomous robotics centers, and international academic credit-transfer agreements.',
    keyMetric: '25 Years of Transformative Impact'
  }
];

export const AES_MODULES: AESModule[] = [
  {
    id: 'campus-mgmt',
    title: 'Campus Management & ERP',
    tag: 'Core Operations',
    description: 'Centralized administrative engine coordinating academic schedules, automated attendance tracking via biometric & mobile beacons, and fee structures for 3,500+ students.',
    features: ['Biometric & Beacon Attendance', 'Automated Faculty Workload Distribution', 'Multi-tiered Digital Hall Tickets', 'Parent Real-time Notification Bot'],
    systemMetric: '99.98% Uptime across 12,000 requests/min',
    techStack: 'Distributed Microservices / PostgreSQL / Redis'
  },
  {
    id: 'cloud-storage',
    title: 'Enterprise Cloud Vaults',
    tag: 'Digital Infrastructure',
    description: 'Private high-speed campus cloud repository providing every student and researcher encrypted storage for datasets, code repositories, CAD files, and academic submissions.',
    features: ['Private On-Premise Encrypted Storage', 'Instant Git Integration for Lab Code', 'Collaborative Research Sandboxes', 'Automated Daily Disaster Recovery'],
    systemMetric: '120 TB Academic Data Stored',
    techStack: 'Ceph Object Storage / Docker / MinIO'
  },
  {
    id: 'online-testing',
    title: 'Proctored Assessment Engine',
    tag: 'Academics & Evaluation',
    description: 'Autonomous evaluation portal enabling continuous internal assessments, adaptive question randomized banks, coding test evaluations with sandboxed test runners.',
    features: ['Real-time Code Compiler (18+ Languages)', 'Algorithmic Random Question Generation', 'Automated Rubric-based Grading', 'Anti-Plagiarism Code Vector Matching'],
    systemMetric: '85,000+ Assessments Completed Yearly',
    techStack: 'Node.js / WebAssembly / Isolated Containers'
  },
  {
    id: 'e-learning',
    title: 'Integrated LMS & Courseware',
    tag: 'Pedagogy & Knowledge',
    description: 'Next-gen Learning Management System hosting interactive lecture recordings, video streaming over campus intranet, digital notes, and peer-to-peer coding lounges.',
    features: ['Zero-bandwidth Offline Intranet Streaming', 'Interactive Digital Course Notes', 'Continuous Micro-Quiz Checkpoints', 'Automated Outcome Based Education (OBE) Metrics'],
    systemMetric: '420+ Fully Digitized Courses',
    techStack: 'React / GraphQL / WebRTC Intranet CDN'
  },
  {
    id: 'mobile-apps',
    title: 'AJCE Mobile Ecosystem',
    tag: 'Omnichannel Student UX',
    description: 'Native iOS and Android apps empowering students with push notifications for class shifts, digital canteen token pre-orders, hostel gate passes, and emergency SOS alerts.',
    features: ['One-Tap Digital Hostel Out-Pass', 'Contactless Canteen Pre-order', 'Real-time Bus GPS Fleet Tracking', 'Instant Exam Result Push Notifications'],
    systemMetric: '4,800+ Active Daily Mobile Installations',
    techStack: 'Flutter / Firebase Cloud Messaging / REST APIs'
  },
  {
    id: 'automation',
    title: 'Autonomous Lab & IoT Workflows',
    tag: 'Smart Campus IoT',
    description: 'Automated campus management controlling the 500kW solar grid distribution, smart hostel climate monitoring, and automated laboratory equipment booking schedules.',
    features: ['Automated Solar Peak-Load Balancing', 'Smart Laboratory Slot Reservations', 'Paperless No-Dues Clearance Workflow', 'Campus Environmental Air & Water Sensors'],
    systemMetric: '450+ IoT Nodes Monitored 24/7',
    techStack: 'MQTT / InfluxDB / Grafana Telemetry'
  }
];

export const PROGRAMMES_DATA: Programme[] = [
  {
    id: 'btech-cse',
    name: 'Computer Science & Engineering',
    degree: 'B.Tech',
    department: 'Department of Computer Science & Engineering',
    category: 'ENGINEERING',
    duration: '4 Years (8 Semesters)',
    intake: 180,
    accreditation: ['NBA Accredited', 'NAAC A+', 'Autonomous'],
    shortDesc: 'Comprehensive computing foundation covering modern algorithms, cloud-native architecture, distributed systems, and applied software engineering.',
    fullDesc: 'The B.Tech in CSE at AJCE blends theoretical computational foundations with intensive industrial software craft. Students code in production-grade environments starting from Year 1, building everything from compilers to high-throughput cloud microservices.',
    keyAreas: ['Full-Stack Systems', 'Cloud & DevOps', 'Distributed Computing', 'Algorithms & Data Structures'],
    careers: ['Software Architect', 'Cloud Infrastructure Engineer', 'Systems Programmer', 'Full-Stack Developer'],
    curriculumHighlights: ['Hands-on Capstone every semester', 'Integrated AES developer internships', 'Industry certifications in AWS & GCP']
  },
  {
    id: 'btech-aids',
    name: 'Artificial Intelligence & Data Science',
    degree: 'B.Tech',
    department: 'Department of Computer Science & Engineering',
    category: 'ENGINEERING',
    duration: '4 Years (8 Semesters)',
    intake: 60,
    accreditation: ['Autonomous', 'NAAC A+'],
    shortDesc: 'Frontier program focusing on deep learning, generative AI, LLM architectures, neural computing, and large-scale big data analytics.',
    fullDesc: 'Engineered for the cognitive era, this curriculum equips students with deep mathematical rigor in linear algebra and probability, coupled with direct hands-on training on GPU clusters for computer vision, NLP, and reinforcement learning.',
    keyAreas: ['Deep Learning & Neural Nets', 'Large Language Models', 'Computer Vision & NLP', 'Big Data Engineering'],
    careers: ['AI Research Engineer', 'Data Scientist', 'Machine Learning Architect', 'NLP Specialist'],
    curriculumHighlights: ['NVIDIA DLI-aligned lab courses', 'Real-world data modeling with industry partners', 'Focus on ethical & responsible AI']
  },
  {
    id: 'btech-cyber',
    name: 'Computer Science (Cyber Security)',
    degree: 'B.Tech',
    department: 'Department of Computer Science & Engineering',
    category: 'ENGINEERING',
    duration: '4 Years (8 Semesters)',
    intake: 60,
    accreditation: ['Autonomous', 'NAAC A+'],
    shortDesc: 'Defensive and offensive cybersecurity, cryptographic engineering, cloud penetration testing, and digital forensics.',
    fullDesc: 'Trained within a sandboxed campus cyber-range, students analyze real-world vulnerabilities, reverse-engineer malware, craft zero-trust network architectures, and master defensive protocol engineering.',
    keyAreas: ['Offensive & Defensive Security', 'Zero-Trust Networks', 'Digital Forensics', 'Applied Cryptography'],
    careers: ['Security Operations Lead', 'Penetration Tester', 'Cryptographic Analyst', 'Cloud Security Engineer'],
    curriculumHighlights: ['Campus Cyber-Range simulation', 'Bug Bounty coaching', 'Certifications in CEH & CISSP fundamentals']
  },
  {
    id: 'btech-ece',
    name: 'Electronics & Communication Engineering',
    degree: 'B.Tech',
    department: 'Department of Electronics & Communication Engineering',
    category: 'ENGINEERING',
    duration: '4 Years (8 Semesters)',
    intake: 60,
    accreditation: ['NBA Accredited', 'NAAC A+', 'Autonomous'],
    shortDesc: 'Silicon-to-signal engineering: VLSI chip design, embedded IoT architectures, wireless 5G communications, and edge computing.',
    fullDesc: 'AJCE’s ECE department bridges silicon microelectronics with modern RF/telecommunications. Students gain direct access to Cadence EDA tools, FPGA development boards, and anechoic RF measurement chambers.',
    keyAreas: ['VLSI Design & ASIC Flow', 'Embedded Systems & RTOS', '5G / 6G Communications', 'Edge AI Microcontrollers'],
    careers: ['VLSI Design Engineer', 'Embedded Firmware Developer', 'RF Communication Engineer', 'IoT Systems Architect'],
    curriculumHighlights: ['Cadence EDA tool license access', 'FPGA prototyping labs', 'NeST Center of Excellence tie-ups']
  },
  {
    id: 'btech-me',
    name: 'Mechanical Engineering',
    degree: 'B.Tech',
    department: 'Department of Mechanical Engineering',
    category: 'ENGINEERING',
    duration: '4 Years (8 Semesters)',
    intake: 60,
    accreditation: ['NBA Accredited', 'NAAC A+', 'Autonomous'],
    shortDesc: 'Robotics, electric vehicle powertrains, advanced additive manufacturing, CFD thermal analysis, and sustainable mechatronics.',
    fullDesc: 'Mechanical Engineering at AJCE is reborn for Industry 4.0. Beyond classical thermodynamics, students build competition-winning electric buggies, autonomous agricultural drones, and precision biomedical prosthetic mechanisms.',
    keyAreas: ['EV Powertrain Design', 'Robotics & Automation', 'Additive Manufacturing / 3D CAD', 'Thermal & CFD Analysis'],
    careers: ['Automotive Systems Engineer', 'Robotics Specialist', 'Aerospace Structural Analyst', 'Manufacturing Automation Lead'],
    curriculumHighlights: ['Baja SAE & Formula Student teams', 'Bosch Automotive Training Center', 'Heavy industrial CNC & 3D printers']
  },
  {
    id: 'btech-ce',
    name: 'Civil Engineering',
    degree: 'B.Tech',
    department: 'Department of Civil Engineering',
    category: 'ENGINEERING',
    duration: '4 Years (8 Semesters)',
    intake: 60,
    accreditation: ['NBA Accredited', 'NAAC A+', 'Autonomous'],
    shortDesc: 'Smart infrastructure, earthquake-resilient structures, BIM modeling, environmental geo-informatics, and green building design.',
    fullDesc: 'Focuses on sustainable civil infrastructure, modern computational structural engineering, advanced GIS surveying with lidar drones, and environmental waste remediation.',
    keyAreas: ['Building Information Modeling (BIM)', 'Structural Health Monitoring', 'Geo-technical Engineering', 'Smart Cities & GIS'],
    careers: ['Structural Consultant', 'BIM Project Manager', 'Infrastructure Planner', 'Geotechnical Specialist'],
    curriculumHighlights: ['Total Station & Drone Surveying lab', 'Structural modeling with ETABS & STAAD.Pro', 'Consultancy wing with Kerala PWD']
  },
  {
    id: 'btech-che',
    name: 'Chemical Engineering',
    degree: 'B.Tech',
    department: 'Department of Chemical Engineering',
    category: 'ENGINEERING',
    duration: '4 Years (8 Semesters)',
    intake: 60,
    accreditation: ['NBA Accredited', 'NAAC A+', 'Autonomous'],
    shortDesc: 'Process engineering, green energy storage, biofuel development, polymer processing, and pharmaceutical reactor engineering.',
    fullDesc: 'One of the few private autonomous colleges in Kerala offering premier Chemical Engineering. Closely linked with regional petrochemical and bio-processing corridors.',
    keyAreas: ['Process Simulation (Aspen Plus)', 'Green Hydrogen & Batteries', 'Biofuels & Catalysis', 'Industrial Effluent Treatment'],
    careers: ['Process Safety Engineer', 'Biofuel Research Scientist', 'Petrochemical Plant Lead', 'Energy Systems Analyst'],
    curriculumHighlights: ['Pilot-scale process plants on campus', 'Aspen Plus & HYSYS simulation', 'Direct MoUs with BPCL and FACT']
  },
  {
    id: 'btech-eee',
    name: 'Electrical & Electronics Engineering',
    degree: 'B.Tech',
    department: 'Department of Electrical & Electronics Engineering',
    category: 'ENGINEERING',
    duration: '4 Years (8 Semesters)',
    intake: 30,
    accreditation: ['NBA Accredited', 'NAAC A+', 'Autonomous'],
    shortDesc: 'Smart power grids, renewable solar integration, power electronics for electric vehicles, and industrial automation.',
    fullDesc: 'Students manage and analyze AJCE’s 500kW real-time solar grid installation as part of practical laboratory courses, blending high-voltage engineering with modern smart microgrid telemetry.',
    keyAreas: ['Smart Microgrids & Solar Integration', 'EV Inverters & Motor Drives', 'Industrial PLC & SCADA', 'High Voltage Engineering'],
    careers: ['Power Systems Engineer', 'EV Drive Specialist', 'Grid Modernization Analyst', 'Renewable Energy Consultant'],
    curriculumHighlights: ['Real-time 500kW Solar Grid data sandbox', 'Schneider Electric industrial automation kits', 'MATLAB Simulink power lab']
  },
  {
    id: 'mca',
    name: 'Master of Computer Applications',
    degree: 'MCA',
    department: 'Department of Computer Applications',
    category: 'COMPUTER APPLICATIONS',
    duration: '2 Years (4 Semesters)',
    intake: 120,
    accreditation: ['NAAC A+', 'Autonomous'],
    shortDesc: 'Advanced postgraduate software engineering, enterprise cloud architectures, mobile platform frameworks, and AI solutions.',
    fullDesc: 'Intensive 2-year masters curriculum tailored for computer graduates seeking leadership roles in enterprise software architecture, full-stack engineering, and AI product development.',
    keyAreas: ['Enterprise Cloud Architecture', 'Full-Stack JavaScript & Spring', 'AI Product Integration', 'Microservices & Containers'],
    careers: ['Senior Software Engineer', 'Product Engineering Lead', 'Enterprise Solutions Consultant', 'Database Architect'],
    curriculumHighlights: ['Six-month corporate internship in semester 4', '100% placement track record in tier-1 IT firms', 'AES engineering fellowship']
  },
  {
    id: 'bca',
    name: 'Bachelor of Computer Applications',
    degree: 'BCA',
    department: 'Department of Computer Applications',
    category: 'COMPUTER APPLICATIONS',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    accreditation: ['Autonomous', 'NAAC A+'],
    shortDesc: 'Modern computing foundations, web programming, UI/UX design, database systems, and mobile software craft.',
    fullDesc: 'A fast-track undergraduate programme focused on modern web engineering, app development, database optimization, and industry readiness from day one.',
    keyAreas: ['Web Development & APIs', 'Mobile App Development', 'Database Administration', 'Software Testing'],
    careers: ['Web Application Developer', 'Mobile App Engineer', 'QA Automation Engineer', 'Technical Support Analyst'],
    curriculumHighlights: ['Industry-grade practical workshops', 'Hackathons and open-source contribution mandates', 'Direct pathway to MCA/MS']
  },
  {
    id: 'mtech-ai',
    name: 'M.Tech in Computer Science & AI',
    degree: 'M.Tech',
    department: 'Department of Computer Science & Engineering',
    category: 'POSTGRADUATE',
    duration: '2 Years (4 Semesters)',
    intake: 18,
    accreditation: ['Autonomous', 'NAAC A+'],
    shortDesc: 'Research-focused postgraduate program in neural networks, computer vision, natural language generation, and autonomous agents.',
    fullDesc: 'Ideal for engineers pursuing deep R&D, patent creation, or preparation for top global PhD programs. Fully backed by funded university research grants.',
    keyAreas: ['Generative Neural Models', 'Reinforcement Learning', 'Autonomous Robotics', 'High Performance Computing'],
    careers: ['Principal AI Scientist', 'Research Lab Director', 'Machine Learning Specialist', 'Academic Professor'],
    curriculumHighlights: ['Mandatory peer-reviewed IEEE/Scopus publication', 'Teaching and research assistantships', 'Direct industry sponsorship']
  },
  {
    id: 'phd-research',
    name: 'Doctoral Research Programmes (Ph.D)',
    degree: 'Ph.D',
    department: 'AJCE Research Deanery',
    category: 'RESEARCH',
    duration: '3 to 5 Years',
    intake: 35,
    accreditation: ['KTU Approved Research Center', 'DST Recognized'],
    shortDesc: 'Advanced doctoral research across Computer Science, Electronics, Mechanical, Civil, Chemical, and Nanotechnology.',
    fullDesc: 'AJCE is an approved Research Centre under APJ Abdul Kalam Technological University (KTU) with over 80 doctorate supervisors, advanced instrumentation facilities, and seed funding support.',
    keyAreas: ['Applied Artificial Intelligence', 'Renewable Energy & Storage', 'Bio-compatible Materials', 'Water & Atmospheric Remediation'],
    careers: ['Senior Research Scientist', 'University Professor', 'Chief Technology Officer', 'R&D Director'],
    curriculumHighlights: ['Monthly institutional research stipends', 'Access to Central Instrumentation Facility', 'Sponsored international conference travel']
  }
];

export const CAMPUS_ZONES: CampusZone[] = [
  {
    id: 'learn-zone',
    category: 'LEARN',
    title: 'Intellectual Sanctuaries & High-Tech Theatres',
    subtitle: 'Where deep curiosity meets world-class academic infrastructure.',
    description: 'The 30,000 sq.ft Central Digital Library houses 50,000+ technical volumes, 24/7 high-speed IEEE/ScienceDirect electronic access, and silent acoustic study cubicles. Smart amphitheatre classrooms feature 4K interactive display panels and acoustic tuning.',
    stats: ['50,000+ Print & Digital Volumes', 'IEEE & Springer Digital Archives', '12 Smart Lecture Theatres'],
    features: ['24/7 Digital Reading Lounges', 'Interactive Smart Whiteboards', 'Acoustically Treated Amphitheatres', 'Departmental Specialized Libraries'],
    atmosphere: 'Quiet, luminous, focused, stimulating.'
  },
  {
    id: 'build-zone',
    category: 'BUILD',
    title: 'FabLabs, Heavy Machinery & Prototyping Bays',
    subtitle: 'Where conceptual equations become tangible, testable machines.',
    description: 'Equipped with industrial 5-axis CNC mills, laser cutters, 3D additive printing rigs, and electronic testing stations. Students construct electric racing cars, agricultural drones, and automated medical analyzers with zero red-tape.',
    stats: ['25,000 sq.ft Fabrication Bays', '24/7 Maker Access for Creators', '10+ Industrial Grade 3D Printers'],
    features: ['Bosch Automotive Training Center', 'NeST Center of Excellence', 'Yamaha Technical Academy', 'Heavy Machine Shop & Foundry'],
    atmosphere: 'Sparks, high precision, tactile invention, 24/7 energy.'
  },
  {
    id: 'live-zone',
    category: 'LIVE',
    title: 'Santhome & Amala Residential Communities',
    subtitle: 'Safe, scenic, high-speed living with panoramic Western Ghats vistas.',
    description: 'Home to over 2,500 hostellers in modern multi-storey towers. Features biometric secure access, dedicated 1Gbps high-speed optical Wi-Fi canopy, multi-cuisine hygienic dining halls, solar hot water, and tranquil hillside study balconies.',
    stats: ['2,500+ Residential Capacity', '1 Gbps High-Speed Wi-Fi Canopy', '100% Solar Hot Water Powered'],
    features: ['Airy Hillside Study Balconies', 'Multi-Cuisine Vegetarian & Non-Veg Dining', 'On-Campus Resident Doctors & Infirmary', '24/7 Security & AES Gate Automation'],
    atmosphere: 'Warm, collaborative, vibrant, secure.'
  },
  {
    id: 'create-zone',
    category: 'CREATE',
    title: 'Media Studios, Radio 90FM & Creative Lounges',
    subtitle: 'Amplifying student voices, arts, storytelling, and culture.',
    description: 'Amal Jyothi Community Radio 90.0 FM broadcasts student-produced tech talk-shows, farmer outreach, and cultural dialogues across Kottayam and Idukki districts. Accompanied by sound-recording booths, editing suites, and amphitheatre spaces.',
    stats: ['90.0 MHz On-Air Broadcast', '15+ Hours Daily Content Produced', '40+ Student Radio Jockeys'],
    features: ['Broadcast-Standard Sound Booths', 'DaVinci Resolve Editing Workstations', 'Open-Air Amphitheatre for 2,000 Attendees', 'Photography & Visual Media Guild'],
    atmosphere: 'Eclectic, expressive, musical, communicative.'
  },
  {
    id: 'compete-zone',
    category: 'COMPETE',
    title: 'Olympic-Standard Sports Arenas & Fitness Complexes',
    subtitle: 'Forging physical grit, teamwork, and championship spirit.',
    description: 'A 400-meter all-weather athletics track, floodlit synthetic basketball and volleyball courts, indoor badminton stadiums, international-standard table tennis arena, and a multi-station modern gymnasium guided by physical education trainers.',
    stats: ['400m All-Weather Running Track', '4 Indoor Badminton Courts', 'Floodlit Synthetic Basketball Arena'],
    features: ['Multi-Station Strength Training Gym', 'Inter-Collegiate Tournament Stadium', 'Football Turf & Cricket Nets', 'Yoga & Wellness Pavilions'],
    atmosphere: 'High-adrenaline, disciplined, invigorating, athletic.'
  },
  {
    id: 'connect-zone',
    category: 'CONNECT',
    title: 'Green Canopies, Solar Promenades & Driving Academy',
    subtitle: 'A harmonious eco-system engineered for lifelong friendships.',
    description: 'Shaded stone plazas, rainwater collection ponds, the on-campus Amal Jyothi Driving Academy (Kerala’s first collegiate driving track), and student cafeterias serving piping hot Kerala snacks and specialty coffees.',
    stats: ['68 Acres of Native Flora', 'Amal Jyothi Driving Academy', '500kW Rooftop Solar Farm'],
    features: ['Self-contained Driving Training Track', 'Green Promenade Walkways', 'Student Co-op Store & Postal Services', 'Electric Vehicle Charging Stations'],
    atmosphere: 'Breezy, natural, restorative, social.'
  }
];

export const STUDENT_CLUBS: ClubItem[] = [
  {
    id: 'ieee',
    name: 'IEEE Student Branch AJCE',
    type: 'International Technical Society',
    lead: 'Ranked among Kerala Section’s Most Vibrant Branches',
    description: 'Organizes global hackathons, humanitarian engineering projects, technical symposiums, and Women in Engineering (WIE) leadership summits.',
    achievements: ['Outstanding Student Branch Award', 'Organized 45+ National Workshops', 'Over ₹5L Won in IEEE Hackathons'],
    badge: 'Premier Chapter'
  },
  {
    id: 'acm',
    name: 'ACM Student Chapter',
    type: 'Computing & Algorithms',
    lead: 'Competitive Programming & Research Syndicate',
    description: 'Conducts intense weekly algorithm coding battles, open-source sprints, and peer-to-peer training for Google Summer of Code (GSoC) and ICPC.',
    achievements: ['ACM ICPC Regional Finalists', 'Annual "CodeQuest" Flagship Hackathon', 'Active GSoC Mentorship Cohort'],
    badge: 'Algorithms'
  },
  {
    id: 'gdsc',
    name: 'Google Developer Student Club',
    type: 'Modern Web, Cloud & AI',
    lead: 'Building Community Solutions with Google Tech',
    description: 'Empowers students to master Flutter, Google Cloud, Firebase, and TensorFlow through hands-on Solution Challenges and developer study jams.',
    achievements: ['Top 50 Global Solution Challenge Team', '500+ Students Cloud-Certified', 'Annual Android & AI Bootcamps'],
    badge: 'Developer Guild'
  },
  {
    id: 'radio-90',
    name: 'Amal Jyothi Radio 90FM Guild',
    type: 'Broadcasting & Creative Media',
    lead: 'Kerala’s First Engineering College Community Station',
    description: 'Students plan, script, record, and broadcast live shows covering science innovations, local agriculture tips, career counseling, and campus news.',
    achievements: ['Broadcasts to 2.5L Listeners Daily', 'National Community Radio Recognition', '100% Student Produced Content'],
    badge: 'Voice of Campus'
  },
  {
    id: 'baja-sae',
    name: 'Team Redline (Baja SAE & Formula)',
    type: 'Automotive Motorsports',
    lead: 'Designing, Welding & Racing All-Terrain Vehicles',
    description: 'Interdisciplinary team of mechanical, electrical, and electronics engineers who design and race custom off-road buggies at SAE India.',
    achievements: ['Ranked in Top 10 National Baja SAE', 'Engineered Custom Electric Buggy', 'Tested on In-house Hillside Dirt Track'],
    badge: 'Motorsports'
  },
  {
    id: 'nss',
    name: 'National Service Scheme (NSS)',
    type: 'Social Responsibility & Ecology',
    lead: 'Engineering Solutions for Social Upliftment',
    description: 'Spearheads community solar installations in nearby tribal settlements, flood relief technical missions, blood donation drives, and eco-restoration.',
    achievements: ['Best NSS Unit State Award', 'Constructed 5+ Low-Cost Rural Houses', 'Annual Green Valley Tree Canopies'],
    badge: 'Social Impact'
  }
];

export const RESEARCH_WINGS: ResearchWing[] = [
  {
    id: 'ai-vision',
    title: 'Center for AI, Vision & Autonomous Systems',
    leadDomain: 'Deep Learning, Robotics, Computer Vision',
    description: 'Developing low-power edge vision algorithms for agricultural crop health monitoring and automated medical diagnostic scans.',
    patents: '8 Patents Granted / Filed',
    collaborations: ['NVIDIA Teaching Center', 'Intel OneAPI Academy', 'Tata Consultancy Services'],
    fundedBy: 'DST & KSCSTE Research Grants'
  },
  {
    id: 'clean-energy',
    title: 'Center for Clean Energy & Smart Grids',
    leadDomain: 'Photovoltaics, Battery Storage & Grid Tech',
    description: 'Harnessing telemetry from the campus 500kW rooftop installation to model next-generation microgrid energy storage and inverter topologies.',
    patents: '6 Patents Filed',
    collaborations: ['Kerala State Electricity Board (KSEB)', 'ANERT', 'Schneider Electric'],
    fundedBy: 'Ministry of New & Renewable Energy (MNRE)'
  },
  {
    id: 'materials-nano',
    title: 'Advanced Materials & Nanotechnology Bay',
    leadDomain: 'Composite Polymers, Graphene, Metallurgy',
    description: 'Synthesizing natural-fiber reinforced composites for automotive lightweighting and antimicrobial coatings for hospital instrumentation.',
    patents: '12 Patents Published',
    collaborations: ['IISc Bengaluru Research Alliance', 'ISRO Propulsion Complex tie-ups'],
    fundedBy: 'DST-SERB & BIRAC Grants'
  },
  {
    id: 'water-env',
    title: 'Center for Environmental & Water Technology',
    leadDomain: 'Water Purification, Waste-to-Energy, Bio-filters',
    description: 'Designing low-cost indigenous membrane filtration systems for rural drinking water plants across the Western Ghats river basins.',
    patents: '5 Patents Granted',
    collaborations: ['Kerala Water Authority', 'UN Sustainable Development Goals Cluster'],
    fundedBy: 'Central Pollution Control Board Grants'
  }
];
