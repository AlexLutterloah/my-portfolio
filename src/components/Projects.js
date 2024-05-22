import "./Projects.css";
import autoscripter_icon from "../assets/autoscripter.png";
import healthdashboard_icon from "../assets/health_dashboard.png";
import wealthwise_icon from "../assets/wealthwise.png";
import { Button } from "@mui/material";

const Projects = () => {
  return (
    <section className="projects">
      <div className="project-container">
        <h2 className="project-title">Auto Scripter</h2>
        <div className="content-container content-hover">
          <div className="text-container">
            <p>
              This is a multi-facted tool that I created to improve efficiency
              in meticulous tasks related to updating a SQL database for
              work-related purposes.
            </p>
            <h3 className="text-headers">FEATURES</h3>
            <ul>
              <li>
                Builds SQL configuration file based on file titles and user
                input
              </li>
              <li>Create new field configurations via simple UI</li>
              <li>Drag and drop files, or select to browse</li>
              <li>Auto-complete text inputs for new fields</li>
              <li>
                Provides and reads Excel template data to return SQL
                configuration
              </li>
            </ul>
            <h3 className="text-headers">TOOLS</h3>
            <p>
              I utilized the .NET framework to create this windows form
              application since it has the ability to easily create user
              interfaces, and was capable of the basic functionality I was
              looking for.
            </p>
            <h3 className="text-headers">EXPERIENCE GAINED</h3>
            <ul>
              <li>.NET Framework / C# / WinForms</li>
              <li>Text Parsing & Regular Expression</li>
              <li>Reading and writing to Excel/CSV files in C#</li>
              <li>Intercepting windows events in C# (form controls)</li>
            </ul>
            <p>
              <br />
              Code walk-through available upon request.
            </p>
          </div>
          <img
            className="img-container zoom"
            src={autoscripter_icon}
            alt="auto scripter screenshot"
          />
        </div>
      </div>
      <div className="project-container">
        <h2 className="project-title">Health Dashboard</h2>
        <div className="content-container content-hover">
          <div className="text-container">
            <p>
              Full-stack web application built for Capital One as a part of the
              VCU Capstone projects in 2024. This application solves the problem
              of platform stakeholders not having an efficient way to check the
              status of applications within their division.
            </p>
            <h3 className="text-headers">FEATURES</h3>
            <ul>
              <li>
                Information stored in a local database and queried to populate
                data
              </li>
              <li>Graphical representation of table data</li>
              <li>
                Predicted 6 month incident statuses using machine learning
              </li>
              <li>Data table searching / sorting</li>
              <li>
                Security Risks and Incidents 6-month previous data displayed
              </li>
              <li>Login Authentication</li>
            </ul>
            <h3 className="text-headers">TOOLS</h3>
            <p>
              Built using React, Node, DynamoDB, Express. Some additional
              tools/libraries include: Material UI (styling), Axios (API),
              SKLearn (machine learning), AWS SDK (query DynamoDB).
            </p>
            <h3 className="text-headers">EXPERIENCE GAINED</h3>
            <ul>
              <li>NoSQL Databases / DynamoDB / Querying DynamoDB in JS</li>
              <li>Passing data in React via props & route parameters</li>
              <li>REST API Creation</li>
              <li>Machine Learning to predict status values in 6 months</li>
              <li>Displaying data in charts/graphs</li>
              <li>DataGrids, sorting and searching</li>
            </ul>
            <h3 className="text-headers">LEARN MORE</h3>
            <Button
              variant="outlined"
              sx={{
                marginRight: "20px",
                color: "#18ffff",
              }}
              href="https://www.figma.com/proto/iSlqnrrLy5ki1eWW7l8ir9/FINAL-MOCK-UP---Health-Dashboard?node-id=66-65&t=kRDLgdMGVkPmLyKQ-1"
            >
              Figma
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#18ffff",
              }}
              href="https://github.com/AlexLutterloah/Health-Dashboard"
            >
              GitHub
            </Button>
          </div>
          <img
            className="img-container zoom"
            src={healthdashboard_icon}
            alt="health dashboard application screenshot"
          />
        </div>
      </div>
      <div className="project-container">
        <h2 className="project-title">WealthWise</h2>
        <div className="content-container content-hover">
          <div className="text-container">
            <p>
              Simple react native application that calculates net worth based on
              asset and liability totals.
            </p>
            <h3 className="text-headers">FEATURES</h3>
            <ul>
              <li>User input for assets and liabilities</li>
              <li>Calculation of asset / liability totals</li>
              <li>Overall net worth calculation</li>
            </ul>
            <h3 className="text-headers">TOOLS</h3>
            <p>
              Built using React Native, used Expo Snack to run the app in
              browser.
            </p>
            <h3 className="text-headers">EXPERIENCE GAINED</h3>
            <ul>
              <li>React Native</li>
              <li>Data Contexts in React</li>
              <li>Expo Snack</li>
            </ul>
            <h3 className="text-headers">LEARN MORE</h3>
            <Button
              variant="outlined"
              sx={{
                marginRight: "20px",
                color: "#18ffff",
              }}
              href="https://www.figma.com/proto/AH4C9yeltqPeiMxhlA7hjB/WealthWise-Prototype?node-id=1-2&t=YakMtP0ctFhJUS2u-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2"
            >
              Figma
            </Button>
            <Button
              variant="outlined"
              sx={{
                marginRight: "20px",
                color: "#18ffff",
              }}
              href="https://github.com/AlexLutterloah/WealthWise"
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#18ffff",
              }}
              href="https://snack.expo.dev/@alexlutterloah/wealthwise-final"
            >
              EXPO
            </Button>
          </div>
          <img
            className="img-container zoom mobile-img"
            src={wealthwise_icon}
            alt="wealthwise mobile app screenshot"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
