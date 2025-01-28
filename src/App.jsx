import { AuthProvider, useAuthContext } from "@asgardeo/auth-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { default as authConfig } from "./config.json";
import HomePage from "./Pages/HomePage/HomePage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

const LoginPage = () => {
  const { signIn } = useAuthContext();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Welcome to My App</h1>
      <p>Please log in or register to continue.</p>
      <button
        onClick={() => signIn()}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Login / Register
      </button>
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const { state, signIn } = useAuthContext();

  if (!state.isAuthenticated) {
    return <LoginPage />; // Redirect to the login/register page if not authenticated
  }
  return children;
};

const AppContent = () => {
  return (
    <Routes>
      {/* Protected route for authenticated users */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      {/* Catch-all for non-matching routes */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider config={authConfig}>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
