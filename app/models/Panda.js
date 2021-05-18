class Panda {
  constructor(name, age = "unknown", gender = "unknown", weight = "unknown", height = "unknown",){
    if (!name){throw new Error("Must enter a name")}
    this.name = name
    this.age = age
    this.gender = gender
    this.weight = weight
    this.height = height
  }
}

export default Panda