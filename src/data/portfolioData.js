export const profile = {
  name: "Fadhillah Salman Alfarisi",
  role: "Electrical & Instrumentation Engineer",
  tagline: "Instrumentation • Electrical • IoT • Software",

  description:
    "Engineer dengan pengalaman di bidang instrumentation, electrical, environmental monitoring system, electronics, dan IoT. Saat ini melanjutkan studi S1 Teknik Informatika untuk memperkuat kemampuan dalam software development dan system integration.",

  about:
    "Saya memiliki pengalaman dalam installation, maintenance, troubleshooting, calibration, dan integration sistem instrumentasi serta environmental monitoring. Dalam pekerjaan, saya terbiasa menangani sensor, control panel, data acquisition, dan analisis performa sistem. Selain pengalaman engineering, saya juga mengembangkan kemampuan programming dan software development melalui studi Teknik Informatika dan berbagai project pribadi.",

  location: "Jawa Barat, Indonesia",
};

export const skills = {
  Instrumentation: [
    "AQMS",
    "WQMS",
    "Sensor Calibration",
    "Data Acquisition",
    "Instrumentation",
    "Troubleshooting",
  ],

  Electrical: [
    "Electrical Panel",
    "Panel Wiring",
    "Electrical Installation",
    "Control System",
    "Electrical Troubleshooting",
  ],

  "Industrial Automation": [
    "PLC",
    "SCADA",
    "HMI",
    "Control Logic",
    "Industrial Control",
    "Monitoring & Control",
  ],

  Electronics: [
    "PCB Design",
    "Altium Designer",
    "Proteus",
    "Soldering",
    "Electronic Troubleshooting",
  ],

  IoT: [
    "ESP32",
    "Sensor Integration",
    "IoT Monitoring",
    "Data Logging",
    "Real-time Monitoring",
  ],

  Programming: [
    "React",
    "JavaScript",
    "Node.js",
    "SQLite",
    "REST API",
  ],
};

export const experience = [
  {
    company: "PT Cakrawala Bima Instrument",
    position: "Engineer – Instrument Engineering",
    period: "2024 – Present",
    description:
      "Menangani installation, maintenance, calibration, troubleshooting, dan integration sistem environmental monitoring serta instrumentation.",
    responsibilities: [
      "Installation dan maintenance AQMS dan WQMS.",
      "Electrical wiring dan QC control panel.",
      "Installation dan calibration sensor instrumentation.",
      "IoT sensor data acquisition dan performance analysis.",
      "Troubleshooting equipment dan instrumentation system.",
      "Membuat laporan hasil measurement, maintenance, dan repair.",
    ],
  },
];

export const education = [
  {
    institution: "BINUS University",
    degree: "S1 Teknik Informatika",
    period: "Current",
    description:
      "Melanjutkan studi Teknik Informatika dengan fokus pada software development, programming, database, dan system development.",
  },
  {
    institution: "Politeknik Negeri Bandung",
    degree: "D3 Teknik Elektronika",
    period: "Completed",
    description:
      "Mempelajari elektronika, sistem kontrol, instrumentation, microcontroller, electrical system, dan troubleshooting.",
  },
];

export const projects = [
  {
  title: "Hydroponic Monitoring System",
  category: "IoT & Software",
  featured: true,

  description:
    "Web-based monitoring system yang saya kembangkan secara mandiri untuk memantau kondisi hidroponik melalui parameter kualitas air dan kondisi sistem secara terpusat.",

  overview:
    "Hydroponic Monitoring System merupakan project pribadi yang saya rancang dan kembangkan secara mandiri sebagai platform monitoring hidroponik berbasis web. Sistem ini dibuat untuk memantau kondisi tanaman kangkung melalui beberapa parameter utama seperti pH, EC, TDS, temperatur air, water level, dan flow. Project mencakup pengembangan frontend, backend, database, REST API, data simulation, device management, historical data, dan dashboard monitoring.",

  role:
    "Independent Full-stack Developer & Project Owner",

  technologies: [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "SQLite",
    "REST API",
    "Vite",
  ],

  highlights: [
    "Dashboard monitoring",
    "Sensor history",
    "Device management",
    "Simulation mode",
    "CSV export",
    "REST API integration",
    "SQLite database",
    "Responsive web interface",
  ],

  scope: [
    "System architecture design",
    "Frontend development",
    "Backend REST API development",
    "SQLite database development",
    "Dashboard UI development",
    "Historical data management",
    "Device management",
    "Simulation mode",
    "CSV export",
    "System testing",
  ],

  parameters: [
    "pH",
    "EC",
    "TDS",
    "Water Temperature",
    "Water Level",
    "Flow",
  ],

  architecture: [
    "Sensor / Simulation",
    "ESP32",
    "Node.js API",
    "SQLite Database",
    "React Dashboard",
  ],

  status:
    "Versi software monitoring telah dikembangkan dan dapat menjalankan dashboard, REST API, SQLite database, historical data, device management, simulation mode, dan CSV export. Integrasi ESP32 dan sensor fisik merupakan tahap pengembangan berikutnya.",

  image:
    "/images/projects/hydroponic-dashboard.png",
},
  {
    title: "Water Quality Monitoring System",
    category: "Instrumentation",
    featured: true,

    description:
      "Installation dan maintenance sistem monitoring kualitas air menggunakan berbagai sensor parameter kualitas air untuk memperoleh data kondisi perairan secara berkala.",

    overview:
      "Project Water Quality Monitoring System berfokus pada implementasi sistem monitoring kualitas air dengan integrasi sensor, data acquisition, control panel, serta proses calibration dan maintenance. Sistem digunakan untuk memperoleh data parameter kualitas air secara terukur dan mendukung proses monitoring lingkungan.",

    role: "Instrumentation Engineer",

    technologies: [
      "Instrumentation",
      "Water Quality Sensors",
      "Data Acquisition",
      "Calibration",
      "IoT",
      "Control Panel",
    ],

    highlights: [
      "Sensor installation",
      "Sensor calibration",
      "Control panel wiring",
      "Data acquisition",
      "System troubleshooting",
      "Preventive maintenance",
    ],

    scope: [
      "Installation water quality monitoring system",
      "Sensor installation",
      "Sensor calibration",
      "Control panel wiring",
      "Data acquisition",
      "System maintenance",
      "Troubleshooting",
    ],

    parameters: [
      "pH",
      "Ammonia",
      "Nitrate",
      "DO",
      "TSS",
      "COD",
      "BOD",
    ],

    status:
      "Project mencakup installation, calibration, maintenance, troubleshooting, dan monitoring performa sistem WQMS.",
  },

  {
    title: "Air Quality Monitoring System",
    category: "Instrumentation",
    featured: true,

    description:
      "Installation dan maintenance sistem monitoring kualitas udara untuk pengukuran particulate matter, gas pollutants, dan parameter meteorologi.",

    overview:
      "Project Air Quality Monitoring System berfokus pada implementasi sistem monitoring kualitas udara dengan integrasi sensor particulate matter, gas, meteorologi, data acquisition, dan sistem kelistrikan. Sistem digunakan untuk memperoleh data kondisi kualitas udara secara terukur.",

    role: "Instrumentation Engineer",

    technologies: [
      "AQMS",
      "Gas Sensors",
      "PM Sensors",
      "Weather Sensors",
      "Data Acquisition",
      "Calibration",
    ],

    highlights: [
      "AQMS installation",
      "Sensor installation",
      "Sensor calibration",
      "Electrical wiring",
      "Data acquisition",
      "System maintenance",
    ],

    scope: [
      "AQMS installation",
      "Air quality sensor installation",
      "Sensor calibration",
      "Electrical system wiring",
      "Data acquisition",
      "Preventive maintenance",
      "Corrective maintenance",
    ],

    parameters: [
      "PM2.5",
      "PM10",
      "CO",
      "O3",
      "SO2",
      "NO2",
      "HC",
      "Weather",
    ],

    status:
      "Project mencakup installation, calibration, maintenance, troubleshooting, dan evaluasi performa sistem AQMS.",
  },

  {
    title: "ESP32 RO Monitoring System",
    category: "Electronics & IoT",
    featured: true,

    description:
      "Perancangan sistem monitoring Reverse Osmosis berbasis ESP32 dengan sensor tekanan, TDS, flow, display, dan sistem kontrol.",

    overview:
      "Project ini merupakan pengembangan sistem monitoring Reverse Osmosis berbasis ESP32. Sistem dirancang untuk membaca beberapa parameter proses seperti tekanan, TDS, dan flow serta menampilkan informasi melalui display. Project juga mencakup perancangan electronic system dan PCB.",

    role: "Electronics & IoT Development",

    technologies: [
      "ESP32",
      "Altium Designer",
      "Pressure Sensor",
      "TDS Sensor",
      "Flow Sensor",
      "Nextion Display",
      "PCB Design",
    ],

    highlights: [
      "ESP32 integration",
      "Pressure monitoring",
      "TDS monitoring",
      "Flow monitoring",
      "Display interface",
      "PCB development",
    ],

    scope: [
      "Microcontroller integration",
      "Sensor integration",
      "Power supply design",
      "Display integration",
      "Control system development",
      "PCB schematic",
      "PCB layout",
    ],

    parameters: [
      "Pressure",
      "TDS",
      "Flow",
    ],

    status:
      "Project berada pada tahap pengembangan electronic system, sensor integration, interface, dan PCB design.",
  },

  {
    title: "PCB Design & Development",
    category: "Electronics",
    featured: false,

    description:
      "Perancangan schematic dan PCB untuk sistem elektronik berbasis microcontroller, sensor, power supply, dan control system.",

    overview:
      "Project PCB Design & Development berfokus pada proses perancangan electronic system mulai dari schematic, component selection, electrical checking, PCB layout, hingga persiapan proses assembly dan testing.",

    role: "Electronics Development",

    technologies: [
      "Altium Designer",
      "Proteus",
      "PCB Design",
      "Microcontroller",
      "Electronics",
      "Soldering",
    ],

    highlights: [
      "Schematic design",
      "Component selection",
      "PCB layout",
      "ERC checking",
      "Soldering",
      "Testing",
    ],

    scope: [
      "Circuit schematic development",
      "Component selection",
      "Footprint selection",
      "Electrical rule checking",
      "PCB layout",
      "Board assembly",
      "Testing and troubleshooting",
    ],

    status:
      "Project mencakup proses pengembangan PCB dari schematic hingga tahap assembly dan testing.",
  },

  {
    title: "WQMS River Monitoring Project",
    category: "Environmental Monitoring",
    featured: false,

    description:
      "Implementasi sistem monitoring kualitas air pada area sungai untuk pemantauan parameter kualitas air secara berkala.",

    overview:
      "Project ini merupakan implementasi Water Quality Monitoring System untuk monitoring kualitas air pada area sungai. Pekerjaan mencakup installation system, sensor maintenance, calibration, troubleshooting, serta training operator dalam pengoperasian dan maintenance rutin.",

    role: "Instrumentation Engineer",

    technologies: [
      "WQMS",
      "Water Quality Sensors",
      "Data Logger",
      "IoT",
      "Calibration",
    ],

    highlights: [
      "System installation",
      "Sensor maintenance",
      "Calibration",
      "Troubleshooting",
      "Operator training",
    ],

    scope: [
      "WQMS installation",
      "Water quality sensor installation",
      "Sensor calibration",
      "Data logger integration",
      "System troubleshooting",
      "Operator training",
      "Routine maintenance guidance",
    ],

    parameters: [
      "pH",
      "DO",
      "TSS",
      "COD",
      "Ammonia",
      "Nitrate",
      "BOD",
    ],

    status:
      "Project mencakup implementasi sistem monitoring, maintenance sensor, troubleshooting, calibration, serta training operator.",
  },

  {
    title: "IPAL & AOP Treatment System",
    category: "Environmental Engineering",
    featured: false,

    description:
      "Perancangan konsep sistem pengolahan air limbah yang menggabungkan proses biological treatment dan Advanced Oxidation Process.",

    overview:
      "Project ini merupakan pengembangan konsep sistem pengolahan air limbah yang menggabungkan proses preliminary treatment, biological treatment, aeration, sedimentation, filtration, serta Advanced Oxidation Process menggunakan kombinasi UV-C dan ozone.",

    role: "Engineering Development",

    technologies: [
      "IPAL",
      "Aeration",
      "Biological Treatment",
      "Honeycomb Media",
      "UV-C",
      "Ozone",
    ],

    highlights: [
      "Process flow design",
      "Aeration system",
      "Biological treatment",
      "UV-C integration",
      "Ozone integration",
      "Treatment process development",
    ],

    scope: [
      "Wastewater treatment process design",
      "Grease trap",
      "Screening",
      "Equalization",
      "Biological treatment",
      "Aeration",
      "Final settling",
      "AOP treatment",
    ],

    status:
      "Project berada pada tahap engineering development dan process flow design untuk kombinasi biological treatment dan Advanced Oxidation Process.",
  },

  {
    title: "AQMS & WQMS Maintenance",
    category: "Maintenance & Troubleshooting",
    featured: false,

    description:
      "Maintenance dan troubleshooting sistem environmental monitoring untuk menjaga performa sensor, panel, data acquisition, dan sistem monitoring.",

    overview:
      "Project maintenance mencakup preventive maintenance dan corrective maintenance pada equipment environmental monitoring. Aktivitas meliputi pemeriksaan sensor, panel, data acquisition, calibration, troubleshooting, repair, serta evaluasi performa sistem.",

    role: "Instrumentation Engineer",

    technologies: [
      "Preventive Maintenance",
      "Corrective Maintenance",
      "Calibration",
      "Troubleshooting",
      "Instrumentation",
      "Data Acquisition",
    ],

    highlights: [
      "Preventive maintenance",
      "Corrective maintenance",
      "Sensor troubleshooting",
      "Calibration",
      "Performance evaluation",
      "Technical reporting",
    ],

    scope: [
      "Equipment inspection",
      "Sensor inspection",
      "Calibration",
      "Electrical troubleshooting",
      "Data acquisition troubleshooting",
      "Repair",
      "Performance evaluation",
      "Technical reporting",
    ],

    status:
      "Maintenance dilakukan untuk menjaga reliability, measurement performance, dan operational condition dari sistem AQMS dan WQMS.",
  },

  {
    title: "PLC & SCADA Monitoring System",
    category: "Industrial Automation",
    featured: true,

    description:
      "Project pengembangan konsep monitoring dan control berbasis PLC, HMI, dan SCADA untuk memantau parameter proses serta status equipment secara terpusat.",

    overview:
      "Project ini merepresentasikan pengembangan sistem monitoring dan control berbasis industrial automation. Konsep sistem mencakup hubungan antara field input, PLC, HMI, dan SCADA untuk monitoring status equipment serta parameter proses.",

    role: "Instrumentation & Automation",

    technologies: [
      "PLC",
      "SCADA",
      "HMI",
      "Control System",
      "Industrial Automation",
    ],

    highlights: [
      "PLC programming",
      "Control logic",
      "SCADA monitoring",
      "HMI development",
      "Digital & analog I/O",
      "Equipment monitoring",
    ],

    scope: [
      "Control logic development",
      "PLC I/O concept",
      "HMI interface",
      "SCADA monitoring concept",
      "Equipment status monitoring",
      "Digital input and output",
      "Analog signal monitoring",
    ],

    status:
      "Project digunakan sebagai portfolio pengembangan kemampuan industrial automation dan system monitoring. Detail implementasi hardware dan software dapat disesuaikan dengan project aktual.",
  },
];