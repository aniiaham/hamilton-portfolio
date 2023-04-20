import Home from "./scenes/home";
import NavBar from "./scenes/navBar";
import About from "./scenes/about";
import Works from "./scenes/works";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Works />
    </div>
  );
}

export default App;
