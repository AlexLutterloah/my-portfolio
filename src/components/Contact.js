import React from "react";
import "./Contact.css";
import { Button } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-text">
        <p style={{ paddingBottom: "50px" }}>
          I'm currently looking for new employment opportunities in software
          development. <br />
          Please reach out below if you have any questions or have any hiring
          opportunities available.
        </p>
        <a
          style={{ paddingRight: "20px" }}
          href="https://www.linkedin.com/in/alexlutterloah/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size="2rem" />
        </a>
        <a
          style={{ paddingRight: "20px" }}
          href="https://github.com/AlexLutterloah"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size="2rem" />
        </a>
        <a href="https://x.com/AlexLutterloah" target="_blank" rel="noreferrer">
          <FaXTwitter size="2rem" />
        </a>
        <Button
          variant="outlined"
          sx={{
            display: "flex",
            margin: "auto",
            marginTop: "50px",
            color: "#18ffff",
          }}
        >
          <a
            href="mailto:alexlutterloah@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            Email
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
