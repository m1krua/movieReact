import "./Header.css";
import { useState } from "react";
import search from "../../assets/search.svg"
import filter from "../../assets/filter.svg"
import bell from "../../assets/bell.svg"

export const Header = () => {
    const menu = ["All", "Movie", "Series", "Genres"]
    const [active, setActive] = useState("All");

    return (
        <header>
            <nav className="header-l">
                {menu.map(item => (
                    <div className="menu-item" key={item}>
                        <a href="#" className={active === item ? "active" : ""} onClick={() => setActive(item)} > {item} </a>
                    </div>
                ))}
            </nav>

            <div className="header-r">
                <div className="input-box">
                    <img src={search} alt="" />
                    <input type="text" placeholder="Search the series, movies ..." />
                    <img src={filter} alt="" />
                </div>

                <img src={bell} alt="" />

                <div className="profile">
                    <img src="https://i.pinimg.com/736x/6e/68/03/6e68039af2f15343b16cecea80f6ccff.jpg" alt="" />
                </div>
            </div>
        </header>
    )
}