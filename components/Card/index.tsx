import styles from "./styles.module.css";

const Card = () => {
  return (
    <div className={styles.card}
      style={{
        backgroundColor: props.bgcolor ?? "#fff"
      }}>
      CARTÃO!!
    </div>
  );
}
 
export default Card;