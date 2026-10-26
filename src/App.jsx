
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
