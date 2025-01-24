export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I value collaboration and open communication to achieve shared goals.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I excel at integrating client-side and server-side logic for seamless dynamic applications.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a new Project dealing with Agentic AI",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Hospital Management System",
    des: "A full-stack web application for managing hospital operations, including patient records, staff management, and billing.",
    img: "/proj-hosp-mang.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/hs094/Hospital-Management-System",
    code: "https://github.com/hs094/Hospital-Management-System"
  },
  {
    id: 2,
    title: "Teleport - Transport Company Computerized Software",
    des: "Built with Flask and SQLAlchemy, it uses smart truck allotment and dispatch algorithms to optimize productivity, streamlining operations for delivery companies.",
    img: "/proj-teleport.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://teleport-g0vz.onrender.com/",
    code: "https://github.com/hs094/TelePort"
  },
  {
    id: 3,
    title: "Query-Optimizer - SQL Query Optimization Tool",
    des: "Query Optimiser is a compiler project designed to optimize and execute queries efficiently. It leverages C++ for core compilation tasks, Python for scripting, and Streamlit for a user-friendly web interface.",
    img: "/proj-query-optim.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://hs094-query-optimiser.streamlit.app/",
    code: "https://github.com/hs094/Query-Optimiser"
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/proj-iphone.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://hs094-iphone-clone.netlify.app/",
    code: "https://github.com/hs094/iPhone-Website-Clone"
  },
  // {
  //   id: 5,
  //   title: "Eth.X - Ethereum Exchange Platform",
  //   des: "Eth.Lend.X is a DeFi lending and borrowing platform on Ethereum's Sepolia Testnet. Users can deposit crypto assets, earn interest, and borrow tokens seamlessly. Built with Solidity, Chainlink Oracles, and Next.js, it offers a secure, decentralised financial ecosystem.",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
  // {
  //   id: 1,
  //   title: "3D Solar System Planets to Explore",
  //   des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
  //   img: "/p1.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  //   link: "/ui.earth.com",
  // },
  // {
  //   id: 2,
  //   title: "Yoom - Video Conferencing App",
  //   des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
  //   img: "/p2.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
  //   link: "/ui.yoom.com",
  // },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.aiimg.com",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Intern",
    desc: "Contributed to a data handling and transfer system, including CSV delimiter detection, cloud-sharing service, and bug fixes, improving efficiency, reliability, and user experience for large-scale data operations.",
    className: "md:col-span-6",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - IIT Kharagpur",
    desc: "Developed a Swift mobile application to simulate security risks in UPI applications and conducted an interview-based research study on human behavior during tense situations, such as the payment process.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/hs094"
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/hardik-soni-498271141/"
  },
];