import Exercise from "../Exercise/Exercise";
import styles from "./SectionDev.module.css";

const SectionDev = () => {
  return (
    <section className={styles.sectionDev}>
      <div className={styles.DivSection}>
        <h1>Adivina la Nota</h1>
        <h3>Entrena tu oído absoluto</h3>
        <Exercise />
      </div>
    </section>
  );
};

export default SectionDev;
