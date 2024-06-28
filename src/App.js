import { Route, Routes } from "react-router-dom";
import UserNavbar from "./users/header/Navbar";
import Home from "./users/pages/Home";
import About from "./users/pages/About";
import Product from "./users/pages/Product";

function App() {
    return (
        <>
          <UserNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </>

    );
}

export default App;
