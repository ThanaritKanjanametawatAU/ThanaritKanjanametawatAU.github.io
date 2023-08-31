import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Science",
    icon: web,
  },
  {
    title: "Artificial Intelligence Development",
    icon: mobile,
  },
  {
    title: "Natural Language Processing",
    icon: backend,
  },
  {
    title: "Stable Diffusion",
    icon: creator,
  },
];

const technologies = [


];

const experiences = [
  {
    title: "Foundations of Computer Programming",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2021 - October 2023",
    points: [
        "Developed a strong foundation in python, java, and c++. ",
      "Grasping core concepts like algorithms, data structures, and software engineering principles.",
      "Collaborating with peers on group projects, enhancing teamwork and problem-solving skills.",
      "Debugging and optimizing code for efficiency and performance.",

    ],
  },
  {
    title: " Data Science Fundamentals",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "October 2021 - October 2023",
    points: [
      "Extracting, cleaning, and preprocessing data from various sources to make it suitable for analysis.",
      "Learning tools like Python, Pandas, and Matplotlib to visualize data trends and patterns.",
      "Engaging in group discussions and workshops to share findings and learn from peers.",
    ],
  },
  {
    title: "Deep Learning Explorer",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Delving into neural networks, understanding their architecture, and experimenting with various layers and nodes.",
      "Implementing recurrent neural networks (RNN) for sentiment analysis tasks.",
      "Actively seeking feedback from experts in the field to refine and optimize my deep learning models.",

    ],
  },
    {
    title: "NLP Enthusiast",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "December 2022 - Present",
    points: [
      "Exploring the intricacies of text data and understanding the challenges in processing and analyzing it.",
      "Implementing sentiment analysis on social media data to gauge public opinion on current events.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Thanarit is a very outstanding AI developer. He is very passionate about his work and always goes the extra mile when it's come to machine learning!",
    name: "Lynn Thit Nyi Nyi",
    designation: "Talented Web Developer",
    company: "D-Code Lab",
    image: "https://avatars.githubusercontent.com/u/108476649?v=4",
  },
  {
    testimonial:
      "I've never met someone so good at algorithm design as Thanarit. He's a great guy that's always willing to help anyone out!",
    name: "Tanat Arora",
    designation: "Junior Data Scientist",
    company: "ISL Lab",
    image: "https://avatars.githubusercontent.com/u/111696279?v=4",
  },
  {
    testimonial:
      "Very talented and hardworking individual. He is very passionate about his work and always goes the extra mile when it's come to machine learning!",
    name: "Saw Zwe Wai Yan",
    designation: "Lead Machine Learning Engineer",
    company: "D-Code Lab",
    image: "https://avatars.githubusercontent.com/u/94424420?v=4",
  },
];

const projects = [
  {
    name: "Reddit Post Sentiment Analysis",
    description:
      "Analyze the sentiment of Reddit posts using Natural Language Processing (NLP) techniques.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "Recurrent Neural Network",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.kaggle.com/code/thanaritkanjana/isd-reddit-sentiment-analysis?scriptVersionId=123160733",
  },
  {
    name: "Text-Based Deepfake Detection",
    description:
        "Detect GPT generated Text or Human written Text using Reberta combined with Deep Learning.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "Research",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ThanaritKanjanametawatAU/Senior-Project-I",
  },
  {
    name: "Senior Project II (Coming Soon)",
    description:
        "TBA",
    tags: [
      {
        name: "Research",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Algorithm",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
