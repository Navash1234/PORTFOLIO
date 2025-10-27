import project1 from "../../public/Project-1.png";
import project2 from "/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a motivated and detail-oriented Cloud Engineer passionate about designing, deploying, and automating scalable cloud solutions. With hands-on experience in AWS services, Linux, and Python, I focus on building secure, reliable, and cost-optimized infrastructures. I also apply data analytics skills using SQL, Power BI, and Pandas to derive actionable insights from data. Having completed the AWS Certified Cloud Practitioner exam, I aim to contribute to innovative cloud and data-driven projects that enhance efficiency and sustainability.`;

export const ABOUT_TEXT = `I am a Computer Science Engineering graduate specializing in Cloud Computing, Infrastructure Automation, and Data Analytics. I have strong practical knowledge in AWS, Python, and Linux, along with experience in data processing and dashboard development using Power BI and Pandas. During my Cloud Trainee role at Cultus Education and Technology (AWS re/Start Program), I gained hands-on experience in AWS Core Services, Linux, and Infrastructure as Code. As a Visualization Intern at Infosys Springboard, I collected and analyzed datasets, built interactive Power BI dashboards, and integrated them into Streamlit web applications deployed on the cloud. I am an AWS Certified Cloud Practitioner, passionate about building secure, scalable, and data-informed cloud architectures that solve real-world challenges.`;

export const EXPERIENCES = [
  {
    year: "July 2025 – Oct 2025",
    role: "Cloud Trainee – AWS re/Start Program",
    company: "Cultus Education and Technology",
    description: `Completed hands-on training on AWS Core Services, Python, Linux, and Databases. Worked on real-time labs involving EC2, S3, IAM, VPC, CloudWatch, and Lambda. Practiced Infrastructure as Code (IaC) and Cloud Security fundamentals while applying AWS best practices for deployment and monitoring.`,
    technologies: [
      "AWS",
      "Python",
      "Linux",
      "IAM",
      "VPC",
      "EC2",
      "S3",
      "CloudWatch",
    ],
  },
  {
    year: "Feb 2025 – Mar 2025",
    role: "Visualization Intern",
    company: "Infosys Springboard",
    description: `Collected, cleaned, and preprocessed datasets for analytics and reporting. Built interactive Power BI dashboards for cloud-hosted data visualization and integrated them into a Streamlit web application deployed on the cloud for real-time analytics and insights.`,
    technologies: ["Python", "Power BI", "Streamlit", "Pandas"],
  },
];

export const PROJECTS = [
  {
    title: "Scalable & Secure Web Application on AWS",
    image: project1,
    description:
      "Designed a reliable and secure cloud architecture ensuring scalability, availability, and performance. Deployed EC2 for compute, S3 for static content, and RDS (Multi-AZ) for data storage. Configured CloudFront with Route 53 for global content delivery and DNS routing. Implemented IAM roles and CloudWatch for security, monitoring, and operational visibility. Achieved 99.9% uptime and optimized cost efficiency following the AWS Well-Architected Framework.",
    technologies: [
      "AWS",
      "EC2",
      "S3",
      "RDS",
      "CloudFront",
      "Route 53",
      "IAM",
      "CloudWatch",
    ],
  },
  {
    title: "Automated AWS Infrastructure using Terraform",
    image: project2,
    description:
      "Implemented end-to-end cloud infrastructure automation using Terraform. Provisioned a secure VPC, subnets, EC2 instances, RDS database, and Application Load Balancer. Applied Infrastructure as Code (IaC) best practices with reusable modules and version control. Automated deployment improved setup time by 80% and ensured consistent, reproducible environments for development and production.",
    technologies: [
      "Terraform",
      "AWS",
      "VPC",
      "EC2",
      "RDS",
      "Load Balancer",
      "IAM",
      "Git",
    ],
  },
  {
    title: "Air Quality Monitoring & Dashboard Integration",
    image: project3,
    description:
      "Created a data-driven air quality monitoring solution during Infosys Springboard internship. Processed and cleaned environmental data, built trend-based visual    analytics using Power BI, and developed a Streamlit web app for interactive dashboard deployment.",
    technologies: ["Python", "Power BI", "Streamlit"],
  },
];

export const CONTACT = {
  address: "Tamil Nadu, India",
  phoneNo: "+91 7397605800",
  email: "navasahamed319@gmail.com",
};
