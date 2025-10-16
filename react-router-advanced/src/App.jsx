import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx";
import ProfileSettings from "./components/ProfileSettings.jsx";
import User from "./components/User.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useState } from "react";

function App() {
  const [isAuthenticated] = useState(true); // toggle false to test protected route

  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/user/123">User 123</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected nested route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic route */}
        <Route path="/user/:userId" element={<User />} />

        {/* Fallback */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;

