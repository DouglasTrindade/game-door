export default class ModelDoor {
  #number: number
  #present: boolean
  #selected: boolean
  #openDoor: boolean

  constructor(number: number, present = false, selected = false, openDoor = false) {
    this.#number = number
    this.#present = present
    this.#selected = selected
    this.#openDoor = openDoor
  }

  get number() {
    return this.#number
  }

  get present() {
    return this.#present
  }

  get selected() {
    return this.#selected
  }

  get openDoor() {
    return this.#openDoor
  }

  get closeDoor() {
    return !this.openDoor
  }

  deselect() {
    const selected = false;
    return new ModelDoor(this.number, this.present, selected, this.openDoor)
  }

  selectionAlternate() {
    const selected = !this.selected;
    return new ModelDoor(this.number, this.present, selected, this.openDoor);
  }

  open() {
    const openDoor = true;
    return new ModelDoor(this.number, this.present, this.selected, openDoor);
  }
}