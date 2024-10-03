import React, { useState, useEffect, useRef } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  ProgressBar,
} from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import * as Icon from "react-bootstrap-icons";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "react-circular-progressbar/dist/styles.css";

// For Profile Image
import profile from "./assets/pro1.jpg";

// For Projects
import project1 from "./assets/project1.png";
import project7 from "./assets/project7.png";
import project2 from "./assets/project2.png";
import r1 from "./assets/r1.png";
import r2 from "./assets/r2.png";
import r3 from "./assets/r3.png";
import r4 from "./assets/r4.png";
import r5 from "./assets/r5.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";
import project6 from "./assets/project6.png";

// For Libraries
import boot from "./assets/img/boot.png";
import mat from "./assets/img/mat.png";
import animate from "./assets/img/animate.jpg";
import aos from "./assets/img/aos.jpeg";
import pdfjs from "./assets/img/pdfjs.png";
import emailjs from "./assets/img/emailjs.png";
import animejs from "./assets/img/animejs.png";
import swiperjs from "./assets/img/swiperjs.png";

// For APIs
import wapi from "./assets/img/wapi.png";
import firebase from "./assets/img/firebase.png";
import qapi from "./assets/img/qapi.png";
import gapi from "./assets/img/gapi.png";

// For Achievements
import jsCertificate from "./assets/jsCertificate.png";
import reactCertificate from "./assets/reactCertificate.png";

export default function HomePage() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
    setExpanded(false);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const hardSkills = [
    { name: "React", value: 80 },
    { name: "JavaScript", value: 90 },
    { name: "HTML", value: 90 },
    { name: "Css", value: 90 },
    { name: "Bootstrap", value: 70 },
  ];

  const softSkills = [
    { name: "Problem Solving", value: 90 },
    { name: "Communication", value: 85 },
    { name: "Teamwork", value: 80 },
    { name: "Adaptability", value: 75 },
    { name: "Time Management", value: 70 },
  ];

  const timeline = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      company: "Govt. PG College, Una",
      duration: "2021 - 2024",
      description1:
        "Studied core subjects like Web Development, JavaScript, Data Structures, and Databases",
      description2:
        "Developed various projects using HTML, CSS, JavaScript, and React.",
      description3:
        "Active member of the my University weekly tech Fest, where I collaborated with peers on coding and UI challenges.",
    },
    {
      title: "AI Website Builder - Final Year Project Lead",
      company: "Govt. PG College, Una",
      duration: "March 2024",
      description1:
        "Led a team of 3 to develop an AI-powered website builder using JavaScript.",
      description2:
        "Designed and implemented the core logic that allows users to generate websites automatically based on their inputs.",
      description3:
        "Managed the team workflow, delegated tasks, and coordinated the final project presentation, which received positive feedback from faculty and peers.",
    },
    {
      title: "Live Notes Website for BCA Students",
      company: "Govt. PG College, Una",
      duration: "June 2024",
      description1:
        "Developed a paid membership website for BCA students to access notes using Firebase and JavaScript.",
      description2:
        "Implemented a complete authentication system with Firebase Authentication for secure login and account management.",
      description3:
        "Integrated PDF.js for seamless viewing of notes in PDF format within the browser.",
      description4:
        "Handled payments by providing access codes after the payment.",
    },
    {
      title: "AI Tools & Prompt Engineer (Self-Taught)",
      company: "Independent Researcher in AI Tools",
      duration: "Feb 2023 - Present",
      description1:
        "Gained expertise in using AI tools and writing optimized prompts to enhance development workflows.",
      description2:
        "Used tools like ChatGPT, Claude, Ideogram, and Vercel to create innovative solutions and assist in web development processes.",
      description3:
        "Gained UI inspirations from various sites like Dribble, Behance, Awwwards, Pinterest and grab new UI design trends",
    },
  ];

  const projects = [
    {
      title: "Live Learning Website",
      category: "HTML-CSS-JavaScript",
      image: project1,
      description:
        "A leaning website with user authentication with JavaScript & Firebase and PDFjs.",
      link: "https://bca-5th-sem.netlify.app/",
      github: "https://bca-5th-sem.netlify.app/",
    },
    {
      title: "Online Course Website",
      category: "HTML-CSS-JavaScript",
      image: project7,
      description:
        "An online course website based on Html-Css with html-css and vanilla JavaScript.",
      link: "https://htmlcss-course.netlify.app/",
    },
    {
      title: "JavaScript Quiz Website",
      category: "HTML-CSS-JavaScript",
      image: project2,
      description:
        "A Quiz website based on javascipt basic concepts with using Vanilla Javascript.",
      link: "https://master-javascript.netlify.app/",
    },
    {
      title: "React Neumorphic Calculator",
      category: "React",
      image: r1,
      description:
        "A neumorphic style calculator with animations and keyboard support with React.",
      link: "https://arbaz-calculatorapp.netlify.app/",
    },
    {
      title: "React Weather App",
      category: "React",
      image: r2,
      description:
        "A glassomorphism style weather app with WeatherAPI and React.",
      link: "https://arbaz-weatherapp.netlify.app/",
    },
    {
      title: "React Portfolio App",
      category: "React",
      image: r3,
      description:
        "A minimalistic styled Portfolio UI with AOS supported animations and React.",
      link: "https://arbazali-portfolio.netlify.app/",
    },
    {
      title: "React Movie App",
      category: "React",
      image: r4,
      description:
        "A minimal designed movie search app with OMDb api and React.",
      link: "https://arbaz-movieapp.netlify.app/",
    },
    {
      title: "React Card Maker",
      category: "React",
      image: r5,
      description:
        "A minimal designed card generator with saved-download-reset facility and React.",
      link: "https://arbaz-cardmaker.netlify.app/",
    },
    {
      title: "Task Management App",
      category: "HTML-CSS-JavaScript",
      image: project3,
      description:
        "A neumorphism style task management website with vanilla JavaScript.",
      link: "https://neumorphism-todo.netlify.app/",
    },
    {
      title: "Advance JavaScript Form",
      category: "HTML-CSS-JavaScript",
      image: project4,
      description:
        "An advance form which validates user's email and fileds completion and enable users to compose mail with vanilla JavaScript.",
      link: "https://bca-access-form.netlify.app/",
    },
    {
      title: "Fantasy AI (Final Year Project)",
      category: "HTML-CSS-JavaScript",
      image: project5,
      description:
        "An AI input based website builder allowing users to create layouts based on users selections with vanilla JavaScript.",
      link: "https://fantasyai.netlify.app/",
    },
    {
      title: "Glamor Glow",
      category: "HTML-CSS-JavaScript",
      image: project6,
      description:
        "A promotional blog website based on Libstick brands shocasing various lipsticks with html-css and vanilla JavaScript.",
      link: "https://glamorglow.netlify.app/",
    },
    // Add more projects as needed
  ];

  const [currentFilter, setCurrentFilter] = useState(() => "All");
  const filteredProjects = projects.filter((project) => {
    if (currentFilter === "All") return true;
    return project.category.includes(currentFilter);
  });

  const libraries = [
    { name: "Bootstrap", image: boot },
    { name: "Material UI", image: mat },
    { name: "Animate.css", image: animate },
    { name: "AOS", image: aos },
    { name: "PDF Js", image: pdfjs },
    { name: "Email Js", image: emailjs },
    { name: "Anime Js", image: animejs },
    { name: "Swiper Js", image: swiperjs },
  ];

  const apis = [
    { name: "Weather API", image: wapi },
    { name: "Firebase", image: firebase },
    { name: "Quotable API", image: qapi },
    { name: "Google Fonts API", image: gapi },
  ];

  const achievements = [
    {
      title: "JavaScript Certificate",
      organization: "Scaler",
      year: "2024",
      description:
        "Completed an intensive course on modern JavaScript, covering ES6+ features, asynchronous programming, and advanced concepts.",
      certificatePath: jsCertificate,
    },
    {
      title: "React and Redux Certificate",
      organization: "KG Coding",
      year: "2024",
      description:
        "Mastered React.js through a comprehensive program, including state management, hooks, and building complex user interfaces.",
      certificatePath: reactCertificate,
    },
    {
      title: "Information Technology Enabled Services",
      organization: "Microsoft",
      year: "2022",
      description:
        "Gained expertise in IT-enabled services, focusing on cloud computing, data analytics, and digital transformation strategies.",
      certificatePath: jsCertificate,
    },
  ];
  const openCertificate = (certificatePath) => {
    window.open(certificatePath, "_blank");
  };

  return (
    <div className={`homepage ${darkTheme ? "dark-theme" : ""}`}>
      <Navbar
        bg={darkTheme ? "dark" : "light"}
        variant={darkTheme ? "dark" : "light"}
        expand="lg"
        fixed="top"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand href="#home">React Developer</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" onClick={() => setExpanded(false)}>
                About
              </Nav.Link>
              <Nav.Link href="#portfolio" onClick={() => setExpanded(false)}>
                Portfolio
              </Nav.Link>
              <Nav.Link href="#resume" onClick={() => setExpanded(false)}>
                Resume
              </Nav.Link>
              <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
              <Button
                variant={darkTheme ? "light" : "dark"}
                size="sm"
                onClick={toggleTheme}
                className="ms-2 theme-toggle"
              >
                {darkTheme ? <Icon.Sun /> : <Icon.Moon />}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="home" className="hero d-flex align-items-center section1">
        <Container fluid className="px-4 px-md-5">
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start">
              <h1 className="display-4 fw-bold mb-4" data-aos="fade-up">
                Innovative React Developer
              </h1>
              <p className="lead mb-4" data-aos="fade-up" data-aos-delay="100">
                Crafting seamless user experiences with React
              </p>
              <Button
                variant="primary"
                size="lg"
                data-aos="fade-up"
                data-aos-delay="200"
                onClick={scrollToProjects}
              >
                View My Work
              </Button>
            </Col>
            <Col lg={6} className="text-center mt-5 mt-lg-0">
              <img
                src={profile}
                alt="Profile"
                className="img-fluid rounded-circle proimg"
                data-aos="zoom-in"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="py-5">
        <Container fluid className="px-4 px-md-5">
          <h2 className="text-center mb-5">About Me</h2>
          <Row>
            <Col lg={12} className="mb-4">
              <p className="lead" data-aos="fade-up">
                Hello! I'm Arbaz, a passionate web developer with a focus on
                front-end technologies, especially React.js. My passion lies in
                developing with React.js, leveraging its flexibility to build
                scalable and efficient web applications. I believe in the power
                of clean code and intuitive design, ensuring that every project
                I work on not only functions well but also resonates with users.{" "}
                <br /> <br />
                Though I’m just starting my professional journey, I’ve worked on
                several personal projects where I applied my knowledge of
                JavaScript, React, and modern CSS frameworks to create
                responsive and accessible web applications. These experiences
                have sharpened my problem-solving skills and strengthened my
                ability to work independently as well as in collaborative
                settings.
                <br /> <br />I am constantly experimenting with new tools and
                technologies to stay ahead in this ever-evolving field. I am
                excited to bring my fresh perspective, enthusiasm, and strong
                work ethic to your team.
              </p>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
              <h3 className="mb-4">Experience & Education</h3>
              <div className="timeline">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="timeline-item mb-4" // Added spacing between items
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <h4>{item.title}</h4>
                    <p>
                      <strong>{item.company}</strong> | {item.duration}
                    </p>
                    <p>
                      {item.description1} <br /> {item.description2} <br />
                      {item.description3} <br /> {item.description4}
                    </p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="skills" className="py-5 bg-light">
        <Container fluid className="px-4 px-md-5">
          <h2 className="text-center mb-5">Skills</h2>
          <Row>
            <Col lg={6}>
              <h3 className="mb-4">Hard Skills</h3>
              {hardSkills.map((skill, index) => (
                <div
                  key={index}
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="d-flex justify-content-between">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <ProgressBar now={skill.value} className="skill-progress" />
                </div>
              ))}
            </Col>
            <Col lg={6}>
              <h3 className="mb-4">Soft Skills</h3>
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="d-flex justify-content-between">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <ProgressBar now={skill.value} className="skill-progress" />
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      <section id="portfolio" className="py-5" ref={projectsRef}>
        <Container fluid className="px-4 px-md-5">
          <h2 className="text-center mb-5">My Projects</h2>
          <div className="d-flex justify-content-start mb-4">
            <Button
              variant={currentFilter === "All" ? "primary" : "outline-primary"}
              className="me-2"
              onClick={() => setCurrentFilter("All")}
            >
              All
            </Button>
            <Button
              variant={
                currentFilter === "React" ? "primary" : "outline-primary"
              }
              className="me-2"
              onClick={() => setCurrentFilter("React")}
            >
              React
            </Button>
            <Button
              variant={
                currentFilter === "HTML-CSS-JavaScript"
                  ? "primary"
                  : "outline-primary"
              }
              onClick={() => setCurrentFilter("HTML-CSS-JavaScript")}
            >
              HTML-CSS-JavaScript
            </Button>
          </div>
          <Row>
            {filteredProjects.map((project, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <Card
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="project-card"
                >
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="d-flex justify-content-between gap-5">
                      <Button
                        variant="outline-primary"
                        href={project.link}
                        target="_blank"
                      >
                        View Project
                      </Button>
                      <Button
                        variant="outline-secondary"
                        href={project.github}
                        target="_blank"
                      >
                        Github
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* <section id="portfolio" className="py-5" ref={projectsRef}>
        <Container fluid className="px-4 px-md-5">
          <h2 className="text-center mb-5">My Projects</h2>
          <div className="d-flex justify-content-start mb-4">
            <Button
              variant={currentFilter === "All" ? "primary" : "outline-primary"}
              className="me-2"
              onClick={() => setCurrentFilter("All")}
            >
              All
            </Button>
            <Button
              variant={
                currentFilter === "React" ? "primary" : "outline-primary"
              }
              className="me-2"
              onClick={() => setCurrentFilter("React")}
            >
              React
            </Button>
            <Button
              variant={
                currentFilter === "HTML-CSS-JavaScript"
                  ? "primary"
                  : "outline-primary"
              }
              onClick={() => setCurrentFilter("HTML-CSS-JavaScript")}
            >
              HTML-CSS-JavaScript
            </Button>
          </div>
          <Row>
            {filteredProjects.map((project, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <Card
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="project-card"
                >
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Button
                      variant="outline-primary"
                      href={project.link}
                      target="_blank"
                    >
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}

      <section id="resume" className="py-5 bg-light">
        <Container fluid className="px-4 px-md-5">
          <h2 className="text-center mb-5">Resume</h2>
          <div className="text-center mb-4">
            <Button
              variant="primary"
              size="lg"
              href="/ ./assets/resume.pdf"
              target="_blank"
            >
              Download Resume
            </Button>
          </div>

          <Row className="justify-content-center mt-5 mb-5 libraries">
            <Col lg={8}>
              <h3 className="text-center mb-4">Libraries I've worked with</h3>
              <Row className="justify-content-center">
                {libraries.map((lib, index) => (
                  <Col key={index} xs={6} sm={3} className="text-center mb-4">
                    <div
                      className="library-item"
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                    >
                      <img
                        src={lib.image}
                        alt={lib.name}
                        className="img-fluid rounded-circle mb-2 lib-img"
                        style={{ width: "80px", height: "80px" }}
                      />
                      <p>{lib.name}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8}>
              <h3 className="text-center mb-4">APIs I've worked with</h3>
              <Row className="justify-content-center">
                {apis.map((api, index) => (
                  <Col key={index} xs={6} sm={3} className="text-center mb-4">
                    <div
                      className="api-item"
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                    >
                      <img
                        src={api.image}
                        alt={api.name}
                        className="img-fluid rounded-circle mb-2"
                        style={{ width: "80px", height: "80px" }}
                      />
                      <p>{api.name}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact" className="py-5">
        <Container fluid className="px-4 px-md-5">
          <h2 className="text-center mb-5">Get in Touch</h2>
          <Row className="justify-content-center">
            <Col lg={5} className="mb-4">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your Message"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Col>
            <Col lg={5}>
              <h3>Contact Information</h3>
              <p>
                <Icon.Envelope /> email@example.com
              </p>
              <p>
                <Icon.Phone /> +1 234 567 890
              </p>
              <p>
                <Icon.GeoAlt /> 123 Web Dev Street, Internet City
              </p>
              <div className="mt-4">
                <a href="#" className="me-3 social-icon">
                  <Icon.Linkedin />
                </a>
                <a href="#" className="me-3 social-icon">
                  <Icon.Github />
                </a>
                <a href="#" className="me-3 social-icon">
                  <Icon.Twitter />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="achievements" className="py-5 bg-light">
        <Container fluid className="px-4 px-md-5">
          <h2 className="text-center mb-5">Achievements</h2>
          <Row className="row-cols-1 row-cols-md-3 g-4">
            {achievements.map((achievement, index) => (
              <Col key={index}>
                <Card
                  className="h-100 achievement-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  onClick={() => openCertificate(achievement.certificatePath)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{achievement.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {achievement.organization} | {achievement.year}
                    </Card.Subtitle>
                    <Card.Text className="flex-grow-1">
                      {achievement.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <footer
        className={`${
          darkTheme ? "bg-dark text-white" : "bg-light text-dark"
        } py-4`}
      >
        <Container fluid className="px-4 px-md-5 text-center">
          <p>&copy; 2023 React Developer. All rights reserved.</p>
        </Container>
      </footer>

      <style jsx>{`
        .homepage {
          transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        }
        .dark-theme {
          background-color: #121212;
          color: #fff;
        }
        .hero {
          min-height: 100vh;
          background: ${darkTheme
            ? "linear-gradient(135deg, #121212 0%, #2c3e50 100%)"
            : "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"};
        }
        .section1 {
          padding-top: 80px;
          padding-bottom: 30px;
        }
        .proimg {
          width: 70%;
          height: 70%;
        }
        .timeline-item {
          border-left: 2px solid #007bff;
          padding-left: 20px;
          margin-bottom: 30px;
          position: relative;
        }
        .timeline-item::before {
          content: "";
          width: 12px;
          height: 12px;
          background: #007bff;
          position: absolute;
          left: -7px;
          top: 5px;
          border-radius: 50%;
        }
        .libraries {
          padding-top: 20px;
        }
        @media (min-width: 992px) {
          .hero {
            height: 100vh;
          }
          .theme-toggle {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        .project-card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          height: 100%;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .skill-progress .progress-bar {
          transition: width 1s ease-in-out;
        }
        .social-icon {
          transition: color 0.3s ease-in-out;
        }
        .social-icon:hover {
          color: #007bff;
        }
        button {
          transition: background-color 0.3s ease-in-out,
            transform 0.1s ease-in-out;
        }
        button:hover {
          transform: translateY(-2px);
        }
        button:active {
          transform: translateY(0);
        }
        .dark-theme .card {
          background-color: #1e1e1e;
          color: #fff;
        }
        .dark-theme .bg-light {
          background-color: #1e1e1e !important;
        }
        .dark-theme .text-muted {
          color: #a0a0a0 !important;
        }
        .dark-theme .form-control {
          background-color: #2c2c2c;
          color: #fff;
          border-color: #444;
        }
        .dark-theme .form-control::placeholder {
          color: #a0a0a0;
        }

        .library-item,
        .api-item {
          transition: transform 0.3s ease-in-out;
        }

        .library-item:hover,
        .api-item:hover {
          transform: scale(1.1);
        }

        .library-item img,
        .api-item img {
          transition: box-shadow 0.3s ease-in-out;
        }

        .library-item:hover img,
        .api-item:hover img {
          box-shadow: 0 0 15px rgba(0, 123, 255, 0.5);
        }

        .dark-theme .library-item:hover img,
        .dark-theme .api-item:hover img {
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }

        .achievement-card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .achievement-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .dark-theme .achievement-card {
          background-color: #1e1e1e;
          color: #fff;
        }

        .dark-theme .achievement-card .text-muted {
          color: #a0a0a0 !important;
        }

        @media (max-width: 767px) {
          .achievement-card {
            margin-bottom: 1rem;
          }
        }

        .btn-outline-primary {
          color: #007bff;
          border-color: #007bff;
        }

        .btn-outline-primary:hover,
        .btn-outline-primary:focus,
        .btn-outline-primary:active {
          color: #fff;
          background-color: #007bff;
          border-color: #007bff;
        }

        .dark-theme .btn-outline-primary {
          color: #fff;
          border-color: #fff;
        }

        .dark-theme .btn-outline-primary:hover,
        .dark-theme .btn-outline-primary:focus,
        .dark-theme .btn-outline-primary:active {
          color: #1e1e1e;
          background-color: #fff;
          border-color: #fff;
        }

        // new
        .project-card .card-body {
          display: flex;
          flex-direction: column;
        }

        .project-card .card-body .btn-group {
          margin-top: auto;
        }

        .project-card .card-body .btn {
          flex: 1;
        }

        .project-card .card-body .btn:first-child {
          margin-right: 5px;
        }

        .dark-theme .btn-outline-secondary {
          color: #fff;
          border-color: #fff;
        }

        .dark-theme .btn-outline-secondary:hover,
        .dark-theme .btn-outline-secondary:focus,
        .dark-theme .btn-outline-secondary:active {
          color: #1e1e1e;
          background-color: #fff;
          border-color: #fff;
        }
      `}</style>
    </div>
  );
}
