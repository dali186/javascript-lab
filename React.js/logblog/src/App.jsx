import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import MainPage from "./pages/MainPage";
import SelectConceptPage from "./pages/SelectConceptPage";
import ArticleWritePage from "./pages/ArticleWritePage";

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<SignInPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/select" element={<SelectConceptPage />} />
      <Route path="/article/write" element={<ArticleWritePage />} />
    </Routes>
  </BrowserRouter>
  </>;
}

export default App;
