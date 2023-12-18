import styles from "./Exercise.module.css";

const ButtonPlay = ({ onclick, claseActive }) => {
  return (
    <>
      <div className={`${styles.botón} ${claseActive}`} onClick={onclick}>
        <div
          className={styles.fondo}
          x="0"
          y="0"
          width="200"
          height="200"
        ></div>
        <div className={styles.icono} width="200" height="200">
          <div
            className={`${styles.parte} ${styles.izquierda}`}
            x="0"
            y="0"
            width="200"
            height="200"
            fill="#fff"
          ></div>
          <div
            className={`${styles.parte} ${styles.derecha}`}
            x="0"
            y="0"
            width="200"
            height="200"
            fill="#fff"
          ></div>
        </div>
        
      </div>
    </>
  );
};

export default ButtonPlay;
