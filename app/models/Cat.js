class Cat {
  constructor(name, age = "unknown", color, gender = "unknown", pattern = "unknown", hairLength = "unknown"){
    if(!name || !color){throw new Error("Must enter a name and a color")}
    this.name = name
    this.age = age
    this.color = color
    this.gender = gender
    this.pattern = pattern
    this.hairLength = hairLength
  }
}

export default Cat