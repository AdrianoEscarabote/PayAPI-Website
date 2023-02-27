import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NameComponentParent } from "./context";
import { ReactRoutes } from "./routes/Routes";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const [componentName, setComponentName] = useState<string | null>("main");

  useEffect(() => {
    console.log(componentName)
  }, [componentName])

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

export default App;