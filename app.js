const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Data to be passed to the view
const portfolioData = {
    name: "Nouhaila Chkhonty",
    education: [
        {
            degree: "Master DevOps & Cloud Computing",
            period: "2023-2025"
        },
        {
            degree: "Baccalaureate Science Physic and Chemistry",
            period: "2019"
        },
        {
            degree: "Bachelor’s Degree in Mathematics and Computer Science",
            period: "2021-2023"
        }
    ],
    skills: {
        languages: ["Java", "TypeScript", "C"],
        frameworks: ["Spring", "Angular", "Flutter"],
        databases: ["NoSQL", "SQL"],
        tools: ["Git", "Jenkins", "Docker", "AWS", "Kubernetes"]
    },
    languages: {
        english: "Medium proficiency",
        french: "Medium proficiency",
        arabic: "Native"
    },
    aboutMe: "I am passionate about mastering the intricate intersection of development, operations, and cloud technologies. Equipped with a strong foundation in automating processes, optimizing infrastructure, and deploying scalable solutions.",
    projects: [
        {
            title: "E-commerce Application",
            description: "Created an e-commerce platform using Spring Boot for the backend, Angular for the frontend, and Docker for deployment. Employed microservice architecture with MySQL and MongoDB databases for efficient data management, and implemented JWT for security."
        },
        {
            title: "Restauration System (Orderbell)",
            description: "As a mobile dev, I was responsible for developing features such as authentication using Dart and Flutter."
        },
        {
            title: "Scientific Laboratory Management System",
            description: "Developed a scientific laboratory management system designed for professors and researchers, enabling efficient management of lab activities, research projects, and test results. The system used microservices architecture, deployed on Kubernetes, and integrated with ELK for logging, Prometheus for monitoring, and Grafana for visualizing performance, ensuring scalability, fault tolerance, and observability."
        },
        {
            title: "Smart Lib - Online Library Management",
            description: "Developed the Smart Lib online library management system with a microservices architecture, focusing on user authentication using JWT token generation for secure login. Deployed on AWS using RDS, ECR, and ECS for data storage, container management, and scalability."
        }
    ],
    contact: {
        phone: "0625614991",
        email: "nohaila.chkhonty@gmail.com",
        location: "Ksar El Kebir"
    }
};


// Route to render the portfolio page
app.get('/', (req, res) => {
    res.render('index', portfolioData);
});

// Start the server
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
