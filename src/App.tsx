import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NameComponentParent } from "./context";
import { ReactRoutes } from "./routes/Routes";
import { GlobalStyle } from "./styles/GlobalStyle";

export default function App() {
  const [componentName, setComponentName] = useState<string | null>("main");

  return (
    <BrowserRouter>
      <NameComponentParent value={ componentName }>
        <GlobalStyle />
        <Header setName={setComponentName} name={componentName} />
        <ReactRoutes /> 
        <Footer setName={setComponentName} />
      </NameComponentParent>
    </BrowserRouter>
  );
};