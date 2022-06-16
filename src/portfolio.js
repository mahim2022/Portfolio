/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Naimul Mushfiq",
  title: "Hi man, I'm Mahim",
  subTitle: emoji(
    "A Lifeless :( Full Stack Software Developer 🚀 experienced in building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1vdBEpGUL4ocHBEnH-Ux_uJYCrrgAs8Ms/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mahim2022",
  linkedin: "https://www.linkedin.com/in/naimul-mushfiq-4a5648220/",
  gmail: "naimulmushfiq98@gmail.com",
  gitlab: "https://github.com/mahim2022",
  facebook: "https://www.facebook.com/naimulmushfiqmahim/",
  medium: "https://github.com/mahim2022",
  stackoverflow: "https://stackoverflow.com/users/18335019/naimul-mushfiq",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA )"),
    emoji("⚡ Build Highly Scalable Realtime Node servers"),
    emoji("⚡ Build Restful APIs")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "reactNative",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "gitVersionControl",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Azure Cloud DB",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "testing",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "caching",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "microServices-busMQ",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "redis",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "jest",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "chai",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "socket io",
      fontAwesomeClassname: "fab fa-node"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "AIUB",
      logo: require("./assets/images/aiub200_200.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2019 - present (Dropout) 😥"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle:
    "SOME PROJECTS I HAVE BEEN WORKING ON SINCE I STARTED WEB-DEVELOPMENT",
  projects: [
    {
      image: require("./assets/images/modPanda.PNG"),
      projectName: "Alcohol Delivery App",
      projectDesc:
        "Full stack customer to bar owner bar app also realtime with socket io",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://modPanda.netlify.app/ "
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/memories.PNG"),
      projectName: "Memories Photos App",
      projectDesc: "MERN CRUD Photos app like instaGram with auth and likes",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://thirsty-neumann-c71384.netlify.app "
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/social-media-1446669-1222344.png"),
      projectName: "Social Media Fully Responsive",
      projectDesc:
        "Fully responsive social media with firebase Auth and Backend and Messaging",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://peaceful-visvesvaraya-043f1f.netlify.app/ "
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/EcommerceIcon.png"),
      projectName: "E-Commerce with Stripe Integration",
      projectDesc:
        "Fully Responsive E-Commerce with stripe payment integration and Firebase Auth and Backend",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://generic-e-com-react.herokuapp.com/"
        }
      ]
    },
    {
      image: require("./assets/images/MaptyIcon.png"),
      projectName: "Mapty-Exercise or Tour Planner",
      projectDesc:
        "Tour or exercise planner with live location distance and Cadence(Vanilla JavaScript)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://brave-hawking-6c30bf.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/ElectroBD.png"),
      projectName: "Wordpress E-Commerce Fully Responsive",
      projectDesc:
        "Wordpress Ecom for a client fully responsive with woo commerce plugins",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://electrobd.ezyro.com/?i=1 "
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+8801629098193",
  email_address: "naimulmushfiq98@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
