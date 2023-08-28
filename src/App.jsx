import {
  Header,
  Services,
  CallToAction,
  Footer,
  Blogs,
  Value,
  Enterprise,
  Connect,
} from "./components/sections";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Services />
      <Value />
      <Enterprise />
      <Connect />
      <Blogs />
      <CallToAction />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
