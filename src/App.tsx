import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import TemplateChat from "./components/pages/TemplateChat";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/templatechat/:name", element: <TemplateChat /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
