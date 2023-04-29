import Home from "./scenes/home";
import NavBar from "./scenes/navBar";
import About from "./scenes/about";
import Works from "./scenes/works";
import Contact from "./scenes/contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
