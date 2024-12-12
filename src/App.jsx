import "./App.css";
import { Route, Routes } from "react-router";

import { lazy } from "react";
const StudentForm = lazy(() => import("./components/StudentForm"));
const StudentData = lazy(() => import("./components/StudentData"));
const LandingPage = lazy(() => import("./components/LandingPage"));
import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  return (
    <>
      <Routes>
        <Route path="/student-portal" element={<LandingPage />} />
        <Route path="/" element={<StudentData />} />
        <Route path="/student-form" element={<StudentForm />} />
      </Routes>
    </>
  );
}

export default App;
