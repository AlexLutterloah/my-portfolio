import React from "react";
import "./About.css";
import { ReactComponent as AlexIcon } from "../images/alex-icon-no-filter.svg";
import { Chip, Divider } from "@mui/material";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCsharp, SiPostgresql, SiMongodb } from "react-icons/si";
import { Button } from "@mui/material";

const About = () => {
    return (
        <section className="about-container">
            <div>
                <h2 className="aboutH2">Hello, my name is</h2>
                <h1 className="aboutH1">Alex Lutterloah.</h1>
                <p className="aboutP">
                    Software engineer specializing in utility and application
                    development. I'm currently a part-time Computer Science
                    student at <span>Oregon State University</span>.
                    (Anticipated graduation: 2055) I also work full time at
                    <span> Origin Financial Services, LLC </span>
                    as an IT Document Specialist.
                </p>
                <p className="aboutP">
                    Freetime Activities: Video Games, Kayaking, Snowboarding,
                    Jet Skiing, Fishing, Motorcycling, Traveling... and pretty
                    much anything else that involves water.
                </p>
                <Divider
                    sx={{
                        "&::before, &::after": {
                            borderColor: "#18ffff",
                        },
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
                    Resume
                </Button>
            </div>
        </section>
    );
};

export default About;
