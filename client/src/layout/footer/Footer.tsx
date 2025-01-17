import Logo from "../header/Logo";
import style from "./footer.module.scss";
import FooterMenu from "./FooterMenu";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <Logo />
        <FooterMenu />
        <div className={style.footerSocial}>
          {["FB", "IG", "LN", "YT"].map((item, index) => (
            <div className={style.footerSocialIcon} key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className={style.footerLine} />
        <span className={style.footerCopyright}>Copyright © 2025. All Right Reserved</span>
      </div>
    </footer>
  );
}
