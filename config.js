// credentials to access api

const credentials = {
  username: "coalition",
  password: "skills-test",
};

// user personal data
const user = {
  name: "Jessica Taylor",
  gender: "Female",
  age: 28,
  profile_picture: "https://fedskillstest.ct.digital/4.png",
  date_of_birth: "1996-08-23",
  phone_number: "(415) 555-1234",
  emergency_contact: "(415) 555-5678",
  insurance_type: "Sunrise Health Assurance",
  diagnosis_history: [
    {
      month: "March",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 163,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 95,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 79,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 27,
        levels: "Normal",
      },
      temperature: {
        value: 103,
        levels: "Higher than Average",
      },
    },
    {
      month: "February",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 151,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 120,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 88,
        levels: "Normal",
      },
      respiratory_rate: {
        value: 27,
        levels: "Normal",
      },
      temperature: {
        value: 99,
        levels: "Normal",
      },
    },
    {
      month: "January",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 168,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 77,
          levels: "Lower than Average",
        },
      },
      heart_rate: {
        value: 82,
        levels: "Normal",
      },
      respiratory_rate: {
        value: 17,
        levels: "Normal",
      },
      temperature: {
        value: 97,
        levels: "Normal",
      },
    },
    {
      month: "December",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 158,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 92,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 60,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 21,
        levels: "Normal",
      },
      temperature: {
        value: 99,
        levels: "Normal",
      },
    },
    {
      month: "November",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 117,
          levels: "Normal",
        },
        diastolic: {
          value: 95,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 100,
        levels: "Normal",
      },
      respiratory_rate: {
        value: 21,
        levels: "Normal",
      },
      temperature: {
        value: 103,
        levels: "Higher than Average",
      },
    },
    {
      month: "October",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 115,
          levels: "Normal",
        },
        diastolic: {
          value: 80,
          levels: "Lower than Average",
        },
      },
      heart_rate: {
        value: 63,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 14,
        levels: "Normal",
      },
      temperature: {
        value: 100,
        levels: "Normal",
      },
    },
    {
      month: "September",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 133,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 68,
          levels: "Lower than Average",
        },
      },
      heart_rate: {
        value: 91,
        levels: "Normal",
      },
      respiratory_rate: {
        value: 13,
        levels: "Normal",
      },
      temperature: {
        value: 99,
        levels: "Normal",
      },
    },
    {
      month: "August",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 149,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 70,
          levels: "Lower than Average",
        },
      },
      heart_rate: {
        value: 69,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 14,
        levels: "Normal",
      },
      temperature: {
        value: 100,
        levels: "Normal",
      },
    },
    {
      month: "July",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 165,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 95,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 71,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 14,
        levels: "Normal",
      },
      temperature: {
        value: 100,
        levels: "Normal",
      },
    },
  ],
  diagnostic_list: [
    {
      name: "Hypertension",
      description: "Chronic high blood pressure",
      status: "Under Observation",
    },
    {
      name: "Allergies",
      description:
        "The immune system's reaction to foreign substances that are typically not harmful.",
      status: "Under observation",
    },
    {
      name: "Allergies",
      description:
        "The immune system's reaction to foreign substances that are typically not harmful.",
      status: "Cured",
    },
    {
      name: "Heart Murmur",
      description:
        "Sounds during your heartbeat cycle made by turbulent blood in or near your heart.",
      status: "Cured",
    },
    // Additional diagnostics
  ],
  lab_results: [
    "Blood Tests",
    "CT Scans",
    // More lab results
  ],
};