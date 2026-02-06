const links = {
  "caseStudies": {
    "href": "/case-studies",
    "target": "",
    "rel": ""
  },
  "resume": {
    "href": "/files/Nikki_Bright_Resume.pdf",
    "target": "_blank",
    "rel": "noopener noreferrer"
  },
  "blog": {
    "href": "https://blog.nikkibright.com",
    "target": "_blank",
    "rel": "noopener noreferrer"
  },
  "posts": {
    "href": "#posts",
    "target": "",
    "rel": ""
  },
  "projects": {
    "href": "#projects",
    "target": "",
    "rel": ""
  },
  "about": {
    "href": "#about",
    "target": "",
    "rel": ""
  },
  "email": {
    "href": "mailto:nikkistorme@gmail.com",
    "target": "",
    "rel": ""
  },
  "angel_list": {
    "href": "https://angel.co/nicholas-bright-3/",
    "target": "_blank",
    "rel": "noopener noreferrer"
  },
  "linkedin": {
    "href": "https://www.linkedin.com/in/nikki-bright/",
    "target": "_blank",
    "rel": "noopener noreferrer"
  },
  "github": {
    "href": "https://github.com/nikkistorme",
    "target": "_blank",
    "rel": "noopener noreferrer"
  }
}

export const mainNavLinks = [
  {
    "href": "/",
    "target": "",
    "rel": "",
    "label": "Home"
  },
  {
    "href": links.caseStudies.href,
    "target": links.caseStudies.target,
    "rel": links.caseStudies.rel,
    "label": "Case Studies"
  },
  {
    "href": links.resume.href,
    "target": links.resume.target,
    "rel": links.resume.rel,
    "label": "Resume"
  }
];

export const socialLinks = [
  {
    "href": links.email.href,
    "target": links.email.target,
    "rel": links.email.rel,
    "label": "Email",
  },
  {
    "href": links.linkedin.href,
    "target": links.linkedin.target,
    "rel": links.linkedin.rel,
    "label": "LinkedIn"
  },
  {
    "href": links.github.href,
    "target": links.github.target,
    "rel": links.github.rel,
    "label": "GitHub"
  }
];