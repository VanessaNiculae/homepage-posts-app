import { Routes, Route } from "react-router-dom"
import App from "./App"
import GithubRepo from "./components/GithubRepo";
import Posts from "./Posts";

function App1() {
    return (
        <div className="App1">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="Repositories" element={<Posts />} />
            </Routes>
        </div>
    );
}

export default App1;