import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefalultLayout from "./layouts/DefalultLayout"
import HomePage from "./pages/HomePage"
import Error404 from "./pages/Error404"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefalultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="*" Component={Error404} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
