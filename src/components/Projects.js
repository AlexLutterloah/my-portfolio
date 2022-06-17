import "./Projects.css";
import config_icon from "../images/configuration_creator.png";

const Projects = () => {
    return (
        <section className="project-container">
            <div style={{ textAlign: "right", paddingBottom: "30px" }}>
                <h3 className="projectsH3">Configuration Creator</h3>
            </div>

            <div className="img-container">
                <img
                    className="screenshot"
                    src={config_icon}
                    alt="configuration creator screenshot"
                />
                <p className="project-text">Some content</p>
            </div>
        </section>
    );
};

export default Projects;
