import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import ThemeProvider from "./providers/ThemeProvider";
import { MainLayout } from "./components";
import Routes from "./routing";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider>
          <MainLayout>
            <Routes />
          </MainLayout>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
