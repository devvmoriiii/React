import Button from "./Button";
import styles from "./RCA.module.css";

function RCA() {
  return (
    <div>
      <h1 className={styles.title}>Hi, RCA!</h1>
      <Button text="btn 1"></Button>
      <Button text="btn 2"></Button>
      <Button text="btn 3"></Button>
      <hr />
    </div>
  );
}

export default RCA;
