import style from "./Eboard.module.css";
import profileIllustration from "../assets/profile-illustration.svg";

const Eboard = () => {
  return (
    <main className={style.eboardMain}>
      <h1>2023-2024 Executive Board</h1>
      <section className={style.eboardList}>
        <div className={style.member}>
          <img
            src={profileIllustration}
            className={style.profileImg}
            alt="profile-image"
          />
          <h3>Lilly Ohr</h3>
          <p className={style.position}>President</p>
          <p className={style.classYear}>Class of 2024</p>
        </div>
        <div className={style.member}>
          <img
            src={profileIllustration}
            className={style.profileImg}
            alt="profile-image"
          />
          <h3>Katie Morrissey</h3>
          <p className={style.position}>Vice President</p>
          <p className={style.classYear}>Class of 2024</p>
        </div>
        <div className={style.member}>
          <img
            src={profileIllustration}
            className={style.profileImg}
            alt="profile-image"
          />
          <h3>Tatum Samson</h3>
          <p className={style.position}>Vice President</p>
          <p className={style.classYear}>Class of 2024</p>
        </div>
        <div className={style.member}>
          <img
            src={profileIllustration}
            className={style.profileImg}
            alt="profile-image"
          />
          <h3>Alex Gutidas?</h3>
          <p className={style.position}>Treasurer</p>
          <p className={style.classYear}>Class of 2024</p>
        </div>
        <div className={style.member}>
          <img
            src={profileIllustration}
            className={style.profileImg}
            alt="profile-image"
          />
          <h3>Nicole Conte</h3>
          <p className={style.position}>Secretary</p>
          <p className={style.classYear}>Class of 2024</p>
        </div>
        <div className={style.member}>
          <img
            src={profileIllustration}
            className={style.profileImg}
            alt="profile-image"
          />
          <h3>Annabelle Langford</h3>
          <p className={style.position}>Social Media Manager</p>
          <p className={style.classYear}>Class of 2026</p>
        </div>
      </section>
    </main>
  );
};

export default Eboard;
