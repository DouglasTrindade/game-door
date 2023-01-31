import styles from "../../../styles/Game.module.css"
import { useEffect, useState } from "react"
import Door from "../../../components/Door"
import { CreateDoors, updateDoors } from "../../../functions/doors"
import Link from "next/link"
import { useRouter } from "next/router"


const Game = () => {
  const router = useRouter()

  const [doors, setDoors] = useState([])

  useEffect(() => {
    const doors = +router.query.doors
    const withPresent = +router.query.withPresent
    setDoors(CreateDoors(doors, withPresent))
  }, [router?.query])

  const doorsRender = () => {
    return (
      doors.map(door => {
        return (
          <Door key={door.number} value={door} 
          onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
        )
      })
    )
  }

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {doorsRender()}
      </div>
      <div className={styles.buttons}>
        <Link href="/">
        <button>Reiniciar/Game</button>
        </Link>
      </div>
    </div>
  )
}


export default Game;