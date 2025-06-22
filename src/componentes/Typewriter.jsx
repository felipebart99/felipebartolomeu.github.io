import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Typewriter = ({ text, speed = 100, pause = 1000 }) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout;

    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
    } else {
      // Pausa e reinicia
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, pause);
    }

    return () => clearTimeout(timeout);
  }, [index, text, speed, pause]);

  return <p>{displayedText}</p>;
};

Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
  pause: PropTypes.number, // tempo de pausa antes de reiniciar
};

export default Typewriter;
