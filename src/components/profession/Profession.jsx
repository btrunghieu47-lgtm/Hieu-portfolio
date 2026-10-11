import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Native Android Development (Java)",
    description:
      "I build high-performance native Android applications on Android Studio using Java, implementing clean OOP principles, MVVM architecture, and efficient lifecycle management.",
  },
  {
    id: 2,
    title: "Cloud Backend & Database Integration",
    description:
      "I integrate Google Firebase (Firestore realtime database, Auth, Cloud Storage) and local persistence solutions like SQLite and Room to deliver seamless online-offline capabilities.",
  },
  {
    id: 3,
    title: "Mobile UI/UX & Material Design",
    description:
      "I craft responsive, intuitive XML layouts following Google's Material Design guidelines, incorporating smooth animations, custom adapters, and clean component hierarchies.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Core Competencies</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in developing responsive Android applications from concept to deployment,
            blending technical engineering with intuitive user experience.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My development approach emphasizes clean architecture, maintainable code,
            and continuous exploration of the latest Android libraries and mobile best practices.
          </p>
        </div>
        <a
          href="#contact"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
