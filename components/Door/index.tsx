import styles from "./styles.module.css"
import Present from "../Present"
import ModelDoor from "../../model/door"

interface PropsDoor {
  value: ModelDoor
  onChange: (newDoor: ModelDoor) => void
}

const Door = (props: PropsDoor) => {
  const door = props.value;
  const selected = door.selected && door.open ? styles.selected : '';
 
  const selectionAlternate = e => props.onChange(door.selectionAlternate());
  const open = e => {
    e.stopPropagation()
    props.onChange(door.open())
  }
  
  const doorRender = () => {
    return (
        <div className={styles.door}>
          <div className={styles.doorNumber}>{door.number}</div>
          <div className={styles.knob} 
            onClick={open}>
          </div>
        </div>
    )
  }

  return (
    <div className={styles.area} onClick={selectionAlternate}>
      <div className={`${styles.frame} ${selected}`}>
        {door.closeDoor ? 
          doorRender() : 
            door.present ? <Present /> : false
        }
      </div>
      <div className={styles.floor}>
      </div>
    </div>
  )
}

export default Door;