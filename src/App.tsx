import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ReactRoutes } from "./routes/Routes";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <ReactRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
