import "./App.css";

// Page Imports

// Components Imports
import Navbar from './components/Navbar/navbar.component.jsx'
import HomePage from './pages/HomePage/HomePage.page.jsx'

function App() {
    return (
        <div className="App">
          <Navbar />
          <HomePage />
        </div>
    );
}

export default App;
