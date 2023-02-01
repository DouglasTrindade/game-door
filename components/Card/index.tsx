import styles from "./styles.module.css";

interface CardProps {
  bgcolor?: string
  children?: any
}

const Card = (props: CardProps) => {
  return (
    <div className={styles.card}
      style={{
        backgroundColor: props.bgcolor ?? "#fff"
      }}>
      {props.children}
    </div>
  );
}

export default Card;