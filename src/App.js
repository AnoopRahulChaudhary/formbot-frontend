import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormDashboard from "./pages/FormDashboard";
import FormWorkspace from "./pages/FormWorkspace";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registeration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/formDashboard" element={<FormDashboard />} />
        <Route path="/formWorkspace/:formKey" element={<FormWorkspace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
