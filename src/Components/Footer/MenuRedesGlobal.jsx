import IconRed from "./ItemRedes";
import styles from "./Footer.module.css";

const MenuRedesGlobal = () => {
  return (
    <div className={styles.menuRedes}>
      {IconRed.map(({ hr, names, src }) => {
        return (
          <div key={names}>
            <a key={names} href={hr} target="_blank">
              {names}
              <img
                height={32}
                width={32}
                key={names}
                src={src}
                alt={`imagen de ${names}`}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default MenuRedesGlobal;
