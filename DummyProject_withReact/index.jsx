import React from "react";
import { createRoot } from "react-dom/client";
import Container from "./components/Container.jsx";
const rootElement = document.getElementById("root");
if (rootElement) {
    const root = createRoot(rootElement);
    const App = () => {
        return (
            <div>
                <h1>Hello, React!</h1>
                <Container/>
            </div>
        );
    }
    root.render(<App />);
}