import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Router } from "./router/Router";

export default function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}
