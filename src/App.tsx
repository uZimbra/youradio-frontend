import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { Player } from "./components/Player";
import { ContextProvider } from "./contexts";
import GlobalStyle from "./global";
import { Wrapper } from "./global/appStyles";
import AppRoutes from "./routes";

function App() {
  return (
    <ContextProvider>
      <Wrapper>
        <GlobalStyle />
        <main>
          <Header />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </main>
        <Player />
      </Wrapper>
    </ContextProvider>
  );
}

export default App;
