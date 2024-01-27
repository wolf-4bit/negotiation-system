import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import EcommerceHomePage from './Homepage';
import ProductPage from './productpage';
import "./App.css";

function App() {
  return (
    <>
      <Router>
      <Routes>
        {/* Route for Sign In */}
        <Route path="/" element={<SignIn />} />

        {/* Route for Sign Up */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<EcommerceHomePage />} />
        <Route path="/productpage" element={<ProductPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
