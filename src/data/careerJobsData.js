const companyOverview = [
  "FAJ Group, based in Dubai, UAE, started in 2010 as a technical services and sales trading company. Today, the group operates through multiple companies across technical services, trading, appliances, and electronics.",
  "FAJ Technical Services L.L.C is located in Al Quoz Industrial Area 4, Dubai, UAE.",
];

const commonTechnicalResponsibilities = [
  "Lead a mobile technical team of two to three members when required.",
  "Manage multiple service complaints and resolve faults efficiently.",
  "Attend customer sites across Dubai and communicate professionally with clients.",
  "Manage AMC locations through scheduled servicing and accurate PPM reports.",
  "Make safe, practical decisions under pressure.",
  "Prepare service reports and generate site invoices when required.",
];

export const careerPageData = {
  eyebrow: "Join Us",
  title: "Careers at FAJ",
  introEyebrow: "Join Our Team",
  introTitle: "Build Your Future With Us",
  introDescription:
    "We are always looking for talented, dedicated, and skilled professionals to join our growing team. Explore our open positions and take the next step in your career.",
  heroImage: {
    id: "new-career-page-images/career-hero",
    src: "/img/new-career-page-images/career-hero.webp",
    alt: "Technical services professionals working together at FAJ",
    width: 1920,
    height: 700,
  },
};

export const careerJobs = [
  {
    slug: "ac-commercial-equipment-technician",
    title: "AC, Appliances and Commercial Equipment Technician",
    department: "Technical Services",
    location: "Dubai, UAE",
    employmentType: "Full-Time, Contract or Permanent",
    salary: "AED 2,300–3,500 per month",
    experience: "3–5 years",
    summary:
      "We are seeking an experienced technician capable of maintaining, diagnosing, repairing, and installing air-conditioning, refrigeration, appliance, and commercial equipment.",
    sections: [
      {
        title: "About FAJ Group",
        paragraphs: companyOverview,
        links: [
          {
            label: "View related AC services",
            href: "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/",
          },
          {
            label: "View office location",
            href: "https://maps.app.goo.gl/FK6Qrd8DAkEVwA3P6",
          },
        ],
      },
      {
        title: "Job Requirements",
        paragraphs: [
          "The ideal candidate will have strong commercial and domestic field experience with air conditioners, refrigeration systems, household appliances, coffee machines, and commercial equipment.",
          "The technician must be able to troubleshoot faults, replace defective parts, complete preventive maintenance, perform installations, and return equipment to safe operating condition.",
        ],
        items: [
          "Practical experience with chiller FCUs, VRV and VRF systems, ducted split ACs, cassette ACs, package units, and wall-mounted split ACs.",
          "Strong knowledge of electrical wiring, compressor installation, gas welding, threading, nitrogen flushing, brazing, and related installation work.",
          "Knowledge of industrial refrigerators, chillers, deep freezers, washing machines, dishwashers, dryers, refrigerators, and electronic equipment.",
        ],
      },
      {
        title: "Responsibilities and Duties",
        items: commonTechnicalResponsibilities,
      },
      {
        title: "Qualifications and Contract",
        details: [
          ["Qualification", "Diploma or certificate in a relevant technical field"],
          ["Experience", "Minimum 3–5 years"],
          ["Job type", "Full-time, contract or permanent"],
          ["Work location", "In person across Dubai"],
        ],
      },
    ],
  },
  {
    slug: "coffee-machine-technician",
    title: "Coffee Machine, Espresso Machine and Appliance Repair Technician",
    department: "Specialised Services",
    location: "Dubai, UAE",
    employmentType: "Full-Time, Contract",
    salary: "Discussed during interview",
    experience: "Minimum 3 years",
    summary:
      "We are seeking a skilled technician with commercial and domestic coffee-machine experience, strong diagnostic ability, and professional customer-service skills.",
    sections: [
      {
        title: "Company Overview",
        paragraphs: companyOverview,
      },
      {
        title: "Job Requirements",
        paragraphs: [
          "The ideal candidate should have practical experience in descaling, cleaning, preventive maintenance, calibration, repair, fault diagnosis, and installation of commercial and domestic coffee machines.",
          "Experience with leading Italian espresso-machine brands and the ability to diagnose electrical and mechanical problems will be advantageous.",
        ],
      },
      {
        title: "Duties",
        items: [
          "Install, descale, service, calibrate, and maintain coffee and espresso machines.",
          "Inspect and repair equipment at customer premises and in the FAJ workshop.",
          "Respond to breakdown calls and complete work efficiently to avoid repeat repairs.",
          "Demonstrate correct servicing techniques for different coffee-machine brands.",
          "Prepare accurate service and endorsement reports for operational and sales teams.",
          "Work toward monthly productivity targets and reduce outstanding service calls.",
          "Train customers in correct machine operation and basic maintenance protocols.",
          "Explain diagnosed faults, required repairs, and equipment-care recommendations clearly.",
          "Keep tools and workshop equipment safe, organised, and in good working condition.",
          "Follow electrical and workplace safety procedures at all times.",
          ...commonTechnicalResponsibilities,
        ],
      },
      {
        title: "Qualifications and Skills",
        items: [
          "Diploma or certificate in a relevant technical field.",
          "Minimum three years of coffee-machine repair experience.",
          "Ability to work independently and as part of a technical team.",
          "Strong organisation, troubleshooting, and problem-solving ability.",
          "Ability to work effectively under pressure and meet service targets.",
        ],
        details: [
          ["Contract length", "24 months"],
          ["Job type", "Full-time or contract"],
          ["Work location", "Dubai, UAE"],
        ],
      },
    ],
  },
  {
    slug: "air-conditioning-technician",
    title: "Air Conditioning Technician",
    department: "HVAC Division",
    location: "Dubai, UAE",
    employmentType: "Full-Time, Contract",
    salary: "Discussed during interview",
    experience: "3–5 years",
    summary:
      "Join our HVAC team to install, maintain, diagnose, and repair residential and commercial air-conditioning systems throughout Dubai.",
    sections: [
      {
        title: "About FAJ Group",
        paragraphs: companyOverview,
        links: [
          {
            label: "View AC services",
            href: "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/",
          },
          {
            label: "View office location",
            href: "https://maps.app.goo.gl/FK6Qrd8DAkEVwA3P6",
          },
        ],
      },
      {
        title: "Job Requirements",
        paragraphs: [
          "We require a technician with commercial and domestic HVAC experience who can quickly diagnose faults, complete repairs, replace parts, perform maintenance, and undertake installations.",
        ],
        items: [
          "Strong knowledge of chiller FCUs, VRV and VRF systems, ducted split units, cassette units, package ACs, and wall-mounted split ACs.",
          "Ability to complete electrical wiring, compressor installation, gas welding, threading, nitrogen flushing, ducting, brazing, and FCU installation work.",
          "Knowledge of refrigeration equipment, chillers, and deep freezers is advantageous.",
        ],
      },
      {
        title: "Responsibilities and Duties",
        items: commonTechnicalResponsibilities,
      },
      {
        title: "Qualifications and Skills",
        details: [
          ["Qualification", "Diploma or certificate in a relevant field"],
          ["Experience", "Minimum 3–5 years"],
          ["Job type", "Full-time or contract"],
          ["Work location", "In person across Dubai"],
        ],
      },
    ],
  },
  {
    slug: "appliance-kitchen-equipment-technician",
    title: "Large and Small Appliances and Kitchen Equipment Technician",
    department: "Technical Services",
    location: "Dubai, UAE",
    employmentType: "Full-Time, Contract",
    salary: "Discussed during interview",
    experience: "3–5 years",
    summary:
      "We are seeking an experienced technician to install, maintain, and repair domestic appliances, commercial kitchen equipment, and refrigeration systems.",
    sections: [
      {
        title: "Company Overview",
        paragraphs: companyOverview,
        links: [
          {
            label: "View office location",
            href: "https://maps.app.goo.gl/FK6Qrd8DAkEVwA3P6",
          },
        ],
      },
      {
        title: "Job Requirements",
        paragraphs: [
          "The technician must be able to diagnose faults, repair or replace parts, perform preventive maintenance, complete installations, and ensure equipment is safe to operate.",
        ],
        items: [
          "Install commercial kitchen and refrigeration equipment and systems.",
          "Service and repair commercial cooking, washing, cooling, and food-preparation equipment.",
          "Maintain walk-in refrigerators, freezers, ice machines, ovens, dryers, dishwashers, steam cookers, and water coolers.",
          "Complete refrigeration compressor installation, soldering, and brazing work.",
          "Repair stand mixers, vacuum cleaners, robotic vacuums, ice makers, blenders, juicers, steam irons, and electronic control boards.",
          "Optimise preventive-maintenance schedules to minimise customer downtime.",
        ],
      },
      {
        title: "Responsibilities and Duties",
        items: commonTechnicalResponsibilities,
      },
      {
        title: "Qualifications and Skills",
        details: [
          ["Qualification", "Diploma or certificate in a relevant field"],
          ["Experience", "Minimum 3–5 years"],
          ["Job type", "Full-time or contract"],
          ["Work location", "In person across Dubai"],
        ],
      },
    ],
  },
  {
    slug: "front-desk-sales-representative",
    title: "Front Desk and Sales Representative",
    department: "Customer Service and Sales",
    location: "Dubai, UAE",
    employmentType: "Full-Time, Permanent or Contract",
    salary: "AED 2,500–3,200 per month",
    experience: "1–2 years",
    summary:
      "We are looking for a professional front-desk representative to manage customer enquiries, bookings, administrative tasks, and service sales.",
    sections: [
      {
        title: "Company Overview",
        paragraphs: companyOverview,
      },
      {
        title: "Job Responsibilities",
        items: [
          "Greet visitors and help customers find services or products that meet their needs.",
          "Answer calls and emails and direct enquiries to the appropriate department.",
          "Explain service features, benefits, pricing, and suitable booking options.",
          "Schedule appointments and maintain accurate front-desk records.",
          "Handle customer enquiries, feedback, and complaints professionally.",
          "Support administrative work and assist other departments when required.",
        ],
      },
      {
        title: "Skills Required",
        items: [
          "Excellent communication, interpersonal, and persuasive sales skills.",
          "Professional appearance and a positive, helpful attitude.",
          "Strong organisation and multitasking ability.",
          "Ability to work collaboratively in a fast-paced environment.",
          "Dependable, motivated, goal-driven, and customer-service focused.",
          "One to two years of receptionist, front-desk, sales, or customer-service experience.",
        ],
      },
      {
        title: "Contract and Pay",
        details: [
          ["Contract length", "24 months"],
          ["Job type", "Full-time, permanent or contract"],
          ["Salary", "AED 2,500–3,200 per month"],
          ["Relocation", "Must reliably commute or relocate to Dubai before starting"],
        ],
      },
    ],
  },
];

export const getCareerJobBySlug = (slug) =>
  careerJobs.find((job) => job.slug === slug);

export default careerJobs;
