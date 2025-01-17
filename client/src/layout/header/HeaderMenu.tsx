import { NavLink, Link } from "react-router-dom";
import style from "./header.module.scss";
import { useMediaQuery } from "react-responsive";
import {useMenuStore} from "../../../store/menu";

export default function HeaderMenu() {
  const isDesktop = useMediaQuery({ query: "(min-width: 530px)" });
  const menuData = useMenuStore((state) => state.menuData);
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
                to={menuData[0].path}
              >
                {menuData[0].name}
              </NavLink>
            </li>
            <li>
              <NavLink className={style.menuLink} to={menuData[1].path}>
                {menuData[1].name}
              </NavLink>
            </li>
            <li>
              <Link to={menuData[2].path}>
                <img
                  className={style.menuSearchBtn}
                  src="/header/search.svg"
                  alt="search_icon"
                />
              </Link>
            </li>
            <li>
              <Link className={style.menuContactBtn} to={menuData[3].path}>
                {menuData[3].name}
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
