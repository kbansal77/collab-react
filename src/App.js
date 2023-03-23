import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from "./pages/Discover/Discover";

import Projectpage from "./pages/ProjectPage/Projectpage";
import NewPost from "./pages/NewPost/Newpost";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfilePage/EditProfilePage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route exact path="discover" element={<Discover />} />
                    <Route exact path="newpost" element={<NewPost />} />
                    <Route exact path="profile" element={<Profile />} />
                    <Route exact path="editprofile" element={<EditProfile />} />
                    <Route path="post/:project_id" element={<Projectpage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
