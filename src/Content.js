// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import ECR from "./assets/images/Skills/ECR.png";
import ECS from "./assets/images/Skills/ECS.png";
import AWS from "./assets/images/Skills/AWS.png";
import APIG from "./assets/images/Skills/APIG.png";
import EventBridge from "./assets/images/Skills/EventBridge.png";
import SQS from "./assets/images/Skills/SQS.png";
import S3 from "./assets/images/Skills/S3.png";
import Lambda from "./assets/images/Skills/Lambda.png";
import Cognito from "./assets/images/Skills/Cognito.png";
import DynamoDB from "./assets/images/Skills/DynamoDB.png";
import IAM from "./assets/images/Skills/IAM.png";





import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import chatgptprofile from "./assets/images/projects/chatgptprofile.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import bosch from "./assets/images/Testimonials/bosch.png";
import ISS from "./assets/images/Testimonials/ISS.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { FaLinkedin } from 'react-icons/fa';
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaGithub } from 'react-icons/fa'; 

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Web Developer",
    firstName: "HARI",
    LastName: "PRASANTH",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3.5+",
        text: "Years of Experinse in Full Stack development",
      },
      {
        count: "4+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },

      
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      ,{
        name: "AWS",
        para: "Lorem ipsum text  dummy",
        logo: AWS,
      },
      
      {
        name: "IAM",
        para: "Lorem ipsum text  dummy",
        logo: IAM,
      },{
        name: "Cognito",
        para: "Lorem ipsum text  dummy",
        logo: Cognito,
      },
      ,{
        name: "Lambda",
        para: "Lorem ipsum text  dummy",
        logo: Lambda,
      },{
        name: "S3",
        para: "Lorem ipsum text  dummy",
        logo: S3,
      },
      {
        name: "ECR",
        para: "Lorem ipsum text  dummy",
        logo: ECR,
      },{
        name: "ECS",
        para: "Lorem ipsum text  dummy",
        logo: ECS,
      },
      {
        name: "EventBridge",
        para: "Lorem ipsum text  dummy",
        logo: EventBridge,
      }
      ,{
        name: "SQS",
        para: "Lorem ipsum text  dummy",
        logo: SQS,
      },{
        name: "APIG",
        para: "Lorem ipsum text  dummy",
        logo: APIG,
      },{
        name: "DynamoDB",
        para: "Lorem ipsum text  dummy",
        logo: DynamoDB,
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      }, 
     
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Chat-GPT with Gemini",
        image: chatgptprofile,
      },
    ],
  },
  Testimonials: {
    title: "Work Experience ",
    subtitle: "HISTORY",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: bosch,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: ISS,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "hari16205@gmail.com",
        icon: GrMail,
        link: "mailto:hari16205@gmail.com",
      },
      {
        text: "+91 9597484516",
        icon: MdCall,
        type:'tel',
        link: "tel:9597484516"
      },
      {
        text: "LinkedIn",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/hari-prasanth-k-02097b1b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bpc4%2B%2FpRfSZehl7GEJxx9SA%3D%3D",
      },
      {
        text: "Github",
        icon: FaGithub,
        link: "https://github.com/Hariprasanth-HP",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
