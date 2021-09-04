import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Membership } from "./components/Membership";
import { Navbar } from "./components/Navbar";
import { Recipes } from "./components/Recipes";
import { Service } from "./components/Service";

function App() {
  return (
  <>
    <Navbar />
    <Header />
    <Recipes />
    <Service />
    <Blog />
    <Membership />
    <Footer />
  </>
  );
}

export default App;
