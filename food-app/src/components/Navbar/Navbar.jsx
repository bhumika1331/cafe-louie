import React from 'react'
import logo1 from "../../assets/images/logo1.png"


const NavMenu = [
    {
        id: 1,
        title: "Home",
        path:"/",
        delay: 0.1,
    },
    {
        id: 2,
        title: "About",
        path:"/",
        delay: 0.2,
    },
    {
        id: 3,
        title: "Menu",
        path:"/",
        delay: 0.3,
    },
    {
        id: 4,
        title: "Delivery",
        path:"/",
        delay: 0.4,
    },
    {
        id: 5,
        title: "Contact US",
        path:"/",
        delay: 0.5,
    },

]

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            {/* Logo section*/}
            <img src={logo1} alt="" className="w-36"/>
            {/* menu section*/}
            <div>
                <ul>
                    {
                        NavMenu.map((menu) => {
                            return (
                                <li
                                key ={menu.id}
                                className="nav-menu"
                                data-delay={menu.delay}
                                >
                                    <a href={menu.path}>{menu.title}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

            {/* button section*/}
        </div>
    </nav>
  )
}

export default Navbar
