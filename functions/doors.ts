import ModelDoor from "../model/door";

export const CreateDoors = (unit: number, doorWithPresent: number): ModelDoor[] => {
  return (
    Array.from({ length: unit }, (_, i) => {
      const number = i + 1
      const present = number === doorWithPresent
      return new ModelDoor(number, present)
    }))
}

export const updateDoors = (doors: ModelDoor[], modifiedDoor: ModelDoor): ModelDoor[] => {
  return (
    doors.map(currentDoor => {
      const equalModified = currentDoor.number === modifiedDoor.number

      if(equalModified) {
        return modifiedDoor
      } else {
        return modifiedDoor.openDoor ? currentDoor : currentDoor.deselect()
      }
    })
  )
}

export default CreateDoors