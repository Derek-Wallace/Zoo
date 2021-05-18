class Alligator {
  constructor(name, age = "unknown", gender ="unknown", length = "unknown", weight = "unknown", teeth = "unknown"){
    if(!name){throw new Error("Must enter a name")}
    this.name = name
    this.age = age
    this.gender = gender
    this.length = length
    this.weight = weight
    this.teeth = teeth
  }
}

export default Alligator