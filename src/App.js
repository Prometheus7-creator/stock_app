import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Account } from "./components/Account";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import LandingPage from "./pages/LandingPage";
import ResultPage from "./pages/ResultPage";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/search" element={<ResultPage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Account><Login/></Account>}/>
          <Route path="/signup" element={<Account><SignUp/></Account>}/>
          <Route path="/dashboard" element={<Account><Dashboard/></Account>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
