import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Signup } from "./features";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="app-container">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
