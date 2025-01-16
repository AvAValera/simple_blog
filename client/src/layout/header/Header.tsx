import style from "./header.module.scss";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Logo />
        <HeaderMenu />
      </div>
    </header>
  );
}
