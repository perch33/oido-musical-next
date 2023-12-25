"use client";

import styles from "./Exercise.module.css";
import { useCallback, useMemo, useState } from "react";
import ButtonRepeat from "./ButtonRepeat";
import ButtonPlay from "./ButtonPlay";
import ShareButton from "../Button_share/Button_share";

const Exercise = () => {
  const [rotateB, setRotateB] = useState(false);
  const [noteCorrect, setNoteCorrect] = useState("");
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [puntos, setPuntos] = useState(0);

  const rAudio = "/sound-piano/tesitura-";

  const tesitura = 2; // Puedes cambiar esto según la tesitura deseada (por ejemplo, de 1 a 9)

  const notes = useMemo(() => {
    const noteNames = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ];
    const tesituraNotes = [];

    for (let i = 0; i < 12; i++) {
      const note = noteNames[i]; // Ajusta el índice de la tesitura según la selección del usuario
      tesituraNotes.push(
        `${rAudio}${tesitura}/${note.replace("#", "%23")}.mp3`
      );
    }

    return tesituraNotes;
  }, [rAudio, tesitura]);

  const numeroAleatory = useCallback(() => {
    return Math.floor(Math.random() * notes.length);
  }, [notes]);

  const createNewAudioPath = useCallback(() => {
    const numberRandom = numeroAleatory();
    return notes[numberRandom];
  }, [notes, numeroAleatory]);

  const [audioPath, setAudioPath] = useState(createNewAudioPath);

  const rotarRepetir = rotateB ? styles.repeatRotate : "";

  const handleClick = () => {
    setShowPlayButton(false);
    const newPath = createNewAudioPath();
    setAudioPath(newPath);
    const newAudio = new Audio(newPath);
    newAudio.play();

    setTimeout(() => {
      newAudio.pause();
      newAudio.currentTime = 0;
    }, 1000);
  };

  const handleRepeat = () => {
    setRotateB(!rotateB);
    const audio = new Audio(audioPath);
    audio.play();

    setTimeout(() => {
      setRotateB((rotateB) => !rotateB);
    }, 800);
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 1000);
  };

  const handleComparison = (e) => {
    const audioState = audioPath
      .slice(audioPath.lastIndexOf("/") + 1, -4)
      .replace("%23", "#");
    const valueUser = e.target.textContent;

    if (audioState === valueUser) {
      setNoteCorrect("correct");
      setPuntos((prevPuntos) => prevPuntos + 5);
    } else {
      setNoteCorrect("incorrect");
      setPuntos((prevPuntos) => Math.max(prevPuntos - 5, 0));
    }

    setTimeout(() => {
      setNoteCorrect("");
      handleClick();
    }, 1300);
  };

  const exampleNote =
    noteCorrect === "correct"
      ? `Felicidades 🤗 La nota Correcta es ${audioPath
          .slice(audioPath.lastIndexOf("/") + 1, -4)
          .replace("%23", "#")}`
      : noteCorrect === "incorrect"
      ? `😔 Nota Incorrecta, la nota era ${audioPath
          .slice(audioPath.lastIndexOf("/") + 1, -4)
          .replace("%23", "#")}`
      : null;

  return (
    <section className={styles.sectionExercise}>
      {showPlayButton && <ButtonPlay onclick={handleClick} />}
      <section className={styles.buttonsPlay}>
        <ButtonRepeat rotateRepetir={rotarRepetir} onclick={handleRepeat} />
      </section>
      {notes.map((note) => {
        return (
          <button onClick={handleComparison} className={styles.btn} key={note}>
            {note.slice(note.lastIndexOf("/") + 1, -4).replace("%23", "#")}
          </button>
        );
      })}

      <section className={styles.respuesta}>
        <h2>{exampleNote}</h2>
        <h3 className="punctuation">Puntuación: {puntos}</h3>
      </section>
      <ShareButton />
    </section>
  );
};

export default Exercise;
