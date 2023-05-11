import Home from "./scenes/home";
import NavBar from "./scenes/navBar";
import About from "./scenes/about";
import Works from "./scenes/works";
import Contact from "./scenes/contact";
import Footer from "./scenes/footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex w-full flex-col">
        <Home />
        <About />
        <Works />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
