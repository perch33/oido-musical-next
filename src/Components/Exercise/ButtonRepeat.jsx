import styles from "./Exercise.module.css";

const ButtonRepeat = ({ onclick, rotateRepetir }) => {
  return (
    <button className={styles.fondo} onClick={onclick}>
      <div className={`${styles.buttonRotate} ${rotateRepetir}`}>
        <span className={`material-symbols-outlined ${styles.repeatButton}`}>
          replay
        </span>
      </div>
    </button>
  );
};

export default ButtonRepeat;
