import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefalultLayout from "./layouts/DefalultLayout"
import HomePage from "./pages/HomePage"
import Error404 from "./pages/Error404"
import { GlobalProvider } from "./context/GlobalContext"


const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefalultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="*" Component={Error404} />
          </Route>
        </Routes>
      </BrowserRouter>

    </GlobalProvider>
  )
}

export default App
