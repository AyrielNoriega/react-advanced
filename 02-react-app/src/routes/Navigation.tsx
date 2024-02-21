import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";

import logo from '../assets/react.svg';
import { LazyPage3 } from "../01-lazyload/pages";
import { RegisterPage } from "../03-forms/pages/RegisterPage";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik BasicPage</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy3</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="register" element={ <RegisterPage /> } />
                    <Route path="formik-basic" element={ <FormikBasicPage /> } />
                    <Route path="lazy3" element={ <LazyPage3 /> } />

                    <Route path="/*" element={ <Navigate to="/lazy1" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    );
}
