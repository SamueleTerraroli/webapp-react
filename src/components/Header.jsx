import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="container-fluid">
                    <NavLink className='navbar-brand' aria-current='page' to='/'>MovieHub</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header