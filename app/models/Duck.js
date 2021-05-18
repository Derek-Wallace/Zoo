class Duck {
  constructor(name, age = "unknown", gender, weight = "unknown", length = "unknown"){
    if(!name || !gender){throw new Error("Must enter a name and gender")}
    this.name = name
    this.age = age
    this.gender = gender
    this.weight = weight
    this.length = length
  }
}

export default Duck