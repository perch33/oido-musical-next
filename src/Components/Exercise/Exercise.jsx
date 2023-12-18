"use client";
import ButtonPlay from "./ButtonPlay";
import { Notes } from "./Items";
import styles from "./Exercise.module.css";
import { useCallback, useMemo, useState } from "react";
import ButtonRepeat from "./ButtonRepeat";

const Exercise = () => {
  const [active, setActive] = useState(false);
  const [rotateB, setRotateB] = useState(false);
  const [noteCorrect, setNoteCorrect] = useState("");

  const rAudio = "/sound-piano/tesitura-2/";

  const notes = useMemo(
    () => [
      `${rAudio}C2.mp3`,
      `${rAudio}D2.mp3`,
      `${rAudio}E2.mp3`,
      `${rAudio}F2.mp3`,
      `${rAudio}G2.mp3`,
      `${rAudio}A2.mp3`,
      `${rAudio}B2.mp3`,
    ],
    [rAudio]
  );

  const numeroAleatory = useCallback(() => {
    return Math.floor(Math.random() * notes.length);
  }, [notes]);

  const createNewAudioPath = useCallback(() => {
    const numberRandom = numeroAleatory();
    return notes[numberRandom];
  }, [notes, numeroAleatory]);

  const [audioPath, setAudioPath] = useState(createNewAudioPath);

  const ClassActive = active ? styles.active : "";
  const rotarRepetir = rotateB ? styles.repeatRotate : "";

  const handleClick = () => {
    setActive(!false);
    const newPath = createNewAudioPath();
    setAudioPath(newPath);
    const newAudio = new Audio(newPath);
    newAudio.play();

    setTimeout(() => {
      setActive((prevActive) => !prevActive);
    }, 800);
  };

  const handleRepeat = () => {
    setRotateB(!rotateB);
    const audio = new Audio(audioPath);
    audio.play();

    console.log(audioPath.slice(24, 25));

    setTimeout(() => {
      setRotateB((rotateB) => !rotateB);
    }, 800);
  };

  const handleComparison = (e) => {
    const audioState = audioPath.slice(24, 25);
    const valueUser = e.target.textContent;

    if (audioState === valueUser) {
      setNoteCorrect("correct");
    } else {
      setNoteCorrect("incorrect");
    }

    setTimeout(() => {
      setNoteCorrect("");
    }, 1000);
  };

  const exampleNote =
    noteCorrect === "correct"
      ? `Felicidades 🤗 La nota Correcta es ${audioPath.slice(24, 25)}`
      : noteCorrect === "incorrect"
      ? `😔 Nota Incorrecta, la nota era ${audioPath.slice(24, 25)}`
      : null;

  return (
    <section>
      <section className={styles.buttonsPlay}>
        <ButtonPlay claseActive={ClassActive} onclick={handleClick} />
        <ButtonRepeat rotateRepetir={rotarRepetir} onclick={handleRepeat} />
      </section>
      {Notes.map((note) => {
        return (
          <button onClick={handleComparison} className={styles.btn} key={note}>
            {note}
          </button>
        );
      })}

      <section className={styles.respuesta}>
        <h2>{exampleNote}</h2>
      </section>
    </section>
  );
};

export default Exercise;
