const items = [
    {
      "question": "How to read Bryant AC model numbers?",
      "title": "How to read Bryant AC model numbers?",
      "answer": [
        "Bryant uses two styles of model number identification:",
        {
          "type": "bullets",
          "items": [
            "Style 1: Starts with a letter indicating the manufacturing location, followed by two digits representing the year of manufacture (from 2000 onward). Example: 'C12A00152' means it was made at the Clarksville Plant in 2012.",
            "Style 2: Starts with numbers, where the first two digits indicate the year of manufacture."
          ]
        }
      ],
      "desc": [
        "Bryant uses two styles of model number identification:",
        {
          "type": "bullets",
          "items": [
            "Style 1: Starts with a letter indicating the manufacturing location, followed by two digits representing the year of manufacture (from 2000 onward). Example: 'C12A00152' means it was made at the Clarksville Plant in 2012.",
            "Style 2: Starts with numbers, where the first two digits indicate the year of manufacture."
          ]
        }
      ]
    },
    {
      "question": "How to tell the tonnage of a Bryant AC unit?",
      "title": "How to tell the tonnage of a Bryant AC unit?",
      "answer": "Look for a sticker or plaque on the AC unit. Tonnage is shown as an even two-digit number between 18 and 60 in or near the model number. Divide this number by 12 to get the tonnage.",
      "desc": "Look for a sticker or plaque on the AC unit. Tonnage is shown as an even two-digit number between 18 and 60 in or near the model number. Divide this number by 12 to get the tonnage."
    },
    {
      "question": "How long does a Bryant air conditioner last?",
      "title": "How long does a Bryant air conditioner last?",
      "answer": "Bryant air conditioners typically last 15 to 20 years with proper care. Lower-end systems may only last about 10 years and often need costly repairs.",
      "desc": "Bryant air conditioners typically last 15 to 20 years with proper care. Lower-end systems may only last about 10 years and often need costly repairs."
    },
    {
      "question": "Why won't my Bryant thermostat change temperature?",
      "title": "Why won't my Bryant thermostat change temperature?",
      "answer": "Your thermostat might be locked. To unlock it, press the '+' and '–' buttons simultaneously for 3–4 seconds. Then try adjusting the temperature again.",
      "desc": "Your thermostat might be locked. To unlock it, press the '+' and '–' buttons simultaneously for 3–4 seconds. Then try adjusting the temperature again."
    },
    {
      "question": "How to maintain a Bryant AC unit?",
      "title": "How to maintain a Bryant AC unit?",
      "answer": [
        "Steps to maintain your AC:",
        {
          "type": "numbered",
          "items": [
            "Shut off power.",
            "Remove debris.",
            "Clean and straighten fins.",
            "Clear the area around the unit.",
            "Level the unit.",
            "Clean the evaporator coil.",
            "Clean the evaporator drain."
          ]
        }
      ],
      "desc": [
        "Steps to maintain your AC:",
        {
          "type": "numbered",
          "items": [
            "Shut off power.",
            "Remove debris.",
            "Clean and straighten fins.",
            "Clear the area around the unit.",
            "Level the unit.",
            "Clean the evaporator coil.",
            "Clean the evaporator drain."
          ]
        }
      ]
    },
    {
      "question": "How do I reset a Bryant air conditioner?",
      "title": "How do I reset a Bryant air conditioner?",
      "answer": [
        "To reset your Bryant AC:",
        {
          "type": "numbered",
          "items": [
            "Turn off the unit.",
            "Locate the circuit breaker.",
            "Identify and switch off the AC breaker.",
            "Wait 30 seconds.",
            "Switch it back on."
          ]
        }
      ],
      "desc": [
        "To reset your Bryant AC:",
        {
          "type": "numbered",
          "items": [
            "Turn off the unit.",
            "Locate the circuit breaker.",
            "Identify and switch off the AC breaker.",
            "Wait 30 seconds.",
            "Switch it back on."
          ]
        }
      ]
    },
    {
      "question": "How often should Bryant AC filters be changed in Dubai?",
      "title": "How often should Bryant AC filters be changed in Dubai?",
      "answer": "Change the air filter every 90 days (3 months), or more frequently in dusty environments, homes with pets, or if the system is older.",
      "desc": "Change the air filter every 90 days (3 months), or more frequently in dusty environments, homes with pets, or if the system is older."
    },
    {
      "question": "Do air conditioners need regassing?",
      "title": "Do air conditioners need regassing?",
      "answer": "No, not unless there’s a refrigerant leak. Properly installed ACs don’t require re-gassing. If cooling drops, have a technician check for leaks.",
      "desc": "No, not unless there’s a refrigerant leak. Properly installed ACs don’t require re-gassing. If cooling drops, have a technician check for leaks."
    },
    {
      "question": "How to reset Bryant AC thermostat?",
      "title": "How to reset Bryant AC thermostat?",
      "answer": "Turn off the thermostat/HVAC breaker for 20–30 seconds, then switch it back on. Wait several minutes for the system to reboot.",
      "desc": "Turn off the thermostat/HVAC breaker for 20–30 seconds, then switch it back on. Wait several minutes for the system to reboot."
    },
    {
      "question": "What is error 79 on Bryant thermostat?",
      "title": "What is error 79 on Bryant thermostat?",
      "answer": "Error 79 means the low-pressure switch has detected low suction pressure, triggering a hard lockout. This protects your HVAC system from potential compressor damage.",
      "desc": "Error 79 means the low-pressure switch has detected low suction pressure, triggering a hard lockout. This protects your HVAC system from potential compressor damage."
    }
  ];

const faqsData = {
  id: "bryant-ac-faqs",
  eyebrow: "FAQS",
  title: "Frequently Asked Questions",
  description: "Find clear answers to common questions about Bryant AC repair, preventative maintenance, fault diagnostics, and emergency servicing in Dubai.",
  items,
  faqs: items,
};

export default faqsData;
