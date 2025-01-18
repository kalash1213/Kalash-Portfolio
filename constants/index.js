import project1 from '../src/assets/projects/project-1.webp';
import project2 from '../src/assets/projects/project-2.webp';
import project3 from '../src/assets/projects/project-3.webp';
import project4 from '../src/assets/projects/project-4.webp';


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience, I have honed my skills in front-end technologies like React ,JavaScript, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Full-Stack  Developer / Internship",
    company: "Brane Enterprises",
    description: `Contributing in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with QA Team to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js", "MongoDB","Material-UI", "Express.js"],
  }
];

export const PROJECTS = [
  {
    title: "PEHRAVAA[E-Commerce Website]",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCss", "JWT"],
    link: "https://github.com/vasu5x2/Pehravaa", 
  },
  {
    title: "Gemini-Clone",
    image: project2,
    description:
      "Gemini Clone is a React-based web app that replicates the Gemini AI interface. This project showcases front-end development using React, JavaScript, and CSS, featuring a dark theme, real-time chat functionality, and responsive design.",
    technologies: ["React", "TailwindCss", "Google API"],
    link: "https://github.com/vasu5x2/Gemini-Clone", 
  },
  {
    title: "RBAC Admin",
    image: project3,
    description:
      "RBAC Admin is a frontend-only application built to manage user roles and permissions within a web application using React and modern frontend technologies. This project demonstrates a role-based access control (RBAC) system where users are categorized into different roles like Admin, Editor, and Viewer, and their respective permissions are visualized through charts.",
    technologies: ["React", "MATERIAL-UI", "React-Charts"],
    link: "https://github.com/vasu5x2/RBAC-Admin", 
  },
  {
    title: "Image Asserts",
    image: project4,
    description:
      "This is an image assert management web application where users can upload, rotate, flip, and crop images. The application provides an interactive interface for managing images, allowing users to perform various transformations on their images.",
    technologies: ["React", "MATERIAL-UI", "react-easy-crop"],
    link: "https://github.com/vasu5x2/Image-Assets", 
  },
];

export const CONTACT = {
  address: "#542 Street no 8 Adarsh Nagar,Dera Bassi,Punjab-140507 ",
  phoneNo: " +91 9877197034",
  email: "vasu40002@gmail.com",
};
