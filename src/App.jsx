import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="mx-4 md:mx-10 xl:mx-52">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
