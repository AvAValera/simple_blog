import style from "./footer.module.scss";

export default function StoryInbox() {
  return (
    <div className={style.story}>
      <img className={style.storyMaskUp} src="/footer/mask-group-up.svg" alt="mask" />
      <div className={style.storyContainer}>
        <h2 className={style.storyHader}>Get our stories delivered From us to your inbox weekly.</h2>
        <div className={style.storyForm}>
          <input className={style.storyInput} type="text" placeholder="Your Email" />
          <button className={style.storyBtn}>Get started</button>
        </div>
        <p className={style.storyText}>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
      </div>
      <img className={style.storyMaskBottom} src="/footer/mask-group-bottom.svg" alt="mask" />
    </div>
  );
}
