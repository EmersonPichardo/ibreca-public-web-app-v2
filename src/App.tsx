import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageContextProvider } from "./contexts/pageContext";
import Preaches from "./pages/preaches";
import Faith from "./pages/faith";
import History from "./pages/history";
import Home from "./pages/home";
import Layout from "./pages/layout/layout";
import MisionVision from "./pages/misionVision";
import VisitUs from "./pages/visitUs";
import PreachesDetails from "./pages/preachesDetails";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route element={<PageContextProvider><Layout /></PageContextProvider>}>
          <Route path="historia" element={<History />} />
          <Route path="mision-y-vision" element={<MisionVision />} />
          <Route path="declaracion-de-fe" element={<Faith />} />
          <Route path="visitanos" element={<VisitUs />} />
          <Route path="predicas" element={<Preaches />} />
          <Route path="predicas/:id" element={<PreachesDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}