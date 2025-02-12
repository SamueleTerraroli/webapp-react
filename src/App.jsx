import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefalultLayout from "./layouts/DefalultLayout"
import HomePage from "./pages/HomePage"
import Error404 from "./pages/Error404"
import MoviePage from "./pages/MoviePage"
import CreateMovie from "./pages/CreateMovie"
import { GlobalProvider } from "./context/GlobalContext"


const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefalultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/movies/:id" Component={MoviePage} />
            <Route path="/movies/create" Component={CreateMovie} />
            <Route path="*" Component={Error404} />
          </Route>
        </Routes>
      </BrowserRouter>

    </GlobalProvider>
  )
}

export default App
