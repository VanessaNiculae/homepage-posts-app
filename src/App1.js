import { Routes, Route } from "react-router-dom"
import App from "./App"
import GithubRepo from "./components/GithubRepo";

function App1() {
    return (
        <div className="App1">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="Repositories" element={<GithubRepo />} />
            </Routes>
        </div>
    );
}

export default App1;