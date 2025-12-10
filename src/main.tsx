import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./app/index.css";

createRoot(document.getElementById("root")!).render(
    <div className="h-screen flex justify-center w-screen">
        <StrictMode>
            <App />
        </StrictMode>
    </div>
);
