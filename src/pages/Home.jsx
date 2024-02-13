import style from "./Home.module.css";
import gassonImg from "../assets/boston_college_gasson_hall.jpeg";
import memberSvg from "../assets/people-group-solid.svg";
import meetingSvg from "../assets/presentation.svg";
import networkSvg from "../assets/network-solid.svg";

const About = () => {
  return (
    <>
      <div className={style.imageContainer}>
        <img
          className={style.fullScreenImage}
          src={gassonImg}
          alt="Boston College Gasson Hall"
        />
        <div className={style.overlay}>
          <div className={style.textContent}>
            <h1>Boston College Linguistics Club</h1>
            <a
              href="https://forms.gle/nywSzJA43QLZ3S8Y8"
              className={style.joinBtn}
              target="_blank"
              rel="noreferrer"
            >
              Join the Club
            </a>
          </div>
        </div>
      </div>
      <section className={style.about} id="about">
        <div className={style.sectionTitle}>
          <h2>About</h2>
        </div>
        <p>
          The Boston College Linguistics Club is the undergraduate association
          for linguistics enthusiasts at BC. Our mission is to unite students
          who share a passion for language while enriching their academic and
          professional pursuits. Our vibrant event calendar includes spirited
          Trivia Nights that both challenge and entertain, practical Job Search
          Workshops tailored to the linguistics field, inspiring Alumni Speaker
          Sessions that connect academic theory with real-world application, and
          collaborative Finals Review sessions designed to support and uplift
          students during critical exam periods. BCLC strives to foster a
          vibrant and supportive space for intellectual growth and social
          interaction among BC students interested in all things linguistics.
        </p>
      </section>
      <section className={style.highlight}>
        <div className={style.info}>
          <img src={memberSvg} alt="club-members-image" />
          <h3>60+ Members</h3>
        </div>
        <div className={style.info}>
          <img src={meetingSvg} alt="club-meeting-image" />
          <h3>Biweekly Meetings</h3>
        </div>
        <div className={style.info}>
          <img src={networkSvg} alt="network-image" />
          <h3>Club Alumni Network</h3>
        </div>
      </section>

      <section className={style.contact} id="contact">
        <div className={style.sectionTitle}>
          <h2>Contact</h2>
        </div>
        <div className={style.email}>
          <p>Email: bclingclub@gmail.com</p>
          <p>Instagram: @bclinguisticsclub</p>
        </div>
        <p>
          Please reach out to us for any inquiries about membership, upcoming
          events, collaboration opportunities, or if you simply wish to learn
          more about linguistics. We are always open to discussions, feedback,
          and new ideas.
        </p>
      </section>
    </>
  );
};

const Home = () => {
  return (
    <main className={style.homeMain}>
      <About />
    </main>
  );
};

export default Home;
