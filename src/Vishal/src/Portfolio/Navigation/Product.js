import { NavLink, Outlet } from "react-router-dom";

function Portfolio() {
    return (
        <>
            <section className="py-16 px-6 text-center mx-auto">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">PORTFOLIO</h1>
                <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>

                <ul className="flex flex-wrap justify-center gap-2">
                    <li>
                        <NavLink 
                            to="/all"
                            className={({ isActive }) => 
                                `px-6 py-3 text-gray-700 rounded-lg transition font-bold text-lg ${
                                    isActive ? 'text-red-600' : 'hover:text-red-600'
                                }`
                            }
                        >
                            All
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to="/application"
                            className={({ isActive }) => 
                                `px-6 py-3 text-gray-700 rounded-lg transition font-bold text-lg ${
                                    isActive ? 'text-red-600' : 'hover:text-red-600'
                                }`
                            }
                        >
                            App
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to="/product"
                            className={({ isActive }) => 
                                `px-6 py-3 text-gray-700 rounded-lg transition font-bold text-lg ${
                                    isActive ? 'text-red-600' : 'hover:text-red-600'
                                }`
                            }
                        >
                            Product
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to="/branding"
                            className={({ isActive }) => 
                                `px-6 py-3 text-gray-700 rounded-lg transition font-bold text-lg ${
                                    isActive ? 'text-red-600' : 'hover:text-red-600'
                                }`
                            }
                        >
                            Branding
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to="/books"
                            className={({ isActive }) => 
                                `px-6 py-3 text-gray-700 rounded-lg transition font-bold text-lg ${
                                    isActive ? 'text-red-600' : 'hover:text-red-600'
                                }`
                            }
                        >
                            Books
                        </NavLink>
                    </li>
                </ul>
            </section>

            {/* 🔥 SAME PLACE WHERE YOUR CONTENT SHOULD LOAD */}
            <Outlet />
        </>
    );
}

export default Portfolio;
