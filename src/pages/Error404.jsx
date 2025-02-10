import { NavLink } from "react-router-dom"

const Error404 = () => {
    return (
        <div>
            <h2>Pagina non trovata</h2>
            <NavLink to='/' className='btn btn-primary'> Torna alla Homepage</NavLink>
        </div>
    )
}

export default Error404