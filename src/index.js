import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import HomePage from "./pages/HomePage/index.jsx";

import Navbar from "./components/Navbar/navbar.component.jsx";
import Footer from "./components/Footer/footer.component.jsx";

const DevWork = React.lazy(() => import('./components/Work/dev.component'))
const DesignWork = React.lazy(() => import('./components/Work/design.component'))

const App = () => {
    return (
        <BrowserRouter>
            <React.StrictMode>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/dev-work" element={<DevWork />} />
                    <Route path="/design-work" element={<DesignWork />} /> */}
                </Routes>
                <Footer />
            </React.StrictMode>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
