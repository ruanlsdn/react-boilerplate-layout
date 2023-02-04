import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar, Topbar } from "./components";
import { useStateContext } from "./contexts/StateContext";
import Welcome from "./pages/welcome/Welcome";

function App() {
  const { isSidebarActive } = useStateContext();

  return (
    <div className="App">
      <BrowserRouter>
        {isSidebarActive && <Sidebar />}
        <div className="App-content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
