import { Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <div className="website">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/success" element={<SuccessPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
