import { NavLink } from "react-router-dom";

//using Navlink for single page application (no reload)
export default function Menu(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="nav-link" href="/">ABC Healthcare - Shubham Mukherjee</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <NavLink className="nav-link" to='/category'>Medicine Categories</NavLink> */}
                            <a className="btn btn-primary" href='/category'>Medicine Categories</a>
                            
                        </li>

                        <li className="nav-item">
                            <a className="btn btn-success" href='/medicines/filter'>Filter Medicine</a>
                        </li>

                        <li className="nav-item">
                            <a className="btn btn-info" href='/medicines/create'>Add New Medicine</a>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    )
}