import styles from "./Exercise.module.css";

const ButtonPlay = ({ onclick }) => {
  return (
    <div onClick={onclick} className={`${styles.sectionInit1}`}>
      {" "}
      <p className={` ${styles.sectionInit2}`}>click para comenzar</p>{" "}
    </div>
  );
};

export default ButtonPlay;
