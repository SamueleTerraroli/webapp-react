import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const DefalultLayout = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
        </>
    )
}

export default DefalultLayout