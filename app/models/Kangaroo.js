class Kangaroo {
  constructor(name, age = "unknown", gender = "unknown", weight = "unknown", height = "unknown", footSize = "unknown"){
    if (!name){throw new Error("Must enter a name")}
    this.name = name
    this.age = age
    this.gender = gender
    this.weight = weight
    this.height = height
    this.footSize = footSize
  }
}

export default Kangaroo