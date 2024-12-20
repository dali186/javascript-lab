import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import MainPage from "./pages/MainPage";
import BrdWritePage from "./pages/SelectConceptPage";

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<SignInPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/select" element={<BrdWritePage />} />
    </Routes>
  </BrowserRouter>
  </>;
}

export default App;
