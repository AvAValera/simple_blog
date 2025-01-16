import { NavLink, Link } from "react-router-dom";
import style from "./header.module.scss";
import { useMediaQuery } from "react-responsive";

export default function HeaderMenu() {
  const isDesktop = useMediaQuery({ query: "(min-width: 530px)" });

  return (
    <menu>
      <nav>
        {isDesktop ? (
          <ul className={style.menu}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? style.menuLinkActive : style.menuLink
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={style.menuLink} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <Link to="/#">
                <img
                  className={style.menuSearchBtn}
                  src="/public/header/search.svg"
                  alt="search_icon"
                />
              </Link>
            </li>
            <li>
              <Link className={style.menuContactBtn} to="/#">
                Contact Us
              </Link>
            </li>
          </ul>
        ) : (
          <button className={style.menuMobileBtn}>
            <img src="/header/mobile-menu.svg" alt="menu_icon" />
          </button>
        )}
      </nav>
    </menu>
  );
}
