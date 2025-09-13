import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { PostDetail } from "../pages/PostDetail";
import { Layout } from "../layouts/layout";
import { ScrollToTop } from "../components/ScrollToTop";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}