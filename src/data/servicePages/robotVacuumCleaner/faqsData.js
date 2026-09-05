const faqsData = {
  id: "vacuum-faqs",
  eyebrow: "Help Center",
  title: "Robot Vacuum Cleaner FAQs",
  description:
    "Answers to common questions about robot-vacuum operation, connectivity and selection.",
  items: [
    {
      question: "Do robot vacuums work without the internet?",
      answer:
        "Yes, most robot vacuums can perform basic cleaning functions without an active Wi-Fi or internet connection. After the initial setup, you can typically press a physical \"Clean\" button to start a cleaning cycle. However, advanced features such as app control, scheduling, and smart mapping require an internet connection.",
    },
    {
      question: "How long do robot vacuums run?",
      answer: [
        "Wi-Fi connected models like the 900 and S9 series can clean for up to two hours on the lowest cleaning setting, though the Power Boost feature will deplete the battery more quickly.",
        "Wi-Fi connected models from the E, 600, and 800 series can run for up to 90 minutes, while non-Wi-Fi connected models from the 500, 600, 700, and 800 series typically last up to 60 minutes.",
      ],
    },
    {
      question: "Can robots vacuum work without electricity?",
      answer:
        "Currently, all robots rely on electricity and computer chips to function. A robotic \"brain\" made up of algorithms and software interprets information, which is then relayed to the hardware through an encoder, allowing the robot to perform actions.",
    },
    {
      question: "How high can robot vacuum cleaner climb?",
      answer: [
        {
          type: "bullets",
          items: [
            "Typically, robot vacuums can handle a maximum door threshold height of 15-20 mm.",
            "The thresholds used in American homes vary by manufacturer, ranging from 6 mm to 25 mm or more.",
          ],
        },
      ],
    },
    {
      question: "Which robot vacuum cleaner is the best?",
      answer:
        {
          type: "bullets",
          items: [
            "Best overall: Ecovacs Deebot T30S Combo",
            "Best robot vacuum and mop combo, best for hardwood floors: Yeedi M12 Pro+",
            "Best Shark robovac: Shark PowerDetect Never Touch Pro",
            "Best value: Eufy 3-in-1 E20",
            "Best Roomba: iRobot Roomba Combo J7 Plus"
          ],
        },
    },
    {
      question: "How do I choose a robot vacuum cleaner?",
      answer:
        "Suction Power: Measured in Pascals (Pa), the higher the Pa, the more dirt it can collect. To choose a robot vacuum based on suction power, consider the types of flooring in your home, as different flooring types require varying suction levels; hard floors and tiles typically need less suction compared to plush carpets.",
    },
    {
      question: "What is a robot vacuum cleaner called?",
      answer:
        "A robotic vacuum cleaner, sometimes referred to as a robovac or a Roomba (a generic trademark), is an autonomous vacuum cleaner equipped with a limited vacuum floor cleaning system, sensors, robotic drives, programmable controllers, and cleaning routines.",
    },
    {
      question: "What are the features of robotic vacuum cleaners?",
      answer:
        {
          type: "bullets",
          items: [
            "Navigation Technology: Robots use various sensors for navigation. Mapping Obstacle Avoidance",
            "Suction Power & Brushes Mopping",
            "Object Identification Technology",
            "Customizable Cleaning Settings",
            "Pet Mode",
          ]
        },
    },
    {
      question: "Does a robot vacuum need Wi-Fi?",
      answer:
        "Yes, a robot cleaner can operate without Wi-Fi and perform comprehensive home cleanups, spot cleanups, and return to the dock with the push of a button. Additionally, it can respond to basic voice commands.",
    },
    {
      question: "Which robot vacuums work offline?",
      answer:
        "A standout model is the Eufy 11S, which is one of the few popular brands that offers a completely offline model. It has been tested and is recommended as a decent budget-friendly robot vacuum. If full offline functionality is important to you, this is a good choice.",
    },
  ],
};

export default faqsData;
