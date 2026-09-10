import { Pathway } from '../types';

export const AJCE_PATHWAYS: Pathway[] = [
  {
    id: 'ai-software',
    title: 'AI & SOFTWARE',
    category: 'Intelligent Computing',
    tagline: 'Architect autonomous intelligence and planet-scale software systems.',
    summary: 'From core algorithmic foundations to LLM fine-tuning and cloud architecture, learn to design software that changes how humanity works.',
    coreDegree: 'B.Tech CSE / AI & Data Science / MCA',
    outcomes: ['Full-Stack Systems Architect', 'AI/ML Research Engineer', 'Distributed Cloud Lead', 'Tech Founder'],
    steps: [
      {
        stage: '01. FOUNDATION',
        title: 'Core Computing & Algorithmic Rigor',
        description: 'Master data structures, mathematical foundations of machine learning, system design, and distributed operating systems.',
        badge: 'Department of CSE',
        highlight: 'Year 1 Coding Sprints & ACM Competitive Lounge'
      },
      {
        stage: '02. SPECIALIZATION',
        title: 'Neural Networks & Deep Learning',
        description: 'Direct access to GPU-accelerated computing clusters. Hands-on modeling in PyTorch, computer vision, and NLP with NVIDIA DLI certifications.',
        badge: 'GPU Cluster & AI Lab',
        highlight: 'Fine-tune production transformers on in-house servers'
      },
      {
        stage: '03. I²U INNOVATION',
        title: 'Intelligent Prototype Incubation',
        description: 'Transform an AI model into a deployable, resilient service using AJCE’s ₹25,000 I²U seed grant.',
        badge: 'I²U Seed Grant',
        highlight: 'Past project: Automated multi-lingual healthcare triage agent'
      },
      {
        stage: '04. INDUSTRY EXPOSURE',
        title: 'Enterprise Hackathons & Live Co-Ops',
        description: 'Internships and code-bases with tier-1 engineering companies like Google, Microsoft, Infosys, and Cognizant.',
        badge: 'Campus Connect',
        highlight: 'Direct contribution to AJCE AES in-house enterprise OS'
      },
      {
        stage: '05. VENTURE / CAREER',
        title: 'Startups Valley Launchpad or Tier-1 Placement',
        description: 'Graduate with an incorporated company at Startups Valley TBI or secure high-tier software engineering offers.',
        badge: 'Startups Valley TBI',
        highlight: 'Average top tech salary offers ranging ₹12L - ₹24L PA'
      }
    ]
  },
  {
    id: 'electronics-hardware',
    title: 'ELECTRONICS & HARDWARE',
    category: 'Silicon & IoT',
    tagline: 'Design the microchips, embedded circuits, and RF systems powering the physical world.',
    summary: 'Bridge the silicon divide. Build custom ASICs, high-speed printed circuits, and ultra-low-power edge nodes.',
    coreDegree: 'B.Tech Electronics & Communication / EEE',
    outcomes: ['VLSI Design Engineer', 'Embedded Firmware Specialist', 'RF Hardware Architect', 'IoT Device Innovator'],
    steps: [
      {
        stage: '01. FOUNDATION',
        title: 'Circuit Physics & Digital Logic',
        description: 'Deep dive into semiconductor physics, analog electronics, digital logic synthesis, and microcontroller architectures.',
        badge: 'Department of ECE',
        highlight: 'Hands-on Oscilloscopes, Signal Generators & PCB Milling'
      },
      {
        stage: '02. SPECIALIZATION',
        title: 'Cadence EDA & FPGA Silicon Synthesis',
        description: 'Design and simulate integrated circuits using industry-standard Cadence EDA tools and Xilinx FPGA prototyping platforms.',
        badge: 'VLSI & EDA Suite',
        highlight: 'Industry-grade ASIC flow from RTL to GDSII layout'
      },
      {
        stage: '03. I²U INNOVATION',
        title: 'Low-Power Edge Hardware Prototypes',
        description: 'Fabricate custom multi-layer PCBs and wireless sensor clusters in the FabLab with I²U rapid component sourcing.',
        badge: 'FabLab Prototyping',
        highlight: 'Past project: LoRa-based landslide warning telemetry nodes'
      },
      {
        stage: '04. INDUSTRY EXPOSURE',
        title: 'NeST & Bosch Semiconductor Alliances',
        description: 'Practical training modules aligned with global semiconductor leaders and aerospace suppliers.',
        badge: 'NeST Center of Excellence',
        highlight: 'Direct recruitment pipelines to top semiconductor firms'
      },
      {
        stage: '05. VENTURE / CAREER',
        title: 'Hardware Product Deployment & Patent Filing',
        description: 'File patents with AJCE IPR support and commercialize deep-tech hardware through Startups Valley hardware incubators.',
        badge: 'Hardware TBI',
        highlight: 'Global placement in Intel, Qualcomm, Texas Instruments, Bosch'
      }
    ]
  },
  {
    id: 'mobility',
    title: 'MOBILITY & AUTOMOTIVE',
    category: 'Future Transportation',
    tagline: 'Pioneer electric vehicle architectures, autonomous navigation, and aerodynamic speed.',
    summary: 'Build real vehicles from scratch. Turn torque calculations and battery chemistry into high-performance electric buggies and race cars.',
    coreDegree: 'B.Tech Mechanical Engineering / EEE',
    outcomes: ['EV Powertrain Architect', 'Autonomous Systems Engineer', 'Automotive CAE Specialist', 'Motorsport Chassis Designer'],
    steps: [
      {
        stage: '01. FOUNDATION',
        title: 'Mechanics, Dynamics & Thermodynamics',
        description: 'Master classical mechanics, fluid dynamics, heat transfer, and machine design principles.',
        badge: 'Department of ME',
        highlight: 'SolidWorks, Ansys FEA & CFD simulation labs'
      },
      {
        stage: '02. SPECIALIZATION',
        title: 'Electric Buggies & Powertrain Electrification',
        description: 'Design battery management systems (BMS), motor controllers, regenerative braking, and lightweight composite chassis.',
        badge: 'Bosch & Yamaha Center',
        highlight: 'Team Redline: Student Baja SAE & Formula electric racing'
      },
      {
        stage: '03. I²U INNOVATION',
        title: 'Custom Vehicle Fabrication',
        description: 'Use the 5-axis CNC machines and robotic welding bays in the campus heavy machinery workshops to build vehicle chassis.',
        badge: 'FabLab Heavy Bay',
        highlight: 'Past project: Solar-hybrid farm multi-utility buggy'
      },
      {
        stage: '04. INDUSTRY EXPOSURE',
        title: 'Bosch & Volvo Eicher Technical Academy',
        description: 'Certifications on modern CRDi engines, EV diagnostic platforms, and industrial vehicle validation.',
        badge: 'Volvo Eicher Academy',
        highlight: 'Direct testing on AJCE’s on-campus all-terrain test track'
      },
      {
        stage: '05. VENTURE / CAREER',
        title: 'Next-Gen Mobility Careers & EV Startups',
        description: 'Join top automotive OEMs (Tesla, Tata Motors, Mahindra, Ather) or incubate sustainable EV fleet startups.',
        badge: 'Automotive Sector',
        highlight: 'Direct hiring into EV R&D hubs and motorsports engineering'
      }
    ]
  },
  {
    id: 'sustainability',
    title: 'SUSTAINABILITY & GREEN TECH',
    category: 'Planet-Scale Engineering',
    tagline: 'Engineer clean energy, water purification, and closed-loop circular economies.',
    summary: 'Leverage AJCE’s 500kW solar grid and Bio-TBI to develop zero-carbon solutions for energy storage, agriculture, and waste management.',
    coreDegree: 'B.Tech Chemical / Civil / Electrical Engineering',
    outcomes: ['Renewable Energy Analyst', 'Circular Economy Consultant', 'Water Process Engineer', 'Green Tech Entrepreneur'],
    steps: [
      {
        stage: '01. FOUNDATION',
        title: 'Environmental Systems & Energy Science',
        description: 'Study biogeochemical cycles, solar thermal systems, electrochemistry, and eco-materials.',
        badge: 'Energy Deanery',
        highlight: 'Real-time telemetry analysis of AJCE’s 500kW solar power grid'
      },
      {
        stage: '02. SPECIALIZATION',
        title: 'Bio-Refining, Batteries & Water Purification',
        description: 'Hands-on chemical reactor design, hydrogen production testing, and membrane distillation for wastewater recycling.',
        badge: 'Chemical & Bio-TBI Labs',
        highlight: 'Pilot-scale biofuel distillation plants on campus'
      },
      {
        stage: '03. I²U INNOVATION',
        title: 'Sustainable Rural Tech Prototypes',
        description: 'Seed funding for innovations serving the fragile Western Ghats ecosystems and indigenous farming communities.',
        badge: 'I²U Green Grant',
        highlight: 'Past project: Solar cold-storage units for spice farmers'
      },
      {
        stage: '04. INDUSTRY EXPOSURE',
        title: 'KSEB, ANERT & Global UN SDG Alliances',
        description: 'Collaborate with state electricity boards, environmental protection agencies, and sustainable polymer multinationals.',
        badge: 'Govt. Energy Partners',
        highlight: 'Live grid stability projects with Kerala State Electricity Board'
      },
      {
        stage: '05. VENTURE / CAREER',
        title: 'Bio-TBI Incubation & Clean-Tech Ventures',
        description: 'Access BIRAC-funded Bio-TBI labs to scale bio-based startups or step into global ESG and renewable engineering consultancies.',
        badge: 'Bio-TBI Incubator',
        highlight: 'Government commercialization grants up to ₹50 Lakhs'
      }
    ]
  },
  {
    id: 'research',
    title: 'RESEARCH & DEEP SCIENCE',
    category: 'Frontier Discovery',
    tagline: 'Publish pioneering discoveries and patent breakthroughs that push human capability.',
    summary: 'Work side-by-side with 80+ doctorate faculty members on funded projects across nanotechnology, quantum algorithms, and advanced composites.',
    coreDegree: 'B.Tech Honours / M.Tech / Doctoral Ph.D',
    outcomes: ['Principal Research Scientist', 'Global University Fellow', 'Patent Holder', 'R&D Director'],
    steps: [
      {
        stage: '01. FOUNDATION',
        title: 'Advanced Mathematics & Experimental Method',
        description: 'Rigorous training in stochastic modeling, quantum mechanics foundations, and empirical research methodologies.',
        badge: 'Research Deanery',
        highlight: 'Undergraduate research fellowships starting from Semester 3'
      },
      {
        stage: '02. SPECIALIZATION',
        title: 'Central Instrumentation & Clean Rooms',
        description: 'Operate advanced electron microscopes, X-ray diffractometers, FTIR spectrometers, and high-frequency vector network analyzers.',
        badge: 'Central Research Facility',
        highlight: 'Dedicated student access to ₹12 Cr advanced instruments'
      },
      {
        stage: '03. I²U INNOVATION',
        title: 'Peer-Reviewed Publishing & Patent Grants',
        description: 'Transform novel experimental findings into Scopus/IEEE indexed papers and file provisional patents funded 100% by AJCE.',
        badge: 'AJCE IPR Cell',
        highlight: '50+ patents filed; financial incentives for publications'
      },
      {
        stage: '04. INDUSTRY EXPOSURE',
        title: 'IISc, ISRO & International University Labs',
        description: 'Research exchanges with premier scientific institutions and foreign academic consortia.',
        badge: 'Global Research MoUs',
        highlight: 'Sponsored summer research fellowships at national laboratories'
      },
      {
        stage: '05. VENTURE / CAREER',
        title: 'Direct PhD Pathways & Deep-Tech Spinoffs',
        description: 'Receive direct admission with full scholarships to top US, European, and Australian doctoral programs or launch a research spinoff.',
        badge: 'Doctoral Network',
        highlight: 'Alumni currently at MIT, Stanford, Cambridge, TUM Germany'
      }
    ]
  },
  {
    id: 'startup',
    title: 'STARTUP & VENTURE CREATION',
    category: 'High-Impact Entrepreneurship',
    tagline: 'Graduate not as a job seeker, but as a CEO building employment for hundreds.',
    summary: 'Turn an undergraduate technical idea into a funded, incorporated company through Kerala’s premier campus Technology Business Incubator.',
    coreDegree: 'Any Engineering Discipline + Startups Valley TBI',
    outcomes: ['Venture-Backed Founder', 'Chief Technology Officer', 'Product Manager', 'Venture Capital Associate'],
    steps: [
      {
        stage: '01. FOUNDATION',
        title: 'Customer Discovery & Problem Sprint',
        description: 'Learn the Lean Startup methodology, market size validation, unit economics, and rapid hypothesis testing.',
        badge: 'IEDC AJCE',
        highlight: 'Weekly "Founder Friday" fireside sessions with alumni founders'
      },
      {
        stage: '02. SPECIALIZATION',
        title: 'I²U MVP Prototyping & User Testing',
        description: 'Build your Minimum Viable Product using campus engineering labs and deploy it directly to 3,500+ campus early adopters.',
        badge: 'I²U Innovation Fund',
        highlight: 'Test software or hardware on real AJCE students & faculty'
      },
      {
        stage: '03. I²U INNOVATION',
        title: 'Legal Incorporation & Seed Grant',
        description: 'Incorporate as a Private Limited company. Receive up to ₹10 Lakhs in seed grants from Startups Valley TBI DST schemes.',
        badge: 'Startups Valley TBI',
        highlight: 'Dedicated air-conditioned office cabins with 24/7 internet'
      },
      {
        stage: '04. INDUSTRY EXPOSURE',
        title: 'Investor Demo Days & KSUM Pitching',
        description: 'Pitch your venture to angel syndicates, venture capitalists, and the Kerala Startup Mission (KSUM) grant boards.',
        badge: 'KSUM Angel Network',
        highlight: 'AJCE startups have raised over ₹40+ Cr in cumulative funding'
      },
      {
        stage: '05. VENTURE / CAREER',
        title: 'Graduation as a Profitable Enterprise',
        description: 'Graduate with customers, recurring revenue, an active cap table, and a dedicated workspace inside or outside campus.',
        badge: '95+ Startups Incubated',
        highlight: 'Alumni startups operating in 15+ countries worldwide'
      }
    ]
  },
  {
    id: 'cyber-security',
    title: 'CYBER SECURITY & DEFENCE',
    category: 'Digital Sovereignty',
    tagline: 'Defend critical infrastructure, unravel advanced persistent threats, and build zero-trust architectures.',
    summary: 'Battle-test offensive and defensive techniques in an isolated, multi-node cyber-range simulating global attack vectors.',
    coreDegree: 'B.Tech CSE (Cyber Security)',
    outcomes: ['Chief Information Security Officer', 'Cloud Security Architect', 'Threat Hunter', 'Cryptographic Engineer'],
    steps: [
      {
        stage: '01. FOUNDATION',
        title: 'Networking Protocols, OS Kernels & Assembly',
        description: 'Deep understanding of TCP/IP stack internals, Linux kernel mechanics, x86 assembly, and buffer overflow dynamics.',
        badge: 'Dept of CSE & Cyber Sec',
        highlight: 'Real-time packet inspection and reverse engineering labs'
      },
      {
        stage: '02. SPECIALIZATION',
        title: 'Sandboxed Cyber-Range & Threat Hunting',
        description: 'Conduct Red Team vs Blue Team cyber wargames on an air-gapped simulated banking and SCADA grid network.',
        badge: 'AJCE Cyber Range',
        highlight: 'Zero-day vulnerability analysis & malware sandboxing'
      },
      {
        stage: '03. I²U INNOVATION',
        title: 'Security Tooling & Defense Automation',
        description: 'Engineer proprietary automated vulnerability scanners, intrusion detection systems, and zero-trust token authenticators.',
        badge: 'Security Sandbox',
        highlight: 'Past project: AI-driven autonomous honeypot for IoT fleets'
      },
      {
        stage: '04. INDUSTRY EXPOSURE',
        title: 'Bug Bounties, CISSP & CERT-In Drills',
        description: 'Participate in ethical bug bounty programs (HackerOne, Bugcrowd) and industry-supervised incident response simulations.',
        badge: 'Industry Certifications',
        highlight: 'Students acknowledged in Halls of Fame of Apple, Google, Microsoft'
      },
      {
        stage: '05. VENTURE / CAREER',
        title: 'High-Level Defence & Enterprise Careers',
        description: 'Direct entry into cybersecurity consultancies, defense contractors, financial institutions, and global tech security ops.',
        badge: 'Enterprise Placement',
        highlight: 'Starting packages among the highest in IT engineering'
      }
    ]
  }
];
