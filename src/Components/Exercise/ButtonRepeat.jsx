import styles from "./Exercise.module.css";

const ButtonRepeat = ({ onclick, rotateRepetir }) => {
  return (
    <>
      <div className={`${styles.botón} `} onClick={onclick}>
        <div
          className={styles.fondo}
          x="0"
          y="0"
          width="200"
          height="200"
        ></div>
        <div className={`${styles.icono} ${styles.buttonRotate} ${rotateRepetir}`} width="200" height="200">
          <span className={`material-symbols-outlined ${styles.repeatButton}`}>replay</span>
        </div>
      </div>
    </>
  );
};

export default ButtonRepeat;
