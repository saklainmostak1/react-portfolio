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
  {
    name: 'projectsDetails',
    href: 'projects',
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
    image: Project1,
    name: 'Laptop Bazzar',
    category: 'UI/UX design',
    description: 'Key Features:',
    details: 'Different types of old laptop. You can buy and sell laptops. Private Routes After login you can get premium access'
  },
  {
    id: '2',
    image: Project2,
    name: 'Home Made Food',
    category: 'web development',
    liveLink: 'https://home-food-21f59.web.app/'
  },
  {
    id: '3',
    image: Project3,
    name: 'Learn Buzzer',
    category: 'UI/UX design',
  },
  {
    id: '4',
    image: Project4,
    name: 'Doctors Portal',
    category: 'other',
  },
  {
    id: '5',
    image: Project5,
    name: 'Mega quiz',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'Education Buddies',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'other',
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
