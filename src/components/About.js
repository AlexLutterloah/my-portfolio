import React from "react";
import "./About.css";
import { ReactComponent as AlexIcon } from "../assets/alex-icon-no-filter.svg";
import { Chip, Divider } from "@mui/material";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiCsharp,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiAmazondynamodb,
} from "react-icons/si";
import { Button } from "@mui/material";
import Resume from "../assets/resume.pdf";

const About = () => {
  return (
    <section className="about-container">
      <div className="text-section">
        <h2 className="aboutH2">Hello, my name is</h2>
        <h1 className="aboutH1">Alex Lutterloah.</h1>
        <p className="aboutP">
          <span>Software engineer</span> specializing in full-stack development.
          I also have an interest in developing utility-based applications to assist or
          automate meticulous processes. I particularly enjoy full-stack development 
          as it provides a comprehensive understanding of
          application development from start to finish. Building out user
          interfaces isn't my favorite activity, but I do find satisfaction in
          creating intuitive and clean UI designs.
          <br />
          <br />I currently live in Richmond, Virginia and recently graduated
          from <span>Virginia Commonwealth University</span> with a Bachelor's
          Degree in Computer Science, Concentration in Software Engineering. I
          also work full time at
          <span> Origin Financial Services, LLC </span>
          as an IT Document Specialist.
        </p>
        <p className="aboutP">
          <span>Currently seeking new employment opportunities.</span>
        </p>
        <Divider
          sx={{
            "&::before, &::after": {
              borderColor: "#18ffff",
            },
            paddingTop: "25px",
          }}
        >
          SKILLS
        </Divider>
        <ul className="skills-list">
          <li>
            <Chip
              className="skills-chip"
              sx={{ color: "white", borderColor: "#18ffff" }}
              icon={<IoLogoJavascript />}
              label="Javascript"
              variant="outlined"
            />
          </li>
          <li>
            <Chip
              className="skills-chip"
              sx={{ color: "white", borderColor: "#18ffff" }}
              icon={<FaReact />}
              label="React"
              variant="outlined"
            />
          </li>
          <li>
            <Chip
              className="skills-chip"
              sx={{ color: "white", borderColor: "#18ffff" }}
              icon={<FaNodeJs />}
              label="Node"
              variant="outlined"
            />
          </li>
          <li>
            <Chip
              className="skills-chip"
              sx={{ color: "white", borderColor: "#18ffff" }}
              icon={<SiCsharp />}
              label="C#"
              variant="outlined"
            />
          </li>
          <li>
            <Chip
              className="skills-chip"
              sx={{ color: "white", borderColor: "#18ffff" }}
              icon={<SiPostgresql />}
              label="SQL"
              variant="outlined"
            />
          </li>
          <li>
            <Chip
              style={{ color: "white", borderColor: "#18ffff" }}
              className="skills-chip"
              icon={<SiMongodb />}
              label="MongoDB"
              variant="outlined"
            />
          </li>
          <li>
            <Chip
              style={{ color: "white", borderColor: "#18ffff" }}
              className="skills-chip"
              icon={<SiPython />}
              label="Python"
              variant="outlined"
            />
          </li>
          <li>
            <Chip
              style={{ color: "white", borderColor: "#18ffff" }}
              className="skills-chip"
              icon={<SiAmazondynamodb />}
              label="DynamoDB"
              variant="outlined"
            />
          </li>
          <li>
            <Chip
              style={{ color: "white", borderColor: "#18ffff" }}
              className="skills-chip"
              icon={<FaJava />}
              label="Java"
              variant="outlined"
            />
          </li>
        </ul>
      </div>
      <div className="about-image-container">
        <AlexIcon className="about-svg" />
        <Button
          variant="outlined"
          sx={{
            display: "flex",
            margin: "50px auto 0 auto",
            color: "#18ffff",
          }}
        >
          <a href={Resume} download="Resume" target="_blank" rel="noreferrer">
            Resume
          </a>
        </Button>
      </div>
    </section>
  );
};

export default About;
