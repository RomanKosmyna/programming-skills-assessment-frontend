import { RouterProvider } from "react-router-dom";
import { router } from "../src/constants/router/router";

function App() {
  return <RouterProvider router={router} />
}

export default App;