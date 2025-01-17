import { Link } from "react-router-dom";
import { useMenuStore } from "../../../store/menu";
import style from "./footer.module.scss";

export default function FooterMenu() {
  const menuData = useMenuStore((state) => state.menuData);
  return (
    <menu>
      <nav>
        <ul className={style.footerMenu}>
          {menuData.map((item) => (
            <li key={item.id}>
              <Link className={style.footerMenuLink} to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </menu>
  );
}
