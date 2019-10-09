// Testing if js is linked to html
// console.log("We're learning about objects!");

// Lightning Exercise 1
const car = {
    year: 2015,
    brand: "Ford",
    model: "Mustang",
    color: "red"
}

// Lightning Exercise 2
const animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]


// Lightning Exercise 3
const mom = {
    name: "Maria",
    age: 52,
    role: "mother"
}

const dad = {
    name: "Armando",
    age: 55,
    role: "father"
}

const daughter = {
    name: "Nicole",
    age: 29,
    role: "daughter"
}

const son = {
    name: "Nicholas",
    age: 21,
    role: "son"
}


const familyMembers = [mom, dad, daughter, son]
console.log(familyMembers);



// Lightning Exercise 4: Given the object below, output each of the values to the console using dot notation.

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(`The wardrobe is ${wardrobe.height} inches tall`);
console.log(`The wardrobe is made by ${wardrobe.manufacturer}`);
console.log(`The wardrobe is full of ${wardrobe.contents[0]}, ${wardrobe.contents[1]}, ${wardrobe.contents[2]}, ${wardrobe.contents[3]}, ${wardrobe.contents[4]}`);
console.log(`The wardrobe is ${wardrobe.depth} inches deep`);
console.log(`The wardrobe is ${wardrobe.width} inches wide`);