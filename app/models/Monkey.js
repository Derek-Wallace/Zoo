class Monkey {
  constructor(name, age = "unknown", color, type = "unknown", gender = "unknown", weight = "unknown", height = "unknown",){
    if (!name || !color){throw new Error("Must enter a name")}
    this.name = name
    this.age = age
    this.color = color
    this.type = type
    this.gender = gender
    this.weight = weight
    this.height = height
  }
}

export default Monkey