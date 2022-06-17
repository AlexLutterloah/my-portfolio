import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="body-container">
                <ResponsiveAppBar style={{ position: "absolute" }} />

                <main className="content-section">
                    <span id="about"></span>

                    <About></About>

                    <h2 className="content-headers" id="projects">
                        PROJECTS
                    </h2>

                    <Projects></Projects>

                    <h2 className="content-headers" id="contact">
                        CONTACT
                    </h2>

                    <Contact></Contact>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
