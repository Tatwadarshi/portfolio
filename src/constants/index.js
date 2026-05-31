import { Lightformer } from "@react-three/drei";
import { pingpong } from "three/src/math/MathUtils.js";
import { label } from "three/tsl"


// export const asset_server_base_url = "";
export const asset_server_base_url = "https://cdn.jsdelivr.net/gh/Tatwadarshi/portfolio_assets_server/"

export const words = [
  {text: 'Ideas', imgPath: '/images/words/idea.svg'},
  {text: 'Designs', imgPath: '/images/words/design.png'},
  {text: 'Systems', imgPath: '/images/words/system.png'},
  {text: 'Prototypes', imgPath: '/images/words/prototype.png'},
]

export const counterItems = [
  {value: 5, suffix: "+", label: "Years of Experience"},
  {value: 10, suffix: "+", label: "Satisfied Clientes"},
  {value: 30, suffix: "+", label: "Completed Projects"},
  {value: 90, suffix: "%", label: "Cliente Retention Rate"},
];

export const navLinks = [
  {name: "Work", href: "#work"},
  {name: "Experience", href: "#experience"},
  {name: "Skills", href: "#skills"},
  // {name: "Testimonials", href: "#testimonials"},
  // {name: "Blogs", href: "/blogs"},
]

export const logoIconsList = [
  {imgPath: '/images/logos/aironia.png'},
  {imgPath: '/images/logos/git.svg'},
  {imgPath: '/images/logos/jain-irrigation.png'},
  {imgPath: '/images/logos/node.png'},
  {imgPath: '/images/logos/nabhitha.png'},
  {imgPath: '/images/logos/appwrite.svg'},
  {imgPath: '/images/logos/python.svg'},
  {imgPath: '/images/logos/react.png'},
  {imgPath: '/images/logos/three.png'},
  {imgPath: '/images/logos/blender_logo.svg'},
]

export const abilities = [
  {
    title: "Consistency",
    desc: "I maintain consistency throughout my workflow to keep my projects managed properly.",
    imgPath: "/images/abilities/consistency.png",
  },
  {
    title: "Tool Proficiency",
    desc: "I am passionate about learning as many tools as I can that will impact workflow positively.",
    imgPath: "/images/abilities/proficiency.png",
  },
  {
    title: "Perfection",
    desc: "I usualy focus of perfection but not at the cost of clients useful time.",
    imgPath: "/images/abilities/perfection.png",
  },
]

export const expCards = [
  {
    title: "CTO at Aironia InDoorz Pvt. Ltd.",
    desc: "Indoor Agricultural Automation Start-up | Current Role",
    date: "January 2026 - Present",
    bulletPoints: [
      "Directed technical strategy and product roadmaps for indoor agricultural and home automation systems, including sensor-based climate control and smart irrigation solutions.",
      "Led cross-functional engineering teams in designing and deploying integrated IoT hardware for controlled environment agriculture (CEA) applications.",
      "Developed embedded automation systems using Arduino - ESP32, and Raspberry Pi to monitor and regulate temperature - humidity and soil moisture in indoor farming setups.",
      "Collaborated with agronomy and business teams to translate crop-growth requirements into engineering specifications.",
    ],
    imgPath: "/images/logos/aironia_dark.png",
    logoPath: "/images/logos/aironia_dark.png",
  },
  {
    title: "My B.Tech Project: SyncMon",
    desc: "My Final year project | Android App Development",
    date: "March 2026 - Present",
    bulletPoints: [
      "Implemented dynamic data visualisation using interactive graphs and charts within the app, enabling users to intuitively monitor parameters such as temperature, humidity, soil moisture, and other agri-relevant sensor readings.",
      "Tested the App with ESP32 based Grain Monitoring System",
      "Built the full data pipeline from ESP32 firmware to mobile UI — covering sensor interfacing, data transmission (MQTT/HTTP), storage of data in the database, backend parsing, and front-end rendering in a seamless real-time flow.",
      "Developed embedded automation systems using Arduino, ESP32, and Raspberry Pi to monitor and regulate temperature, humidity, and soil moisture in indoor farming setups.",
      "Demonstrated direct applicability to precision agriculture and controlled environment monitoring, where continuous tracking of micro-climate and soil parameters is critical for greenhouse and protected cultivation systems as well as direct applicability to tractor telematics and remote diagnostics, where real-time engine/sensor data monitoring is increasingly integrated into modern precision farming machinery."
    ],
    imgPath: "/images/logos/syncmon-logo.jpeg",
    logoPath: "/images/logos/syncmon-logo.jpeg",
  },
  {
    title: "ELP (On-Campus) — ANGRAU",
    desc: "Experiential Learning Program (ELP) — ANGRAU | Value Addition & Agri-Processing",
    date: "November 2025 - February",
    bulletPoints: [
      "Developed and standardized two value-added ragi-based products — Instant Ragi Dosa Mix and Ragi Malt — as tertiary processed food products, optimizing ingredient ratios for taste, nutritional profile, and shelf stability",
      "Executed end-to-end product development lifecycle as part of a team, covering raw material processing, formulation, packaging, and quality assessment in accordance with food processing principles.",
      "Conducted market-ready production and sales of both products, gaining practical exposure to agri-food entrepreneurship, consumer feedback, and small-scale commercial operations.",
      "Applied knowledge of post-harvest technology and value addition to convert a staple millet crop (finger millet) into consumer-ready processed products, demonstrating the commercial potential of agri-processing.",
    ],
    imgPath: "/images/experiences/ragi_dosa_label.png",
    logoPath: "/images/logos/ANGRAU-logo.webp",
  },
  {
    title: "Industrial Intern — Jain Irrigation Systems Pvt. Ltd.",
    desc: "10-Week Industrial Internship | Micro-Irrigation & Water Management",
    date: "September 2025 - November 2025",
    bulletPoints: [
      "Deployed automated micro-irrigation infrastructure — including drip and sprinkler systems — using core agricultural engineering principles across field installations.",
      "Systematised technical documentation, field data sets, and operational reports for irrigation project management.",
      "Gained practical exposure to irrigation scheduling, fertigation systems, and water-use efficiency optimisation.",
    ],
    imgPath: "/images/experiences/jain_exp.jpg",
    logoPath: "/images/logos/jain-irrigation.png",
  },
  {
    title: "Industrial Trainee — IISWC Research Centre, Koraput",
    desc: "4-Week Training | Soil & Water Conservation Research",
    date: "14th July 2025 - 13th August 2025",
    bulletPoints: [
      "Applied GIS and Remote Sensing technology to analyse land-use patterns and support soil and water conservation research.",
      "Assisted in mapping watershed boundaries and interpreting satellite imagery for resource management planning.",
    ],
    imgPath: "/images/experiences/koraput_exp.jpg",
    logoPath: "/images/logos/iiswc.png",
  },
  {
    title: "Industrial Trainee — Nabhitha Engineering Pvt. Ltd.",
    desc: "4-Week Training | Post-Harvest Machinery & Manufacturing",
    date: "20th July 2024 - 20th August 2024",
    bulletPoints: [
      "Analysed manufacturing processes for post-harvest industrial automation and agricultural machinery.",
      "Observed production workflows relevant to agricultural equipment fabrication and quality control.",
    ],
    imgPath: "/images/experiences/nabhitha_exp.jpg",
    logoPath: "/images/logos/nabhitha.png",
  },
]

export const techStackIcons = [
  {
    name: 'React Developer',
    scale: 1,
    rotation: [0, 0, 0],
    modelPath: '/models/react-logo.glb', 
  },
  {
    name: 'Backend Developer',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
    modelPath: '/models/node-logo.glb', 
  },
  {
    name: 'Python Developer',
    scale: 0.8,
    rotation: [0, 0, 0],
    modelPath: '/models/python-logo.glb', 
  },
  {
    name: 'Interactive Developer',
    scale: 0.05,
    rotation: [0, 0, 0],
    modelPath: '/models/three.js-logo.glb', 
  },
  {
    name: 'Project Manager',
    scale: 0.05,
    rotation: [0, -Math.PI / 6, 0],
    modelPath: '/models/git-logo.glb', 
  },
  {
    name: 'IoT Developer',
    scale: 1.2,
    rotation: [0, 0, 0],
    modelPath: '/models/arduino-logo.glb', 
  },
  {
    name: '3D Artist & CAD Designer',
    scale: 1,
    rotation: [0, 0, 0],
    modelPath: '/models/blender-logo.glb', 
  },
  {
    name: "C++ Developer & Programmer",
    imgPath: "/images/logos/cpp_logo.png",
  },
]

export const testimonials = [
  {
    name: "John Doe",
    mentions: "@johndoe",
    review: "Tatwadarshi is an exceptional software engineer with a keen eye for detail. His ability to solve complex problems and deliver high-quality code is truly impressive. He consistently goes above and beyond to ensure project success, making him an invaluable asset to any team.",
    imgPath: "/images/testimonials/client1.png",
    stars: 2,
    show: true,
  },
  {
    name: "Jane Smith",
    mentions: "@janesmith",
    review: "Working with Tatwadarshi has been a fantastic experience. He is not only technically proficient but also a great communicator and team player. His dedication to his work and his ability to adapt to new challenges make him stand out in the field of software development.",
    imgPath: "/images/testimonials/client2.png",
    stars: 3,
    show: true,
  },
  {
    name: "Emily Johnson",
    mentions: "@emilyjohnson",
    review: "Tatwadarshi's expertise in software engineering is truly remarkable. He has a deep understanding of various technologies and consistently delivers innovative solutions. His commitment to excellence and his collaborative approach make him a pleasure to work with.",
    imgPath: "/images/testimonials/client3.png",
    stars: 4,
    show: false,
  },
  {
    name: "Michael Brown",
    mentions: "@michaelbrown",
    review: "Tatwadarshi is a talented and dedicated software engineer. His technical skills and problem-solving abilities are exceptional. He is always willing to help others and contributes significantly to the success of our projects.",
    imgPath: "/images/testimonials/client4.png",
    stars: 1,
  },
  {
    name: "Sarah Davis",
    mentions: "@sarahdavis",
    review: "I have had the pleasure of working with Tatwadarshi on several projects, and I can confidently say that he is one of the best software engineers I have ever worked with. His attention to detail, creativity, and commitment to delivering high-quality work are truly commendable.",
    imgPath: "/images/testimonials/client5.png",
    stars: 5,
  },
  {
    name: "David Wilson",
    mentions: "@davidwilson",
    review: "Tatwadarshi is a highly skilled software engineer who consistently delivers exceptional results. His ability to lead and mentor other developers is impressive, and he is always eager to take on new challenges and learn emerging technologies.",
    imgPath: "/images/testimonials/client6.jpg",
    stars: 5,
  },
]

export const socialImgs = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tatwadarshi-hota/",
    imgPath: "/images/socials/linkedin.png",
  },
  {
    name: "GitHub",
    url: "https://github.com/Tatwadarshi",
    imgPath: "/images/socials/github.png",
  },
  {
    name: "X",
    url: "https://x.com/TatwadarshiHota",
    imgPath: "/images/socials/x.png",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/tatwadarshihota/",
    imgPath: "/images/socials/insta.png",
  },
]