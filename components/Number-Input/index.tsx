import styles from "./styles.module.css";

interface NumberInputProps {
  text: string
  value: number
  onChange: (newValue : number) => void
}

const NumberInput = (props: NumberInputProps) => {
  const dec = () => props.onChange(props.value - 1)
  const inc = () => props.onChange(props.value + 1)

  return (
    <div className={styles.numberInput}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={dec}>-</button>
        <button className={styles.btn} onClick={inc}>+</button>
      </div>
    </div>
  );
}
 
export default NumberInput;