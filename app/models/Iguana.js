class Iguana {
  constructor(name, age = "unknown", color, gender = "unknown", weight = "unknown", height = "unknown",){
    if (!name || !color){throw new Error("Must enter a name and color")}
    this.name = name
    this.age = age
    this.color = color
    this.gender = gender
    this.weight = weight
    this.height = height
  }
}

export default Iguana