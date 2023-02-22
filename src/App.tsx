import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ReadyToStart } from "./components/shared/ReadyToStart";
import { ReactRoutes } from "./routes/Routes";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      {/* <ReactRoutes /> */}
      <ReadyToStart />
      <Footer />
    </BrowserRouter>
  );
}

export default App;