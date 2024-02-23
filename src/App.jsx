import "./App.css";
import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HomePage />
      <main>All Routing</main>
    </div>
  );
};

export default App;
