// ============================================================
// Portfolio content — Ravisankar Selvaraju
// All facts below are sourced from CV_master.tex and the
// job-search workspace's achievements/profile memory (verified,
// evidence-backed). Publication links are DOIs cross-checked
// against ORCID 0009-0008-9341-8161. Project media (plots,
// photos, video) still to be supplied by Ravi — see README.
// ============================================================

const profile = {
  name: 'Ravisankar Selvaraju',
  title: 'Robotics Application Engineer | Autonomous Systems',
  location: 'Bonn, Germany',
  bio: "A robotics enthusiast with a foundation in mechatronics engineering, pursuing a master's in autonomous systems. I am passionate about robotics from a young age, which led me to pursue both my bachelor's and master's degrees in the field of robotics. I enjoy solving real-time problems as a team under pressure, which motivates me to participate in robotics competitions. Notably, we won the world championship in RoboCup@Work 2023 as the b-it-bots team from H-BRS. I have been working on state estimation and improving odometry in autonomous systems for the past two years. My master's thesis on slip-aware state estimation for a planetary rover using Invariant Extended Kalman Filter is submitted and I am currently awaiting my defense.",
  photo: 'assets/photo.jpg',
  links: {
    github: 'https://github.com/RavisankarSelvaraju',
    linkedin: 'https://www.linkedin.com/in/ravi-sankar-s/',
    orcid: 'https://orcid.org/0009-0008-9341-8161',
    email: 'mailto:ravisankar1223@gmail.com',
    cv: 'assets/CV.pdf',
  },
  education: [
    {
      degree: 'M.Sc. Autonomous Systems',
      school: 'Hochschule Bonn-Rhein-Sieg (H-BRS), Germany',
      period: 'Sept 2021 – Present',
      detail: 'GPA 2.2',
    },
    {
      degree: 'B.E. Mechatronics Engineering',
      school: 'Kongu Engineering College, India',
      period: 'Aug 2017 – Apr 2021',
      detail: 'CGPA 9.13 / 10.0',
    },
  ],
  skills: [
    'State Estimation', 'Sensor Fusion', 'Kalman Filtering (EKF/InEKF)',
    'SLAM (GTSAM, coursework)', 'Robot Kinematics & Dynamics', 'C++', 'Python',
    'ROS / ROS2', 'Git', 'Docker', 'Linux', 'SolidWorks (CSWA/CSWP)',
  ],
};

// Category codes double as filter-pill values.
const categoryLabels = {
  dfki: 'DFKI Research',
  hbrs: 'RoboCup / Robothon',
  academic: 'Coursework',
  ford: 'Ford Internship',
};

const entries = [
  // ── DFKI — Thesis ─────────────────────────────────────────
  {
    id: 'thesis',
    category: ['dfki'],
    period: 'Jul 2023 – Present',
    org: 'Research Assistant · Robotic Innovation Center (RIC), DFKI Bremen',
    title: "Slip-Aware State Estimation for a Rimless-Wheeled Rover (Master's Thesis)",
    shortDesc: 'Multi-sensor state estimation using an Invariant Extended Kalman Filter (InEKF), validated on real hardware against motion-capture ground truth.',
    fullDesc: [
      'Designed a multi-sensor state-estimation system for a rimless-wheeled rover operating in GPS-denied, slip-prone, unstructured terrain, fusing IMU, wheel-encoder, and contact-based measurements through an Invariant Extended Kalman Filter (InEKF).',
      'Designed a Potential Contact Velocity (PCV) update model with adaptive slip filtering, to reject unreliable wheel-encoder measurements on loose terrain.',
      'Validated the approach on the Coyote 3 rover at RIC DFKI against VICON motion-capture ground truth in real-world experiments.',
      'Status: thesis submitted, defense pending.',
    ],
    tags: ['InEKF', 'Sensor Fusion', 'State Estimation', 'C++', 'Python', 'Real-World Validation'],
    links: [],
  },
  // ── DFKI — Odometry evaluation tooling ───────────────────
  {
    id: 'odometry-eval',
    category: ['dfki'],
    period: 'Jul 2023 – Present',
    org: 'Research Assistant · Robotic Innovation Center (RIC), DFKI Bremen',
    title: 'Odometry Algorithm Evaluation & Validation Toolset',
    shortDesc: 'Evaluation scripts and a validation pipeline for automatic odometry evaluation of rimless-wheeled rovers, using the ROCK framework and MARS simulation.',
    fullDesc: [
      'Designed and evaluated odometry algorithms for rimless-wheeled rovers in GPS-denied, slip-prone environments using the ROCK framework and MARS simulation.',
      'Built evaluation scripts and a validation toolset pipeline to automate odometry evaluation, replacing manual, one-off comparison against ground truth.',
    ],
    tags: ['ROCK Framework', 'MARS Simulation', 'Odometry', 'Python'],
    links: [],
  },
  // ── DFKI — Tip-over prediction ────────────────────────────
  {
    id: 'tipover',
    category: ['dfki'],
    period: 'Jul 2023 – Present',
    org: 'Research Assistant · Robotic Innovation Center (RIC), DFKI Bremen',
    title: 'Prediction-Based Tip-Over Prevention for Planetary Exploration Rovers',
    shortDesc: 'Tip-over prediction for planetary rovers combining deep learning and physics-based models. Published at EASN 2024.',
    fullDesc: [
      'Assisted in developing tip-over prediction for planetary exploration rovers, combining deep-learning and physics-based modeling approaches.',
      'Published as "Prediction-Based Tip-Over Prevention for Planetary Exploration Rovers" at the 14th EASN International Conference, Greece, 2024 (Engineering Proceedings, 2025).',
    ],
    tags: ['Deep Learning', 'Physics-Based Modeling', 'Planetary Rovers'],
    links: [
      { label: 'Paper (DOI)', url: 'https://doi.org/10.3390/engproc2025090044' },
    ],
  },
  // ── DFKI — ERC 2025 ───────────────────────────────────────
  {
    id: 'erc2025',
    category: ['dfki'],
    period: '2024 – 2025',
    org: 'Research Assistant · Robotic Innovation Center (RIC), DFKI Bremen',
    title: 'European Rover Challenge (ERC) 2025 — Qualification',
    shortDesc: 'Manipulator simulation, Raspberry Pi driver interface development, and Docker/version-control setup supporting the team\'s ERC 2025 qualification.',
    fullDesc: [
      'Contributed to the team\'s European Rover Challenge (ERC) 2025 qualification.',
      'Built manipulator simulation and a Raspberry Pi driver interface.',
      'Set up Docker and version control for the team\'s software environment.',
    ],
    tags: ['Docker', 'Raspberry Pi', 'Simulation', 'Manipulator'],
    links: [],
  },
  // ── HBRS — RoboCup@Work 2023 ──────────────────────────────
  {
    id: 'robocup',
    category: ['hbrs'],
    period: 'Nov 2021 – Jul 2023',
    org: 'b-it-bots @Work, H-BRS',
    title: 'RoboCup@Work 2023 — World Champion',
    shortDesc: 'Perception and manipulation modules for a ROS Noetic mobile-manipulation system. World championship win, Bordeaux, France.',
    fullDesc: [
      'Developed and assisted in perception and manipulation modules (empty-space detection, pre-grasp planning, task planning) for a ROS Noetic mobile-manipulation system used in RoboCup@Work competitions.',
      'Contributed to the b-it-bots @Work lab at H-BRS using Python and ROS/ROS2 to solve RoboCup competition tasks, culminating in the world championship win in the 2023 RoboCup@Work league in Bordeaux, France.',
      'Co-authored a book chapter on the win: "b-it-bots: Winners of RoboCup@Work 2023," RoboCup 2023: Robot World Cup XXVI (Springer LNCS, 2024).',
    ],
    tags: ['ROS Noetic', 'Perception', 'Manipulation', 'Task Planning', 'Python'],
    links: [
      { label: 'Book chapter (DOI)', url: 'https://doi.org/10.1007/978-3-031-55015-7_29' },
    ],
  },
  // ── HBRS — Robothon 2023 ──────────────────────────────────
  {
    id: 'robothon',
    category: ['hbrs'],
    period: 'Nov 2021 – Jul 2023',
    org: 'b-it-bots, H-BRS',
    title: 'Robothon 2023 — 6th Place, Grand Challenge',
    shortDesc: 'Force-controlled manipulation behaviors (slider task, door opening, probe insertion) on a Kinova Gen3 arm, using velocity/force feedback.',
    fullDesc: [
      'Developed force-controlled manipulation behaviors, slider task, door opening, and probe insertion, with velocity/force feedback for the Robothon 2023 competition.',
      'Used a Kinova Gen3 arm; secured 6th place in the Grand Challenge 2023.',
    ],
    tags: ['Force Control', 'Kinova Gen3', 'Manipulation', 'Velocity/Force Feedback'],
    links: [],
  },
  // ── Academic — Kinematics/dynamics feed-forward perception ─
  {
    id: 'perception-kinematics',
    category: ['academic'],
    period: 'H-BRS coursework',
    org: 'Hochschule Bonn-Rhein-Sieg',
    title: 'Improving Robotic Perception by Kinematics and Dynamics Feed-Forward',
    shortDesc: 'Leveraged underutilized kinematics/dynamics solver data from a Kinova Gen3 manipulator to improve perception, including a real-time camera-refocusing method.',
    fullDesc: [
      'Developed a framework to enhance robotic perception by leveraging underutilized kinematics and dynamics solver data from a Kinova Gen3 manipulator, validated experimentally with two use cases.',
      'Formulated a mapping function from focus value to object distance, enabling real-time camera refocusing that outperformed the existing autofocus mechanism during arm motion.',
      'Implemented ACHD solver-based robot motion control and fused IMU data with solver output via a Kalman filter for motion state estimation.',
    ],
    tags: ['Robot Kinematics', 'Dynamics Solver (ACHD)', 'Kalman Filter', 'C++', 'Sensor Fusion'],
    links: [],
  },
  // ── Academic — GTSAM SLAM ─────────────────────────────────
  {
    id: 'gtsam-slam',
    category: ['academic'],
    period: 'H-BRS coursework',
    org: 'Hochschule Bonn-Rhein-Sieg',
    title: 'SLAM using Factor Graph Optimization (GTSAM)',
    shortDesc: 'Factor-graph-based SLAM pipeline implemented as part of a graduate coursework project.',
    fullDesc: [
      'Implemented a factor-graph-based SLAM pipeline using GTSAM as part of a graduate coursework project.',
      'Coursework-level project — foundational exposure to factor-graph optimization, not carried to production depth.',
    ],
    tags: ['SLAM', 'GTSAM', 'Factor Graph Optimization'],
    links: [],
  },
  // ── Ford — CAN data internship ────────────────────────────
  {
    id: 'ford-can',
    category: ['ford'],
    period: 'Nov 2020 – Mar 2021',
    org: 'Ford India Private Limited',
    title: 'IoT-Based CAN Data Collection & Analysis for Driver Safety',
    shortDesc: 'Raspberry Pi-based IoT system for CAN data collection and brake-data analysis, supporting two published papers.',
    fullDesc: [
      'Built an IoT-based CAN data collection and processing system using Raspberry Pi for brake-data analysis in Ford vehicles, for driver safety and performance.',
      'Published "Real-Time Performance Analysis of Multiple Parameters of Automotive Sensor CAN Data to Predict Vehicle Driving Efficiency," International Journal of Computing and Digital Systems, 2022.',
      'Published "IoT-Based Rash Braking Data Analysis and Plotting in Google Maps Using Raspberry Pi," International Conference on Data Analytics for Business and Industry (ICDABI), 2021.',
    ],
    tags: ['Raspberry Pi', 'IoT', 'CAN Bus', 'Data Analysis'],
    links: [
      { label: 'CAN-data paper (DOI)', url: 'https://doi.org/10.12785/ijcds/1101109' },
      { label: 'Rash-braking paper (DOI)', url: 'https://doi.org/10.1109/ICDABI53623.2021.9655780' },
    ],
  },
];

const publications = [
  {
    title: 'Prediction-Based Tip-Over Prevention for Planetary Exploration Rovers',
    venue: '14th EASN International Conference, Greece · Engineering Proceedings',
    year: '2024',
    url: 'https://doi.org/10.3390/engproc2025090044',
  },
  {
    title: 'b-it-bots: Winners of RoboCup@Work 2023 (Book Chapter)',
    venue: 'RoboCup 2023: Robot World Cup XXVI · Springer LNCS',
    year: '2024',
    url: 'https://doi.org/10.1007/978-3-031-55015-7_29',
  },
  {
    title: 'Real-Time Performance Analysis of Multiple Parameters of Automotive Sensor CAN Data to Predict Vehicle Driving Efficiency',
    venue: 'International Journal of Computing and Digital Systems',
    year: '2022',
    url: 'https://doi.org/10.12785/ijcds/1101109',
  },
  {
    title: 'IoT-Based Rash Braking Data Analysis and Plotting in Google Maps Using Raspberry Pi',
    venue: 'International Conference on Data Analytics for Business and Industry (ICDABI), IEEE',
    year: '2021',
    url: 'https://doi.org/10.1109/ICDABI53623.2021.9655780',
  },
];

const achievements = [
  { icon: '🏆', title: 'RoboCup@Work 2023 — World Champion', org: 'b-it-bots Team, H-BRS' },
  { icon: '🥈', title: '6th Place — Robothon Grand Challenge 2023', org: 'b-it-bots Team, H-BRS' },
  { icon: '🚀', title: 'European Rover Challenge (ERC) 2025 — Contributed to Qualification', org: 'Robotics software systems · RIC, DFKI Bremen' },
];
