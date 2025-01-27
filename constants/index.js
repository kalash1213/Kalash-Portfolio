import project1 from '../src/assets/projects/project-5.webp.png';
import project2 from '../src/assets/projects/project-6.webp.png';
import project3 from '../src/assets/projects/project-7.webp.png';
import project4 from '../src/assets/projects/project-8.webp.png';


export const HERO_CONTENT = ` I am a passionate software developer with expertise in crafting robust and scalable web applications. With hands-on experience in front-end technologies like React.js, JavaScript, and Material-UI, as well as back-end technologies like Node.js, Express.js, and databases such as MongoDB and MySQL, I have developed advanced features, optimized database performance, and integrated seamless RESTful APIs. My goal is to leverage my expertise to build innovative solutions that enhance business efficiency and deliver exceptional user experiences.

`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Associate Solution Leader Trainee/ Frontend Developer",
    company: "Brane Enterprises",
    description: `Contributing in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with QA Team to define project requirements and timelines and Designed an Expense Management Solution to automate financial workflows, cutting manual data entry  and boosting accuracy. Added features like OCR for receipt data extraction with Tesseract OCR and real-time currency conversion using Forex-Python. `,
    technologies: ["Javascript", "React.js", "Node.js", "MongoDB","Material-UI", "Express.js"],
  }
];

export const PROJECTS = [
  {
    title: "Gemini-Clone",
    image: project1,
    description:
      "Gemini Clone is a React-based web app that replicates the Gemini AI interface. The project highlights front-end development with React, JavaScript, and CSS, real-time chat functionality, responsive design, efficient state management using Context API, and optimized load times with flexible routing and lazy loading.",
    technologies: ["React", "JavaScript", "TailwindCss", "Context API", "React Hooks", "Google API",  ]

 ,
    link: "https://github.com/kalash1213/Gemini-Clone", link: "https://gemini-clone-coral-beta.vercel.app/", 
  },
  {
    title: "Convo-Link",
    image: project2,
    description:
      "Built a real-time chat app using Express.js, Socket.IO, and Node.js, improving message delivery, adding audio notifications for incoming messages, and enhancing user engagement with streamlined tracking for a better chat experience.",
    technologies: ["Express.js", "Socket.IO", "Node.js"],
    link: "https://github.com/kalash1213/ConvoLink",link:"https://chat-app-one-blond.vercel.app/" ,
  },
  
  {
    title: "Weather-Channel",
    image: project3,
    description:
      "Developed a dynamic weather application that allows users to search for current weather conditions in different cities. The app displays temperature, humidity, wind speed, and an appropriate weather icon based on the forecast.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/kalash1213/Weather-Channel", link:"https://weather-channel-rosy.vercel.app/"
  },
  {
    title: "TODO-List",
    image: project4,
    description:
      " This is a To-Do List web application that allows users to add, mark, and delete tasks. It also stores tasks in localStorage to maintain them between page reloads.",
    technologies: ["HTML", "CSS", "Javascript","Local Storage"],
    link: "https://github.com/kalash1213/TODO-List", link:"https://todo-list-tau-smoky.vercel.app/"
  },
];

export const CONTACT = {
  address: "D-23,Yamuna Vihar,Dwarikesh Sugar Industries LTD,Najibabad,Bijnor,246732 ",
  phoneNo: " +916397310248",
  email: "kalashchikara1215@gmail.com",
};
