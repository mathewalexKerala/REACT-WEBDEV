import { Routes, Route } from "react-router";
import Layout from "./Layout";
import { Home, About, Contact, Github, Spinner } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            loader={{ message: <Spinner /> }}
            path="github"
            element={<Github />}
          />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
