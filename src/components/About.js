import React from "react";
import "./About.css";
import { ReactComponent as AlexIcon } from "../images/alex-icon-no-filter.svg";
import { Divider } from "@mui/material";

const About = () => {
    return (
        <section className="about-container">
            <div>
                <h2 className="aboutH2">Hello, my name is</h2>
                <h1 className="aboutH1">Alex Lutterloah.</h1>
                <p className="aboutP">
                    Software engineer specializing in utility and application
                    development. I'm currently a part-time Computer Science
                    student at{" "}
                    <span style={{ color: "#18ffff" }}>
                        Oregon State University
                    </span>
                    . (Anticipated graduation: 2055) I also work full time at
                    <span style={{ color: "#18ffff" }}>
                        {" "}
                        Origin Financial Services, LLC{" "}
                    </span>
                    as an IT Document Specialist.
                </p>
                <p className="aboutP">
                    Freetime Activities: Video Games, Kayaking, Snowboarding,
                    Jet Skiing, Fishing, Motorcycling, Traveling... and pretty
                    much anything else that involves water, and my girlfriend of
                    course.
                </p>
                <Divider>Skills</Divider>
            </div>
            <AlexIcon className="about-svg" />
        </section>
    );
};

export default About;
