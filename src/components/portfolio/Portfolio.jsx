import Projects from "./Projects";
import mamacookMockup from "../../assets/images/portfolio-images/mamacook_mockup.jpg";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";

const projectData = [
  {
    id: 1,
    image: mamacookMockup,
    category: "MAMACOOK • RECIPE DISCOVERY & FILTER",
    title: "Smart Recipe Search & Discovery",
    description:
      "Engineered an intuitive recipe discovery system with accent-insensitive Vietnamese search algorithm and dynamic multi-criteria filtering by difficulty, cooking time, and star ratings.",
    link: "#!",
  },
  {
    id: 2,
    image: card1,
    category: "MAMACOOK • CLOUD & DATA SYNC",
    title: "Firebase Firestore Cloud Backend",
    description:
      "Architected realtime NoSQL database synchronization with Firebase Firestore to store categorized recipes, manage user favorites (MonDaLuu), browsing history, and community ratings.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "MAMACOOK • AUTHENTICATION & SECURITY",
    title: "Multi-Provider Social Authentication",
    description:
      "Implemented a secure multi-channel onboarding experience integrating Google Sign-In (Play Services Auth), Facebook SDK Login, and Firebase Authentication with custom session handling.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Featured Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            A showcase of my native Android applications developed with Java and Android Studio,
            demonstrating practical skills in clean architecture, Firebase cloud integration, and mobile UX.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/btrunghieu47-lgtm?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          View More on GitHub
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
