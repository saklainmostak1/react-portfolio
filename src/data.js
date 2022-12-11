//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiMail,
  FiMapPin,
  FiPhone,
  FiFacebook,
  FiLinkedin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/Laptop.png';
import Project2 from './assets/img/projects/food.png';
import Project3 from './assets/img/projects/learn.png';
import Project4 from './assets/img/projects/doctor.png';
import Project5 from './assets/img/projects/quiz.png';
import Project6 from './assets/img/projects/education.png';
//project multiImage
import proImage1 from './assets/img/projects/image (1).png'
import proImage2 from './assets/img/projects/image 2.png'
import proImage3 from './assets/img/projects/image 3.png'
import proImage4 from './assets/img/projects/image 4.png'
import proImage5 from './assets/img/projects/image 5.png'
import proImage6 from './assets/img/projects/image 6.png'

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
// import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/-development-and-design.jpg';
import TestiImage2 from './assets/img/testimonials/web-designer.jpg';
import TestiImage3 from './assets/img/testimonials/web-developer.jpg';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
 
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    images: proImage1,
    image: Project1,
    name: 'Laptop Bazzar',
    category: 'web Design',
    description: 'Key Features:',
    details: 'Different types of old laptop. You can buy and sell laptops. Private Routes After login you can get premium access',
    Technologies:' JavaScript, React Js, Daisy UI, Tailwind CSS, HTML, CSS, Mongodb, Node Js, Express Js.',
    githubClient:'https://github.com/saklainmostak1/laptop-bazzar-client',
    githubServer:'https://github.com/saklainmostak1/laptop-bazzar-server',
    liveLink:'https://use-laptop-buzzer.web.app/'
  },
  {
    id: '2',
    images: proImage2,
    image: Project2,
    name: 'Home Made Food',
    category: 'web development',
    description: 'Key Features:',
    details: 'Different types of old laptop. You can buy and sell laptops. Private Routes After login you can get premium access',
    Technologies:' JavaScript, React Js, Daisy UI, Tailwind CSS, HTML, CSS, Mongodb, Node Js, Express Js.',
    githubClient:'https://github.com/saklainmostak1/home-made-food-client',
    githubServer:'https://github.com/saklainmostak1/Home-made-food-server',
    liveLink: 'https://home-food-21f59.web.app/'
  },
  {
    id: '3',
    images: proImage3,
    image: Project3,
    name: 'Learn Buzzer',
    category: 'web Design',
    description: 'Key Features:',
    details: 'Different types of old laptop. You can buy and sell laptops. Private Routes After login you can get premium access',
    Technologies:' JavaScript, React Js, Daisy UI, Tailwind CSS, HTML, CSS, Mongodb, Node Js, Express Js.',
    githubClient:'https://github.com/saklainmostak1/learn-buzzer-client',
    githubServer:'https://github.com/saklainmostak1/learn-buzzer-server',
    liveLink:'https://learn-buzzer-client-93c32.web.app/'
  },
  {
    id: '4',
    images: proImage4,
    image: Project4,
    name: 'Doctors Portal',
    description: 'Key Features:',
    details: 'Different types of old laptop. You can buy and sell laptops. Private Routes After login you can get premium access',
    category: 'special',
    Technologies:' JavaScript, React Js, Daisy UI, Tailwind CSS, HTML, CSS, Mongodb, Node Js, Express Js.',
    githubClient:'https://github.com/saklainmostak1/doctor-full-project-client',
    githubServer:'https://github.com/saklainmostak1/doctor-full-project-server',
    liveLink:'https://doctors-prtal-7f405.firebaseapp.com/'
  },
  {
    id: '5',
    images: proImage5,
    image: Project5,
    name: 'Mega quiz',
    category: 'web development',
    description: 'Key Features:',
    details: 'Different types of old laptop. You can buy and sell laptops. Private Routes After login you can get premium access',
    Technologies:' JavaScript, React Js, Bootstrap, HTML, CSS',
    githubClient:'https://github.com/saklainmostak1/Mega-quiz',
    githubServer:'',
    liveLink: 'https://serene-granita-20a2fc.netlify.app/'
  },
  {
    id: '6',
    images: proImage6,
    image: Project6,
    name: 'Education Buddies',
    category: 'web development',
    description: 'Key Features:',
    details: 'Different types of old laptop. You can buy and sell laptops. Private Routes After login you can get premium access',
    Technologies:'Bootstrap, HTML, CSS',
    githubClient:'https://github.com/saklainmostak1/assignment-3',
    githubServer:'',
    liveLink: 'https://saklainmostak1.github.io/assignment-3/'
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'web Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'special',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  // {
  //   image: SkillImg5,
  // },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Design',
    description:
      'Figma, Sketch, Photoshop.',
  },
  {
    icon: <FiSettings />,
    name: 'Development',
    description:
      'Html, Css, JavaScript, React, Nodejs, Express.',
  },
  {
    icon: <FiPenTool />,
    name: 'UI/UX',
    description:
      'UX design is all about identifying and solving user problems; UI design is all about creating intuitive, aesthetically-pleasing.',
  },
 
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    // authorName: 'Olivia Doe',
    // authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    // authorName: 'Olivia Doe',
    // authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    // authorName: 'Olivia Doe',
    // authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at saklainmostak2135@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Dhanmondi 32, Dhaka, Bangladesh',
    description: '',
  },
  {
    icon: <FiPhone />,
    title: 'Contact',
    subtitle: '+8801774412135',
    description: 'If You Need Please Contact With Me',
  },
  {
    icon: <FiFacebook />,
    title: 'Facebook',
    subtitle: 'https://www.facebook.com/profile.php?id=100088145321928',
    description: 'If You Need You Can Send Me Message In Facebook',
  },
  {
    icon: <FiLinkedin />,
    title: 'Linkedin',
    subtitle: 'https://www.linkedin.com/in/saklain-mostak-a99288248/',
    description: 'If You Need You Can Send Me Message In Linkedin',
  },
];
