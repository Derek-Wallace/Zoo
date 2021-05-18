class Tiger {
  constructor(name, age = "unknown", gender, weight = "unknown", height = "unknown",){
    if (!name || !gender){throw new Error("Must enter a name and gender")}
    this.name = name
    this.age = age
    this.gender = gender
    this.weight = weight
    this.height = height
  }
}

export default Tiger