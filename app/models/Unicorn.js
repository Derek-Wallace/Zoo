class Unicorn {
  constructor(name, age = "immortal", gender = "unknown", weight = "unknown", height = "unknown", hornLength = "unknown", rainbowVomitDistance = "unknown"){
    if (!name){throw new Error("Must enter a name")}
    this.name = name
    this.age = age
    this.gender = gender
    this.weight = weight
    this.height = height
    this.hornLength = hornLength
    this.rainbowVomitDistance = rainbowVomitDistance
  }
}

export default Unicorn