import style from "./FormerEboard.module.css";
import profileIllustration from "../assets/profile-illustration.svg";

const FormerEboard = () => {
  return (
    <main className={style.eboardMain}>
      <h1>Former Eboard Members</h1>
      <h3 className={style.year}>2022 - 2023</h3>
      <section className={style.eboardList}>
        <div className={style.member}>
          <h3>Elise Namnoom</h3>
          <p className={style.position}>Co-founder</p>
          <p className={style.classYear}>Class of 2023</p>
        </div>
        <div className={style.member}>
          <h3>Lilly Ohr</h3>
          <p className={style.position}>Co-founder</p>
          <p className={style.classYear}>Class of 2024</p>
        </div>
        <div className={style.member}>
          <h3>Muchen Qi</h3>
          <p className={style.position}>Co-founder</p>
          <p className={style.classYear}>Class of 2023</p>
        </div>
      </section>
    </main>
  );
};

export default FormerEboard;
