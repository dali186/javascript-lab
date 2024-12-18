import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import MainPage from "./pages/MainPage";

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<SignInPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
  </>;
}

export default App;
