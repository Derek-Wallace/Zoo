class Hedgehog {
  constructor(name, age = "unknown", gender = "unknown", color, weight = "unknown", height = "unknown",){
    if (!name || !color){throw new Error("Must enter a name and a color")}
    this.name = name
    this.age = age
    this.gender = gender
    this.color = color
    this.weight = weight
    this.height = height
  }
}

export default Hedgehog