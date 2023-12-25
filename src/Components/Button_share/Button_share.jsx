"use client";
import styles from "./Button_share.module.css";

const ShareButton = () => {
  const handleShareClick = async () => {
    const punctuationElement = document.querySelector(".punctuation");
    const punctuationText = punctuationElement
      ? punctuationElement.textContent
      : "";

    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          text: `Mi puntuación es de + ${punctuationText.slice(
            punctuationText.lastIndexOf(":") + 1
          )} Puntos`, // Aquí se incluyen los puntos ganados
          url: window.location.href,
        });
      } else {
        throw new Error(
          "La API de compartir no está disponible en este navegador."
        );
      }
    } catch (error) {
      console.error("Error al compartir:", error.message);
    }
  };

  return (
    <div onClick={handleShareClick} className={styles.divShare}>
      <img
        alt="icono de compartir"
        width={30}
        height={30}
        src={"/icon-redes-Sociales/icons8-compartir.svg"}
      />
    </div>
  );
};

export default ShareButton;
