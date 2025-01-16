import style from "./header.module.scss";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"} className={style.logo}>
     <img className={style.logoImg} src="/logo/logo.webp" alt="logo_icon" /> 
      <h1 className={style.logoText}>Simple Blog</h1>
    </Link>
  );
}
