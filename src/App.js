import ResponsiveAppBar from "./components/ResponsiveAppBar";
import "./App.css";
import ProjectItem from "./components/ProjectItem";
import { Container } from "@mui/system";

function App() {
    return (
        <div className="body-container">
            <ResponsiveAppBar />

            <main className="content-section">
                <h2>ABOUT</h2>
                <ProjectItem />
                <h2>PROJECTS</h2>
                <ProjectItem />
                <h2>CONTACT</h2>
                <ProjectItem />
            </main>
        </div>
    );
}

export default App;
