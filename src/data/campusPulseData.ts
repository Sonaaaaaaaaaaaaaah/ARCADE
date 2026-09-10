import { PulseItem } from '../types';

export const CAMPUS_PULSE_DATA: Record<'INNOVATION' | 'RESEARCH' | 'STUDENT LIFE' | 'GLOBAL' | 'CAREERS', PulseItem[]> = {
  INNOVATION: [
    {
      id: 'inv-1',
      category: 'INNOVATION',
      title: 'Startups Valley Incubatee Secures ₹45 Lakh Pre-Seed Funding for Agritech Autonomous Rover',
      date: 'September 2026',
      summary: 'Student-founded startup "RoboHarvest", incubated inside AJCE Startups Valley TBI, has secured angel syndication to manufacture 20 autonomous pepper-harvesting rovers.',
      tag: 'TBI Investment',
      readTime: '2 min read'
    },
    {
      id: 'inv-2',
      category: 'INNOVATION',
      title: 'I²U 2026 Batch Awards ₹7.5 Lakh Across 18 Undergraduate Prototype Teams',
      date: 'August 2026',
      summary: 'The biannual I²U internal jury selected innovative projects spanning low-cost dialysis filters, AI edge cameras, and composite bamboo helmets.',
      tag: 'I²U Grants',
      readTime: '3 min read'
    },
    {
      id: 'inv-3',
      category: 'INNOVATION',
      title: 'AJCE Bio-TBI Signs Technology Transfer for Indigenous Biodegradable Packaging Film',
      date: 'July 2026',
      summary: 'Developed by Chemical Engineering students using regional agricultural waste, the material dissolves naturally in soil within 28 days without microplastics.',
      tag: 'Bio-TBI',
      readTime: '2 min read'
    }
  ],
  RESEARCH: [
    {
      id: 'res-1',
      category: 'RESEARCH',
      title: 'Department of ECE Granted Indian Patent for Novel Ultra-Low-Power Cardiac Monitoring Sensor',
      date: 'September 2026',
      summary: 'The Patent Office of India has officially awarded Patent No. 449102 to AJCE researchers for an ultra-low-power telemetry patch that operates continuously on body heat.',
      tag: 'Patent Granted',
      readTime: '3 min read'
    },
    {
      id: 'res-2',
      category: 'RESEARCH',
      title: 'DST Sanctions ₹1.8 Crore Collaborative Research Project on Microgrid Battery Energy Storage',
      date: 'August 2026',
      summary: 'Faculty members from Electrical and Mechanical Engineering will lead a 3-year multi-institution initiative utilizing AJCE’s 500kW campus solar array.',
      tag: 'DST Grant',
      readTime: '4 min read'
    },
    {
      id: 'res-3',
      category: 'RESEARCH',
      title: 'AJCE AI Research Group Publishes Breakthrough in IEEE Transactions on Medical Imaging',
      date: 'June 2026',
      summary: 'Undergraduate student co-authors validated a self-supervised transformer network that detects pulmonary abnormalities from ultra-low-dose CT scans.',
      tag: 'IEEE Publication',
      readTime: '3 min read'
    }
  ],
  'STUDENT LIFE': [
    {
      id: 'stl-1',
      category: 'STUDENT LIFE',
      title: 'Team Redline Unveils "Vidyut-X" Electric All-Terrain Buggy for National SAE India Championship',
      date: 'September 2026',
      summary: 'Built completely within the AJCE Mechanical workshops and tested on the college hillside dirt track, Vidyut-X clocks 0-60 km/h in 4.1 seconds.',
      tag: 'Baja SAE',
      readTime: '3 min read'
    },
    {
      id: 'stl-2',
      category: 'STUDENT LIFE',
      title: 'Amal Jyothi Community Radio 90FM Celebrates Broadcast Milestone of 5,000 Hours of Student Programming',
      date: 'August 2026',
      summary: 'Radio 90FM continues to be the vibrant voice of Kanjirappally, airing student science discussions, campus music, and local farmer advisories.',
      tag: 'Radio 90FM',
      readTime: '2 min read'
    },
    {
      id: 'stl-3',
      category: 'STUDENT LIFE',
      title: 'AJCE Shuttlers Win Gold at KTU Inter-Collegiate Championship in Indoor Stadium',
      date: 'July 2026',
      summary: 'The men’s and women’s badminton teams secured double gold at the state university finals held in AJCE’s multi-court synthetic indoor arena.',
      tag: 'Sports Championship',
      readTime: '2 min read'
    }
  ],
  GLOBAL: [
    {
      id: 'glb-1',
      category: 'GLOBAL',
      title: 'Six AJCE Engineering Scholars Selected for Sponsored Summer Research at European Universities',
      date: 'September 2026',
      summary: 'Under the institutional Erasmus+ and bilateral academic MoUs, students will spend 12 weeks in Germany and Sweden conducting renewable energy research.',
      tag: 'Global Mobility',
      readTime: '3 min read'
    },
    {
      id: 'glb-2',
      category: 'GLOBAL',
      title: 'Delegation of Foreign University Chancellors Visits Startups Valley to Study Campus Incubation Model',
      date: 'August 2026',
      summary: 'Academic leaders praised the tight integration between classroom curriculum and early-stage student startup incorporation at AJCE.',
      tag: 'International Visit',
      readTime: '2 min read'
    },
    {
      id: 'glb-3',
      category: 'GLOBAL',
      title: 'Dual-Degree Credit Articulation Agreement Signed with Renowned Australian Tech University',
      date: 'May 2026',
      summary: 'Eligible AJCE B.Tech students can now complete 2 years in India and 2 years in Australia, graduating with globally recognized dual credentials.',
      tag: 'Dual Degree',
      readTime: '3 min read'
    }
  ],
  CAREERS: [
    {
      id: 'car-1',
      category: 'CAREERS',
      title: '2026 Placement Season Reaches 850+ Job Offers with Highest Package at ₹28.5 LPA',
      date: 'September 2026',
      summary: 'Top recruiters including Microsoft, Amazon, Bosch, NeST Digital, TCS, Cognizant, and Infosys conducted extensive on-campus drives at the Placement Complex.',
      tag: 'Placement Record',
      readTime: '2 min read'
    },
    {
      id: 'car-2',
      category: 'CAREERS',
      title: 'Bosch Automotive Training Center Certifies 140 Students with Level-4 Specialist Badges',
      date: 'August 2026',
      summary: 'Students across Mechanical and EEE earned industry-certified master technician credentials, resulting in 100% pre-placement offers with core automotive Tier-1s.',
      tag: 'Core Placement',
      readTime: '2 min read'
    },
    {
      id: 'car-3',
      category: 'CAREERS',
      title: 'Alumni Mentorship Network Connects 240 Fresh Graduates with Engineering Leads in 18 Countries',
      date: 'June 2026',
      summary: 'The "Amalite Connect" platform continues to bridge incoming engineers with senior alumni in Silicon Valley, London, Singapore, and Bangalore.',
      tag: 'Alumni Network',
      readTime: '3 min read'
    }
  ]
};
