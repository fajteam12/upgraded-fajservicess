const faqsData = {
  eyebrow: "Common Inquiries",
  title: "Commercial Laundry Equipment FAQs",
  description:
    "Answers about supported equipment, preventive schedules, warning signs and routine maintenance.",
  items: [
    {
      question: "What kinds of industrial laundry equipment are you capable of servicing?",
      answer: "We specialize in providing repair services for industrial dryers, washers, and other equipment used in laundromats, hotels, and hospitals.",
    },
    {
      question: "How frequently ought I to plan maintenance?",
      answer: "it's recommended to have routine examinations every three to six months to avoid problems and maximize efficiency.",
    },
    {
      question: "Do you provide individualized service schedules?",
      answer: "Indeed, Our service plans are adaptable to meet the particular requirements of various business environments.",
    },
    {
      question: "How do I avoid problems in between service calls?",
      answer: "Maintain lint traps on a regular basis, abide by equipment instructions, and report strange sounds or behaviors right away.",
    },
    {
      question: "What are signs a washer dryer needs professional repair?",
      answer: [{
        type: "bullets",
        items: [
          "Ongoing unusual noises, vibration, or burning smells.",
          "Washer dryer machines are failing to drain, spin, or heat properly.",
          "Electrical, timer, or payment system malfunctions."
        ]
      }],
    },
    {
      question: "How long do commercial washers dryers last?",
      answer: "On average, equipment lasts between 10 to 15 years, with high-quality models reaching 10,000 to 30,000 cycles.",
    },
    {
      question: "Why is my commercial dryer not heating?",
      answer: [
        {
          type: "bullets",
          items: [
            "Common reasons include a broken heating element.",
            "A faulty thermal fuse.",
            "A malfunctioning igniter (for gas models).",
            "Clogged airflow that reduces efficiency."
          ]
        }
      ],
    },
    {
      question: "How often should I clean my laundry equipment?",
      answer: [
        {
          type: "bullets",
          items: [
            "Lint filters should be cleaned after every use.",
            "Deep cleaning (e.g., removing lint buildup inside the cabinet) should be done periodically based on usage volume."
          ]
        }
      ],
    },
    {
      question: "What are the daily, weekly, and monthly maintenance tasks for commercial laundry equipment?",
      answer: [
        {
          type: "bullets",
          items: [
              "Daily: Clean lint filters, wipe down exteriors, and check for leaks.",
              "Weekly: Inspect door seals and gaskets, check detergent dispensers, and examine payment systems.",
              "Monthly/Quarterly: Inspect drive belts, clean water inlet filters, check drainage, and review error logs."
          ]
        }
      ],
    },
  ],
};

export default faqsData;
