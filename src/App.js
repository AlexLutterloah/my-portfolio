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
                <ResponsiveAppBar />

                <main className="content-section">
                    <span id="about" className="scroll"></span>

                    <About></About>

                    <h2 className="content-headers scroll" id="projects">
                        PROJECTS
                    </h2>

                    <Projects></Projects>

                    <h2 className="content-headers scroll" id="contact">
                        CONTACT
                    </h2>

                    <Contact></Contact>
                </main>
                <footer style={{ textAlign: "center" }}>
                    <span
                        style={{
                            fontFamily: "monospace",
                            paddingBottom: "20px",
                        }}
                    >
                        Developed by <span style={{ color: "#18ffff" }}>A</span>
                        lex <span style={{ color: "#18ffff" }}>L</span>
                        utterloah.
                    </span>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
