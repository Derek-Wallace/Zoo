import Zebra from "./models/Zebra.js";
import Yak from "./models/Yak.js"
import Llama from "./models/Llama.js";
import Monkey from "./models/Monkey.js";
import Alligator from "./models/Alligator.js";
import Bear from "./models/Bear.js";
import Cat from "./models/Cat.js";
import Duck from "./models/Duck.js";
import Elephant from "./models/Elephant.js";
import Ferret from "./models/Ferret.js";
import Gorilla from "./models/Gorilla.js";
import Hedgehog from "./models/Hedgehog.js";
import Iguana from "./models/Iguana.js";
import Jaguar from "./models/Jaguar.js";
import Kangaroo from "./models/Kangaroo.js";
import Narwhal from "./models/Narwhal.js";
import Octopus from "./models/Octopus.js";
import Panda from "./models/Panda.js";
import Quail from "./models/Quail.js";
import Rabbit from "./models/Rabbit.js";
import Stingray from "./models/Stingray.js";
import Tiger from "./models/Tiger.js";
import Unicorn from "./models/Unicorn.js";
import Vulture from "./models/Vulture.js";
import Walrus from "./models/Walrus.js";
import Xantusbecard from "./models/Xantusbecard.js";

let marty =  new Zebra("marty", "5", "male")
console.log(marty)

let yakky = new Yak("yakky", 20, "male", "fat", "short", "6in")
console.log(yakky)

let cuzco = new Llama("Cuzco", "20", "male")
console.log(cuzco)

let george = new Monkey("George", "3", "brown", "Chimpanzee", "male")
console.log(george)

let zoo = [mammels = [], reptiles = [], aves = [], cephalopoda = []]

function addMonkey(){
  let newMonkey = new Monkey(
  prompt("Monkey's Name?"),
  prompt("Monkey's age?"),
  prompt("Monkey's Color"),
  prompt("Monkey's type?"))
  zoo.mammels.push(newMonkey)
  console.log(zoo)
}
function addLlama(){
  let newLlama = new Llama(
  prompt("Llama's Name?"),
  prompt("Llama's age?"),
  prompt("Llama's Color"))
  zoo.mammels.push(newLlama)
  console.log(zoo)
}
function addAlligator(){
  let newAlligator = new Alligator(
  prompt("Alligator's Name?"),
  prompt("Alligator's age?"),
  prompt("Alligator's Color"))
  zoo.reptiles.push(newAlligator)
  console.log(zoo)
}
function addBear(){
  let newBear = new Bear(
  prompt("Bear's Name?"),
  prompt("Bear's age?"),
  prompt("Bear's Color"))
  zoo.mammels.push(newBear)
  console.log(zoo)
}
function addCat(){
  let newCat = new Cat(
  prompt("Cat's Name?"),
  prompt("Cat's age?"),
  prompt("Cat's Color"))
  zoo.mammels.push(newCat)
  console.log(zoo)
}
function addDuck(){
  let newDuck = new Duck(
  prompt("Duck's Name?"),
  prompt("Duck's age?"),
  prompt("Duck's Color"))
  zoo.aves.push(newDuck)
  console.log(zoo)
}
function addElephant(){
  let newElephant = new Elephant(
  prompt("Elephant's Name?"),
  prompt("Elephant's age?"),
  prompt("Elephant's Color"))
  zoo.concatmammels.push(newElephant)
  console.log(mammels)
}
function addFerret(){
  let newFerret = new Ferret(
  prompt("Ferret's Name?"),
  prompt("Ferret's age?"),
  prompt("Ferret's Color"))
  zoo.mammels.push(newFerret)
  console.log(zoo)
}
function addGorilla(){
  let newGorilla = new Gorilla(
  prompt("Gorilla's Name?"),
  prompt("Gorilla's age?"),
  prompt("Gorilla's Color"))
  zoo.mammels.push(newGorilla)
  console.log(zoo)
}
function addHedgehog(){
  let newHedgehog = new Hedgehog(
  prompt("Hedgehog's Name?"),
  prompt("Hedgehog's age?"),
  prompt("Hedgehog's Color"))
  zoo.mammels.push(newHedgehog)
  console.log(zoo)
}
function addIguana(){
  let newIguana = new Iguana(
  prompt("Iguana's Name?"),
  prompt("Iguana's age?"),
  prompt("Iguana's Color"))
  zoo.reptiles.push(newIguana)
  console.log(zoo)
}
function addJaguar(){
  let newJaguar = new Jaguar(
  prompt("Jaguar's Name?"),
  prompt("Jaguar's age?"),
  prompt("Jaguar's Color"))
  zoo.mammels.push(newJaguar)
  console.log(zoo)
}
function addKangaroo(){
  let newKangaroo = new Kangaroo(
  prompt("Kangaroo's Name?"),
  prompt("Kangaroo's age?"),
  prompt("Kangaroo's Color"))
  zoo.mammels.push(newKangaroo)
  console.log(zoo)
}
function addNarwhal(){
  let newNarwhal = new Narwhal(
  prompt("Narwhal's Name?"),
  prompt("Narwhal's age?"),
  prompt("Narwhal's Color"))
  zoo.mammels.push(newNarwhal)
  console.log(zoo)
}
function addOctopus(){
  let newOctopus = new Octopus(
  prompt("Octopus's Name?"),
  prompt("Octopus's age?"),
  prompt("Octopus's Color"))
  zoo.cephalopoda.push(newOctopus)
  console.log(zoo)
}
function addPanda(){
  let newPanda = new Panda(
  prompt("Panda's Name?"),
  prompt("Panda's age?"),
  prompt("Panda's Color"))
  zoo.mammels.push(newPanda)
  console.log(zoo)
}
function addQuail(){
  let newQuail = new Quail(
  prompt("Quail's Name?"),
  prompt("Quail's age?"),
  prompt("Quail's Color"))
  zoo.aves.push(newQuail)
  console.log(zoo)
}
function addRabbit(){
  let newRabbit = new Rabbit(
  prompt("Rabbit's Name?"),
  prompt("Rabbit's age?"),
  prompt("Rabbit's Color"))
  zoo.mammels.push(newRabbit)
  console.log(zoo)
}
function addStingray(){
  let newStingray = new Stingray(
  prompt("Stingray's Name?"),
  prompt("Stingray's age?"),
  prompt("Stingray's Color"))
  zoo.cephalopoda.push(newStingray)
  console.log(zoo)
}
function addTiger(){
  let newTiger = new Tiger(
  prompt("Tiger's Name?"),
  prompt("Tiger's age?"),
  prompt("Tiger's Color"))
  zoo.mammels.push(newTiger)
  console.log(zoo)
}
function addUnicorn(){
  let newUnicorn = new Unicorn(
  prompt("Unicorn's Name?"),
  prompt("Unicorn's age?"),
  prompt("Unicorn's Color"))
  zoo.mammels.push(newUnicorn)
  console.log(zoo)
}
function addVulture(){
  let newVulture = new Vulture(
  prompt("Vulture's Name?"),
  prompt("Vulture's age?"),
  prompt("Vulture's Color"))
  zoo.aves.push(newVulture)
  console.log(zoo)
}
function addWalrus(){
  let newWalrus = new Walrus(
  prompt("Walrus's Name?"),
  prompt("Walrus's age?"),
  prompt("Walrus's Color"))
  zoo.mammels.push(newWalrus)
  console.log(zoo)
}
function addXantusbecard(){
  let newXantusbecard = new Xantusbecard(
  prompt("Xantusbecard's Name?"),
  prompt("Xantusbecard's age?"),
  prompt("Xantusbecard's Color"))
  zoo.aves.push(newXantusbecard)
  console.log(zoo)
}
function addYak(){
  let newYak = new Yak(
  prompt("Yak's Name?"),
  prompt("Yak's age?"),
  prompt("Yak's Color"))
  zoo.mammels.push(newYak)
  console.log(zoo)
}
function addZebra(){
  let newZebra = new Zebra(
  prompt("Zebra's Name?"),
  prompt("Zebra's age?"),
  prompt("Zebra's Color"))
  zoo.mammels.push(newZebra)
  console.log(zoo)
}

window.addMonkey = addMonkey
window.addLlama = addLlama
window.addAlligator = addAlligator
window.addBear = addBear
window.addCat = addCat
window.addDuck = addDuck
window.addElephant = addElephant
window.addFerret = addFerret
window.addGorilla = addGorilla
window.addHedgehog = addHedgehog
window.addIguana = addIguana
window.addJaguar = addJaguar
window.addKangaroo = addKangaroo
window.addNarwhal = addNarwhal
window.addOctopus = addOctopus
window.addPanda = addPanda
window.addQuail = addQuail
window.addRabbit = addRabbit
window.addStingray = addStingray
window.addTiger = addTiger
window.addUnicorn = addUnicorn
window.addVulture = addVulture
window.addWalrus = addWalrus
window.addXantusbecard = addXantusbecard
window.addYak = addYak
window.addZebra = addZebra