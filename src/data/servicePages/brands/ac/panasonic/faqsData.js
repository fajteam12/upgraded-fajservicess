const items = [
    {
      "question": "What are F1, F2, and F3 in Panasonic AC?",
      "title": "What are F1, F2, and F3 in Panasonic AC?",
      "answer": "These are not error codes. If the unit displays F1, F2, or F3, it means the AC is in FAN mode, and the number represents the set fan speed. This is a normal operating condition.",
      "desc": "These are not error codes. If the unit displays F1, F2, or F3, it means the AC is in FAN mode, and the number represents the set fan speed. This is a normal operating condition."
    },
    {
      "question": "What does E4 mean on a Panasonic air conditioner?",
      "title": "What does E4 mean on a Panasonic air conditioner?",
      "answer": "E4 indicates that the unit is in defrost mode, which is normal during low-temperature operation. However, it could also point to a faulty temperature sensor if it occurs too frequently.",
      "desc": "E4 indicates that the unit is in defrost mode, which is normal during low-temperature operation. However, it could also point to a faulty temperature sensor if it occurs too frequently."
    },
    {
      "question": "What is the common problem of a Panasonic air conditioner?",
      "title": "What is the common problem of a Panasonic air conditioner?",
      "answer": "Frequent issues include cooling inefficiency, water leaks, strange noises, and error codes. These can be caused by refrigerant leaks, sensor faults, or compressor problems.",
      "desc": "Frequent issues include cooling inefficiency, water leaks, strange noises, and error codes. These can be caused by refrigerant leaks, sensor faults, or compressor problems."
    },
    {
      "question": "Why is my Panasonic AC suddenly not cooling?",
      "title": "Why is my Panasonic AC suddenly not cooling?",
      "answer": "This could be due to dirty air filters, incorrect thermostat settings, or other internal faults. Clean or replace the filters and ensure the thermostat is set correctly.",
      "desc": "This could be due to dirty air filters, incorrect thermostat settings, or other internal faults. Clean or replace the filters and ensure the thermostat is set correctly."
    },
    {
      "question": "How do I troubleshoot my Panasonic air conditioner?",
      "title": "How do I troubleshoot my Panasonic air conditioner?",
      "answer": "Start by verifying the thermostat is set to cool mode. Then check and clean the air filter. If problems persist, it may require a professional inspection.",
      "desc": "Start by verifying the thermostat is set to cool mode. Then check and clean the air filter. If problems persist, it may require a professional inspection."
    },
    {
      "question": "What happens if an air conditioner is not serviced?",
      "title": "What happens if an air conditioner is not serviced?",
      "answer": "Neglecting AC servicing leads to reduced performance, higher electricity bills, and potential breakdowns. It may also shorten the lifespan of the unit.",
      "desc": "Neglecting AC servicing leads to reduced performance, higher electricity bills, and potential breakdowns. It may also shorten the lifespan of the unit."
    },
    {
      "question": "How do you know AC needs servicing?",
      "title": "How do you know AC needs servicing?",
      "answer": "Signs include blowing warm air, poor airflow, strange noises, and visible dirt on filters or coils. Professional inspection may be required for refrigerant or electrical issues.",
      "desc": "Signs include blowing warm air, poor airflow, strange noises, and visible dirt on filters or coils. Professional inspection may be required for refrigerant or electrical issues."
    },
    {
      "question": "Why is my AC not cooling after service?",
      "title": "Why is my AC not cooling after service?",
      "answer": "This may happen due to remaining issues like clogged filters, refrigerant leaks, faulty thermostat, dirty coils, frozen components, or blocked air ducts.",
      "desc": "This may happen due to remaining issues like clogged filters, refrigerant leaks, faulty thermostat, dirty coils, frozen components, or blocked air ducts."
    },
    {
      "question": "How much does it cost to clean AC in Dubai?",
      "title": "How much does it cost to clean AC in Dubai?",
      "answer": [
        "Costs range based on unit size:",
        {
          "type": "bullets",
          "items": [
            "Regular Cleaning: AED 230–580",
            "Deep Cleaning: AED 380–830",
            "Duct Cleaning & Sanitization: from AED 580",
            "Installation: AED 175/hour",
            "Repair: AED 150/hour"
          ]
        }
      ],
      "desc": [
        "Costs range based on unit size:",
        {
          "type": "bullets",
          "items": [
            "Regular Cleaning: AED 230–580",
            "Deep Cleaning: AED 380–830",
            "Duct Cleaning & Sanitization: from AED 580",
            "Installation: AED 175/hour",
            "Repair: AED 150/hour"
          ]
        }
      ]
    },
    {
      "question": "How often should AC be cleaned in Dubai?",
      "title": "How often should AC be cleaned in Dubai?",
      "answer": "Due to constant use, it is recommended to clean your AC 3 to 5 times a year. One major and up to four minor maintenance sessions annually are advised.",
      "desc": "Due to constant use, it is recommended to clean your AC 3 to 5 times a year. One major and up to four minor maintenance sessions annually are advised."
    },
    {
      "question": "Is AC duct cleaning important in Dubai?",
      "title": "Is AC duct cleaning important in Dubai?",
      "answer": "Yes. Clean ducts improve air quality and prevent health issues. In Dubai’s dusty climate, duct cleaning is essential for maintaining a healthy indoor environment.",
      "desc": "Yes. Clean ducts improve air quality and prevent health issues. In Dubai’s dusty climate, duct cleaning is essential for maintaining a healthy indoor environment."
    },
    {
      "question": "Why is AC repair so expensive?",
      "title": "Why is AC repair so expensive?",
      "answer": "High repair costs include technician labor and backend support (e.g., customer service, scheduling, admin). Difficult-to-access units also increase the job's complexity and time.",
      "desc": "High repair costs include technician labor and backend support (e.g., customer service, scheduling, admin). Difficult-to-access units also increase the job's complexity and time."
    },
    {
      "question": "Can I sleep with wet hair in AC?",
      "title": "Can I sleep with wet hair in AC?",
      "answer": "Sleeping with wet hair under AC is not recommended. It can lead to hair breakage, bacterial growth on the scalp, and worsened dandruff. Always dry your hair before sleeping.",
      "desc": "Sleeping with wet hair under AC is not recommended. It can lead to hair breakage, bacterial growth on the scalp, and worsened dandruff. Always dry your hair before sleeping."
    },
    {
      "question": "Is it OK for an air conditioner to get wet?",
      "title": "Is it OK for an air conditioner to get wet?",
      "answer": "Yes. Outdoor AC units are designed to handle rain and moisture. Their components are weather-resistant and can function normally under standard outdoor conditions.",
      "desc": "Yes. Outdoor AC units are designed to handle rain and moisture. Their components are weather-resistant and can function normally under standard outdoor conditions."
    }
  ];

const faqsData = {
  id: "panasonic-ac-faqs",
  eyebrow: "Have Questions?",
  title: "Panasonic AC Repair and Maintenance FAQs",
  description: "Find clear answers to common questions about Panasonic AC repair, preventative maintenance, fault diagnostics, and emergency servicing in Dubai.",
  items,
  faqs: items,
};

export default faqsData;
