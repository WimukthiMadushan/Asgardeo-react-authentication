import { AuthProvider, useAuthContext } from "@asgardeo/auth-react";
import { Routes, Route } from "react-router-dom";
import authConfig from "./config.json";
import HomePage from "./Pages/HomePage/HomePage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ContainerPage from "./Pages/ContainerPage/ContainerPage";

const ProtectedRoute = ({ children }) => {
  const { state, signIn } = useAuthContext();

  if (!state.isAuthenticated) {
    signIn();
    return null;
  }
  return children;
};

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/container"
        element={
          <ProtectedRoute>
            <ContainerPage />
          </ProtectedRoute>
        }
      />

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
