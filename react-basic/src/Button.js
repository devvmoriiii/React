import propTypes from "prop-types";
import styles from "./Button_module.css"

function Button({text}) {
  return (
    <button className={styles.btn}>
      {text}
    </button>
  )
};

Button.propTypes = {
  text : propTypes.string,
};

export default Button;