import styles from "../styles/form.module.css";
import Card from "../components/Card/index";
import NumberInput from "../components/Number-Input/index";
import { useState } from "react";
import Link from "next/link";


const Form = () => {
  const [unitDoors, setUnitDoors] = useState(3)
  const [withPresent, setWithPresent] = useState(1)


  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput 
            text="Qtde Portas?"
            value={unitDoors}
            onChange={newUnit => setUnitDoors(newUnit)}
          />
        </Card>
      </div>
      <div>
        <Card>
        <NumberInput 
            text="Porta com Presente?"
            value={withPresent}
            onChange={newPresent => setWithPresent(newPresent)}
          />
        </Card>
        <Card bgcolor="#28a085" >
          <Link href={`/game/${unitDoors}/${withPresent}`} style={{width: "100%"}}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
 
export default Form;